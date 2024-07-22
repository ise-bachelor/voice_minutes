function CreateSN({sn}){
  console.log(sn);
  return(
    <div className="SN" style={{zIndex: sn.id, position: "absolute", top: `${sn.x}px`, left: `${sn.y}px`}}>
      <p>{sn.txt}</p>
    </div>
  );
}

export default CreateSN;