import React from 'react';
import Header from './Header'
import {DialogActions,Slide, Typography, DialogContent, Dialog, TextField,Grid, Button,DialogContentText, DialogTitle} from '@material-ui/core'
import logo from './images/BeLogo.png'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function Login() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
  return <div >
     
      <section className='heroL'>
      <div className='headline animationUp'><img  className="logoH"src={logo}/></div>
      <div className='line headline'>__________________________________</div>
      
      <div className='single-animation'>
      
      <div className='buttons'><a href="/loginn" target="_blank" className=" btn3">Console Agent</a></div>
          </div>
      <div className='single-animation'>
      
      <div className='buttons'><a href="/loginb" target="_blank" className="btn4 ">Console BackOffice</a></div>
          </div>
      </section>
  </div>;
}

export default Login;
