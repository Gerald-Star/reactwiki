import React  from 'react'
import "./SearchBar.css";

function SearchBar({getResult}) {


  return (
    <div className="search">
      <div className="searchWiki">
         <input type="text" placeholder='Search' className="search_name" onChange={getResult}/>
      </div>

    </div>
  )
}

export default SearchBar