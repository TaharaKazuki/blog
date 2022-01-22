import Head from 'next/head'
import { GetStaticProps } from 'next'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { VFC } from 'react'

// const posts = [
//   { title: 'React testing', excerpt: 'Learn React Testing' },
//   { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
// ]

export interface Item {
  title: string
  excerpt: string
  node: any
}

interface IProps {
  posts: Array<Item>
}

const Home: VFC<IProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative too-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<IProps> = async ({}) => {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
