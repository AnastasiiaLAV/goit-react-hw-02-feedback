import React from "react";
import PropTypes from 'prop-types';
import { Button, BtnList } from "./FeedbackOptions.styles";


const Buttons = ({options, onLeaveFeedback}) => {
        return (
                <BtnList>
                {options.map(option => (
                        <Button type="button" name={option} key={option} onClick={onLeaveFeedback}>
                        {option}
                        </Button>
                ))}
                </BtnList>
        )
}

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Buttons;
