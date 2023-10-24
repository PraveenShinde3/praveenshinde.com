import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";
import { BsArrowBarLeft } from "react-icons/bs";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import Link from "next/link";
import "../style/syntax-highlight.css";

const BlogPage = ({ source }) => {
  const options = {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  };
  return (
    <div className="prose prose-dark">
      <Link href="/blog" className=" no-underline">
        <p className="flex gap-2 pb-4 items-center">
          <BsArrowBarLeft /> Back
        </p>
      </Link>

      <MDXRemote source={source} options={options} />
    </div>
  );
};

export default BlogPage;
