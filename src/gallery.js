import React from 'react';
import Profile from './profile.js';

export default function Gallery({members}){
    <div className='gallery'>
        {members.map(member=>(
            <Profile key={member.id} name={member.name} details={member.details} photo={member.photo}/>
        ))}
    </div>
}
