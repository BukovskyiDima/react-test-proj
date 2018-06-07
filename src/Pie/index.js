import React from "react";
import PieChart from "react-svg-piechart";

//

export class MyPie extends React.Component {
	constructor(props) {
		super(props)
	}

	render (){
		let data = [];
		let result = {};

		console.log(this.props.list);

		let arr = [];
		this.props.list.slice(0, 20).map((item) => {
			return arr.push(item);
		});

		arr.forEach(function(a){
			result[a.year] = result[a.year] + 1 || 1;
		});

		let rundomColor = () => {
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
			obj.color = rundomColor();

			data.push(obj);
		}

		console.log(data);

		return(
			<div>
				{
					<PieChart
						expandOnHover={true}
						expandSize={15}
						shrinkOnTouchEnd={false}
						strokeColor="#fff"
						strokeLinejoin="round"
						strokeWidth={1}
						viewBoxSize={100}
						data={data}
					/>
				}
				{
					data.map(function(item){
						return(
							<div>
								<span>{ item.title + ' год'} </span>
								<span>{ item.value + ' шт'}</span>
							</div>
						)
					})
				}
			</div>

		)
	}
}