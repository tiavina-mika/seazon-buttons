import React from 'react';

import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

import PassWordField from '../../../../components/fields/PasswordField';
import TextArea from '../../../../components/fields/TextArea';

import Hide from '../../../../components/icons/Hide';
import Gift from '../../../../components/icons/Gift';
import Call from '../../../../components/icons/Call';
import ChevronRight from '../../../../components/icons/ChevronRight';

import FieldWithButton from '../../../../components/fields/FieldWithButton';
import CheckBoxField from '../../../../components/fields/CheckBoxField';
import RadioField from '../../../../components/fields/RadioField';
import FormField from '../../../../components/fields/FormField';
import * as classes from '../../../../components/fields/fields.css';

import { onlyPhoneNumberWithSpaces } from '../../../../components/account/addresses/AddressForm';
import StarField from '../../../../components/fields/StarField';

const validate = (values) => {
	const errors = {};
	if (!values.simpleInput) {
		errors.simpleInput = 'Required';
	}
	if (!values.rightIcon) {
		errors.rightIcon = 'Required';
	}
	if (!values.phoneNumber) {
		errors.phoneNumber = 'Required';
	}
	if (!values.textArea) {
		errors.textArea = 'Required';
	}
	
	return errors;
}

const TestForm = (props) => {

	const { handleSubmit, disabled = false } = props;
	return (
		<form onSubmit={handleSubmit} className={classes.formContainer}>
			{/* simple input/ with icon */}
			<div className={classes.rowItems}>
				<div className={classes.rowItem}>
					<Field 
						name='simpleInput'
						component={FormField}
						label='Label'
						subLabel='Sans icon'
						disabled={disabled}
					/>
				</div>
				<div className={classes.rowItem}>
					<Field
						name='gift'
						component={FormField}
						leftIcon={<Gift name="gift" size="sm" disabled={disabled} />}
						subLabel='Avec icon gauche'
						label="label"
						disabled={disabled}
					/>
				</div>
			</div>

			{/* Password/ with end icon */}
			<div className={classes.rowItems}>
				<div className={classes.rowItem}>
					<Field
						name='rightIcon'
						component={FormField}
						rightIcons={<Hide name="hide" size="sm" disabled={disabled} />}
						subLabel='Avec icon droit'
						label="label"
						disabled={disabled}
					/>
				</div>
				<div className={classes.rowItem}>
					<Field 
				 		name='phoneNumber'
						disabled={disabled}
						component={FormField}
						label="Tel"
						subLabel="Input phone field"
						keyboardType="numeric"
						normalize={onlyPhoneNumberWithSpaces}
						inputmode="numeric"
						type="tel"
						pattern="[0-9]*"
						leftIcon={<Call name="call" size="sm" disabled={disabled} />}
				 />
				</div>	
				
			</div>
			{/*  password input/ search input */}
			<div className={classes.rowItems}>
				<div className={classes.rowItem}>
					<PassWordField disabled={disabled}/>
				</div>	
			</div>
			{/*card input*/}
			<div className={classes.rowItems}>

			</div>

			{/* text area */}
			<div className={classes.rowItems}>
				<div className={classes.rowItem}>
					<Field
						name='textArea'
						component={TextArea}
						label='Label'
						disabled={disabled}
					/>
				</div>
				<div className={classes.rowItem}>
					
				</div>			
			</div>

			{/* radio button /check box */}
			<div className={classes.rowItems}>
				<Field 
					name='checkbox'
					component={CheckBoxField}
					label='Label'
					subLabel='Supporting text'
					disabled={disabled}
				/>
				<Field
					name='radio'
					component={RadioField}
					label='Label'
					subLabel='Supporting text'
					disabled={disabled}
				/>
			</div>

			<div className="flexColumn">
				<div className="width100">
					<Field
						name='withButton'
						component={FieldWithButton}
						label='Label'
						disabled={disabled}
						buttonLabel='label'
						className={classes.rowItem}
					/>
				</div>						
			</div>

			<div className="flexColumn">
				<div className='width100'>
					<Field
						name='withIconButton'
						component={FieldWithButton}
						buttonType="icon"
						icon={<ChevronRight name="arrow-left" size="sm" disabled={disabled} />}
						label='Label'
						disabled={disabled}
						className={classes.rowItem}		
					/>
				</div>
				<div className={classes.rowItem}>
					<Field
						name='columnButton'
						component={FieldWithButton}
						direction="column"
						label='Label'
						disabled={disabled}
						buttonLabel='label'
					/>
				</div>			
			</div>

			<div className="flexColumn">
				<div className="width100">
					<Field
						name='stars'
						component={StarField}
						label='Label'
						rootClassName={classes.rowItem}
					/>
				</div>						
			</div>

		</form>
	)
};

TestForm.propTypes = {
	handleSubmit: PropTypes.func,
	disabled: PropTypes.bool
};

export default reduxForm({
	form: 'testForm',
	validate,
	//asyncValidate
})(TestForm);