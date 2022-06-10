import ListItem from './ListItem'

export default function List({ data, handleClickGroceryItem, shoppingListItems }) {



    return (
        <ul>
            {shoppingListItems && shoppingListItems.map((shoppingListItem, index) => <ListItem shoppingListItem={shoppingListItem} key={index} />)}
            {data && data.map(item => <ListItem key={item.id} item={item} handleClickGroceryItem={handleClickGroceryItem} />)}
        </ul>
    )

}
