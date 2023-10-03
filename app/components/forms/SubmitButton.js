import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import AppButton from '../AppButton';

function SubmitButton({ title }) {
  const { handleSubmit, errors, isValid, dirty } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(true);

  // Uppdatera isDisabled när isValid ändras (valideringen ändras) eller när formuläret är smutsigt
  useEffect(() => {
    setIsDisabled(!isValid || !dirty);
  }, [isValid, dirty]);

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      disabled={isDisabled || Object.keys(errors).length > 0} // Inaktivera knappen om det finns fel, formuläret inte är giltigt, eller om formuläret inte är smutsigt (inte ändrats från början)
    />
  );
}

export default SubmitButton;