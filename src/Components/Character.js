import React from 'react'


function Character(props) {

    
    console.log(props);
    
    return (
        <div className="character-set">
            <img src={props.character.image} alt="" />
            <h3>{props.character.name}</h3>
            <h4>{props.character.status}</h4>
            <p>{props.character.species}</p>
            
            <button type="button" className="btn btn-primary">Learn More</button>
        </div>
    )    
        
    
}

export default Character