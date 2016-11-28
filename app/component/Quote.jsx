import React from 'react';	
import { IntervalEnhance } from '../enhance/resizeTextareaEnhance.jsx';

class Quote extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			value:''
		};
	}

	render(){
		return (
			<div className="quote" >
				<blockquote>
					<textarea
						ref='textarea'
						value={this.state.value}
						onChange={this.handlenamechange.bind(this)}
						onInput={this.props.resizeFunc} 
						>
					</textarea>
				</blockquote>
			</div>
		);
	}

	handlenamechange(e){
		this.setState({value:e.target.value});
	}

	componentDidUpdate(prevProps, prevState) {
		this.props.onChange(this.state.value);
	}


}

export default IntervalEnhance(Quote);