import React from 'react';
import { Field, Formik } from 'formik';
import FormField from '../../../../components/fields/FormField';

/**
 * 
 * 
 */
const TestFormik = () => {
	const [isFocused, setIsFocused] = React.useState({
		email: false,
		name: false
	});
	const _handleFocus = (name) => {
		setIsFocused({ ...isFocused, [name]: true });
	};
	const _handleBlur = (name) => {
		setIsFocused({ ...isFocused, [name]: false });
	};
	return (<div>
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}

				if(!values.name) {
					errors.name = 'Required';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit}>
					<Field
					  component={FormField}
						label='Email'
						type="email"
						name="email"
						onChange={handleChange}
						meta={{ touched: touched.email, error: errors.email, active: isFocused.email }}
						onFocus={() => _handleFocus('email')}
						onBlur={() => _handleBlur('email')}
						value={values.email}
					/>
					<Field
					  component={FormField}
						label='Nom'
						name="name"
						onChange={handleChange}
						meta={{ touched: touched.name, error: errors.name, active: isFocused.name }}
						onFocus={() => _handleFocus('name')}
						onBlur={() => _handleBlur('name')}
						value={values.name}
					/>
					
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
			)}
		</Formik>
	</div>
	)
};

export default TestFormik;