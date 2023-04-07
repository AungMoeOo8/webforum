export type PostResponseType = {
  data: string[];
};

class Post {
  private static postsPerPage: number = 6;
  public static async getPostById(id: number) {
    const response = await fetch("http://localhost:5000/api/posts?id=" + id);

    const data = (await response.json()) as PostResponseType;
    return data;
  }

  public static async getPostsByPage(page: number) {
    const response = await fetch(
      `http://localhost:5000/api/posts?page=${page}&total=${this.postsPerPage}`
    );

    const data = (await response.json()) as PostResponseType;
    return data;
  }
}

export default Post;
