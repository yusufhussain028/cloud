import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState,useEffect} from 'react';

export default function UserInfo(props){
const userDt= useSelector(state=>state);
const [data,newData]= useState([{"id":'',"email":"","first_name":"","last_name":"","avatar":""}]);

useEffect(() => {
newData(userDt.filter((item) => item.id==props.location.userId));
}, []);

return(
<>
<header style={{display:'flex', justifyContent:'center', marginTop:'10%'}}>
  <img src={data[0].avatar} alt="Emma"/>   
</header>
<div style={{textAlign:'center', marginTop:'50px', backgroundColor:'grey'}}>
<h3>User ID : {data[0].id}</h3>
<h3>First Name : {data[0].first_name}</h3>
<h3>Last Name : {data[0].last_name}</h3>
<h3>Email Address : {data[0].email}</h3>
</div>

</>
 );
 }