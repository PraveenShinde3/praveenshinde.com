import React from "react";
import postService from "../../api/post-service";
import BlogPage from "../../components/BlogPage";

async function fetchPostDataBySlug(slug) {
  try {
    const response = await postService.getPostBySlug(slug);
    return response.posts[0];
  } catch (error) {
    console.log(error);
  }
}

const page = async ({ params }) => {
  const postData = await fetchPostDataBySlug(params.slug);

  return (
    <div className=" container py-24 mx-auto">
      <div className="2xl:px-48 xl:px-32 lg:px-12 p-6 h-full flex flex-col justify-center items-center">
        {postData.content && <BlogPage source={postData.content} />}
      </div>
    </div>
  );
};

export default page;
