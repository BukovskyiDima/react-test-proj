import React from "react";
import ReactDOM from "react-dom";
import { Movie } from "./Movie";


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
		    	<div>
			        <img src="./src/img/loader.gif" alt="image description"/>
		        </div>
		    );
	    } else {
            return (
			    <div className={"container"}>
				    {
					    result.map((item) => {
					        return <Movie runtime={item.runtime} title={item.title} year={item.year}/>
					    })
				    }
			    </div>
		    )
	    }
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("wrapper")
);