import { makeStyles } from '@material-ui/core/styles'

export const useSectionsStyles = makeStyles({
  sectionsContainer: (props: { bgColor: string }) => ({
    backgroundColor: props.bgColor,
    marginTop: 32,
    marginLeft: 20
  })
})
