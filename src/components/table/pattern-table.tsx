import React, { useState } from 'react'
import { Container, Checkbox } from '@material-ui/core'
import MaterialTable, { Column } from 'material-table'
import { ColorPicker } from '../color-picker/color-picker'
import { useTableStyles } from './table.style'
import { tableIcons, localization } from './assets'

interface Row {
  color: string
  code: number
  type: number
  isExternal: boolean
  duration: number
  name: string
}

interface TableState {
  columns: Array<Column<Row>>
  data: Row[]
}

interface PatternTableProps {
  types: object
  data: Row[]
}

export function PatternTable ({ types, data }: PatternTableProps): React.ReactElement {
  const tableStyles = useTableStyles()

  const [tableState, setTableState] = useState<TableState>({
    columns: [
      {
        field: 'color',
        sorting: false,
        render: props => (
          <div
            className={tableStyles.colorBox}
            style={{ backgroundColor: props.color }}
          />),
        editComponent: props => (
          <ColorPicker
            value={props.value}
            onChange={props.onChange}
          />
        )
      },
      { title: 'Код', field: 'code' },
      {
        title: 'Тип',
        field: 'type',
        lookup: types
      },
      {
        title: 'Внешний',
        field: 'isExternal',
        render: props => (
          <Checkbox
            disabled
            checked={props.isExternal}
          />
        ),
        editComponent: props => (
          <Checkbox
            checked={props.value}
            onChange={e => props.onChange(e.target.checked)}
          />
        )
      },
      {
        title: 'Продолжительность',
        field: 'duration',
        render: props => {
          if (props.duration % 7 === 0) {
            const week = props.duration / 7
            return (`${week} нед.`)
          } else {
            return (`${props.duration} дн.`)
          }
        }
      },
      { title: 'Название', field: 'name', headerStyle: { minWidth: 400 }, cellStyle: { minWidth: 400 } }
    ],
    data: data
  })

  function handleRowDelete (deleteRow: Row): void {
    setTableState((prevState) => {
      const data = prevState.data.filter(row => row !== deleteRow)
      return { ...prevState, data }
    })
  }

  function handleRowUpdate (newRow: Row, oldRow: Row | undefined): void {
    if (oldRow !== undefined) {
      setTableState((prevState) => {
        const data = [...prevState.data]
        data[data.indexOf(oldRow)] = newRow
        return { ...prevState, data }
      })
    }
  }

  function handleRowAdd (addRow: Row): void {
    setTableState((prevState) => {
      const data = [...prevState.data]
      data.push(addRow)
      return { ...prevState, data }
    })
  }

  return (
    <Container
      className={tableStyles.tableContainer}
    >
      <MaterialTable
        icons={tableIcons('#AACA78')}
        options={{
          searchFieldAlignment: 'left',
          showTitle: false
        }}
        localization={localization}
        columns={tableState.columns}
        data={tableState.data}
        editable={{
          onRowDelete: async (deleteRow: Row): Promise<void> => handleRowDelete(deleteRow),
          onRowUpdate: async (newRow: Row, oldRow: Row | undefined): Promise<void> => handleRowUpdate(newRow, oldRow),
          onRowAdd: async (addRow: Row): Promise<void> => handleRowAdd(addRow)
        }}
      />
    </Container>
  )
}
