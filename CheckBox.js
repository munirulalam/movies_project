import React from 'react';

class CheckBox extends React.Component {
	state = {
		languages : []
	}

	onChange = (event) => {
		console.log(event.target.prev);
		// console.dir(event.target.checked);
		//typeof event.target;
		 //return;
		const isChecked = event.target.checked;
		if(isChecked) {
			this.setState({ languages: [...this.state.languages, event.target.value] });
			// console.log(this.state.languages);

		}else {
			const index = this.state.languages.indexOf(event.target.value);
			this.state.languages.splice(index,1);
			this.setState({ languages: this.state.languages });
		}
		// console.log(this.state.languages);
	}

	render(){
		console.log(this.state.languages);
		return(
			<div className = "checks">
				
					<input type="checkbox" id= "languages1" name = "languages" value="French" onChange={this.onChange}/>
					<label htmlFor="languages1">French</label><br/>
					<input type="checkbox" id="languages2" name = "languages" value="Spanish" onChange={this.onChange}/>
					<label htmlFor="languages2">Spanish</label><br/>
					<input type="checkbox" id="languages3" name = "languages" value="German" onChange={this.onChange}/>
					<label htmlFor="languages3">German</label><br/>
					<input type="checkbox" id="languages4" name = "languages" value="English" onChange={this.onChange}/>
					<label htmlFor="languages3">English</label><br/>
					<input type="submit" value="Submit"/>
				
				
			</div>
			);
	}
}

export default CheckBox;