import React, { useContext, useEffect, useRef } from "react";
import { Mycontextdata } from "../store/context";
import { useState } from "react";

export default function Songplay() {


  
  
  let [number11, setNumber1] = useState(100);
  let [number22, setNumber2] = useState(100);
  let [number33, setNumber3] = useState(0);

let start  = ()=>{
  
  const interval1 = setInterval(() => {
    foroneandthree();
  }, 1000);

  const interval2 = setInterval(() => {
    fortwo();
  }, 100);

  // Clean up intervals when the component unmounts
  return () => {
    clearInterval(interval1);
    clearInterval(interval2);
  };
}


  function foroneandthree() {
  
    if(number11==100){
        setNumber1(number11=0)
        setNumber3(number22 = 100)
    }
    else if(number11==0){
        setNumber1(number11=100)
        setNumber3(number33=0)

    }
 
  }

  function fortwo() {
    if(number22==100){
       setNumber2(number2=0)
    }
    else if(number22==0){
        setNumber2(number22 = 100)
      
    }
  }















  const { data   ,selectsong , setfunction  , setselectedsongs} = useContext(Mycontextdata);
  const audioRef = useRef();
  



  let playses  =         <div style={{  display: 'flex' }}>
  <div style={{ width: '5px', height: '15px', backgroundColor: "#603fef",  }}></div>
  <div style={{ width: '5px', height: '15px', backgroundColor: "#603fef", marginLeft: '5px' }}></div>
</div>

let pauses =<div style={{

  transform:"rotate(90deg)",          
  width: "0",
  height: "0",
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "10px solid #603fef"
     }}></div>

let array = [ pauses ,  playses ]
let [number , setnumber] =  useState(0)

  const plays = () => {
  

    if(number===0){
        setnumber(number+=1) 
        audioRef.current.src = selectsong[0].Audio;
     audioRef.current.play(); 
    }
   else if(number===1){
        setnumber(number-=1)
        audioRef.current.pause();
      }
  
  };

 function pause(){
    audioRef.current.pause();
  };
   let [number2 , setnumber2] = useState(0)

  const prevrivious = () => {
     
    if(number2>=1){
   setnumber2(number2-=1)
      setselectedsongs([data[number2]])
    }

  };

  const forward = () => {
setnumber2( number2+=1)

setselectedsongs([data[number2]])

   
  };


  return (
<div >
<div style={{ display: "flex", transform: "rotate(180deg)" , width:"100%"    }}>
      <div
        style={{
          marginLeft: "1%",
          transition: "all 0.2s ease",
          width: "5px",
          height: `${number11}px`,
          backgroundColor: "blue",
        }}
      ></div>
      <div
        style={{
          marginLeft: "1%",
          transition: "all 0.2s ease",
          width: "5px",
          height: `${number22}px`,
          backgroundColor: "blue",
        }}
      ></div>
      <div
        style={{
          marginLeft: "1%",
          transition: "all 0.2s ease",
          width: "5px",
          height: `${number33}px`,
          backgroundColor: "blue",
        }}
      ></div>
    </div>

     <div >
     <div className="nameofmusic" style={{ color: "white" }}>
          <h3>Yakeen</h3>
        </div>
        <div className="pictureofmusic">
          <img style={{ width: "100%", height: "80%" }} src={selectsong[0].img} alt={selectsong[0].nameofsong} />
        </div>
        <div className="Textofmusic" style={{ color: "white" }}>
          <p style={{ fontSize: "60%" }}>{selectsong[0].nameofsong}</p>
        </div>
     </div>

        
        
        
        
        
        
        
        <div
          style={{
            backgroundColor:"rgb(40, 40, 43)",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            backgroundColor: "#603fef",
            width: "100%",
            height: "80px",
            alignContent: "center ",
            alignSelf: "center",
            display: "flex",
          }}
        >
          
         <div style={{display:"flex" , alignContent:"center"
         , alignItems:"center"
        }}>
           <div style={{
  transform:"rotate(270deg)",          
  width: "0",
  height: "0",
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "10px solid white"
     }}></div>

<button style={{background:"none" , border:"none"}} onClick={prevrivious}>
<div style={{
  transform:"rotate(270deg)",          
  width: "0",
  height: "0",
  borderLeft: "20px solid transparent",
  borderRight: "20px solid transparent",
  borderBottom: "20px solid white"
     }}></div>
</button>
         <button  onClick={plays} style={{
          background:"none" , border:"none"}}> 
           <div style={{
           display:"flex",
           alignItems:"center", justifyItems:"center",
           justifyContent:"center",
           width:"50px" , height:"50px" , 
           backgroundColor:"white" , 
           borderRadius:"100%"}}>
          
  {array[number]}
          
          </div></button>
  <button style={{background:"none" , border:"none"}} onClick={forward}>
  <div style={{
  transform:"rotate(90deg)",          
  width: "0",
  height: "0",
  borderLeft: "20px solid transparent",
  borderRight: "20px solid transparent",
  borderBottom: "20px solid white"
     }}></div>
  </button>
         
         <div style={{
  transform:"rotate(90deg)",          
  width: "0",
  height: "0",
  borderLeft: "10px solid transparent",
  borderRight: "10px solid transparent",
  borderBottom: "10px solid white"
     }}></div>
         
         </div>


        </div>

        <audio ref={audioRef} />
      </div>
  );
}
