import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGRid } from './components/GifGRid';


const GifExpertApp=() => {

    const [categories, setCategories] = useState(['One Punch']);

        /* 
        const handleAdd = () => {

            //se puede hacer de ambas maneras 
            //
            // setCategories( [...categories, 'SuperChota'] );    
            
            setCategories( cats => [...cats, 'SuperChota'] );   


        }
        */

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
          
            <ol>
                {
                    categories.map( category => ( 
                        <GifGRid 
                            key={ category }
                            category={ category }
                        /> 
                    ))

                }
            </ol>
            
        </>
    );
}


export default GifExpertApp;


/*

map tiene dos argumentos la categoria y el id. usualmente se pone el id 
valor unico como key pero no puede ser el indice y debe de ser unico.

*/

