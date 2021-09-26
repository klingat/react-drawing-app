import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const CanvasContext = React.createContext()

const DEFAULT_STROKE_WIDTH = 5

export const CanvasProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [pathColor, setPathColor] = useState('#000')
  const [strokeWidth, setStrokeWidth] = useState(DEFAULT_STROKE_WIDTH)

  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = pathColor
    context.lineWidth = strokeWidth
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    contextRef.current = context
  }

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const setNewPathColor = (color) => {
    setPathColor(color)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.strokeStyle = color
  }

  const setNewStrokeWidth = (newWidth) => {
    let width = newWidth
    if (newWidth < 1) {
      width = 1
    }
    setStrokeWidth(width)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.lineWidth = width
  }

  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        prepareCanvas,
        startDrawing,
        finishDrawing,
        clearCanvas,
        draw,
        setNewPathColor,
        strokeWidth,
        setNewStrokeWidth,
      }}
    >
      {children}
    </CanvasContext.Provider>
  )
}

export const useCanvas = () => useContext(CanvasContext)

CanvasProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
