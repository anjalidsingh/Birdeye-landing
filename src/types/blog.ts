export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    image: string;
  };
  readTime: string;
  createdAt: string;
  updatedAt: string;
}
