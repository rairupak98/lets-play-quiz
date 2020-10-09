import  React  from 'react';
import Question from '../component/question';
import   '../styles/quiz.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from './../config';
import Button from '@material-ui/core/Button';
import PrevIcon from "@material-ui/icons/ArrowLeft";
import NextIcon from "@material-ui/icons/ArrowRight";
import FinishedIcon from "@material-ui/icons/CancelScheduleSend";
import { useHistory, useParams } from 'react-router-dom';
import { catogery_json } from './../utils/categoryJson';

export default function QuizPage()
{
  let history=useHistory();
  let{categoryId,level,number}=useParams();
 const[quizData,setQuizData]=useState([]);
 const[isloading,setLoading]=useState(true);
 const[questionNum,setQuestionNum]=useState(0);
 const[answerChange,setAnswerChange]=useState(true);
 const[categoryName,setCategory]=useState('');

useEffect(()=>{
  let cat=catogery_json.filter((value)=>{
        return value.id==categoryId
        });
        setCategory(cat[0]);

  getQuizData();
},true)
// fetch data from api using base url
function getQuizData()
{

  let quizData=sessionStorage.getItem('_current_quiz');
  if(quizData){
    setQuizData(JSON.parse(quizData));
    setLoading(false);
  }else{
let url=API_BASE_URL+'?amount='+number+'&category='+categoryId;
if(level!='any')
{
  url=url+'&diffculty='+level;
}
  axios.get(url)
  .then(function (response) {
    // handle success
    createFinalQuiz(response.data.results);
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
  
}
// passing answers
function createFinalQuiz(data)
{
  let newQuiz=[];
  data.forEach(value=> {
    value.answers=value.incorrect_answers;
    value.answers.push(value.correct_answer); 
    value.answers=shuffle(value.answers);
    newQuiz.push(value);
  });
  setQuizData(newQuiz);
  setLoading(false);
  sessionStorage.setItem('_current_quiz',JSON.stringify(newQuiz))
}

// suffeling arrary
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}
function handleUserAnswer(ans)
{
quizData[questionNum].userAnswer=ans;
setQuizData(quizData);
// it just use to notify cild component so it does not use anywere.
setAnswerChange(!answerChange);
}

// For storing correct answer 
function onFinsihQuiz()
{
  let count=0;
   quizData.forEach(function(quiz){
 if(quiz.correct_answer==quiz.userAnswer)
 {
   count++
 }
   });
history.push('/result',{"result":(count*10),"isPass":count>4,"quizData":quizData,"level":level,"questions":quizData.length,"category":categoryName});
}

    return(
        <div className="quizWrapper">
            {isloading?<div>Please wait your quiz is loading..</div>:
        <div>
            <div style={{marginTop:'20px'}}>
        <Question quiz={quizData[questionNum]}
        handleUserAnswer={handleUserAnswer}  answerChange={answerChange}/>
        </div>
        <div className='buttonWrapper'>
<Button
        variant="contained"
        color="secondary"
        disabled={questionNum==0}
        onClick={()=>setQuestionNum(questionNum-1)}
        startIcon={<PrevIcon/>}
      >
        Previous
      </Button>
      <Button
        variant="contained"
       onClick={()=>onFinsihQuiz()}
      color="primary"
        startIcon={<FinishedIcon/>}
      >
        Finished
      </Button>

      <Button
        variant="contained"
        disableElevation
        color="primary"
        disabled={questionNum==(quizData.length-1)}
        onClick={()=>setQuestionNum(questionNum+1)}
        startIcon={<NextIcon/>}
      >
        Next
      </Button>
      </div>
        </div>
}
        </div>
    )
}
 