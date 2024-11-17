import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import OtpCodeInput from '../../../../components/fields/OtpCodeInput';
import * as classes from '../../../../components/fields/fields.css';
import Text from '../../../../components/typography/Text';
import { toInt } from '../../../../utils';

const OTP_CODE_LENGTH = 6;
const OTP_CODE_VALID = 123456;

const OtpCodeTest = ({disabled = false}) => {
	const [inputCode, setInputCode] = useState({ code: '', validated: false, hasError: false, codeSent: false, codeSentError: false });
	const [isOtpCodeValid, setIsOtpCodeValid] = useState(false);
	
	const _onChange = code => {
    setIsOtpCodeValid(false);
    setInputCode({ code, validated: code?.length === OTP_CODE_LENGTH, hasError: false, codeSent: false, codeSentError: false });
  };

	const _checkCode = () => {
		if (inputCode.code.length < OTP_CODE_LENGTH) {
      setIsOtpCodeValid(true);
      setInputCode({ ...inputCode, hasError: true });
      return;
    }
    const success = toInt(inputCode.code) === OTP_CODE_VALID;
    if (!success) {
      setInputCode({ ...inputCode, hasError: true });
    }

	}

	useEffect(() => {
	  function _checkOneClick() {
      _checkCode();
    }

    if (inputCode.validated && inputCode.code.length >= OTP_CODE_LENGTH && !inputCode.hasError) {
      _checkOneClick();
    } else return;
  }, [inputCode])

	return (
		<div className={classes.otpTest}>
			<Text text="Code valide: 123456" />
			<OtpCodeInput
				disabled={disabled}
				autoFocus={false}
				onChange={_onChange}
				otpFromProps={inputCode.code}
				error={inputCode?.hasError ? {
					message: 'Invalid code',
				} : null}
			/>			
		</div>
	);
};
OtpCodeTest.propTypes = {
	disabled: PropTypes.bool,
}

export default OtpCodeTest;