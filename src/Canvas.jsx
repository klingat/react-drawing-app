import React, { useEffect } from 'react'
import { ColorPicker } from './components/ColorPicker'
import { COLOR_OPTIONS } from './const/colors'
import { useCanvas } from './hooks/CanvasContext'

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    setNewPathColor,
  } = useCanvas()

  useEffect(() => {
    prepareCanvas()
  }, [])

  return (
    <>
      <ColorPicker colors={COLOR_OPTIONS} onPick={setNewPathColor} />
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}
