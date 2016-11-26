import React from 'react';	
import ToolBar from './ToolBar.jsx'

class Editor extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			elements:[
				{type:'table'},
				{type:'quote'}
			]
		};
	}

	render(){
		let element = this.state.elements.map((ele,index,array)=>{
			let retruns;
			switch(ele.type){
				case "table":
					retruns = <div className="table" key={index}></div>;
					break;
				case "quote":
					retruns = <div className="quote" key={index}></div>;
					break;
			}
			return(retruns)
		});

		return (
			<div>
				<ToolBar />

				<div>{element}</div>
			</div>
		);
	}

}

export default Editor;