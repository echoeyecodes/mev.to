function posts(parent, args, context, info){
    return context.prisma.user({
        id: parent.id
    }).posts()
}
function readingList(parent, args, context, info){
    return context.prisma.user({
        id: parent.id
    }).readingList()
}

module.exports={
    posts,
    readingList
}