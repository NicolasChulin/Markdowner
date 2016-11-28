import React from 'react';	
import { IntervalEnhance } from './enhance/resizeTextareaEnhance.jsx';

class Quote extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			
		};
	}

	render(){
		return (
			<div className="quote" >
				<blockquote>
					<textarea
						ref='textarea'
						onChange={this.props.onChange}
						onFocus={this.props.resizeFunc} 
						onInput={this.props.resizeFunc} 
						>
					</textarea>
				</blockquote>
			</div>
		);
	}

}

export default IntervalEnhance(Quote);