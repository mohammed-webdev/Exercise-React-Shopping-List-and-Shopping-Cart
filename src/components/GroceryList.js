import React from 'react'
import List from './List';

export default function GroceryList({ data, handleClickGroceryItem }) {

    return (
        <>

            <List data={data} handleClickGroceryItem={handleClickGroceryItem} />

        </>
    )
}
