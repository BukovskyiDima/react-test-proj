import React from "react";
import { Button } from "../Button";

export class Movie extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<li>
				<strong>{this.props.item.title}</strong>
				<span>{ this.props.item.runtime }</span>
				<span>{this.props.item.year}</span>
				<Button/>
			</li>
		);
	}
}