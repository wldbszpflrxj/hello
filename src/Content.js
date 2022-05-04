import {Component} from 'react';
import TodoList from './Todolist';
import TodolistItem from './TodolistItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class Content extends Component{
    constructor(props){
        super(props);
        
        this.state={
            itemNum: 0,
            items: [

            ]
        }
    }

    addItem(){
        const inputText = document.querySelector("#inputText");
        if(inputText.value){
            const tempArr = [...this.state.items];
            tempArr.push(
                <TodolistItem 
                    id={this.state.itemNum++} 
                    text={inputText.value} 
                    delete={(num)=>{this.deleteItme(num)}}
                    key={this.state.itemNum++} 
                />
            );
            this.setState({
                items: tempArr
            })
            inputText.value='';
        }
    }

    deleteItme(num){
        const selected = document.querySelector("#todo-item"+num);

        console.log(selected)
        if(selected){
            selected.remove();
        }
    }

    render(){
        return(
            <div>
                <div className="todo-search">
                    <input id="inputText" type="text" />
                    <button onClick={()=>{this.addItem()}}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <TodoList items={this.state.items}/>
            </div>
        )
    }
}