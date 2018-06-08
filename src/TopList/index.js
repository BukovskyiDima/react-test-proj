import React from "react";
import { Movie } from "../Movie";
import styles from "./index.scss";

export class TopList extends React.Component {
	constructor (props) {
		super(props)
	}

	render(){

		let item = this.props.list;

		return (
			<ul className={ styles["top-list"] }>
				{
					item.slice(0, 20).map((item) => {
						return <Movie item={ item }/>
					})
				}
			</ul>
		)
	}
}