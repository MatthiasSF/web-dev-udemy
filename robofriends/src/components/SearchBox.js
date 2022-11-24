import React from 'react';

/*
Hanterar sökfältet.  Skickar searchchange vilket uppdaterar när användaren 
skriver i sökfältet till med hjälp av eventhanterarn onChange till
App.onSearchChange(searchChange)
*/
const SearchBox = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input type = 'search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
            
    )
}

export default SearchBox;