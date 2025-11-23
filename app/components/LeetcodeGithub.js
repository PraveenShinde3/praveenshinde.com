"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { LuLoader } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { BsCode } from "react-icons/bs";

const LEETCODE_API = "/api/leetcode/";
const GITHUB_API = "https://api.github.com/users/PraveenShinde3/events/public";
const SLIDE_INTERVAL = 3000;

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getCommitMessage(event) {
  // Extract commit message from push event
  if (event.payload?.commits && event.payload.commits.length > 0) {
    return event.payload.commits[0].message;
  }
  return "Push to repository";
}

function getRepoName(repoFullName) {
  // Extract just the repo name from "username/repo"
  return repoFullName.split("/")[1] || repoFullName;
}

export default function LeetcodeGithub({
  username = "shindepraveen002",
  githubUsername = "PraveenShinde3",
}) {
  const [activeTab, setActiveTab] = useState("leetcode");
  const [leetcodeProblems, setLeetcodeProblems] = useState([]);
  const [githubCommits, setGithubCommits] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeetCodeProblems = useCallback(async () => {
    try {
      const response = await fetch(LEETCODE_API);
      if (!response.ok) throw new Error("Failed to fetch LeetCode data");

      const data = await response.json();
      const transformed = data.recentProblems.map((item) => ({
        id: item.problem.questionId,
        title: item.problem.title,
        titleSlug: item.problem.titleSlug,
        difficulty: item.problem.difficulty,
        tags: item.problem.topicTags.map((tag) => tag.name),
        solvedAt: new Date(Number(item.timestamp) * 1000)
          .toISOString()
          .split("T")[0],
        url: `https://leetcode.com/problems/${item.problem.titleSlug}/`,
        questionFrontendId: item.problem.questionFrontendId,
      }));

      setLeetcodeProblems(transformed);
    } catch (err) {
      throw new Error("Failed to load LeetCode problems");
    }
  }, []);

  const fetchGitHubCommits = useCallback(async () => {
    try {
      const response = await fetch(GITHUB_API);
      if (!response.ok) throw new Error("Failed to fetch GitHub data");

      const data = await response.json();
      const pushEvents = data
        .filter((event) => event.type === "PushEvent")
        .slice(0, 10)
        .map((event) => ({
          id: event.id,
          repo: event.repo.name,
          repoShort: getRepoName(event.repo.name),
          message: getCommitMessage(event),
          branch: event.payload.ref?.replace("refs/heads/", "") || "main",
          commitSha: event.payload.head?.substring(0, 7) || "",
          createdAt: event.created_at,
          url: `https://github.com/${event.repo.name}`,
        }));

      setGithubCommits(pushEvents);
    } catch (err) {
      throw new Error("Failed to load GitHub commits");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await Promise.all([fetchLeetCodeProblems(), fetchGitHubCommits()]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchLeetCodeProblems, fetchGitHubCommits]);

  const currentItems =
    activeTab === "leetcode" ? leetcodeProblems : githubCommits;

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  useEffect(() => {
    if (currentItems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentItems.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [currentItems.length]);

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <div className="space-y-4 px-8 text-sm">
      {/* Tab Headers */}
      <div className="flex items-center gap-4 border-b border-border">
        <button
          onClick={() => setActiveTab("leetcode")}
          className={`font-semibold flex items-center gap-2 pb-2 px-1 transition-colors relative ${
            activeTab === "leetcode"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <SiLeetcode className="w-4 h-4" />
          Leetcode
          {activeTab === "leetcode" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("github")}
          className={`font-semibold flex items-center gap-2 pb-2 px-1 transition-colors relative ${
            activeTab === "github"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <BsGithub className="w-4 h-4" />
          GitHub
          {activeTab === "github" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="h-12 animate-pulse text-xs">
          <div className="bg-background border-border rounded-xl w-full px-4 py-2 flex items-center justify-center gap-2">
            <LuLoader className="animate-spin w-4 h-4" />
            Loading activity...
          </div>
        </div>
      ) : error || currentItems.length === 0 ? (
        <div className="h-12 flex items-center justify-center">
          <div className="text-center text-muted-foreground text-sm">
            {error ||
              `No recent ${
                activeTab === "leetcode" ? "problems" : "commits"
              } found`}
          </div>
        </div>
      ) : (
        <>
          <div className="relative h-10 overflow-hidden bg-background rounded-xl border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center px-2"
              >
                {activeTab === "leetcode" ? (
                  <div className="flex items-center gap-3 w-full min-w-0">
                    <span className="shrink-0 text-xs font-mono bg-muted/50 text-foreground px-2 py-1 rounded border border-border">
                      #{leetcodeProblems[currentIndex].questionFrontendId}
                    </span>
                    <span className="font-medium text-xs truncate flex-1 min-w-0">
                      {leetcodeProblems[currentIndex].title}
                    </span>
                    <div className="gap-1 shrink-0 hidden sm:flex">
                      {leetcodeProblems[currentIndex].tags
                        .slice(0, 2)
                        .map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground px-3 py-1 bg-muted border-border border rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {formatDate(leetcodeProblems[currentIndex].solvedAt)}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 w-full min-w-0">
                    <span className="shrink-0 text-xs font-mono bg-muted/50 text-foreground px-2 py-1 rounded border border-border">
                      {githubCommits[currentIndex].commitSha}
                    </span>
                    <span className="font-medium text-xs truncate flex-1 min-w-0">
                      {githubCommits[currentIndex].message}
                    </span>
                    <div className="gap-1 shrink-0 hidden sm:flex">
                      <span className="text-xs text-muted-foreground px-3 py-1 bg-muted border-border border rounded-full">
                        {githubCommits[currentIndex].repoShort}
                      </span>
                      <span className="text-xs text-muted-foreground px-3 py-1 bg-muted border-border border rounded-full">
                        {githubCommits[currentIndex].branch}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {formatDate(githubCommits[currentIndex].createdAt)}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-1">
            {currentItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-1 h-1 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-foreground w-2"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Show ${
                  activeTab === "leetcode" ? "problem" : "commit"
                } ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
