import React from 'react';
import CheckboxField from './CheckboxField';
import InputField from './InputField';
import DropdownField from './DropdownField';

export default function DynamicField(props) {
	const field = props.field;
	const getFieldByType = () => {
		switch(field.type){
			case "string":
				return <InputField id={field._id} label={field.label} val={field.value} changeFieldValue={props.changeFieldValue}/>;
			case "boolean":
				return <CheckboxField id={field._id} label={field.label} val={field.value} changeFieldValue={props.changeFieldValue}/>;
			case "array":
				return <DropdownField id={field._id} label={field.label} val={field.value} options={field.options} changeFieldValue={props.changeFieldValue}/>;
			default:
				return <InputField id={field._id} label={field.label} val={field.value} changeFieldValue={props.changeFieldValue}/>;
		}
	}
	return getFieldByType();
}