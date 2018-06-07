import React from "react";
import ReactDOM from "react-dom";
import { TabHolder } from "./Tabs";


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
                    console.log(result);
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
		    	<div>
			        <img src="./src/img/loader.gif" alt="image description"/>
		        </div>
		    );
	    } else {
            return (
			    <div className={"container"}>
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