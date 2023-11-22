const useFunctions = ()=> {
//this hook will add our comment to the comment tree

const addComment = (tree, commentId, newComment)=> {
console.log('tree before ',tree , commentId, newComment )
    if(tree.id == commentId){
tree.reply.unshift(newComment);
return tree;
    }
   const updatedReply = tree.reply.map(el=>{
    console.log('el',el)
      return  addComment(el,commentId,newComment)
    })
    console.log('updated reply',updatedReply)
    return { ...tree, reply: updatedReply}

}
return addComment;
}
export default useFunctions;