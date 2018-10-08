import React, { Component}  from 'react';
import TooltipControls from './components/controls'
import TooltipPreview from './components/preview'
import EditorInputsData from './data/editor-inputs'
import Tooltip from './components/tooltip'

class TooltipEditor extends Component {    
    constructor(props) {
    	super(props);
    	let initialStateObject = EditorInputsData.reduce((accum, elem) => {
  			accum[elem.id] = (elem['defaultValue'] || '');
  			return accum;
  		}, {});

    	this.state = initialStateObject;
  	}
  	handleInputChange = (changeObject) => {
		this.setState(changeObject);
	}
  	render() {
		return (
			<div id="tooltip-editor">
				<div className="horizontal-panel-container">
					<section className="horizontal-panel__fixed-width">
						<header className="main-header">Tooltip Editor</header>
						<TooltipControls
							onInputChange={this.handleInputChange}
						></TooltipControls>
						{this.state.title.length > 0 ? 
							<section className="form-group">
								<label>This is how your tooltip will appear:</label>
								<br/><br/>
								<Tooltip
									tooltipAttr={this.state}
									previewOnly={true}
								></Tooltip>
							</section>
						:
							null
						}
					</section>
					<section className="horizontal-panel__fill">
						<div className="submitted-by">
							<span>Submitted by </span>
							<a href="https://www.linkedin.com/in/shane-randolph-b9509838/"><b>Shane Randolph</b></a>
						</div>
						<TooltipPreview tooltipAttr={this.state}></TooltipPreview>
					</section>
				</div>
			</div>
			
		);
	}
}

export default TooltipEditor;