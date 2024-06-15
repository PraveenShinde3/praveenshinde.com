import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="px-8 pb-12">
      <div>
        <p className="font-bold ">Experience</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 py-4 text-[0.85rem]">
          <p className="opacity-80 min-w-fit">July, 2021 - Present</p>
          <div>
            <p className="font-medium">
              {" "}
              <Link
                href={"https://www.tcs.com/"}
                target="_blank"
                className=" underline underline-offset-4 hover:font-bold "
              >
                TCS
              </Link>{" "}
              | System Engineer{" "}
            </p>
            <p>
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
