import React, { useEffect, useState} from "react";
import Character from './Character'






function Characters() {
    const [characters, setCharacters] = useState([]);
    const [result, setResult] = useState(null);
    	const [loading, setLoading] = useState(true)
    
    const fetchData = () => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => {
                return (
                    response.json()
                )
            })
        
            .then(data => {
                console.log('data', data.results)
                setCharacters(data.results)
                setLoading(false)

            })
            .catch(error => {
                console.log('error', error)
                
            })
        
        
    }    

    useEffect(() => {
        fetchData()
    }, []);





    return (
         <div className="character_card">
            
            {/* {
                characters ? (characters.map(character => {
                    return

                    <div key={characters.id}>
                        <Character character={character}/>
                    </div>
                }))
                    
                    
            } */}

            
            {
                !loading ? (characters.map((character) => {
                    return (
                        <div key={characters.id}>
                        <Character character={character}/>
                    </div>
                    )
                })) : (<p>.....loadiung</p>)
            }
        </div>
        
    )
}

    

export default Characters