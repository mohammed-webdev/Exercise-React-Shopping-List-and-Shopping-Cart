import React from 'react'

export default function ListItem({ item, handleClickGroceryItem, shoppingListItem }) {

    return (
        <>

            {shoppingListItem ? <li className='list-item'
                value={shoppingListItem.title}

            >{shoppingListItem.title} - {shoppingListItem.amount}</li> : <li className='list-item'
                value={item.title}
                onClick={() => handleClickGroceryItem(item)}
            >{item.title}</li>}


        </>

    )
}
