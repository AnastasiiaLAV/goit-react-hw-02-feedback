import React from "react";
import PropTypes from "prop-types";
import {Item, Span} from "./Statisticsstyles.styles"
function Statistics({ good, neutral, bad, total, feedback }) {
    return (
        <>
            <Item>Good: <Span>{good}</Span></Item>
            <Item>Neutral: <Span>{neutral}</Span></Item>
            <Item>Bad: <Span>{bad}</Span></Item>
            <Item>Total: <Span>{total}</Span></Item>
            <Item>Positive feedback: <Span>{feedback}%</Span></Item>
        </>
        
    )
}

Statistics.protoType = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    feedback: PropTypes.number.isRequired,
}

export default Statistics;