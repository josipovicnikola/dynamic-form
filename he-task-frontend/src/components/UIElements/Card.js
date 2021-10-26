import React from 'react';

export default function Card(props) {
	const getClassName = () => {
		return props.className?props.className:'';
	}
	return (
		<>
		<div className={"card " + getClassName()}>
			{props.children}
		</div>
		</>
	)
}