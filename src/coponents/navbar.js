export default function Navebar(params) {
  return (
    <div
      style={{
        color: "white",
 
      
        backgroundColor: "rgb(40, 40, 43)",
        height: "100%",
        width: "20%",
        padding:"1%"
      }}
    >
      <div style={{ margin: "20%", marginTop: "10%" }}>
        <div style={{ color:"#603fef" ,  marginTop: "1%", fontSize: "16px", fontWeight: "bold" }}>
          Categories
        </div>
        <div style={{ marginTop: "5%", fontSize: "14px" }}>Aerial</div>
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
  );
}
