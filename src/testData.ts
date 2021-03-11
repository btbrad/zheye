export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
  posts?: PostProps[];
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: 'test1',
    content: 'test1test1test1test1',
    createdAt: '2015-01-01',
    columnId: 1
  }
]

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏',
    avatar: require('@/assets/logo.png')
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏',
    avatar: require('@/assets/logo.png')
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏',
    avatar: require('@/assets/logo.png')
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏',
    avatar: require('@/assets/logo.png')
  }
]
