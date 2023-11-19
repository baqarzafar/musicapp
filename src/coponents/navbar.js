import React, { useContext, useEffect, useRef, useState } from "react";
import NavbarButton from "./javabarbutton";
export default function Navebar(params) {
     let [numberfull , setnumberfull]   = useState(0)
     let [display, setdisplay]   = useState("none")
     let [widths, setdwidth]   = useState("default")
     let [heights, setheight]   = useState("default")


let full = ()=>{
  console.log('hello world')
  if(numberfull===0){
setnumberfull(    numberfull =1)
 setdisplay(   display = "block")


  }
  else if(numberfull===1){
    setnumberfull(numberfull=0)
 setdisplay(   display = "none")
 setdwidth(widths = "")
 setdwidth(heights = "")

  }
}



  let navebarbutton =   <button   onClick={full}               style={{background:"none" , border:"none" }}>
      <div  style={{display:"flex " , flexDirection:"row",flexWrap:"wrap" , width:"30px"}}>
  <div style={{ width: "10px", height: "10px", border: "1px solid #603fef" }}></div>
  <div style={{ width: "10px", height: "10px", border: "1px solid  #603fef" }}></div>
  <div style={{ width: "10px", height: "10px", border: "1px solid  #603fef" }}></div>
  <div style={{ width: "10px", height: "10px", border: "1px solid  #603fef" }}></div>
</div>
  </button>
  return (
    <div  
      style={{
        color: "white",
 
  
        position:"absolute",
        transition:" display   2s   ease",
        width:widths,
        height:heights,
        padding:"1%"
      }}
    >
     {navebarbutton} 
   <div style={{display:display , margin:"10%"}}>
   <div style={{ margin: "20%", marginTop: "10%" }}>
        <div style={{ color:"#603fef" ,  marginTop: "1%", fontSize: "16px", fontWeight: "bold" }}>
          Categories
        </div>
        <div style={{  marginTop: "5%", fontSize: "14px" }}>Aerial</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Rock</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Pop</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Classic</div>
      </div>
      <div style={{ margin: "20%", marginTop: "10%" }}>
        <div style={{     color:"#603fef" , marginTop: "1%", fontSize: "16px", fontWeight: "bold" }}>
          Library
        </div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Create now</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Best of</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Upcoming</div>
        <div style={{ marginTop: "%", fontSize: "14px" }}>Local</div>
      </div>
      <div style={{ margin: "20%", marginTop: "10%" }}>
        <div style={{  color:"#603fef" ,       marginTop: "1%", fontSize: "16px", fontWeight: "bold" }}>
          Playlist
        </div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Best of 2024</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Charts now</div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Records yours</div>
      </div>
   </div>
    </div>
  );
}
