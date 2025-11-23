//DEPRECATED FILE

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { CgSpinner } from "react-icons/cg";

const LEETCODE_API = "/api/leetcode/";
const SLIDE_INTERVAL = 3000;

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function LeetcodeProblems({ username = "shindepraveen002" }) {
  const [problems, setProblems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecentProblems = useCallback(async () => {
    setLoading(true);
    setError(null);
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

      setProblems(transformed);
    } catch (err) {
      setError("Failed to load recent problems.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (username) fetchRecentProblems();
  }, [username, fetchRecentProblems]);

  useEffect(() => {
    if (problems.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % problems.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [problems.length]);

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <div className="space-y-4 px-8 text-sm">
      <div>
        <p className="font-semibold flex items-center gap-2">
          <SiLeetcode />
          Recent Leetcode Submissions
        </p>
      </div>

      {loading ? (
        <div className="h-12 animate-pulse">
          <div className="bg-background border-border rounded-xl w-full px-4 py-2 flex items-center justify-center gap-2">
            <CgSpinner className="animate-spin" />
            fetching recent leetcode problem submissions...
          </div>
        </div>
      ) : error || problems.length === 0 ? (
        <div className="h-12 flex items-center justify-center">
          <div className="text-center text-muted text-sm">
            {error || "No recent problems found"}
          </div>
        </div>
      ) : (
        <>
          <div className="relative h-10 overflow-hidden bg-background rounded-xl border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center px-2"
              >
                <div className="flex items-center gap-3 w-full min-w-0">
                  <span className="shrink-0 text-xs font-mono bg-muted/50 text-foreground px-2 py-1 rounded border border-border">
                    #{problems[currentIndex].questionFrontendId}
                  </span>
                  <span className="font-medium text-xs truncate flex-1 min-w-0">
                    {problems[currentIndex].title}
                  </span>
                  <div className="gap-1 shrink-0 hidden sm:flex">
                    {problems[currentIndex].tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground px-3 py-1 bg-muted border-border border rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {formatDate(problems[currentIndex].solvedAt)}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-1">
            {problems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-1 h-1 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-foreground w-2"
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Show problem ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
