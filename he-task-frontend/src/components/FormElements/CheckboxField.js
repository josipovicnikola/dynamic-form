import React, { useContext, useState } from 'react';
import ApiStore from '../../api/api';

export default function CheckboxField(props) {
	const store = useContext(ApiStore);
	const [checked, setChecked] = useState(props.val==='1'?true:false);
	const checkChanged = async () => {
		let state = checked?false:true;
		setChecked(state);
		
		const response = await store.patchFieldById(props.id, state?'1':'0');
		console.log(response);
	}
	const handleOnChange = (event) => {
		checkChanged();
	}
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