import React from "react";
import { Button } from "../Button";

export class Movie extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<li>
				<strong>{this.props.title}</strong>
				<span>{ this.props.runtime }</span>
				<span>{this.props.year}</span>
				<Button/>
			</li>
		);
	}
}