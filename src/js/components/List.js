import React,{Component} from "react";
import {connect} from "react-redux";
import { deleteItem } from "../actions/deleteItem.js";


const mapStateToProps = state=>{
	return {items: state.items}
}

const mapDispatchToProps = dispatch=>{
	return {
		deleteItem: item=>{
			return dispatch(deleteItem(item))}
	};
}; 
class ItemList extends Component {
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(event) {
		const id =event.target.parentElement.id
		this.props.deleteItem({id: id})
	}
	render(){
		return(
			<ul>
				{this.props.items.map((obj)=><div id={obj.id} key={obj.id}><li > {obj.title}</li><button onClick={this.handleDelete}>Delete</button></div>)}
			</ul>	
		)
	}
}


const List = connect(mapStateToProps, mapDispatchToProps)(ItemList)

export default List