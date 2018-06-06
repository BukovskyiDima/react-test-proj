import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from "react";

export class TabHolder extends React.Component (

	render() {
		return(
			<Tabs>
				<TabList>
					<Tab>Title 1</Tab>
					<Tab>Title 2</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		)
	}
)