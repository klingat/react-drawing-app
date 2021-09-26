import React from 'react'
import { useCanvas } from '../hooks/CanvasContext'

export const ClearCanvasButton = () => {
  const { clearCanvas } = useCanvas()

  return (
    <button type="button" onClick={clearCanvas}>
      Clear Canvas
    </button>
  )
}
