import React from 'react';	
import { IntervalEnhance } from '../enhance/resizeTextareaEnhance.jsx';

class Ol extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			children:[{value:''}],
			currentEditIndex:0
		};
	}

	render(){
		let li = this.state.children.map((ele,index,array)=>{
			return (
				<li key={index}>
					<textarea 
						ref={index}
						value={ele.value}
						onChange={this.handlenamechange(index).bind(this)}
						onFocus={this.focusInput(index).bind(this)} 
						onInput={this.props.resizeFunc}
						onKeyDown={this.handleEnter.bind(this)}
						>
					</textarea>
				</li>
			);
		});
		return (
			<div className="ol" >
				<ol>
					{li}
				</ol>
			</div>
		);
	}

	handlenamechange(index){
		return (e)=>{
			var newElements = this.state.children.concat();
			newElements[index].value = e.target.value;
			this.setState({children:newElements});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.onChange(this.state.children);
	}

	focusInput(index){
		return (e)=>{
			this.setState({currentEditIndex:index});
		}
	}

	handleEnter(e){
		if(e.keyCode === 13){
			e.preventDefault();
			this.addRow();
		}
	}

	addRow(){
		var newElements = this.state.children.concat();
		newElements.splice(this.state.currentEditIndex+1, 0, {value:''});  
		this.setState({
			children:newElements,
			currentEditIndex:this.state.currentEditIndex+1
		});
		var ele = this.refs[this.state.currentEditIndex];
		if(ele)ele.focus();
	}

}

export default IntervalEnhance(Ol);
