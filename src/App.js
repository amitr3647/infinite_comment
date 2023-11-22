import "./App.css";
import Comment from "./components/comment.js";
import { commentData } from "./utils/commentData";
import { useState } from "react";
import useFunctions from "./hooks/useFunction";

function App() {
  let addCommentHook = useFunctions();
  const [commentList, setCommentList] = useState(commentData);
  const handleAddComment = (commentId, comment) => {
    console.log("text", comment, commentId);
    const updatedCommentTree = addCommentHook(commentList, commentId,comment)
    setCommentList(updatedCommentTree);
    console.log('commentlist',commentList)
  };

  return (
    <div className="App">
      <Comment 
      commentData={commentData}
       handleAddComment={handleAddComment}
      
       />
    </div>
  );
}

export default App;
