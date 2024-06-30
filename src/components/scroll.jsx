import Post from "./post"

const posts = [
  {
    "id": 1,
    "username": "john_doe",
    "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    "image": "https://images.unsplash.com/photo-1599557527416-a50090d005b4",
    "timestamp": "2023-06-27T08:00:00Z",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "likes": 32,
    "comments": [
      {
        "username": "jane_smith",
        "text": "Beautiful photo!",
        "timestamp": "2023-06-27T09:00:00Z"
      },
      {
        "username": "alex_jones",
        "text": "Great shot!",
        "timestamp": "2023-06-27T10:00:00Z"
      }
    ]
  },
  {
    "id": 2,
    "username": "emma_watson",
    "avatar": "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    "image": "https://images.unsplash.com/photo-1626781309887-cdfb9f258c64",
    "timestamp": "2023-06-26T15:30:00Z",
    "content": "Enjoying the sunset.",
    "likes": 45,
    "comments": [
      {
        "username": "tom_hanks",
        "text": "Looks amazing!",
        "timestamp": "2023-06-26T16:00:00Z"
      },
      {
        "username": "nicole_kidman",
        "text": "Wow!",
        "timestamp": "2023-06-26T17:00:00Z"
      }
    ]
  },
  {
    "id": 3,
    "username": "michael_jackson",
    "avatar": "https://images.unsplash.com/photo-1628157588553-5eeea00af15c",
    "image": "https://images.unsplash.com/photo-1536129808005-fae894214c73",
    "timestamp": "2023-06-25T12:00:00Z",
    "content": "Dance like there's no tomorrow.",
    "likes": 78,
    "comments": [
      {
        "username": "madonna",
        "text": "Love it!",
        "timestamp": "2023-06-25T13:00:00Z"
      },
      {
        "username": "elvis_presley",
        "text": "The king approves!",
        "timestamp": "2023-06-25T14:00:00Z"
      }
    ]
  }
];


const Scroll = () => {
    return(
      <div>
        {
            posts.map(post => {
                return <Post post={post}/>
            })
        }
      </div>
    )
}

export default Scroll;