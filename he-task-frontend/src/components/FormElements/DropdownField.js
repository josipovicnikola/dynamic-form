import React, { useEffect, useState } from 'react';

export default function DropdownField(props) {
	const [value, setValue] = useState();
	const selectChanged = (sel) => {
		setValue(sel);
		
		props.changeFieldValue(props.id, sel, setValue, true);
	}
	const handleOnChange = (event) => {
		selectChanged(event.target.value);
	}

	useEffect(() => {
		props.changeFieldValue(props.id, value, setValue, false);
	}, [])
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label} <span className="color-red">{props.required?"*":""}</span></label>
			<select id={props.id} onChange={handleOnChange} value={value}>
				<option key="none" value="None" default>None</option>
				{props.options.map(o => {
					return (
						<option key={o} value={o}>{o}</option>
					)
				})}
			</select>
		</div>
		</>
	)
}