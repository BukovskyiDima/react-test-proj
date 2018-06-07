import React from "react";
import { Movie } from "../Movie";

export class TopList extends React.Component {
	constructor (props) {
		super(props)
	}

	render(){

		let item = this.props.list;

		return (
			<ul className="top-list">
				{
					item.slice(0, 20).map((item) => {
						return <Movie item={item}/>
					})
				}
			</ul>
		)
	}
}