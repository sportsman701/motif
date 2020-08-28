import React from 'react'
import Button from '../Button'

export default ({ to, children, style }) => (
  <Button
    link={to}
    title={typeof(children) === 'string' ? children : undefined}
    variant='nobg'
    style={[style, { padding: 0 }]}
  >
    {typeof(children) !== 'string' && children && children}
  </Button>
)
