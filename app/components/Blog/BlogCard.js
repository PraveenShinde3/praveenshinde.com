import React from "react";
import Link from "next/link";
import formatDate from "../../utils/Blog/dateFormatter";

const BlogCard = ({ item }) => {
  return (
    <Link href={"/blog/" + item.slug}>
      <div className="flex flex-col  md:flex-row gap-4 w-full ">
        <div
          className="rounded-xl min-h-[130px] md:w-1/3 bg-cover bg-left flex overflow-hidden border-2 border-muted"
          style={{
            backgroundImage: `url(${item.image.url})`,
          }}
        ></div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <p className="text-base font-semibold">{item.title}</p>
            <p className=" tracking-wider text-xs py-1 text-muted-foreground">
              {item.description}
            </p>
          </div>
          <div className="text-[12px] text-muted-foreground flex justify-between">
            <p>{formatDate(item.date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
