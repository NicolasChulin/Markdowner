import React from 'react';	
import ToolBar from './ToolBar.jsx'

import Quote from './Quote.jsx'

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
					retruns = <Quote key={index} />;
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
			case "quote":
				console.log(window.markdownit().render('> markdown-it rulezz!'));
				break;
		}
	}

}

export default Editor;