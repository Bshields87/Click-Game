import React from "react";



function CharacterCard(props) {
  //console.log(props)
  return (
  
      
      <div >
       <img style={{maxWidth: '150px', maxHeight: '200px'}} className="img" id= {props.id} alt={props.name} src={props.image} 
        onClick={()=> props.HandleShuffle()} />
    
        </div>
    
     
   
  );
}

export default CharacterCard;
