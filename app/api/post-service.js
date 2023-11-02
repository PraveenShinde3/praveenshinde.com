import { GraphQLClient, gql } from "graphql-request";
import "dotenv/config";

class PostService {
  constructor() {
    this.endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    this.graphQlClient = new GraphQLClient(this.endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
      },
    });
  }

  async getAllPosts() {
    const query = gql`
      {
        posts {
          date
          id
          publishedAt
          slug
          tags
          title
          updatedAt
          description
          views
          image {
            id
            url
          }
        }
      }
    `;
    return await this.graphQlClient.request(query);
  }

  async getPostBySlug(slug) {
    const query = gql`
      query gePostbySlug($slug: String!) {
        posts(where: { slug: $slug }) {
          content
          createdAt
          date
          id
          publishedAt
          slug
          tags
          title
          updatedAt
          views
          image {
            id
            url
          }
        }
      }
    `;
    const variable = {
      slug: slug,
    };
    return await this.graphQlClient.request(query, variable);
  }

  async updateViews(views, slug) {
    const query = gql`
      mutation updateThePost($slug: String!, $views: Int) {
        updatePost(where: { slug: $slug }, data: { views: $views }) {
          views
        }
        publishPost(where: { slug: $slug }, to: [PUBLISHED]) {
          slug
        }
      }
    `;
    const latestView = views + 1;
    const variable = {
      slug: slug,
      views: latestView,
    };
    return await this.graphQlClient.request(query, variable);
  }
}

export default new PostService();
