import React from 'react';

import coverphoto from '../assets/cover_photo.jpeg';

import profilephoto from '../assets/profile_picture.jpeg';

 
const postData = {
    "user": "Racoon",
    "username": "john_doe_001",
    "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    "posts": [
      {
        "id": 1,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1551232864-3f0890e580d9",
        "content": "Had a great time at the park today! #sunnyday #fun",
        "timestamp": "2024-06-25T10:45:00Z",
        "likes": 120,
        "comments": [
          {
            "user": "UserB",
            "comment": "Looks like fun!",
            "timestamp": "2024-06-25T11:00:00Z"
          },
          {
            "user": "UserC",
            "comment": "Nice weather!",
            "timestamp": "2024-06-25T11:15:00Z"
          }
        ]
      },
      {
        "id": 2,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
        "content": "Just finished a 5k run. Feeling accomplished! #running #fitness",
        "timestamp": "2024-06-24T08:30:00Z",
        "likes": 200,
        "comments": [
          {
            "user": "UserD",
            "comment": "Great job!",
            "timestamp": "2024-06-24T08:45:00Z"
          },
          {
            "user": "UserE",
            "comment": "Keep it up!",
            "timestamp": "2024-06-24T09:00:00Z"
          }
        ]
      },
      {
        "id": 3,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1585325796223-d02326506719",
        "content": "Trying out a new recipe today. Wish me luck! #cooking #foodie",
        "timestamp": "2024-06-23T18:00:00Z",
        "likes": 150,
        "comments": [
          {
            "user": "UserF",
            "comment": "Can't wait to see how it turns out!",
            "timestamp": "2024-06-23T18:15:00Z"
          },
          {
            "user": "UserG",
            "comment": "Good luck!",
            "timestamp": "2024-06-23T18:30:00Z"
          }
        ]
      },
      {
        "id": 4,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1600073140807-88f78c4fb64b",
        "content": "Beautiful sunset today. #sunset #nature",
        "timestamp": "2024-06-22T20:15:00Z",
        "likes": 180,
        "comments": [
          {
            "user": "UserH",
            "comment": "Amazing view!",
            "timestamp": "2024-06-22T20:30:00Z"
          },
          {
            "user": "UserI",
            "comment": "So pretty!",
            "timestamp": "2024-06-22T20:45:00Z"
          }
        ]
      },
      {
        "id": 5,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1622122201640-3b34a4a49444",
        "content": "Reading a great book today. #reading #relaxing",
        "timestamp": "2024-06-21T14:00:00Z",
        "likes": 130,
        "comments": [
          {
            "user": "UserJ",
            "comment": "What book are you reading?",
            "timestamp": "2024-06-21T14:15:00Z"
          },
          {
            "user": "UserK",
            "comment": "Enjoy your reading time!",
            "timestamp": "2024-06-21T14:30:00Z"
          }
        ]
      },
      {
        "id": 6,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1635866091268-87ca924abc9a",
        "content": "Exploring the city today. #adventure #citylife",
        "timestamp": "2024-06-20T09:00:00Z",
        "likes": 160,
        "comments": [
          {
            "user": "UserL",
            "comment": "Have fun!",
            "timestamp": "2024-06-20T09:15:00Z"
          },
          {
            "user": "UserM",
            "comment": "Take lots of pictures!",
            "timestamp": "2024-06-20T09:30:00Z"
          }
        ]
      },
      {
        "id": 7,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1656258220193-acdd513286d9",
        "content": "Started a new project today. #work #productivity",
        "timestamp": "2024-06-19T10:00:00Z",
        "likes": 140,
        "comments": [
          {
            "user": "UserN",
            "comment": "Good luck with the project!",
            "timestamp": "2024-06-19T10:15:00Z"
          },
          {
            "user": "UserO",
            "comment": "Excited to see the results!",
            "timestamp": "2024-06-19T10:30:00Z"
          }
        ]
      },
      {
        "id": 8,
        "username": "john_doe_001",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        "image": "https://images.unsplash.com/photo-1628527129104-de9a2ed36cfe",
        "content": "Having a relaxing evening. #chill #relax",
        "timestamp": "2024-06-18T19:00:00Z",
        "likes": 170,
        "comments": [
          {
            "user": "UserP",
            "comment": "Enjoy your evening!",
            "timestamp": "2024-06-18T19:15:00Z"
          },
          {
            "user": "UserQ",
            "comment": "Sounds peaceful!",
            "timestamp": "2024-06-18T19:30:00Z"
          }
        ]
      },
    ]
  }
  
 

const ProfilePage = () => {

  return (

    <div className="bg-gray-100 min-h-screen p-6">

      {/* Profile Card */}

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">

        {/* Header */}

        <div className="relative">

          <img className="w-full h-64 object-cover" src={coverphoto} alt="Profile Cover" />

          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">

            <img className="w-32 h-32 object-cover rounded-full border-4 border-white" src={postData.avatar} alt="Profile" />

          </div>

          <div className="absolute bottom-0 left-0 p-4">

            <h2 className="text-4xl font-semibold text-white">{postData.user}</h2>

            <p className="text-xl text-gray-300">{postData.username}</p>

          </div>

        </div>

       

        {/* Body */}

        <div className="p-6">

          <div className="mb-4">

            <h3 className="text-2xl font-semibold text-gray-800">About Me</h3>

            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit tellus id dui volutpat, vel hendrerit nulla vestibulum.</p>

          </div>

          <div className="mb-4">

            <div className="flex flex-wrap justify-center mt-2">

              <button className="bg-blue-500 text-white text-sm rounded-full px-3 py-1 mr-2 mb-2">Follow</button>

              <button className="bg-blue-500 text-white text-sm rounded-full px-3 py-1 mr-2 mb-2">Message</button>

            </div>

          </div>

          <div className="mb-4">

            <div className="grid grid-cols-3 gap-5 auto-rows-auto pl-3">
                {
                    postData.posts.map(post => {
                        return(
                            <div>
                                <img src={post.image} style={{height: '330px'}}/>
                            </div>
                        )
                    })
                }
                <div className="flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20">
                    <   path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                    <p>New Post</p>
                </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

 

export default ProfilePage;

 