import { useContext } from "react"
import { Mycontextdata } from "../store/context"

export default function Songbar(params) {
let {data} = useContext(Mycontextdata)
    return(
        <div style={ { color:"white", backgroundColor:"rgb(40, 40, 43)"  ,   display:"flex" , padding:"1%"  ,width:"90%" , height:"20%"}}>
            {data.map((data)=>{
                return(
              <div>
                  <div  >
                 <img  style={{ borderRadius:"100%" ,  width:"100%"}} src={data.img}></img>

                </div>
                   
              </div>  
              
                    )
            })}
        </div>
    )
}