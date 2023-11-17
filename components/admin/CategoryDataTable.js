"use Client"

import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import { deleteCategory, getAllCategories } from '@/services/category';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import Loading from '../../app/loading';
import { useRouter } from 'next/navigation';
import { decryptData } from '../../secure/encrypt-decrypt';

export default function CategoryDataTable() {
  const router = useRouter();
  const [catData, setCatData] = useState([]);

  const [token, setToken] = useState('')

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const columns = [
    {
      name: 'Name',
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row) => <Image src={row?.image} alt='No Image Found' className='py-2' width={100} height={100} />
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className='flex items-center justify-start px-2 h-20'>
          <button onClick={() => handleDeleteCategory(row?.id, token)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>
      )
    },

  ];

  const handleDeleteCategory = async (id, token) => {
    const res = await deleteCategory(id, token);
    if (res.status===200) {
      toast.success('Category Deleted Successfully')
      getAllCategories().then(res => {
        setCatData(res)
      })
    }
    else {
      toast.error('Something went wrong')
    }
  }

  useEffect(() => {
    getAllCategories().then(res => {
      setCatData(res)
    })
    async function loadData() {
      const user = await decryptData('user')
      if (user?.role !== 'ROLE_ADMIN') {
        router.push('/')
      }
      setToken(user.accessToken)
    }
    loadData();
  }, [router])

  useEffect(() => {
    if (search === '') {
      setFilteredData(catData);
    } else {
      setFilteredData(catData?.filter((item) => {
        const itemData = item?.name.toUpperCase()
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }
  }, [search, catData])

  return (
    <div className='w-full h-full bg-white'>
      <DataTable
        columns={columns}
        data={filteredData || []}
        key={'ThisisCategoryData'}
        pagination
        keyField="id"
        title={`Categories list`}
        fixedHeader
        fixedHeaderScrollHeight='500px'
        selectableRows
        selectableRowsHighlight
        persistTableHead
        progressComponent={<Loading />}
        subHeader
        subHeaderComponent={
          <input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Category Name"} />
        }
        className="bg-white px-4 h-4/6 "
      />

    </div>
  )
}