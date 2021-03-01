export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
  posts: PostProps[];
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  CreatedAt: string;
  columnId: number;
}
