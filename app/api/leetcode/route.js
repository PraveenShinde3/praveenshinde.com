import { NextResponse } from "next/server";

export async function GET(request) {
  const username = "shindepraveen002";

  try {
    // Recent submissions query
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

    const submissionsResponse = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      cache: "no-store", // prevent fetch cache (Node.js 18+)
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer: "https://leetcode.com",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
      body: JSON.stringify({
        query: recentSubmissionsQuery,
        variables: { username, limit: 20 },
      }),
    });

    if (!submissionsResponse.ok) {
      throw new Error(
        `Submissions API request failed: ${submissionsResponse.status}`
      );
    }

    const submissionsData = await submissionsResponse.json();

    if (submissionsData.errors) {
      throw new Error(
        `GraphQL submissions errors: ${JSON.stringify(submissionsData.errors)}`
      );
    }

    // Keep only accepted ones
    const recentAccepted = submissionsData.data.recentSubmissionList
      .filter((sub) => sub.statusDisplay === "Accepted")
      .slice(0, 10);

    // Fetch problem details
    const problemDetails = await Promise.all(
      recentAccepted.map(async (submission) => {
        const problemQuery = `
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

        try {
          const problemResponse = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            cache: "no-store", // prevent fetch cache (Node.js 18+)
            headers: {
              "Content-Type": "application/json",
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
              Referer: "https://leetcode.com",
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
              Expires: "0",
            },
            body: JSON.stringify({
              query: problemQuery,
              variables: { titleSlug: submission.titleSlug },
            }),
          });

          const problemData = await problemResponse.json();
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
    const uniqueProblems = [];
    const seenTitles = new Set();
    for (const detail of problemDetails) {
      if (!seenTitles.has(detail.problem.title)) {
        uniqueProblems.push(detail);
        seenTitles.add(detail.problem.title);
      }
    }

    return NextResponse.json({
      recentProblems: uniqueProblems,
    });
  } catch (error) {
    console.error(" Error fetching LeetCode data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch recent problems",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
