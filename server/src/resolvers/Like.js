function likedBy(parent, args, context, info){
    return context.prisma.like({
        id: parent.id
    }).likedBy()
}

function post(parent, args, context, info){
    return context.prisma.like({
        id: parent.id
    }).post()
}

module.exports={
    likedBy,
    post
}