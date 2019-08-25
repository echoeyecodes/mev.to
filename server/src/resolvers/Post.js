function postedBy(parent, args, context, info){
    return context.prisma.post({
        id: parent.id
    }).postedBy()
}
function likes(parent, args, context, info){
    return context.prisma.post({
        id: parent.id
    }).likes()
}
function reading(parent, args, context, info){
    return context.prisma.post({
        id: parent.id
    }).reading()
}
function comments(parent, args, context, info){
    return context.prisma.post({
        id: parent.id
    }).comments()
}
module.exports={
    postedBy,
    likes,
    reading,
    comments
}