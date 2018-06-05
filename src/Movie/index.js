import React from "react";
import { Button } from '../Button';

export const Movie = (...props) => {

	let text = 'note god';

	return (
	<div>
			<img src={props.urlPoster} alt="image description"/>
			<strong>{props.title}</strong>
			<span>{props.year}</span>
			<Button/>
		</div>
	);
};
