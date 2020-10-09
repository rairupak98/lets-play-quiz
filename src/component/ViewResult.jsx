import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Card } from '@material-ui/core';
import "../styles/quiz.css"


export default function ViewFinalResult(data) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    data.OpenOnclose();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    console.log(data);
    setOpen(data.open)
    // if (open) {
    //   const { current: descriptionElement } = descriptionElementRef;
    //   if (descriptionElement !== null) {
    //     descriptionElement.focus();
    //   }
    // }
  }, [data.open]);

  function managerUserAnswer(correctAnswer,ans,userAnswer) {
    if(ans==correctAnswer) {
        if (userAnswer == correctAnswer) {
            return '#71f90a'
        } else {
            //return userAns == correctAnswer ? '#71f90a' : ''
            return '#0df9ee'
        }
    }else {
        if (userAnswer == ans) {
            return '#f9e018'
        } else {
            //return userAns == correctAnswer ? '#71f90a' : ''
            return '#ffffff'
        }
    }
}

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          
        <div  style={{display:'flex',justifyContent:'space-around',margin:14}}>
                    <div>
                        <div style={{background:'#f9e018',height:30,width:50}}></div>
                        <div style={{marginTop:10}}>Your Answer</div>
                    </div>
                    <div>
                        <div style={{background:'#0df9ee',height:30,width:50}}></div>
                        <div style={{marginTop:10}}>Correct Answer</div>
                    </div>
                    <div>
                        <div style={{background:'#71f90a',height:30,width:50}}></div>
                        <div style={{marginTop:10}}>Your Correct Answer</div>
                    </div>

                </div>





        </DialogTitle>
        <DialogContent dividers={'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {data.quizData.map((quiz)=>(
 <div className="questionWrapper">      
 <div className="question questionWrapper">
  {quiz.question}
</div>
 <div style={{display:'grid',gridTemplateColumns:'auto auto'}}>
 {quiz.answers.map((ans,index)=>(
              <Card key={index} className="answer"

                   style={{background:managerUserAnswer(quiz.correct_answer,ans,quiz.userAnswer)}}>
                     
                     {ans}</Card>

          ))}


</div>
</div>
            
            ))}
           

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
