const { APP_SECRET, getUserId } = require("../utils");
function users(parent, args, context, info){
    return context.prisma.users()
}
function comments(parent, args, context, info){
    return context.prisma.comments()
}
async function singlePost(parent ,args, context, info){
    const exists = await context.prisma.$exists.post({
        id: args.id
    })
    if(!exists){
        throw new Error('Post does not exits')
    }
    const post = await context.prisma.post({
        id: args.id
    })
    return post
}
async function singleUser(parent ,args, context, info){
    const exists = await context.prisma.$exists.user({
        username: args.username
    })
    if(!exists){
        throw new Error('User does not exits')
    }
    const user = await context.prisma.users({
        where:{
            username: args.username
        }
    }).then(data => data[0])
    return user
}
async function currentUser(parent ,args, context, info){
    const userId =getUserId(context)
    const user = await context.prisma.user({
        id: userId
    })

    if(!user) throw new Error('No account created for this session')
    
    return user
}
function posts(parent, args, context, info){
    return context.prisma.posts()
}
function likes(parent, args, context, info){
    return context.prisma.likes()
}
module.exports={
    users,
    singlePost,
    singleUser,
    currentUser,
    posts,
    likes,
    comments
}