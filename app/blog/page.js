"use client";
import React, { useEffect, useState } from "react";
import postService from "../api/post-service";
import BlogCard from "../components/Blog/BlogCard";
import LoadingUi from "../components/LoadingUi";
import { Plus_Jakarta_Sans } from "next/font/google";
import { IoSearch } from "react-icons/io5";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await postService.getAllPosts();
        console.log(response.posts);
        setData(response.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPostData();
  }, []);
  return (
    <div className={" min-h-screen container py-8 md:py-24 mx-auto"}>
      <div className="2xl:px-60 xl:px-32 lg:px-12 p-6 pt-12 pb-28 md:pt-0 md:pb-0 h-full flex justify-center items-center">
        {data.length === 0 ? (
          <LoadingUi />
        ) : (
          <div className=" h-full w-full flex flex-col gap-4 justify-start items-center">
            <p>BLOG</p>

            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="hover:border-muted border-2 px-4  hover:bg-card border-transparent rounded-md lg:w-2/3 flex flex-col gap-4 justify-between "
                >
                  <BlogCard item={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
