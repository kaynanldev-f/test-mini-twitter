export interface Post {
  id: string;
  title: string;
  content: string;
  image?: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  likesCount: number;
}
