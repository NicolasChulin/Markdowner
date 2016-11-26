import React from 'react';

class ToolBar extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			showToolTip:false,
			toolText:'',
			toolTipX:0,
			toolTipY:20
		};
	}

	render(){
		let tools = [
			{description:'表格',class_name:'fa fa-table'},
			{description:'图片',class_name:'fa fa-picture-o'},
			{description:'链接',class_name:'fa fa-link'},
			{description:'引用',class_name:'fa fa-quote-right'},
			{description:'有序列表',class_name:'fa fa-list-ol'},
			{description:'无序列表',class_name:'fa fa-list-ul'},
			{description:'斜体',class_name:'fa fa-italic'},
			{description:'粗体',class_name:'fa fa-bold'},
			{description:'分割线',class_name:'fa fa-minus-square-o '}
		]
		let toolsElement = tools.map((tool,index,array)=>{
			return(
				<a onMouseEnter={this.showToolTip(tool.description).bind(this)} 
					onMouseLeave={this.hideToolTip.bind(this)} 
					key={index} >
					<i className={tool.class_name}></i>
				</a>
			)
		});
		return (
			<div className="tool_bar">
				<div>
					{toolsElement}
				</div>

				<div ref="ToolTip" 
					className="tool_tip" 
					style={{top:this.state.toolTipY,left:this.state.toolTipX,display:this.state.showToolTip?'inline-block':'none'}}>
						<span>{this.state.toolText}</span>
				</div>
			</div>
		);
	}

	showToolTip(des){
		return function(e){
			console.log();
			this.setState({
				showToolTip:true,
				toolText:des,
				toolTipX:e.target.offsetLeft
			});
		}
		
	}

	hideToolTip(e){
		this.setState({
			showToolTip:false,
		});
	}
}

export default ToolBar;