import React from 'react';	
import ToolBar from './ToolBar.jsx'

import Quote from './Quote.jsx'

class Editor extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			elements:[
				{type:'table'},
				{type:'quote',data:{}}
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
					retruns = <Quote key={index} onChange={this.elementHandler(index)} />;
					break;
			}
			return(retruns)
		});

		return (
			<div>
				<ToolBar clickHandler={this.createElement.bind(this)} />

				<div>{element}</div>
			</div>
		);
	}

	createElement(type){
		switch(type){
			case "table":
				console.log(this.state.elements);
				break;
			case "quote":
				//console.log(window.markdownit().render('> markdown-it rulezz!'));
				var newElements = this.state.elements.concat();
				newElements.push({type:'quote',data:{}});
				this.setState({elements:newElements});
				break;
		}
	}

	elementHandler(index){
		return (e)=>{
			this.state.elements[index].data = e.target.value;
		}
		
	}

	

}

export default Editor;