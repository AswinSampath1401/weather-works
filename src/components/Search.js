import React from 'react';

const Search = ({setCityName}) => {

    const handleInputChange = (e)=>{
        setCityName(e.target.value);
    }

    return (
        <div className='search-container'>
            <input
            className='search-box'
            type='text'
            placeholder = 'Search By City'
            onChange = {handleInputChange}
            ></input>
        </div>
    )
}

export default Search
