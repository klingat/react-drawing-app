import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ColorPicker } from './ColorPicker'
import { COLOR_OPTIONS } from '../const/colors'
import { useCanvas } from '../hooks/CanvasContext'
import { ClearCanvasButton } from './ClearCanvasButton'
import { StrokeWidthPicker } from './StrokeWidthPicker'

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px;
  border-bottom: 2px solid black;
`

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    setNewPathColor,
    strokeWidth,
    setNewStrokeWidth,
  } = useCanvas()

  useEffect(() => {
    prepareCanvas()
  }, [])

  return (
    <>
      <Header>
        <ColorPicker colors={COLOR_OPTIONS} onPick={setNewPathColor} />
        <StrokeWidthPicker
          strokeWidth={strokeWidth}
          onChange={setNewStrokeWidth}
        />
        <ClearCanvasButton />
      </Header>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}
