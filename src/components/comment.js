import React, { useState } from 'react'
import './comment.css'
const Comment = ({commentData,handleAddComment,testFunction}) => {
const [input,setInput] = useState(false);
const [commentBody, setCommentBody]= useState('');
    const handleComment = ()=>{
        let newComment = {
            id: Date.now(),
            text: commentBody,
            reply: []
        }
        console.log('ok clicked',newComment);
        handleAddComment(commentData.id,newComment);
        setInput(false)
    }
  return (
    <div>
    <div className='commentBox'>
    <div>{commentData.text}</div>
    {input && <input type='text' autoFocus onChange={(e)=> setCommentBody(e.target.value)} />}
  {input? (
        <div>
            <button onClick={handleComment}>ok</button>
            <button onClick={()=>setInput(false)}>cancel</button>
        </div>

  ): (
    <div>
    <button onClick={()=> setInput(true)}>reply</button>
    <button >delete</button>
</div>
  )
  
  }
    </div>
    <div style={{marginLeft:10}}>

    {commentData?.reply?.map(comment=> {
        return <Comment 
        commentData={comment}
        handleAddComment={handleAddComment}

        />
    })}
    </div>
    </div>

  )
}

export default Comment