import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from './Button'

const StrokePicker = styled.div`
  display: flex;
  flex-direction: row;
`

const StrokeWidth = styled.div`
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
`

const PickerButton = styled(Button)`
  width: 40px;
  padding: 0;
  border-radius: 20px;
`

export const StrokeWidthPicker = ({ strokeWidth, onChange }) => {
  return (
    <StrokePicker>
      <PickerButton
        onClick={() => {
          onChange(strokeWidth - 1)
        }}
      >
        -
      </PickerButton>
      <StrokeWidth>{strokeWidth}</StrokeWidth>
      <PickerButton
        onClick={() => {
          onChange(strokeWidth + 1)
        }}
      >
        +
      </PickerButton>
    </StrokePicker>
  )
}

StrokeWidthPicker.propTypes = {
  strokeWidth: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
