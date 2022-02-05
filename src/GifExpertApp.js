import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     console.log("handleAdd");
    //     const data = "Kung fu";
    //     //setCategories([...categories, data]);
    //     setCategories(cats => [...cats, data]);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <h5>Ingrese una categoría para buscar gifs asociados en Giphy</h5>

            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />)
                }
            </ol>

        </>

    )
};




export default GifExpertApp;