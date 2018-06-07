import React from "react";
import { Button } from "../Button";

export class Movie extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		let item = this.props.item;
		return (
			<li className="content-holder">
				<div className="image-holder">
					<img src={ item.urlPoster } alt="image description"/>
				</div>
				<div className="info-holder">
					<strong>{ item.title } </strong>
					<p>{ item.simplePlot }</p>
					<span>{item.rating } </span>
					<span>{item.year } </span>
					<span>{ item.runtime } </span>
				</div>
				<Button/>
			</li>
		);
	}
}