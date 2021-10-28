import React, { useState } from 'react';

export default function DropdownField(props) {
	const [selected, setSelected] = useState();
	const selectChanged = async (sel) => {
		setSelected(sel);
		
		props.changeFieldValue(props.id, sel);
	}
	const handleOnChange = (event) => {
		selectChanged(event.target.value);
	}
	return (
		<>
		<div className="form-control">
			<label htmlFor={props.id}>{props.label} <span className="color-red">{props.required?"*":""}</span></label>
			<select id={props.id} onChange={handleOnChange} value={selected}>
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