const bcrypt = require("bcryptjs");
const { APP_SECRET, getUserId } = require("../utils");
const jwt = require("jsonwebtoken");
const path = require('path')
const {Storage} = require('@google-cloud/storage')
async function signUp(parent, args, context, info) {
  const exists = await context.prisma.$exists.user({
    username: args.username
  });

  if (exists) throw new Error("User already exists");

  const password = await bcrypt.hash(args.password, 10);

  const user = await context.prisma.createUser({
    ...args,
    password
  });
  const token = jwt.sign(
    {
      userId: user.id
    },
    APP_SECRET
  );
  if(user){
    console.log('User created successfully')
  }

  return {
    token,
    user
  };
}

async function login(parent, args, context, info){
  const user = await context.prisma.users({
    where:{
      username: args.username
    }
  }).then(data => data[0])

  if(!user) throw new Error ('User does not exist')

  const valid = await bcrypt.compare(args.password, user.password)

  if(!valid) throw new Error ('Incorrect password')

  const token = await jwt.sign({userId: user.id}, APP_SECRET)
  return{token,user}
}

async function singleUpload(parent, {file}){
  const {createReadStream, filename, mimetype, encoding} = await file
  const storage = new Storage({
    keyFilename: path.join(__dirname, '../mevto-232e51f8cd95.json'),
    projectId: 'mevto-250109'
  })

  const bucket = storage.bucket('echoeyecodes')

  await new Promise(res => createReadStream().pipe(
    bucket.file(filename).createWriteStream({
      resumable: false,
      gzip: true
    })
  ).on('finish', res)).catch(error => console.log(error))

  console.log(filename)

  return{
    filename,
    mimetype,
    encoding
  }
}
async function createPost(parent, args, context, info) {
  const userId = getUserId(context);
  
  console.log('sdas')

  return await context.prisma.createPost({
    title: args.title,
    content: args.content,
    images: args.image,
    tags: {
      set: args.tags
    },
    postedBy: {
      connect: {
        id: userId
      }
    }
  });
}

async function alterPost(parent, args, context, info){
  const post = await context.prisma.updatePost({
    where:{
      id: args.id
    },
    data:{
      title: args.title
    }
  })

  return post

}

async function addReadingList(parent, args, context, info){
  const userId = getUserId(context)

 return await context.prisma.updateUser({
    where:{
        id: userId
    },
    data: {
        readingList:{
            connect:{
                id: args.id
            }
        }
    }
})

}

async function likePost(parent, args, context, info) {
  const userId = getUserId(context);
  const hasLiked = await context.prisma.$exists.like({
    likedBy: {
      id: userId
    },
    post: {
      id: args.postID
    }
  });
  if (hasLiked) {
    throw new Error("You have liked this post already");
  }
  const like = await context.prisma.createLike({
    likedBy: {
      connect: {
        id: userId
      }
    },
    post: {
      connect: {
        id: args.postID
      }
    }
  });

  return like;
}

async function commentPost(parent, args, context, info){
  const userId = getUserId(context)

  const comment = await context.prisma.createComment({
    commentBy:{
      connect:{
        id: userId
      }
    },
    post:{
      connect:{
        id: args.postID
      }
    },
    content: args.content
  })

  return comment

}
module.exports = {
  signUp,
  login,
  createPost,
  likePost,
  singleUpload,
  alterPost,
  addReadingList,
  commentPost
};
