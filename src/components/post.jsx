import React, { useEffect, useState } from 'react';

 

const Post = ({post}) => {

  const [like,setLike] = useState(true)

  const likePost = () => {
    if(like){
      post.likes++;
    }
    else{
      post.likes--;
    }
    setLike(!like);
  }

  return (

    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4">

      {/* Header */}

      <div className="flex items-center justify-between p-4 border-b">

        <div className="flex items-center">

          <img className="w-10 h-10 object-cover rounded-full mr-2" src={post.avatar} alt="Avatar" />

          <div>

            <p className="text-gray-800 font-semibold">{post.username}</p>

            <p className="text-sm text-gray-600">{post.timestamp.split('T')[0]}</p>

          </div>

        </div>

        <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>

        </svg>

      </div>

 

      {/* Content */}

      <div className="p-4">

        <p className="text-gray-800 mb-4">

          {post.content}

        </p>

        <img className="w-full h-64 object-cover mb-4 rounded-lg" src={post.image} alt="Post" />

        <div className='mb-2 bg-gray-100 px-3 flex'><span>Shop Now</span>
        <svg className="w-6 h-6 mr-1 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>

            </svg>

        </div>
        


        <div className="flex items-center justify-between">

          <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none" onClick={likePost}>

            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>

            </svg>

            <span>{like?"like":"unlike"} {post.likes}</span>

          </button>

          <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">

            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>

            </svg>

            <span>Comment {post.comments.length}</span>

          </button>

          <button className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none">

            <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>

            </svg>

            <span>Share</span>

          </button>

        </div>

      </div>

    </div>

  );

};

 

export default Post;

 