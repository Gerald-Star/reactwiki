import React, {useState} from 'react'
import Mode from './Mode';



function Character(props) {

    
    console.log(props);

    const [openMode, setOpenMode] = useState(false);
    
    return (
        <div className="character">
             
            <img className="character-img" src={props.character.image} alt="" />
            <div>

                <button className="myBtn" onClick={() => { setOpenMode(true) }} >Learn More</button>
                {openMode && <Mode onClose={() => setOpenMode(false)} openMode={openMode}
                    status={props.character.status}
                    species={props.character.species}
                    name={props.character.name}
                />}
            </div>

        </div>
    )
}
 export default Character