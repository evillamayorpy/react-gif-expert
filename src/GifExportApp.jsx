import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExportApp = () => {

  const [categories, setCategories] = useState(['bon jovi']);

  const onAddCategory = ( newCategory ) => {

    if (categories.includes(newCategory)) return false;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
        <h1>App</h1>

        <AddCategory 
          onNewCategory={ onAddCategory }
        />

        {
            categories.map( ( cat ) => (
                <GifGrid 
                  key={`${cat}`}
                  category={ cat } />
            ))
        }
    </>
  )
}