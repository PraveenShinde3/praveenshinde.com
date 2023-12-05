import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogCard = ({ item }) => {
  return (
    <Link href={"/blog/" + item.slug}>
      <div
        className={
          "flex flex-col py-4 md:flex-row gap-4 w-full " + inter.className
        }
      >
        {/* <div
          className="rounded-xl min-h-[180px] md:min-h-[130px] md:w-1/3 bg-cover bg-left flex overflow-hidden border-2 border-muted"
          style={{
            backgroundImage: `url(${item?.image?.url})`,
          }}
        ></div> */}
        <div className=" flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-base text-card-foreground ">{item.title}</p>
            <p className=" tracking-wide text-sm py-1 text-muted-foreground">
              {item.description}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatDate(item.date)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
