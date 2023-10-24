import { GraphQLClient, gql } from "graphql-request";

class PostService {
  constructor() {
    this.endpoint =
      "https://api-ap-south-1.hygraph.com/v2/clnuals6y0mro01udb4yp7g1v/master";
    this.graphQlClient = new GraphQLClient(this.endpoint);
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
        }
      }
    `;
    const variable = {
      slug: slug,
    };
    return await this.graphQlClient.request(query, variable);
  }
}

export default new PostService();
