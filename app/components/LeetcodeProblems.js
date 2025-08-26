"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { CgSpinner } from "react-icons/cg";

export default function LeetcodeProblems({ username = "shindepraveen002" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentProblems = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/leetcode/`);
        if (!response.ok) {
          throw new Error("Failed to fetch LeetCode data");
        }

        const data = await response.json();

        const transformedProblems = data.recentProblems.map((item) => ({
          id: item.problem.questionId,
          title: item.problem.title,
          titleSlug: item.problem.titleSlug,
          difficulty: item.problem.difficulty,
          tags: item.problem.topicTags.map((tag) => tag.name),
          solvedAt: new Date(Number.parseInt(item.timestamp) * 1000)
            .toISOString()
            .split("T")[0],
          url: `https://leetcode.com/problems/${item.problem.titleSlug}/`,
          questionFrontendId: item.problem.questionFrontendId,
        }));

        setProblems(transformedProblems);
      } catch (err) {
        console.error("Error fetching recent problems:", err);
        setError("Failed to load recent problems.");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRecentProblems();
    }
  }, [username]);

  useEffect(() => {
    if (problems.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % problems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [problems.length]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="space-y-4 px-8">
        <div>
          <p className="font-semibold flex items-center gap-2">
            <SiLeetcode />
            Recent Leetcode Submissions
          </p>
        </div>
        <div className="h-12 animate-pulse">
          <div className="bg-background border-border rounded-xl w-full px-4 py-2 flex items-center justify-center gap-2">
            <CgSpinner className=" animate-spin" />
            fetching recent leetcode problem submissions...
          </div>
        </div>
      </div>
    );
  }

  if (error || problems.length === 0) {
    return (
      <div className="space-y-4">
        <div>
          <p className="font-semibold flex items-center gap-2">
            <SiLeetcode />
            Recent Leetcode Submissions
          </p>
        </div>
        <div className="h-12 flex items-center justify-center">
          <div className="text-center text-muted text-sm">
            {error || "No recent problems found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-sm px-8">
      <div>
        <p className="font-semibold flex items-center gap-2">
          <SiLeetcode />
          Recent Leetcode Submissions
        </p>
      </div>
      <div className="relative h-10 overflow-hidden bg-background rounded-xl border border-border ">
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

              <span className="font-medium truncate flex-1 min-w-0">
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

              <span className="text-xs text-muted-foreground  shrink-0">
                {formatDate(problems[currentIndex].solvedAt)}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-1">
        {problems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 h-1 rounded-full transition-all ${
              index === currentIndex
                ? "bg-foreground w-2"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
