import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogCard = ({ item, index }) => {
  return (
    <div>
      <div className="py-1">
        <div className="flex gap-4 items-center">
          <Link
            href={"/blog/" + item?.slug}
            className="flex gap-2 group items-center"
          >
            <p className="text-card-foreground group-hover:underline group-hover:underline-offset-4 font-medium">
              {item?.title}
            </p>
          </Link>
          {index === 0 && (
            <p className="px-3 text-[0.7rem] h-fit py-[2px] align-middle font-medium bg-muted border-muted  rounded-lg">
              latest
            </p>
          )}
        </div>

        <p className="text-[0.85rem] text-muted-foreground">{item?.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
