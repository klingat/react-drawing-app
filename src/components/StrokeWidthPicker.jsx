import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from './Button'

const StrokePicker = styled.div`
  display: flex;
  flex-direction: row;
`

const PickerButton = styled(Button)`
  width: 40px;
  padding: 0;
  border-radius: 20px;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid black;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 10px;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

const StrokeInput = styled.input`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 800;
  height: 100%;
  width: 100%;
  max-width: 60px;
  overflow: scroll;
  padding: 0 10px;
`

export const StrokeWidthPicker = ({ strokeWidth, onChange }) => {
  const [strokeWidthInput, setStrokeWidthInput] = useState(strokeWidth)

  useEffect(() => {
    if (strokeWidth !== strokeWidthInput) {
      setStrokeWidthInput(strokeWidth)
    }
  }, [strokeWidth])

  return (
    <StrokePicker>
      <PickerButton
        onClick={() => {
          onChange(strokeWidth - 1)
        }}
      >
        -
      </PickerButton>
      <InputWrapper>
        <StrokeInput
          type="number"
          value={strokeWidthInput}
          onChange={(event) => setStrokeWidthInput(event.target.value)}
          onKeyPress={(event) =>
            event.key === 'Enter' && onChange(event.target.value)
          }
          onBlur={(event) => onChange(event.target.value)}
        />
      </InputWrapper>

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
