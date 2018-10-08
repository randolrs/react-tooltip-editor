import React, { Component}  from 'react';
import Tooltip from './tooltip'

class TooltipPreview extends Component {    
  	render() {
		return (
			<div id="tooltip-preview">
				<div className="tooltip-preview__container">
					<div
						className="tooltip-preview__hover-area"
					>
						<span>Example Hover Area</span>
						{this.props.tooltipAttr.title.length > 0 ? 
							<Tooltip
								tooltipAttr={this.props.tooltipAttr}
								previewOnly={false}
							></Tooltip>
							: null
						}
					</div>
				</div>
			</div>
		);
	}
}

export default TooltipPreview;