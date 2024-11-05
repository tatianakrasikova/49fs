import { useState } from "react";
import MyButton from '../components/myButton/MyButton';
import './Feedback.css';

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes - 1);
  const resetResults = () => {
    if (likes !== 0 || dislikes !== 0) {
      setLikes(0);
      setDislikes(0);
    }
    
      setLikes(0);
      setDislikes(0);
  

  };
  return (
    <div className="feedback-container">
      <MyButton func={handleLike}  text={"Like"}isDanger={false} />
      <span className="feedback-count">{likes}</span>
      <MyButton func={handleDislike}  text={"Dislike"}isDanger={true} />
      <span className="feedback-count">{dislikes}</span>
      <MyButton funk={resetResults}  text={"Reset Result"}isDanger={true}/>
    
      
    
    </div>
  );
};



export default Feedback;