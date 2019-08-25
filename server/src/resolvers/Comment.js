async function commentBy(parent, args, context, info){
    return context.prisma.comment({
        id: parent.id
    }).commentBy()
}

async function post(parent, args, context, info){
    return context.prisma.comment({
        id: parent.id
    }).post()
}

module.exports={
    commentBy,
    post
}