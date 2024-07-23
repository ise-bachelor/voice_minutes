import { useInteractJS } from "./hooks";

function CreateSN({sn}){
  console.log(sn);
  const interact = useInteractJS();
  return(
    <div className="SN" ref={interact.ref} style={{...interact.style, zIndex: sn.id, position: "absolute", top: `${sn.x}px`, left: `${sn.y}px`}}>
      <p>{sn.txt}</p>
    </div>
  );
}

export default CreateSN;