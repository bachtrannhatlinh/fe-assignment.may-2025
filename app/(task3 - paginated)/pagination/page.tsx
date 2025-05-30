import React, { useMemo } from 'react'

import TableMain from './components/table'
import PaginationMain from './components/pagination'


const Page = () => {
  return (
    <div className="p-4">
      <TableMain />
      <PaginationMain />
    </div>
  )
}

export default Page