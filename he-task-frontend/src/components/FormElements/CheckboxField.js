import React, { useEffect, useState } from 'react';

export default function CheckboxField(props) {
	const [checked, setChecked] = useState(false);
	console.log(props);
	const isChecked = () => {
		setChecked(props.val=='1'?true:false);
	}
	const handleOnChange = (event) => {
		console.log(event);
		if(props.val == "1") {
			props.val = "0";
		} else {
			props.val = "1";
		}
	}
	useEffect(() => {
		isChecked();
	}, [])
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label}</label>
			<label className="switch">
				<input id={props.id} type="checkbox" checked={checked} onChange={handleOnChange}/>
				<span className="slider round"></span>
		</label>
		</div>
		</>
	)
}