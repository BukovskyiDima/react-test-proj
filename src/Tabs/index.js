import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TopList } from "../TopList";
import { MyPie } from "../Pie"

export class TabHolder extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			count: 1
		};

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick () {

		// console.log(this.setState(prevState => (
		// 	this.count + 1
		// )));
	}

	render() {

		let item = this.props.result;

		let FilterList = item.sort(function(a,b) {
			if (a.rating < b.rating) {
				return 1;
			} else if (a.rating > b.rating) {
				return -1;
			} else {
				return 0;
			}
		});

		return (
			<Tabs>
				<TabList>
					<Tab>Топ 20 фильмов</Tab>
					<Tab>Рейтинг по годам</Tab>
					<Tab>Избранное</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
					<TopList list={ FilterList }/>
					{/*<button onClick={ this.handleClick }> Load more</button>*/}

				</TabPanel>
				<TabPanel>
					<h2>Распределение лучших фильмов по годам</h2>
					<MyPie list={ FilterList}/>
				</TabPanel>
				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
			</Tabs>
		)
	}
}