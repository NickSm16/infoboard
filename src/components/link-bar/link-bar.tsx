import React from 'react'
import { Box, Link } from '@material-ui/core'
import { useLinkBarStyles } from './link-bar.style'

interface LinkBarProps {
  title: string
  url: string
}

export function LinkBar (props: { linksData: LinkBarProps[] }): React.ReactElement {
  const classes = useLinkBarStyles()

  function LinkBarItem (props: { data: LinkBarProps }): React.ReactElement {
    return (
      <Link className={classes.linkItem} href={props.data.url}>{props.data.title}</Link>
    )
  }

  return (
    <Box className={classes.LinkBar}>
      {props.linksData
        .map((item, index) => <LinkBarItem data={item} key={`item${index}`} />)
        .reduce(
          (acc, item, index) => {
            return (
              <>
                {[
                  acc,
                  <span className={classes.delimeter} key={`delim${index}`}>&bull;</span>,
                  item
                ]}
              </>
            )
          })}
    </Box>)
}
