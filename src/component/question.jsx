import { Card } from '@material-ui/core';
import React  from 'react';

export default function Question(quiz)
{
    return(
       <>
       <div className="questionWrapper">      
           <div className="question questionWrapper">
            {quiz.quiz.question}
       </div>
           <div style={{display:'grid',gridTemplateColumns:'auto auto'}}>
           {quiz.quiz.answers.map((ans,index)=>(
                        <Card key={index} className="answer"
                             style={{background:quiz.quiz.userAnswer===ans?'green':'#61dafb'}}
                              onClick={()=>quiz.handleUserAnswer(ans)}>{ans}</Card>
                    ))}

          
</div>
</div>


          
       </>
    )

}
 