import React from 'react';	

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
						rows="4"
						cols="30" 
						onFocus={this.resizeTextarea.bind(this)} 
						onClick={this.resizeTextarea.bind(this)} 
						onKeyDown={this.resizeTextarea.bind(this)} 
						onKeyUp={this.resizeTextarea.bind(this)} 
						>
					</textarea>
				</blockquote>
			</div>
		);
	}


	resizeTextarea(evt){
		var a = evt.target;
	    var row=5;
	    var b=a.value.split("\n");
	    var c=b.length;
	   
	    var d=30;
	    if(d<=20){d=40}
	    for(var e=0;e<b.length;e++){
	        if(b[e].length>=d){
	            c+=Math.ceil(b[e].length/d)
	        }
	    }
	    c=Math.max(c,row)+1;
	   	evt.target.rows = c;
	}

}

export default Quote;