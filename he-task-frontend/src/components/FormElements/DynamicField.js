import React from 'react';
import CheckboxField from './CheckboxField';
import InputField from './InputField';

export default function DynamicField(props) {
	const field = props.field;
	const getFieldByType = () => {
		switch(field.type){
			case "string":
				return <InputField id={field._id} label={field.label} val={field.value}/>;
			case "boolean":
				return <CheckboxField id={field._id} label={field.label} val={field.value}/>;
			// case "array":
			// 	return <DropdownField id={field.id} label={field.label} value={field.value}/>;
			default:
				return <InputField id={field._id} label={field.label} val={field.value}/>;
		}
	}
	return getFieldByType();
}