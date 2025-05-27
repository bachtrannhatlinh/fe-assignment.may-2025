'use client';

import React, { useEffect, useState } from 'react'
import Table from './Table'
import Pagination from './Pagination'

const TablePagination = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div suppressHydrationWarning={true}>
      <Table />
      <Pagination />
    </div>
  )
}

export default TablePagination