import React from 'react'

type Props = {
    children: React.ReactNode;
    padding?: string
}

export const Container: React.FC<Props> = ({children, padding = "42px"}) => {
  return (
    <div style={{padding: padding}}>{children}</div>
  )
}
