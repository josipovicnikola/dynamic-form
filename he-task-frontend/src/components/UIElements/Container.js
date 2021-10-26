import React from 'react';

export default function Container(props) {
	const getClassName = () => {
		return props.className?props.className:'';
	}
	return (
		<>
		<div className={"container " + getClassName()}>
			{props.children}
		</div>
		</>
	)
}