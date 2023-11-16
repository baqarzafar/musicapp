import { createContext, useState } from "react"

import ishqmurshid from "./imgformusicapp/ishqmurshi.jpg"
import asimazhar from "./imgformusicapp/asimazhar.jpg" 
import tailswift from "./imgformusicapp/tailorswift.jpg" 
import eliegodline from "./imgformusicapp/eliegoudline.jpg" 
import atifaslam from "./imgformusicapp/asimazhar.jpg" 
import zainmalik from "./imgformusicapp/zainmalik.jpg" 
import rahatfatehali from "./imgformusicapp/rahatfatehkhan.jpg" 
import elie  from "../songs/Ellie Goulding - Burn .m4a"
import zain  from "../songs/ZAYN - Dusk Till Dawn .m4a"
import Taylors  from "../songs/Taylor Swift - Now That We Dont Talk .m4a"
import Rahat  from "../songs/Arijit Singh Soch Na Sake .mp3"
import ahmedjahangir  from "../songs/Singer Ahmed Jahanzeb.m4a"

let Mycontextdata =  createContext()
export default function Mycontextprovider({children}){
    let singers = [
        {name:"elie goudlin",
         img:eliegodline,
         nameofsong:"",
         Audio:elie
         },
        {name:"zain malik",
         img:zainmalik,
         nameofsong:"DusktillDown",
         Audio:zain
         },
        
        {name:"asim azhar",
         img:asimazhar,
         nameofsong:"",
         Audio:""
         },
        {name:"tailor swift",
         img:tailswift,
         nameofsong:"we dont talk",
         Audio:Taylors
         },
        {name:"rehatalikhan",
         img:rahatfatehali,
         nameofsong:"",
         Audio:Rahat
         },
        {name:"ahmed jahanzaib",
         img:ishqmurshid,
         nameofsong:"Tera Mera Pyaar amer",
         Audio:ahmedjahangir
         },
    ]

let [selectsong , setselectedsongs] = useState(singers)
let [songs , setsongs] = useState(singers)
let [data] = useState(singers)
let [functions , setfunction] = useState("default") 
return  (
        <Mycontextdata.Provider value={{ selectsong , setselectedsongs , data , songs , setsongs , functions , setfunction}} >
            
               {children}
          
    </ Mycontextdata.Provider>

    )
}
export {Mycontextdata};