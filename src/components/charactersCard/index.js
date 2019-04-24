import React from "react";



function CharacterCard(props) {
  return (
  
      
      <div >
       <img style={{maxWidth: '150px', maxHeight: '200px'}} className="img" alt={props.name} src={props.image} />
        </div>
    
     
   
  );
}

export default CharacterCard;
