"use Client"

import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


export default function CompletedOrderDataTable() {
  const router = useRouter();
  const [orderData, setOrderData] = useState([]);
  const data = useSelector((state) => state.Admin.Order);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const filteredCompletedOrder =  data?.filter((item) => item?.isDelivered === true)
    setOrderData(filteredCompletedOrder)
  }, [data])

  useEffect(() => {
    setFilteredData(orderData);
  }, [orderData])



  const columns = [
    {
      name: 'Order ID',
      selector: (row) => row?._id,
      sortable: true,
    },
    {
      name: 'Total Price',
      selector: (row) => row?.totalPrice,
      sortable: true,
    },
    {
      name: 'Delivered',
      selector: (row) => row?.isDelivered ? 'Yes' : 'No',
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (

        <button onClick={() => router.push(`/order/view-orders-details/${row?._id}`)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Details</button>

      )
    },

  ];


  useEffect(() => {
    if (search === '') {
      setFilteredData(orderData);
    } else {
      setFilteredData(orderData?.filter((item) => {
        const itemData = item?._id?.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }
  }, [search, orderData])



  return (
    <div className='w-full h-full'>
      <DataTable
        columns={columns}
        data={filteredData || []}
        key={'ThisOrdersData'}
        pagination
        keyField="id"
        title={`Orders list`}
        fixedHeader
        fixedHeaderScrollHeight='700px'
        selectableRows
        selectableRowsHighlight
        persistTableHead
        subHeader
        subHeaderComponent={
          <input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Orders ID"} />
        }
        className="bg-white px-4 h-5/6 "
      />

    </div>
  )
}