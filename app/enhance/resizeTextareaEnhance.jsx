import React from 'react';

export let IntervalEnhance = ComponsedComponent => class extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	resizeTextarea(){
		var scrollTop, height,minHeight,
			padding = 0,
			elem = this.refs.children.refs.textarea,
			style = elem.style;
		if(elem.minH){
			minHeight = elem.minH;
		} else{
			minHeight = elem.minH = parseFloat(getComputedStyle(elem, null)['height']);
		}
		if (elem._length === elem.value.length) return;  
		elem._length = elem.value.length;  
		padding = parseInt(getComputedStyle(elem, null)['paddingTop']) + parseInt(getComputedStyle(elem, null)['paddingBottom']);  
		scrollTop = document.body.scrollTop || document.documentElement.scrollTop;  
		elem.style.height = minHeight + 'px';  
		if (elem.scrollHeight > minHeight) {  
			height = elem.scrollHeight - padding;  
			style.overflowY = 'hidden';  
			style.height = height + 'px';  
			scrollTop += parseInt(style.height) - elem.currHeight;  
			document.body.scrollTop = scrollTop;  
			document.documentElement.scrollTop = scrollTop;  
			elem.currHeight = parseInt(style.height);  
		};  
	};

	// componentWillMount(){
	// 	window.addEventListener('resize',()=>{
	// 		this.resizeTextarea();
	// 	})
	// }
	// componentWillUnmount(){
	// 	window.removeEventListener('resize');
	// }

	render() {
		return <ComponsedComponent ref='children' {...this.props} {...this.state} resizeFunc={this.resizeTextarea.bind(this)} />;
	}
};