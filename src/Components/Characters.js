import React, { useEffect, useState} from "react";
import Character from './Character'
import SearchBar from "./SearchBar";
import "./Characters.css";






function Characters() {
    const [characters, setCharacters] = useState([]);
    const [input, setInput] = useState('');
    //const [result, setResult] = useState(null);
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

    const getInput = (event) => {
        console.log("onchange works", event.target.value);
        setInput(event.target.value)
}

    const result = characters.filter(val =>
        val.name.toLowerCase().includes(input.toLowerCase())
    )
    console.log(result)


    return (
         <div className="character-card">
            <SearchBar getInput={getInput} />
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