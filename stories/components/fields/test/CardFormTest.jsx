import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ElementsConsumer } from "@stripe/react-stripe-js";
import classNames from 'classnames';

import StripeField from '../../../../components/fields/StripeField';
import * as classes from '../../../../components/fields/fields.css';
import StripeProvider from '../../../../components/payments/stripe/StripeProvider';


export const ERROR_MESSAGE = {
	incomplete_number: 'Votre numéro de carte est incomplet.',
	invalid_number: 'Votre numéro de carte est invalide.',
	incomplete_expiry: "La date d'expiration de votre carte est incomplète.",
	invalid_expiry_year_past: "L'année d'expiration de votre carte est passée.",
	incomplete_cvc: 'Le code de sécurité de votre carte est incomplet.'
};

/**
 * not a redux-form (the Stripe values can't be read)
 */
const CardForm = React.forwardRef((props, ref) => {
	const {
		formClassName, className, cardIdFieldClassName, 
		expirationFieldClassName,	ccvFieldClassName, 
		fromFCCart = false, disabled = false
	} = props;


	//Refs
	const cardExpiryRef = useRef();
	const cardCvcRef = useRef();

	const _cardNumberReady = (cardNumberElement) => {
		cardNumberElement.focus();
	};

	const _cardExpiryReady = (cardExpiryElement) => {
		cardExpiryRef.current = cardExpiryElement;
	};

	const _cardCvcReady = (cardCvcElement) => {
		cardCvcRef.current = cardCvcElement;
	};

	const _onCompleteCardNumber = (complete) => {
		if (!!complete) {
			cardExpiryRef.current?.focus();
		}

		setCardNumberCompleted(complete);
	};

	const _onCompleteCardExpiry = (complete) => {
		if (!!complete) {
			cardCvcRef.current?.focus();
		}

		setCardExpiryCompleted(complete);
	};

	const _onCompleteCardCvc = (complete) => {
		if (!!complete) {
			cardCvcRef.current?.focus();
		}
		setCardCvcCompleted(complete);
	};

	const _submit = (stripe, elements) => async (event) => {
		event.preventDefault();
		console.log(stripe, elements);
		// submit
	};

	return (
		<StripeProvider>
			<ElementsConsumer>
				{({ stripe, elements }) => (
					<form className={classNames("flexCenter width100", formClassName)} ref={ref} onSubmit={_submit(stripe, elements)}>
						<div className={classNames(classes.fields, className, { [classes.fcCartForm]: fromFCCart })}>
							{/*---- card number ----*/}
							<div className={classNames(classes.cardIdField, cardIdFieldClassName)}>
								<StripeField
									type='cardNumber'
									label="Numéro de carte"
									onReady={_cardNumberReady}
									onComplete={_onCompleteCardNumber}
									withFeedback={fromFCCart}
									rootClassName={classNames(classes.stripeField, { [classes.fcCartRoot]: fromFCCart })}
									showIcon
									disabled={disabled}
								/>
							</div>

							{/*---- expiration date ----*/}
							<div className={classNames(classes.expirationField, expirationFieldClassName)}>
								<StripeField
									type='cardExpiry'
									label="MM/AA"
									onComplete={_onCompleteCardExpiry}
									onReady={_cardExpiryReady}
									withFeedback={fromFCCart}
									rootClassName={classNames(classes.stripeField, { [classes.fcCartRoot]: fromFCCart })}
									disabled={disabled}
								/>
							</div>

							{/*---- CVC ----*/}
							<div className={classNames(classes.ccvField, ccvFieldClassName)}>
								<StripeField
									type='cardCVC'
									label="CVV"
									onReady={_cardCvcReady}
									onComplete={_onCompleteCardCvc}
									withFeedback={fromFCCart}
									rootClassName={classNames(classes.stripeField, { [classes.fcCartRoot]: fromFCCart })}
									disabled={disabled}
								/>
							</div>
						</div>
					</form>
				)}
			</ElementsConsumer>
		</StripeProvider>
	);
});

CardForm.propTypes = {
	onSubmit: PropTypes.func,
	cardFormRef: PropTypes.func,
	disabled: PropTypes.bool,
};

export default CardForm;
