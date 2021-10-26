import React from 'react';
import Text from './Text';

export default function CardHeader(props) {
	const getClassName = () => {
		return props.className?props.className:'';
	}
	return (
		<>
		<div className={"card-header " + getClassName()}>
						<Text className="medium text-center">{props?.title}</Text>
		</div>
		</>
	)
}