import React from "react";
import { Movie } from "../Movie";

export class Favorite extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			storage: localStorage.length,
			count: 0
		};

		this.AddNewList = this.AddNewList.bind(this);
	}

	AddNewList () {
		let list = this.props.list;
		let newList = [];

		list.forEach((item) => {
			for (let i = 0; i < this.state.storage; i++) {
				if (item.ranking == localStorage.key(i)) {
					newList.push(item);
				}
			}
		});

		return newList;
	}

	render() {
		return (
			this.AddNewList().map(function(item){
				return <Movie item={ item }/>
			})
		)
	}
}