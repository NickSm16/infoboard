import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import MaterialTable, { Column } from 'material-table'
import { useTableStyles } from './table.style'
import { tableIcons, localization } from './assets'

interface RankOptionsProps {
  [id: number]: string
}

interface RoomOptionsProps {
  [id: number]: string
}

interface PositionOptionsProps {
  [id: number]: string
}

interface OrganizationOptionsProps {
  [id: number]: string
}

interface Row {
  rank: number
  surname: string
  name: string
  patronymic: string
  room: number
  position: number
  organization: number
}

interface TableState {
  columns: Array<Column<Row>>
  data: Row[]
}

interface EmployeeTableProps {
  employeeData: Row[]
  rankOptions: RankOptionsProps
  roomOptions: RoomOptionsProps
  positionOptions: PositionOptionsProps
  organizationOptions: OrganizationOptionsProps
}

export function EmployeeTable (
  { rankOptions, roomOptions, positionOptions, organizationOptions, employeeData }: EmployeeTableProps
): React.ReactElement {
  const tableStyles = useTableStyles()
  const addIconColor = '#715B92'

  const [tableState, setTableState] = useState<TableState>({
    columns: [
      { title: 'Звание', field: 'rank', lookup: rankOptions },
      { title: 'Фамилия', field: 'surname' },
      { title: 'Имя', field: 'name' },
      { title: 'Отчество', field: 'patronymic' },
      { title: 'Кабинет', field: 'room', lookup: roomOptions },
      { title: 'Должность', field: 'position', lookup: positionOptions },
      { title: 'Подразделение', field: 'organization', lookup: organizationOptions }
    ],
    data: employeeData
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
      const data = [...prevState.data, addRow]
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
