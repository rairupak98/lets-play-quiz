import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { useParams } from "react-router-dom";
import DiffcultyIcon from '@material-ui/icons/Label';
import StartQuizIcon from '@material-ui/icons/PlayArrow';
import {catogery_json} from '../utils/categoryJson';
import { useHistory } from "react-router-dom";
import DiffcultyLavelSelect from './../component/DiffcultyLabel';
import NumberOfQuestions from '../component/NumberOfQuestion';

 
export default function CategoryDe()
{
    let history=useHistory();
    let { id } = useParams();
    const [level,setLevel]=useState('Any');
    const [numberOfQuestion,setNumberOfQuestion]=useState(10);
    const [selectNoOfQuestion,setSelectNumberOfQuestion]=useState(false);

    const [category,setCategory]=useState({"name":"","id":""});

    // For defficultyLevel
    const[selectDefficultyLevel,setselectDefficultyLevel]=useState(false);

    useEffect(()=>{
        let cat=catogery_json.filter((value)=>{
        return value.id==id
        });
        setCategory(cat[0]);
    },[true] )

    function handleLevel(level)
{
setLevel(level);
console.log(level);
}
function HandleNoOfQuestion(no)
{
    setNumberOfQuestion(no);
    console.log(no);

}


    return(
        <>
     <div style={{margin:'20px'}}>
        <div style={{textTransform:'uppercase',padding:'16px'}}><h2>{category.name}</h2>
        </div>
        {/* <Button
        variant="contained"
        color="secondary"
       
        startIcon={<ConfigureQuizIcon />}
      >
        Configure Quize
      </Button>
       */}
            <div style={{fontSize:'14px',fontWeight:600,padding:'10px'}}>
            To play quiz, Please configure type of quiz you want to play
    </div>
        <div style={{fontSize:'16px',fontWeight:600,padding:'10px'}}>
            <div style={{background:'#f5f5f5',padding:'16px'}}> Your Quiz Confeguration  :
                <div style={{display:'grid',gridTemplateColumns:'auto auto'}}>
                    <Card 
                            onClick={()=>setSelectNumberOfQuestion(true)}
                    
                    style={{padding:'10px',margin:'10px'}}> 
                    
                    <div style={{textAlign:'center'}}>
                        <div style={{fontSize:'22px'}}>{numberOfQuestion}</div>
                        <div style={{fontSize:'16px'}}> Number Of Question</div>
                        </div>
                         </Card>
                         
                            <Card 
                            onClick={()=>setselectDefficultyLevel(true)}
                            
                            style={{padding:'10px',margin:'10px',textAlign:'center', fontSize:'18px'}}> 
                            
                            
                            <div><DiffcultyIcon/></div>
                        <div>{level}</div>
                    </Card>
                </div>
             </div>
             <Button
        variant="contained"
        color="secondary"
        onClick={()=>{
            sessionStorage.removeItem('_current_quiz')
            history.push('/play/'+id+'/'+level.toLocaleLowerCase()+'/'+numberOfQuestion);
        }}
       style={{background:'green',margin:'20px 20px 20px 0px'}}
        startIcon={<StartQuizIcon />}
      >
        Start Quiz
      </Button>
        </div>
    </div>
    <DiffcultyLavelSelect open={selectDefficultyLevel} OpenOnclose={()=>setselectDefficultyLevel(false)}
    onSetLevel={handleLevel}
    />
    <NumberOfQuestions open={selectNoOfQuestion} OpenOnclose={()=>setSelectNumberOfQuestion(false)}
    onSetNoOfQuestion={HandleNoOfQuestion}
    />
        </>
    )
}
