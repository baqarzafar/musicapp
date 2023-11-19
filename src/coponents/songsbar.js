import { useContext } from "react"
import { Mycontextdata } from "../store/context"

export default function Songbar(params) {
let {data} = useContext(Mycontextdata)
    return(
        <div style={ { color:"white",    display:"flex"  ,width:"80%" , height:"20%" }}>
            {data.map((data)=>{
                return(
              <div>
                  <div  >
                 <img  style={{ borderRadius:"100%" ,  width:"50%"}} src={data.img}></img>

                </div>
                   
              </div>  
              
                    )
            })}
        </div>
    )
}