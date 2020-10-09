import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar, Card } from '@material-ui/core';
import "../styles/quiz.css";
import CloseIcon from '@material-ui/icons/Close';
import {LEVEL_JSON}  from '../utils/categoryJson';

export default function NumberOfQuestions(data) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    data.OpenOnclose();
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    setOpen(data.open)
    // if (open) {
    //   const { current: descriptionElement } = descriptionElementRef;
    //   if (descriptionElement !== null) {
    //     descriptionElement.focus();
    //   }
    // }
  }, [data.open]);

  function HandleLevel(no){
    data.onSetNoOfQuestion(no 
        )
    data.OpenOnclose();

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

          <div style={{display:'flex',justifyContent:'space-between',padding:'20'}}>
              <div style={{fontWeight:'bold',fontSize:'20px'}}>Selcet Numbers Of Question </div>
              <div onClick={handleClose} style={{cursor:'pointer'}}><CloseIcon/></div>
          </div>
        
        <DialogContent dividers={'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
              <div style={{display:'flex',padding:'20px'}} >
              {
              [10,20,30].map((item,index)=>
    <Card style={{padding:'10px',margin:'10px'}}
    onClick={()=>HandleLevel(item)}
    > 
        <div style={{textAlign:'center'}}>
    <div style={{fontSize:'22px' ,width:'80px'}}>
      
              <Avatar style={{margin:'auto',background:item.background,color:'#fff',marginLeft:'40px'}}>{item}</Avatar></div>
              <div style={{fontSize:'16px',fontWeight:600}}>Quiz with {item} question</div>
    </div>
     </Card>
         )}
          </div>
           
 

          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
