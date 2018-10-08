import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class Tooltip extends Component { 

	constructor(props) {
    	super(props);
    	let visible;
    	if(props.previewOnly) {
    		visible = true;
    	} else {
    		visible = false;
    	}

    	this.state = {
    		visible: visible,
    		inTimeoutFunc: null,
    		outTimeoutFun: null
    	}
  	}
  	showToolTip(show) {
  		this.setState({visible: show});
  	}

	handleMouseIn() {
		let self = this;
		let secondsDelay = this.props.tooltipAttr.delay * 1000;
		clearTimeout(this.state.outTimeoutFunc);
		this.setState(
			{inTimeoutFunc: setTimeout(function() {
				self.showToolTip(true);
				}, secondsDelay)
			}
		);
	}
	handleMouseOut() {
		if(!this.props.previewOnly) {
			let self = this;
			let secondsDelay = this.props.tooltipAttr.delayOut * 1000;
			clearTimeout(this.state.inTimeoutFunc);
			this.setState(
				{outTimeoutFunc: setTimeout(function() {
					self.showToolTip(false);
					}, secondsDelay)
				}
			);
		}
	}

  	render() {
		return (
			<span
				className={"tooltip-container" + ((this.props.previewOnly) ? ' preview' : ' not-preview')}
				onMouseOver={this.handleMouseIn.bind(this)} 
				onMouseOut={this.handleMouseOut.bind(this)}
				ref={(ref) => this.tooltipContainer = ref}
			>
				{ this.state.visible || this.props.tooltipAttr.delay === 'always' ?	
					<span className={
						"tooltip" + 
						((this.props.previewOnly) ? ' preview' : ' not-preview') + 
						(' ' + this.props.tooltipAttr.position)}
					>{this.props.tooltipAttr.title}
					</span>
					: null
				}
			</span>
		);
	}
}

Tooltip.propTypes = {
  tooltipAttr: PropTypes.object,
  previewOnly: PropTypes.bool
};

export default Tooltip;