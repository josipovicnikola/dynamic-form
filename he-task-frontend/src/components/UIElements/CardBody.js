import React from 'react';

export default function CardBody(props) {
	const getClassName = () => {
		return props.className?props.className:'';
	}
	return (
		<>
		<div className={"card-body " + getClassName()}>
			{props.children}
		</div>
		</>
	)
}