import React, { forwardRef } from 'react'
import {
  AddBoxRounded, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage,
  LastPage, Remove, SaveAlt, Search, ViewColumn
} from '@material-ui/icons'
import { Icons } from 'material-table'

export function tableIcons (color: string): Icons {
  return ({
    Add: forwardRef((props, ref) => <AddBoxRounded htmlColor={color} {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  })
}

export const localization = {
  header: {
    actions: ''
  },
  body: {
    emptyDataSourceMessage: 'Нет записей',
    addTooltip: 'Добавить',
    deleteTooltip: 'Удалить',
    editTooltip: 'Изменить',
    editRow: {
      deleteText: 'Вы уверены, что хотите удалить эту запись?',
      cancelTooltip: 'Отмена',
      saveTooltip: 'Сохранить'
    }
  },
  pagination: {
    labelRowsSelect: 'строк',
    labelDisplayedRows: '{from}-{to} из {count}',
    firstTooltip: 'Первая страница',
    previousTooltip: 'Предыдущая страница',
    nextTooltip: 'Следующая страница',
    lastTooltip: 'Последняя страница  '
  },
  toolbar: {
    searchTooltip: 'Поиск',
    searchPlaceholder: 'Поиск'
  }
}
