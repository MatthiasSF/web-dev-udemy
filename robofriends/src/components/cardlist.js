import React from "react";
import Card from './card';
/*
Läser av Arrayn i robots.js och skapar ett card med id, name och email 
för varje element i arrayn. Tar emot parametern robots från App.js.
Om användarn skrivit tar den emot en filtrerad robot lista att loopa över
*/
const cardList = ({robots}) =>{
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key = {i} 
                        id = {robots[i].id} 
                        name = {robots[i].name} 
                        email = {robots[i].email}
                        />
                    );
                })
            }
        </>
    
);
}

export default cardList;