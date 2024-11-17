import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import CardRadioButton from "../../../../components/cards/cardRadioButton/CardRadioButton";

const CardRadioButtonTest = ({ type = 'Default', selected = true, label, subLabel }) => {
  const [selectedValue, setSelectedValue] = useState(false);

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected])
  
  
  const handleSelectedChange = (newSelected) => {
    setSelectedValue(newSelected);
  };

  return <CardRadioButton type={type} 
            selected={selectedValue} 
            label={label} 
            subLabel={subLabel}
            onSelectedChange={handleSelectedChange}
            />;
};

CardRadioButtonTest.propTypes = {
  type: PropTypes.oneOf(["Default", "Pressed", "Disabled"]),
  selected: PropTypes.bool,
  label: PropTypes.string,
  subLabel: PropTypes.string,
};

export default CardRadioButtonTest;