import React, { Component } from 'react'
import GroceryList from './GroceryList'
import ShoppingCart from './ShoppingCart'


// style
import "./container.css"


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Kiwi", amount: 1 },
                { id: 2, title: "Apple", amount: 1 },
                //{id:3,title:banaan,amount:1},

            ],
            shoppingListItems: [],//->[{id:1,title:kiwi,amount:1}]
            text: "", //<-- hi
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.addValue = this.addValue.bind(this)
        this.emptyArray = this.emptyArray.bind(this)
    }

    handleClickGroceryItem(item) {//{id:1,title:kiwi,amount:1}
        const index = this.state.shoppingListItems.indexOf(item)

        if (index === -1) {//nee
            this.setState({
                shoppingListItems: [...this.state.shoppingListItems].concat(item)//-->[{id:1,title:kiwi,amount:1},{id:2,title:apple,amount:1}]
            })
        } else {
            // const copyOfArray = [...this.state.shoppingListItems][this.state.shoppingListItems.indexOf(item)].amount += 1
            const copyOfArray = [...this.state.shoppingListItems]// --> [{id:1,title:kiwi,amount:2},{},{},{}]

            let newItem = copyOfArray[index] //copyOfArray[0] ---> {id:1,title:kiwi,amount:1} === {id:1,title:kiwi,amount:2}

            newItem.amount += 1
            copyOfArray[index] = newItem

            console.log(copyOfArray)
            console.log(newItem)
            // console.log(this.state.shoppingListItems[index])

            this.setState({
                shoppingListItems: copyOfArray

            })
        }
        // let x = this.state.shoppingListItems.indexOf(item)
        // const copyOfArray = [...this.state.shoppingListItems]
        // let newItem = copyOfArray[index]
        // newItem.amount += 1
        // console.log(newItem)
        // console.log(this.state.shoppingListItems[index])
        // this.setState({
        //     shoppingListItems: this.state.shoppingListItems.indexOf(item) === -1 ? [...this.state.shoppingListItems].concat(item) : [...this.state.shoppingListItems][this.state.shoppingListItems.indexOf(item)].amount +=1

        // })
    }
    myText(e) {
        this.setState({
            text: e.target.value // <---- hi
        })
    }
    addValue() {
        let obj = { id: this.state.groceryItems.length + 1, title: this.state.text, amount: 1 }
        this.setState({
            groceryItems: [...this.state.groceryItems].concat(obj) //[{},{},{id:3,title:banaan,amount:1}]
        })
    }
    emptyArray() {
        let copy = [...this.state.shoppingListItems]//[{kiwi},{apple}] ---> []
        for (let i = 0; i < copy.length; i++) {

            let newItem = copy[i] //{kiwi,amount:10}[]
            newItem.amount = 1; //{kiwi,amount:1}
            console.log(copy[i])
           
            // if (copy.length === copy.length - 1) {
            //     copy = []
            // }

        }
        copy = []
        this.setState({
            shoppingListItems: copy

        })
    }
    render() {
        console.log(this.state.shoppingListItems);
        return (
            <div className='container'>

                <div>
                    <input type="text" onChange={(e) => this.myText(e)} />
                    <button onClick={this.addValue}>Add</button>
                    <button onClick={this.emptyArray}>Empty</button>
                    <h1>Grocery List</h1>
                    <GroceryList data={this.state.groceryItems} handleClickGroceryItem={this.handleClickGroceryItem} />
                </div>
                <div>
                    <h1>Shopping Cart List</h1>
                    <ShoppingCart shoppingListItems={this.state.shoppingListItems} />

                </div>
            </div>
        )
    }
}
