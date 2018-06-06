import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from "react";
import { Movie } from "../Movie";

export class TabHolder extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			count: 1
		};

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick () {

		console.log(this.setState(prevState => (
			this.count + 1
		)));
	}

	render() {
		return (
			<Tabs>
				<TabList>
					<Tab>Top 20</Tab>
					<Tab>Title 2</Tab>
					<Tab>Title 3</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
					{
						this.props.result.sort(function(a,b) {
							if (a.rating < b.rating) {
								return -1;
							} else if (a.rating > b.rating) {
								return 1;
							} else {
								return 0;
							}
						}).slice(0,20).map((item) => {
							return <Movie item={ item } />
						})
					}
					<button onClick={ this.handleClick }> Load more</button>

				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
			</Tabs>
		)
	}
}