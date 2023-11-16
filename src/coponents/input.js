import { useContext, useState } from "react";
import { Mycontextdata } from "../store/context";
import { dblClick } from "@testing-library/user-event/dist/click";

export default function Searchbar() {
  const {data , setsongs , songs}= useContext(Mycontextdata);
  const [value, setValue] = useState("");

  const foo = (event) => {
    setValue(event.target.value);
    
    const requiredResult = data.filter((item) =>
      item.name.toLowerCase().startsWith(value.toLowerCase())
    );

    setsongs(requiredResult)
   
  };

  return (
    <div
      style={{
        marginTop: "1%",
        marginBottom: "2%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onChange={foo}
        value={value}
        placeholder="Search for fun"
        style={{
          color: "white",
          backgroundColor: "rgb(40, 40, 43)",
          width: "100%",
          padding: "2%",
          fontSize: "100%",
          border: "2px solid #603fef",
          
        } }
        
      />
    </div>
  );
}
