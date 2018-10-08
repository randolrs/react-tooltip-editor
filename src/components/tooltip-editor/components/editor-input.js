import React, { Component}  from 'react';

class EditorInput extends Component {   
	constructor(props) {
    	super(props);
    	let inputVisible = !(this.props.input.options && this.props.input.options.length > 0);

    	this.state = {
    		'currentValue': this.props.input.defaultValue,
    		'showInput': inputVisible
    	}
  	}
  	handleInputChange () {
  		let changeObject = {};
  		changeObject[this.props.input.id] = this.input.value;
  		this.setState({currentValue: this.input.value});
	    this.props.onInputChange(changeObject);           
	} 
	updateInputValue(newValue) {
		this.input.value = newValue;
		this.toggleInput(false);
		this.handleInputChange();
	}
	toggleInput(inputVisible) {
		this.setState({showInput: inputVisible});
	}
	componentDidMount() {
		this.input.value = this.props.input.defaultValue;
	}
  	render() {
		return (
			<div className="form-group">
				<label htmlFor="title">{this.props.input.label}</label><br/>
				<span className="sublabel">({this.props.input.subLabel})</span>
				{
					(this.props.input.options && this.props.input.options.length) ?
					<div>
						{
							this.props.input.options.map(option =>
								<button 
									key={option.label}
									onClick={(e) => {this.updateInputValue(option.value) }}
									className={"select-button " + ((this.state.currentValue == option.value) ? 'active' : null)}
								>{option.label}
								</button>
							)
						}

						{
							(this.props.input.allowOtherInput) ? 
							<button 
								key={'other'}
								onClick={(e) => {this.toggleInput(true)}}
								className="select-button"
							>Other
							</button>
							:
							null
						}
						
				</div>
					:
					null

				}
				
				<input
					ref={(ref) => this.input = ref}
					name={this.props.input.id}
					onChange={(e) => {this.handleInputChange()}}
					className={(this.state.showInput ? 'show' : 'hidden')}
				/>
			</div>
		);
	}
}

export default EditorInput;
