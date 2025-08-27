"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
  const [experience, setExperience] = useState("0");

  useEffect(() => {
    const updateExperience = () => {
      const joiningDate = new Date(2021, 7, 1);
      const now = new Date();
      const diffInMs = now.getTime() - joiningDate.getTime();

      // convert milliseconds to years with decimals
      const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

      setExperience(years.toFixed(1)); // e.g., "4.2"
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24); // update daily

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-8 ">
      <div>
        <p className="font-bold ">Experience</p>
        <div className="flex flex-col gap-2 sm:gap-4 py-4 text-[0.85rem]">
          <div>
            <div className="pb-1">
              <p className="font-semibold">
                {" "}
                <Link
                  href={"https://www.tcs.com/"}
                  target="_blank"
                  className=" underline underline-offset-4 hover:font-bold "
                >
                  TCS
                </Link>{" "}
                | System Engineer
              </p>
              <p className="min-w-fit font-medium">
                <span>{experience}+ years of experience</span> | July, 2021 -
                Present
              </p>
            </div>
            <p className="text-muted-foreground">
              Developed a learning portal for project internal employees to help
              them reach their learning goals and help onboarding new employees.
              Collaborate with cross-functional teams to troubleshoot and
              implement solutions, significantly reducing downtime and
              maintaining optimal website performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
