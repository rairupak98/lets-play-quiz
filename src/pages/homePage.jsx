import React from 'react';
import QuizCategory from '../component/quizCategory';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
export default function Home()
{
    function handleChange(event)
    {
console.log(event.target.value);
    }
    return( <div>
            <div style={{display:'flex', margin:'20px'}}>
            <TextField id="filled-basic" label="Filled" variant="filled" fullWidth='true' onChange={handleChange}/>
            <Button variant="contained" color="secondary">
        Save
      </Button>
</div>     
<QuizCategory/>
        </div>

    )

} 