import React from "react";
import ReactDOM from "react-dom";
import { TabHolder } from "./Tabs";
import styles from "./index.scss"


class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			result: []
		};
	}

	componentDidMount() {
		fetch("./server/db.json")
			.then(result => result.json())
			.then(
				(result) => {
                    this.setState({
                        isLoaded: true,
                        result: result.data.movies
                    });
				},
                (error) => {
			        this.setState({
                        isLoaded: true,
                        error
                    })
                }
			)
	}

	render() {
		const { error, isLoaded, result} = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return(
				<div className={ styles["container"] }>
					<div className={ styles["three"] }>
						<div className={ styles["loader"] } id={ styles["loader-1"] }></div>
					</div>
				</div>
			);
		} else {
			return (
				<div className={ styles["container"] }>
					<TabHolder result={ result }/>

				</div>
			)
		}
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById("wrapper")
);