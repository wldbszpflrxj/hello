import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default class TodolistItem extends Component{
    checkItem(){
        const checkComponent = document.querySelector("#todo-item" + this.props.id);
        if(checkComponent.className === 'on'){
            checkComponent.classList.remove('on');
        }else{
            checkComponent.classList.add('on');
        }
    }
    render(){
        return(
            <li id={"todo-item"+this.props.id}>
                <span className="check_btn" onClick={()=>{this.checkItem()}}><b><FontAwesomeIcon icon={faCircleCheck} /></b> {this.props.text}</span>                
                <span className="delete_btn" onClick={()=>{this.props.delete(this.props.id)}}><FontAwesomeIcon icon={faXmark} /></span>
            </li>
        )
    }
}