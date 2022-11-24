import React from 'react';

/*
Skapar en modul som visar ett kort med bild från 
robohash.org, h2 som är namnet och p som visar email
*/

const Card = ({name, email, id}) => {
    return (
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = 'robot' src = {`https://robohash.org/${id}200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;