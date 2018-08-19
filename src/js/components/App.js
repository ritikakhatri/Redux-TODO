import React from "react";
import AddItem from "./AddItem.js";
import List from "./List.js";

class App extends React.Component {
	render(){
		return(
			<div>
				<AddItem />
				<List />
			</div>
		)
	}
}

export default App;