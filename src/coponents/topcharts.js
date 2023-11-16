import React, { useContext } from "react";
import { Mycontextdata } from "../store/context";

export default function TopCharts() {
  const { data, songs, setselectedsongs } = useContext(Mycontextdata);

  const handleImageClick = (name) => {
    let selectsong = data.findIndex((value) => value.name === name);
       setselectedsongs([data[selectsong]])
  };

  return (
    <>
   

      {songs.map((value, index) => (
        <div key={index} >
          <img
            onClick={() => {
              handleImageClick(value.name);
            }}
            style={{ width: "50%" }}
            src={value.img}
            alt={`Chart Image ${index + 1}`}
          />
          <p style={{ color: "white", fontSize: "50%" }}>{value.name}</p>
        </div>
      ))}
  </>
  );
}
