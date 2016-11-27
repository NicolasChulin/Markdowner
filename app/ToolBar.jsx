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
			{description:'表格'     ,type:'table'   ,class_name:'fa fa-table'},
			{description:'图片'     ,type:'picture' ,class_name:'fa fa-picture-o'},
			{description:'链接'     ,type:'link'    ,class_name:'fa fa-link'},
			{description:'引用'     ,type:'quote'   ,class_name:'fa fa-quote-right'},
			{description:'有序列表' ,type:'ul'      ,class_name:'fa fa-list-ol'},
			{description:'无序列表' ,type:'ol'      ,class_name:'fa fa-list-ul'},
			{description:'斜体'     ,type:'italic'  ,class_name:'fa fa-italic'},
			{description:'粗体'     ,type:'bold'    ,class_name:'fa fa-bold'},
			{description:'分割线'   ,type:'line'    ,class_name:'fa fa-minus-square-o '}
		]
		let toolsElement = tools.map((tool,index,array)=>{
			return(
				<a onMouseEnter={this.showToolTip(tool.description).bind(this)} 
					onMouseLeave={this.hideToolTip.bind(this)} 
					onClick={this.createElemet(tool.type).bind(this)}
					key={index} >
					<i className={tool.class_name}></i>
				</a>
			)
		});
		return (
			<div className="tool_bar">
				<div>{toolsElement}</div>

				<div ref="ToolTip" 
					className="tool_tip" 
					style={{top:this.state.toolTipY,left:this.state.toolTipX,display:this.state.showToolTip?'inline-block':'none'}}>
						<span>{this.state.toolText}</span>
				</div>
			</div>
		);
	}

	showToolTip(des){
		return (e)=>{
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

	createElemet(type){
		return (e)=>{
			if(this.props.clickHandler){
				this.props.clickHandler(type);
			}
		}
	}
	
}

export default ToolBar;