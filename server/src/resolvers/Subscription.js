function newPostSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.post({
        mutation_in: ['CREATED']
    }).node()
}
function newUserSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.user({
        mutation_in: ['UPDATED']
    }).node()
}

function newCommentSubscribe(parent, args, context, info){
    return context.prisma.$subscribe.comment({
        mutation_in: ['CREATED']
    }).node()
}

const newPost ={
    subscribe: newPostSubscribe,
    resolve: payload => payload
}
const newUser={
    subscribe: newUserSubscribe,
    resolve: payload => payload
}
const newComment = {
    subscribe: newCommentSubscribe,
    resolve: payload => payload
}

module.exports={
    newPost,
    newUser,
    newComment
}