"use client";
import { useEffect, useState } from "react";
import postService from "../api/post-service";
import BlogCard from "./Blog/BlogCard";
import { BlogCardData } from "../utils/data";

const BlogSection = () => {
  const sortedBlogCardData = BlogCardData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="px-8 pb-12">
      <div>
        <p className="font-bold">Writings</p>
      </div>
      <div className="py-3">
        {sortedBlogCardData.map((item, index) => {
          return <BlogCard key={item?.id} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default BlogSection;
