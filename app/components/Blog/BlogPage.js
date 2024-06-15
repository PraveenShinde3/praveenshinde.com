import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import { BsArrowBarLeft } from "react-icons/bs";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import formatDate from "../../utils/Blog/dateFormatter";
import Link from "next/link";
import Image from "next/image";
import getReadtime from "../../utils/Blog/readTime";
import "../../style/syntax-highlight.css";
import "../../style/blog-style.css";

const BlogPage = ({ source, data }) => {
  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  };
  return (
    <div className="prose prose-dark">
      {/* <Link href="/blog" className=" no-underline">
        <p className="flex gap-2 py-2 m-0 items-center">
          <BsArrowBarLeft /> Back
        </p>
      </Link> */}

      <div>
        <p className="text-foreground pb-3 m-0 ">
          <span className="font-bold">Blog</span> / {data?.title}
        </p>
        <div className=" -mt-5 flex items-center justify-between">
          <p className="flex gap-2 text-xs items-center">
            {formatDate(data?.createdAt)} &#183; {getReadtime(source)} mins read
          </p>
          <p className="text-xs">{data?.views} views</p>
        </div>
        <div className="h-[1px] w-full bg-accent"></div>
      </div>
      <MDXRemote source={source} options={options} />

      <div className="py-4">
        <p className=" py-1  w-fit bg-accent px-4 rounded-full">
          <Link
            href="/"
            className="flex text-[0.85rem] items-center text-muted-foreground hover:text-foreground transition-all ease-in-out duration-200 gap-2 no-underline w-fit "
          >
            <BsArrowBarLeft /> Back to home{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
