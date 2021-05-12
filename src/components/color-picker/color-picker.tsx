import React, { useState, MouseEvent } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import { Popover } from '@material-ui/core'
import { useColorPickerStyles } from './color-picker.style'

export function ColorPicker (props: {value: string, onChange: (value: string) => void}): React.ReactElement {
  const colorPickerStyles = useColorPickerStyles()

  const [color, setColor] = useState(props.value)
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleChange = (color: ColorResult): void => {
    setColor(color.hex)
  }

  const handleChangeComplete = (color: ColorResult): void => {
    props.onChange(color.hex)
  }

  return (
    <>
      <div
        className={colorPickerStyles.colorBox}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      />
      <Popover
        open={anchorEl != null}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        onClose={handleClose}
      >
        <ChromePicker
          color={color}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
          disableAlpha
        />
      </Popover>
    </>
  )
}
