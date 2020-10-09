import React from 'react';
import "../styles/quiz.css";
import { useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import StartQuizIcon from '@material-ui/icons/PlayArrow';
import { useParams } from 'react-router-dom';
import { useState,useEffect} from 'react';
import ViewFinalResult from './../component/ViewResult';
import * as firebase from "firebase";

export default function QuizResult()
{
 const firestore = firebase.firestore();
 let history=useHistory();
   let [result,setResult]= useState(0);
   let [finalResult,setFinalResult]=useState(false);
   useEffect(()=>{
    let data=history.location.state;
    firestore.collection("quiz_result").add({
       score:data.result,
       category:data.category.name,
       level:data.level,
       no_of_question:data.questions,
        user_name:"Rupak rai"
	})
    setResult(history.location.state.result)
   },true);
    return(
        <>
        <div id="quiz">
            <h1>
            {history.location.state.isPass? 'Congratulation':'OPPS ! Try Again'}
                
                </h1>
                <div className="circle">
    <div className="marks">{result}</div>
                    </div>
                    <center>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={()=>{
                         sessionStorage.removeItem('_current_quiz')
                        history.push('/');
                             }}

                   style={{background:'green',marginTop:'40px'}}
                         startIcon={<StartQuizIcon />}
                            >
        Play New Quiz
      </Button>
      <br/>
      <Button
                variant="contained"
                color="secondary"
                onClick={()=>{
                    setFinalResult(true)
                }}
                style={{background:'#18551b',margin:'20px auto',display:'block'}}
            >
                View Result
            </Button>
      <ViewFinalResult open={finalResult} OpenOnclose={()=>{
        setFinalResult(false)
      }} quizData={history.location.state.quizData}/>
      </center>
        </div>
        </>
    )
}
