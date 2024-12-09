import React, { useState } from 'react'
import Send from '@/assets/png/Send.png'
import Comment from './Comment'
import { Comment as PostComment } from '@/typings/post'

interface CommentSectionProps {
  comments: PostComment[]
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [commentList, setCommentList] = useState<PostComment[]>(comments)
  //   [
  //   {
  //     author: '작성자1',
  //     nickname: 'nickname1',
  //     time: '1시간 전',
  //     content: '댓글 내용입니다.',
  //     replies: [
  //       {
  //         nickname: '대댓글 작성자1',
  //         time: '30분 전',
  //         content: '대댓글 내용입니다.',
  //       },
  //       {
  //         nickname: '대댓글 작성자2',
  //         time: '10분 전',
  //         content: '또 다른 대댓글 내용입니다.',
  //       },
  //     ],
  //   },
  //   {
  //     nickname: 'nickname2',
  //     time: '2시간 전',
  //     content: '다른 댓글 내용입니다.',
  //   },
  // ]

  return (
    <div className='mt-10 w-full mx-auto'>
      {/* 댓글 입력 */}
      <h2 className='text-xl font-bold mb-4 text-left'>댓글 달기</h2>
      <div className='relative'>
        <textarea
          placeholder='댓글을 입력하세요...'
          className='w-full h-28 p-3 pr-12 border border-gray-300 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></textarea>
        <button className='absolute bottom-7 right-3 bg-transparent border-none'>
          <img
            src={Send}
            alt='보내기버튼'
            className='w-6 h-6'
          />
        </button>
      </div>
      {/* 댓글 목록 */}
      <div className='mt-6 mb-40'>
        {commentList.map((comment, index) => (
          <Comment
            key={index}
            author={comment.author}
            username={comment.author?.username}
            time={comment.time}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  )
}

export default CommentSection
