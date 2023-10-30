import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";

const BlogCard = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div
        className="rounded-xl md:w-1/3 bg-cover bg-left h-40 md:h-32 overflow-hidden border-2 border-muted"
        style={{
          backgroundImage: `url(${item.image.url})`,
        }}
      ></div>
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <p>{item.title}</p>
          <p className=" text-sm py-1 text-muted-foreground">
            {item.description}
          </p>
        </div>
        <div className="text-[12px] text-muted-foreground flex justify-between">
          <p>{formatDate(item.date)}</p>
          <Link href={"/blog/" + item.slug}>
            <p className="text-foreground">Read more..</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
