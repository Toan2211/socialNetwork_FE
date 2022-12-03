import React from 'react'


const Search = () => {

    return (
        <form className="search_form" >
            <input type="text" name="search" id="search" title="Enter to Search" />

            <div className="search_icon">
                <span className="material-icons">search</span>
                <span>Enter to Search</span>
            </div>

            <div className="close_search" >
                &times;
            </div>

            <button type="submit" style={{ display: 'none' }}>Search</button>
        </form>
    )
}

export default Search
