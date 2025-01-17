import React from 'react';

export default function Profile({name, details, photo}){
    return( // ensure img is of proper size
        <div classname='profile'>
            <img src={photo} width={350}alt={`Profile picture of ${name}`}/>
            <h3>{name}</h3>
            <p>{details}</p>
        </div>
    )
}