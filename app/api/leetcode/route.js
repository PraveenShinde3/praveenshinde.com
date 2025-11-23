export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";
const USERNAME = "shindepraveen002";
const SUBMISSION_LIMIT = 20;
const ACCEPTED_LIMIT = 10;

const HEADERS = {
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  Referer: "https://leetcode.com",
  "Cache-Control": "no-cache, no-store, must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
};

const recentSubmissionsQuery = `
  query getRecentSubmissions($username: String!, $limit: Int!) {
    recentSubmissionList(username: $username, limit: $limit) {
      id
      title
      titleSlug
      timestamp
      statusDisplay
      lang
    }
  }
`;

const problemDetailsQuery = `
  query getProblemDetails($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      questionFrontendId
      title
      titleSlug
      difficulty
      topicTags {
        name
        slug
      }
    }
  }
`;

async function fetchGraphQL(query, variables) {
  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    cache: "no-store",
    headers: HEADERS,
    body: JSON.stringify({ query, variables }),
    // next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }
  return response.json();
}

export async function GET() {
  try {
    // Fetch recent submissions
    const submissionsData = await fetchGraphQL(recentSubmissionsQuery, {
      username: USERNAME,
      limit: SUBMISSION_LIMIT,
    });

    if (submissionsData.errors) {
      throw new Error(
        `GraphQL submissions errors: ${JSON.stringify(submissionsData.errors)}`
      );
    }

    // Filter accepted submissions
    const accepted = submissionsData.data.recentSubmissionList
      .filter((sub) => sub.statusDisplay === "Accepted")
      .slice(0, ACCEPTED_LIMIT);

    // Fetch problem details for each accepted submission
    const problemDetails = await Promise.all(
      accepted.map(async (submission) => {
        try {
          const problemData = await fetchGraphQL(problemDetailsQuery, {
            titleSlug: submission.titleSlug,
          });
          return {
            ...submission,
            problem: problemData.data.question,
          };
        } catch (error) {
          console.error(
            `Failed to fetch problem details for ${submission.titleSlug}:`,
            error
          );
          return {
            ...submission,
            problem: {
              questionFrontendId: "N/A",
              title: submission.title,
              titleSlug: submission.titleSlug,
              difficulty: "Unknown",
              topicTags: [],
            },
          };
        }
      })
    );

    // Remove duplicate problems by title
    const uniqueProblems = [];
    const seenTitles = new Set();
    for (const detail of problemDetails) {
      if (!seenTitles.has(detail.problem.title)) {
        uniqueProblems.push(detail);
        seenTitles.add(detail.problem.title);
      }
    }

    const response = NextResponse.json({ recentProblems: uniqueProblems });
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch recent problems",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
