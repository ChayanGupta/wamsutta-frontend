"use Client"

import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Loading from '../../app/loading';
import { useRouter } from 'next/navigation';
import { decryptData } from '../../secure/encrypt-decrypt';
import { deleteReview, getAllReview } from '@/services/review';

export default function ReviewDataTable() {
  const router = useRouter();
  const [reviewData, setReviewData] = useState([]);

  const [token, setToken] = useState('')

  const columns = [
    {
      name: 'Customer Name',
      selector: (row) => row?.customerName,
      sortable: true,
    },
    {
      name: 'Feedback',
      selector: (row) => row?.feedback,
      sortable: true,
    },{
      name: 'Star',
      selector: (row) => row?.star,
      sortable: true,
    },{
      name: 'Date',
      selector: (row) => row?.date,
      sortable: true,
    },
    ,{
      name: 'Product Id',
      selector: (row) => row?.productId,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className='flex items-center justify-start px-2 h-20'>
          <button onClick={() => handleDeleteReview(row?.id, token)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>
      )
    },

  ];

  const handleDeleteReview = async (id, token) => {
    const res = await deleteReview(id, token);
    if (res.status===200) {
      toast.success('Review Deleted Successfully')
      getAllReview().then(res => {
        setReviewData(res)
      })
    }
    else {
      toast.error('Something went wrong')
    }
  }

  useEffect(() => {
    getAllReview().then(res => {
      setReviewData(res)
    })
    async function loadData() {
      const user = await decryptData('user')
      if(user!=null){
        if (user?.role !== 'ROLE_ADMIN') {
          router.push('/')
        }
        setToken(user.accessToken)
      }
    }
    loadData();
  }, [router])

  return (
    <div className='w-[80vw] h-full'>
      <DataTable
        columns={columns}
        data={reviewData || []}
        key={'ThisProductData'}
        pagination
        keyField="id"
        title={`Reviews list`}
        fixedHeader
        fixedHeaderScrollHeight='500px'
        selectableRows
        selectableRowsHighlight
        persistTableHead
        progressComponent={<Loading />}
        subHeader
        className="bg-white px-4 h-4/6 "
      />

    </div>
  )
}