import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './compnt1.css'
import { Link } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import  Dropdwn from './dropdwn.jsx';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function MediaCard(props) {

const [user,newUser]= useState([]);
const [post,setPost]= useState(null);
const dispatch= useDispatch();
const userDt= useSelector(state=>state);
const classes=useStyles();


 useEffect(() => {
userData();
  }, []);

 function userData() {
          fetch(
        "https://reqres.in/api/users?delay=3" 
      )
        .then(res => res.json())
        .then(d => {
          newUser(d.data);
          console.log(d.data);
          dispatch({type:'UPDATE',state:d.data});
          setPost(' ');
        });  

  }

 

  return (
  <>
  <div style={{float:'right'}}>
   <Dropdwn/>  
   </div>

{post?post: <Backdrop className={classes.backdrop} open>
        <CircularProgress color="inherit" />
      </Backdrop>}

<section id="team" class="pb-5">
    <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
           
        {
        userDt.map((usr) => (
    <>
       <div className="col-xs-12 col-sm-6 col-md-4" key={usr.id}>
                <div >
                    <div >
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                   <Link to={{pathname:'/userInfo/*',
                                    userId:usr.id}}>
                                    <p><img className=" img-fluid" src={usr.avatar}/></p>
                                    <h4 className="card-title">{usr.email}</h4>
                                    <p className="card-text">{usr.first_name}  {usr.last_name}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
         
       
           </>
      ))}
        </div>
    </div>
</section>
    </>
  );
}