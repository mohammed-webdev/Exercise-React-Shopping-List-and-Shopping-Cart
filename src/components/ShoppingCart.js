import React from 'react'
import List from './List'

export default function ShoppingCart({ shoppingListItems }) {

    return (
        <List shoppingListItems={shoppingListItems} />
    )
}
