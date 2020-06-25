import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import ReactDOM from 'react-dom'


const GifExpertApp = () => {

    const [categoria, setCategoria] = useState(['One Push Man']);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria={setCategoria}/>
            <hr />
            
            <ol>
                { 
                    categoria.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    )) 
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
