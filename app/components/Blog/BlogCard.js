import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogCard = ({ item }) => {
  return (
    <Link href={"/blog/" + item.slug}>
      <div
        className={"flex flex-col  md:flex-row gap-4 w-full " + inter.className}
      >
        <div
          className="rounded-xl min-h-[180px] md:min-h-[130px] md:w-1/3 bg-cover bg-left flex overflow-hidden border-2 border-muted"
          style={{
            backgroundImage: `url(${item?.image?.url})`,
          }}
        ></div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <p className="text-base lg:text-xl pb-1 font-semibold">
              {item.title}
            </p>
            <p className=" tracking-wide text-xs py-1 text-muted-foreground">
              {item.description}
            </p>
          </div>
          <div className="text-xs text-muted-foreground flex justify-between">
            <p>{formatDate(item.date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
