import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
`

const ColorSwatch = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  border: 2px solid
    ${({ color }) => {
      return `99${color}`
    }};
  background: ${({ color }) => color};
  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ColorPicker = ({ colors, onPick }) => {
  return (
    <PickerContainer>
      {colors.map((color) => {
        return (
          <ColorSwatch
            key={color}
            color={color}
            type="button"
            onClick={() => onPick(color)}
          />
        )
      })}
    </PickerContainer>
  )
}

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPick: PropTypes.func.isRequired,
}
