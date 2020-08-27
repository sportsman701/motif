import React from 'react'
import Button from '../Button'

export default ({ to, children, style }) => (
  <Button
    link={to}
    title={typeof(children) === 'string' ? children : undefined}
    variant='nobg'
    style={style}
  >
    {typeof(children) !== 'string' && children && children}
  </Button>
)
