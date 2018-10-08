import React, { Component}  from 'react';
import EditorInput from './editor-input'

import editorInputsData from '../data/editor-inputs'

class TooltipControls extends Component {    
	handleInputChange = (changeObject) => {
		this.props.onInputChange(changeObject);
	}
  	render() {
		return (
			<div id="tooltip-controls">
				{ 	editorInputsData.map(input =>
						<EditorInput
							input={input}
							key={input.id}
							onInputChange={this.handleInputChange}
						></EditorInput>
					) 
				}
			</div>
		);
	}
}

export default TooltipControls;