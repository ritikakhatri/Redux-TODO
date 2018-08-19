import React,{Component} from "react";
import {connect} from "react-redux";
import { addItem } from "../actions/index.js";


const mapDispatchToProps = dispatch=>{

	return {
		addItem: item=>dispatch(addItem(item))
	};
};
class Container extends Component {
	constructor(props){
		super(props);
		this.state = {title : ""};
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleClick(event){
		const {title} = this.state
		const id =  new Date().getTime();
		this.props.addItem({title, id});
		this.setState({title:""})
	}

	handleChange(event) {
		this.setState({title: event.target.value})
	}

	render() {
		return(
			<div>
				<input type="text" onChange={this.handleChange} value={this.state.title} />
				<button onClick={this.handleClick}>Add Item</button>
			</div>
		)
	}

}

const AddItem = connect(null, mapDispatchToProps)(Container);
export default AddItem

