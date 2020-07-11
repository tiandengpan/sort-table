import React from 'react'

export default ({ sortOrder }) => (
  {
    0: <span>无序</span>,
    1: <span>升序</span>,
    2: <span>降序</span>,
  }[sortOrder] || <span>列排序</span>
)