import React, { FC } from 'react'
import moment from 'moment'
import Link from 'next/link'

interface IProps {
  post: any
}

const PostCard: FC<IProps> = ({ post }) => {
  console.info(post)

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-fill shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`post/${post.slug}`}>{post.title}</Link>
      </h1>
    </div>
  )
}

export default PostCard
