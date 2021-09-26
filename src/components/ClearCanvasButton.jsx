import React from 'react'
import styled from 'styled-components'
import { useCanvas } from '../hooks/CanvasContext'

const Button = styled.button`
  background: white;
  border: 2px solid black;
  padding: 5px 30px;
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

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return (
    <Button type="button" onClick={clearCanvas}>
      Clear Canvas
    </Button>
  )
}
