import React from 'react';	
import ToolBar from './component/ToolBar.jsx'

import Quote from './component/Quote.jsx'
import Ol from './component/Ol.jsx'
import Ul from './component/Ul.jsx'

class Editor extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			elements:[]
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
				case "ol":
					retruns = <Ol key={index} onChange={this.elementHandler(index)} />;
					break;
				case "ul":
					retruns = <Ul key={index} onChange={this.elementHandler(index)} />;
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
		var newElements = this.state.elements.concat();
		switch(type){
			case "table":
				console.log(this.state.elements);
				break;
			case "quote":
				//console.log(window.markdownit().render('> markdown-it rulezz!'));
				newElements.push({type:'quote',data:{}});
				break;
			case "ol":
				newElements.push({type:'ol',data:{}});
				break;
			case "ul":
				newElements.push({type:'ul',data:{}});
				break;
		}
		this.setState({elements:newElements});
	}

	elementHandler(index){
		return (data)=>{
			this.state.elements[index].data = data;
		}
		
	}

	

}

export default Editor;