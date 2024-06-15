import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";
import { Inter } from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";

const inter = Inter({ subsets: ["latin"] });

const BlogCard = ({ item }) => {
  return (
    <div>
      <div className="py-1">
        <Link
          href={"/blog/" + item?.slug}
          className="flex gap-2 group items-center"
        >
          <p className="text-card-foreground group-hover:underline group-hover:underline-offset-4 font-medium">
            {item?.title}
          </p>
          <GoArrowUpRight className="hidden group-hover:block" />
        </Link>

        <p className="text-[0.85rem] text-muted-foreground">{item?.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
