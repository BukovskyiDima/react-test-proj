import React from "react";
import styles from "./index.scss";

export class Button extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isToggle: false
		};

		this.toggleFavorite = this.toggleFavorite.bind(this);
	}

	toggleFavorite() {
		this.setState(prevState => ({
			isToggle: !prevState.isToggle
		}));
	}

	render () {
		return (
			<button className={this.state.isToggle ? styles['remove'] : styles['add']} onClick={this.toggleFavorite}>
				{this.state.isToggle ? 'remove favorite' : 'Add favorite'}
			</button>
		)
	};
}
