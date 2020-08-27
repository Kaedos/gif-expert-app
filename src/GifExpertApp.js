import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleApp = (e) =>{
        // setCategories('Hunter X Hunter'); Malo
        // setCategories([...categories,'Hunter X Hunter']);

        setCategories(cats => [...cats,'Hunter X Hunter'])
    }

    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <button type="button" onClick={ handleApp }>Categoria</button>
            <ol>
                {categories.map(category=>{
                    return <GifGrid key={ category } category={ category }/>
                })}
            </ol>
        </>
    )
};
