import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  background: white;
  border: 2px solid black;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  height: 40px;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const Button = ({ onClick, type, children, className }) => {
  return (
    <StyledButton onClick={onClick} type={type} className={className}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  className: undefined,
  type: 'button',
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}
