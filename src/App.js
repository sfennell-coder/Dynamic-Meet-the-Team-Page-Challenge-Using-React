import React from 'react';
import Gallery from 'gallery';

const members = [ // Array at the center of src files for ease of altering or editing members
    {id:1, name: 'Hank Williams', details:'CEO',
         photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Hank_Williams_Promotional_Photo.jpg/330px-Hank_Williams_Promotional_Photo.jpg'},
    {id:2, name: 'Bob Ross', details: 'Marketing: Graphic Design',
         photo:'https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg'},
    {id:3, name: 'Yngwie Malmsteen', details: 'Audio Director', 
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Yngwie_Malmsteen_1.jpg/330px-Yngwie_Malmsteen_1.jpg'},
    {id:4, name: 'Don Williams', details: "Singer-songwriter",
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Donwilliams.jpg/330px-Donwilliams.jpg'}
];

function App() {
    return(
        <div  className='App'>
            <Gallery members={members}/>
        </div>
    )
}

export default App;
