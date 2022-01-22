import React, { FC } from 'react'

interface IProps {
  post: { title: string; excerpt: string }
}

const PostCard: FC<IProps> = ({ post: { title, excerpt } }) => {
  return (
    <div>
      {title}
      {excerpt}
    </div>
  )
}

export default PostCard
