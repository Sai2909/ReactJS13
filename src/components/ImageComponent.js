import React from 'react';
import running from  '../components/images/running1.jpg';

export default function ImageComponent(){

  return (
    <> <div  styles={{ backgroundImage:`url(${running})` }}>
    <h1>This is red car</h1>
  </div></>
   
  );
}