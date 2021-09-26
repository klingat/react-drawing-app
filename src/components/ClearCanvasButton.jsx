import React from 'react'
import { useCanvas } from '../hooks/CanvasContext'
import { Button } from './Button'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return (
    <Button type="button" onClick={clearCanvas}>
      CLEAR
    </Button>
  )
}
