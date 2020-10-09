import { Card } from '@material-ui/core';
import {Grid} from '@material-ui/core'
import React from 'react';
import {catogery_json} from '../utils/categoryJson';
import { useHistory } from "react-router-dom";
export default function QuizCategory()
{
    let history=useHistory();
    return(
        <div style={{background:'#f5f5f5',margin:20}}>
            <h2 style={{marginLeft:'20px'}}>Quiz Category's</h2>

<Grid container  spacing={2}>
            {
            catogery_json.map((item,key)=>(
                <Grid key={key} item style={{padding:'none'}}>
               <Card
               //we make the instace of the use history
               onClick={()=>history.push('/category/'+item.id)}
                style={{padding:'10px',margin:'10px',background:item.background,cursor:'pointer'}}> <div>{item.name}</div></Card>
                </Grid>
            ))}
        </Grid>

        </div>
           )
}