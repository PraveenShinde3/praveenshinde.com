import React from "react";
import postService from "../../api/post-service";
import BlogPage from "../../components/Blog/BlogPage";
import { Plus_Jakarta_Sans } from "next/font/google";
import "dotenv/config";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

async function fetchPostDataBySlug(slug) {
  try {
    const response = await postService.getPostBySlug(slug);
    if (
      process.env.NEXT_PUBLIC_ENV == "Prod" &&
      (await updateBlogView(response.posts[0].views, slug))
    );
    return response.posts[0];
  } catch (error) {
    console.log(error);
  }
}

async function updateBlogView(slug, views) {
  try {
    await postService.updateViews(slug, views);
  } catch (error) {
    console.log(error);
  }
}

const BlogSlug = async ({ params }) => {
  const postData = await fetchPostDataBySlug(params.slug);
  return (
    <div className={" container "}>
      <div className="px-8">
        {postData && <BlogPage source={postData.content} data={postData} />}
      </div>
    </div>
  );
};

export default BlogSlug;
