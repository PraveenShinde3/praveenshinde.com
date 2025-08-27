"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const COMPANY = {
  name: "TCS",
  url: "https://www.tcs.com/",
  role: "System Engineer",
  startDate: { year: 2021, month: 7, day: 1 }, // August 1, 2021 (month is 0-based)
  displayStart: "July, 2021",
  description: [
    "Developed a learning portal for internal project employees to help them achieve their learning goals and assist with onboarding new hires.",
    "Collaborated with cross-functional teams to troubleshoot and implement solutions, significantly reducing downtime and maintaining optimal website performance.",
  ],
};

const getExperienceYears = (start) => {
  const joiningDate = new Date(start.year, start.month, start.day);
  const now = new Date();
  const diffInMs = now - joiningDate;
  const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

const About = () => {
  const [experience, setExperience] = useState("0");

  useEffect(() => {
    const updateExperience = () => {
      setExperience(getExperienceYears(COMPANY.startDate));
    };
    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24); // update daily
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-8">
      <section>
        <p className="font-bold">Experience</p>
        <div className="flex flex-col gap-2 sm:gap-4 py-4 text-[0.85rem]">
          <div>
            <div className="pb-1">
              <p className="font-semibold">
                <Link
                  href={COMPANY.url}
                  target="_blank"
                  className="underline underline-offset-4 hover:font-bold"
                >
                  {COMPANY.name}
                </Link>{" "}
                | {COMPANY.role}
              </p>
              <p className="min-w-fit font-medium">
                <span>{experience}+ years of experience</span> |{" "}
                {COMPANY.displayStart} - Present
              </p>
            </div>
            <ul className="text-muted-foreground list-disc ml-5 pt-1 space-y-1">
              {COMPANY.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
