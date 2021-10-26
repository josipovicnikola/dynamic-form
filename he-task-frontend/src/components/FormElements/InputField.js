import React from 'react';

export default function InputField(props) {
	const getClassName = () => {
		return props.className?props.className:'';
	}
	return (
		<>
		<p className={"text " + getClassName()}>
			{props.children}
		</p>
		</>
	)
}