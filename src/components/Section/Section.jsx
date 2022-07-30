import React from "react";
import PropTypes from 'prop-types';
import { Title, Container } from "./Section.styles";


function Section ({ title, children}) {
    return (
        <Container>
        <Title>{title}</Title>
        { children }
        </Container>
    )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;