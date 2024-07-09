import React from 'react';
import Profile from './profile.js';

export default function Gallery({members}){
    <div className='gallery'>
        {members.map(member=>( // map through array that is coded within app.js for ease of adding new code
            <Profile key={member.id} name={member.name} details={member.details} photo={member.photo}/>
        ))}
    </div>
}