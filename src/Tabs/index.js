import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TopList } from "../TopList";
import { MyPie } from "../Pie";
import styles from "./index.scss";

export class TabHolder extends React.Component {
	constructor (props) {
		super(props);
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
			<Tabs className={ styles['content'] }>
				<TabList className={ styles['tab-holder'] }>
					<Tab className={ styles['tab'] }>Топ 20</Tab>
					<Tab className={ styles['tab'] }>Рейтинг по годам</Tab>
					<Tab className={ styles['tab'] }>Избранное</Tab>
				</TabList>
				<TabPanel className={ styles['tab-content-holder'] }>
					<h2 className={ styles['h2'] }>20 лучших фильмов</h2>
					<TopList list={ FilterList }/>
				</TabPanel>
				<TabPanel className={ styles['tab-content-holder'] }>
					<h2 className={ styles['h2'] }>Распределение лучших фильмов по годам</h2>
					<MyPie list={ FilterList }/>
				</TabPanel>
				<TabPanel className={ styles['tab-content-holder'] }>
					<h2 className={ styles['h2'] }>Избранное</h2>
				</TabPanel>
			</Tabs>
		)
	}
}