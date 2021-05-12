import React from 'react'
import AdminLayout from '../../components/layout/admin-layout'
import { EmployeeTable } from '../../components/table/employee-table'
import { LinkBar } from '../../components/link-bar/link-bar'

const rankOptions = { 1: 'полковник', 2: 'подполковник', 3: 'майор', 4: 'капитан', 5: 'ст. лейтенант', 6: 'лейтенант' }
const roomOptions = { 1: '511', 2: '512' }
const positionOptions = { 1: 'главный по тарелочкам', 2: 'главный по ложечкам' }
const organizationOptions = { 1: 'кукуево', 2: 'иваново' }

const employeeData = [
  { rank: 1, name: 'Иван', surname: 'Иванов', patronymic: 'Иванович', room: 1, position: 1, organization: 1 },
  { rank: 1, name: 'Петр', surname: 'Романов', patronymic: 'Иванович', room: 1, position: 1, organization: 1 },
  { rank: 1, name: 'Акакий', surname: 'Шумков', patronymic: 'Иванович', room: 1, position: 1, organization: 1 },
  { rank: 4, name: 'Игорь', surname: 'Ушаков', patronymic: 'Иванович', room: 1, position: 1, organization: 1 },
  { rank: 3, name: 'Клемент', surname: 'Ворошилов', patronymic: 'Иванович', room: 1, position: 1, organization: 1 },
  { rank: 1, name: 'Василий', surname: 'Васильев', patronymic: 'Иванович', room: 1, position: 1, organization: 2 }
]

const linksData = [
  { title: 'Звания', url: '/admin/plug' },
  { title: 'Кабинеты', url: '/admin/plug' },
  { title: 'Должности', url: '/admin/plug' },
  { title: 'Подразделения', url: '/admin/employee' }
]

export default function Employee (): React.ReactElement {
  return (
    <AdminLayout
      title='Сотрудники'
      bgColor='#3F6317'
      color='#FFFFFF'
      content={
        <>
          <LinkBar
            linksData={linksData}
          />
          <EmployeeTable
            rankOptions={rankOptions}
            roomOptions={roomOptions}
            positionOptions={positionOptions}
            organizationOptions={organizationOptions}
            employeeData={employeeData}
          />
        </>
      }
    />
  )
}
