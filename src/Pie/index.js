import React from "react";
import PieChart from "react-svg-piechart";
import styles from "./index.scss";

//

export class MyPie extends React.Component {
	constructor(props) {
		super(props)
	}

	render (){
		let data = [];
		let result = {};

		let arr = [];
		this.props.list.slice(0, 20).map((item) => {
			return arr.push(item);
		});

		arr.forEach(function(a){
			result[a.year] = result[a.year] + 1 || 1;
		});

		let randomColor = () => {
			let letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		};

		for (let key in result) {
			let obj = {};
			obj.title = key;
			obj.value = result[key];
			obj.color = randomColor();

			data.push(obj);
		}

		return(
			<div className={ styles["pie-holder"] }>
				{
					<PieChart
						expandOnHover={ true }
						expandSize={ 15 }
						shrinkOnTouchEnd={ false }
						strokeColor="#fff"
						strokeLinejoin="round"
						strokeWidth={ 1 }
						viewBoxSize={ 100 }
						data={ data }
					/>
				}
				<ul className={ styles["top-movies"] }>
					{data.map(function(item){
							return(
								<li>
									<span>{ item.title + ' год' } </span>
									<span>{ item.value + ' шт' }</span>
								</li>
							)
						})}
				</ul>
			</div>
		)
	}
}