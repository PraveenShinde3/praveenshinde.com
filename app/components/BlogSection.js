"use client";
import { useEffect, useState } from "react";
import postService from "../api/post-service";
import BlogCard from "./Blog/BlogCard";
import { BlogCardData } from "../utils/data";

const BlogSection = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const fetchPostData = async () => {
  //       try {
  //         const response = await postService.getAllPosts();
  //         console.log(response.posts);
  //         setData(response.posts);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchPostData();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  return (
    <div className="px-8 pb-12">
      <div>
        <p className="font-bold">Writings</p>
      </div>
      <div className="py-3">
        {BlogCardData.map((item) => {
          return <BlogCard key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default BlogSection;
