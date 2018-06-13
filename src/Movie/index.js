import React from "react";
import { Button } from "../Button";
import styles from "./index.scss";

export class Movie extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		let item = this.props.item;
		return (
			<li className={ styles["content-holder"] }>
				<div className={ styles["image-holder"] }>
					<img src={ item.urlPoster } alt="image description"/>
				</div>
				<div className={ styles["info-holder"] }>
					<strong className={ styles["name"] }>{ item.title }</strong>
					<p>{ item.simplePlot }</p>
					<span className={ styles["rating"] }>{ item.rating }</span>
					<span className={ styles["runtime"] }>{ item.runtime }</span>
					<span className={ styles["year"] }>{ item.year }</span>
				</div>
				<Button ranking={ item.ranking }/>
			</li>
		);
	}
}