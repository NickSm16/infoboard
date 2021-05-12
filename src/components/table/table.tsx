import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import MaterialTable, { Column } from 'material-table'
import { useTableStyles } from './table.style'
import { tableIcons, localization } from './assets'

export function Table<Row extends Object> (columnsProps: Object[], addIconColor: string, tableData: Row[],
  updateRowProp: Function, deleteRowProp: Function, addRowProp: Function
): React.ReactElement {
  interface TableState {
    columns: Array<Column<Row>>
    data: Row[]
  }

  const tableStyles = useTableStyles()

  const [tableState, setTableState] = useState<TableState>({
    columns: columnsProps,
    data: tableData
  })

  function handleRowDelete (deleteRow: Row): void {
    setTableState((prevState) => {
      const data = prevState.data.filter(row => row !== deleteRow)
      deleteRowProp()
      return { ...prevState, data }
    })
  }

  function handleRowUpdate (newRow: Row, oldRow: Row | undefined): void {
    if (oldRow !== undefined) {
      setTableState((prevState) => {
        const data = [...prevState.data]
        data[data.indexOf(oldRow)] = newRow
        updateRowProp()
        return { ...prevState, data }
      })
    }
  }

  function handleRowAdd (addRow: Row): void {
    setTableState((prevState) => {
      const data = [...prevState.data, addRow]
      addRowProp()
      return { ...prevState, data }
    })
  }

  return (
    <Container
      className={tableStyles.tableContainer}
    >
      <MaterialTable
        icons={tableIcons(addIconColor)}
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
