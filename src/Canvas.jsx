import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCanvas } from './CanvasContext'

const ColorPicker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const ColorSwatch = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: ${(props) => props.color};
`

const COLOR_OPTIONS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'black',
  'brown',
  'grey',
  'white',
]

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
      <ColorPicker>
        {COLOR_OPTIONS.map((color) => {
          return (
            <ColorSwatch
              key={color}
              color={color}
              onClick={() => setNewPathColor(color)}
            />
          )
        })}
      </ColorPicker>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </>
  )
}
