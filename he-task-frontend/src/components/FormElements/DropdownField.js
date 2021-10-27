import React, { useContext, useState } from 'react';
import ApiStore from '../../api/api';

export default function DropdownField(props) {
	const store = useContext(ApiStore);
	const [selected, setSelected] = useState(props.val);
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
			<label htmlFor={props.id}>{props.label}</label>
			<select id={props.id} onChange={handleOnChange} value={selected}>
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