import React from "react";
import postService from "../../api/post-service";
import BlogPage from "../../components/Blog/BlogPage";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

async function fetchPostDataBySlug(slug) {
  try {
    const response = await postService.getPostBySlug(slug);
    return response.posts[0];
  } catch (error) {
    console.log(error);
  }
}

const BlogSlug = async ({ params }) => {
  const postData = await fetchPostDataBySlug(params.slug);
  return (
    <div className={" container py-8  mx-auto"}>
      <div className=" xl:px-32 lg:px-12 p-6 h-full flex flex-col justify-center items-center">
        {postData.content && (
          <BlogPage source={postData.content} data={postData} />
        )}
      </div>
    </div>
  );
};

export default BlogSlug;
