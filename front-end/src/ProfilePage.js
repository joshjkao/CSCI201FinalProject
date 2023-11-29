import React from "react";

import MyPost from "./MyPost";

function ProfilePage({user}) {
    const data = [
        {
            id: 1234,
            username: "Marco Paolieri",
            pfp: "https://qed.usc.edu/paolieri/marco_paolieri.jpg",
            pic: "https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
            likes: 213443130,
            follower:20,
            liked: false,
            caption: "this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. ",
            comments: [
                {
                    username: "billy",
                    message: "wow, very nice!"
                },
                {
                    username: "bob",
                    message: "your dog is very cute"
                }
            ],
            
        },
        {
            id: 5678,
            username: "Marco Papa",
            pfp: "https://today.usc.edu/wp-content/uploads/2020/08/Screen-Shot-2020-08-05-at-11.56.25-AM.png",
            pic: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
            likes: 10431443,
            liked: true,
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu dui, tristique ac hendrerit nec, posuere eu ipsum. Aenean a diam id mi luctus viverra id non quam. Phasellus auctor pretium libero, et sollicitudin quam. Fusce viverra at diam lobortis ultricies. Nunc non eleifend ligula, a iaculis magna. Morbi convallis elementum faucibus. Class aptent taciti",
            comments: [
                {
                    username: "sue",
                    message: "wow marco, i love your dog"
                },
                {
                    username: "joe",
                    message: "wow you finally posted marco"
                },
                {
                    username: "dan",
                    message: "wow your dog has a great smile, what a happy dog"
                }
            ]
        }
    ]
    const posts = [
      {
        pic:"https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
        caption: "this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. ",
        likes: 213,
      },
      {
        pic:"https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
        caption: "this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. this is my dog. i have a dog. look at my dog. my dog's name is spot. spot is a dog. ",
        likes: 300,
      },
      {
        pic:"https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
        caption: "Hi this is my recent update ",
        likes: 3,
      },
      {
        pic:"https://www.petlandtexas.com/wp-content/uploads/2016/08/Red_Bunny_Petland_Puppy.jpg",
        caption: "Hi this is my recent update ",
        likes: 40,
      }
    ]

  return (
    <div>
      {/* {data.map((user)=>( */}
          <MyPost user={user} posts={posts} />
        {/* ))} */}
    </div>
  );
}

export default ProfilePage;
