"use client";
import React, { useEffect, useState } from "react";
import postService from "../api/post-service";
import Link from "next/link";

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
    <div className=" min-h-screen container py-24 mx-auto">
      <div className="2xl:px-48 xl:px-32 lg:px-12 p-8 h-full flex justify-center items-center">
        {data.length === 0 ? (
          <div className="flex gap-6 items-end">
            <div className="text-2xl">Loading</div>
            <div className="col-3 py-2">
              <div className="snippet" data-title="dot-flashing">
                <div className="stage">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" h-full w-full flex flex-col gap-4 justify-start items-center">
            <p>BLOG</p>

            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="lg:w-2/3 p-2 border-2 flex flex-col gap-4 justify-between border-muted rounded-2xl"
                >
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
                        <p>{item.date}</p>
                        <Link href={"/blog/" + item.slug}>
                          <p className="text-foreground">Read more..</p>
                        </Link>
                      </div>
                    </div>
                  </div>
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
