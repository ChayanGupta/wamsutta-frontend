"use Client"

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import Loading from '../../app/loading';
import { useRouter } from 'next/navigation';
import { deleteProduct, getAllProducts } from '@/services/product';
import { decryptData } from '../../secure/encrypt-decrypt';


export default function ProductDataTable() {
  const router = useRouter();
  const [prodData, setprodData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [token, setToken] = useState('')

  useEffect(() => {
    getAllProducts().then(res => {
      setprodData(res)
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
    setFilteredData(prodData);
  }, [prodData])

  useEffect(() => {
    if (search === '') {
      setFilteredData(prodData);
    } else {
      setFilteredData(prodData?.filter((item) => {
        const itemData = item?.productName.toUpperCase()
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }
  }, [search, prodData])


  const columns = [
    {
      name: 'Name',
      cell: (row) => <p>{row?.productName}</p>,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row) => <Image src={row?.mainImage} alt='No Image Found' className='py-2' width={100} height={100} />
    },
    {
      name: 'Price',
      selector: (row) => row?.price,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div className='flex items-center justify-start px-2 h-20'>
          <button onClick={() => handleDeleteProduct(row?.id)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>
      )
    },

  ];

  const handleDeleteProduct = async (id) => {
    const res = await deleteProduct(id, token);
    if (res?.status === 200) {
      toast.success('Product Deleted Successfully')
      getAllProducts().then(res=>{
        setprodData(res)
      })
    }
    else {
      toast.error('Something went wrong!!')
    }
  }

  return (
    <div className='w-full h-full'>
      <DataTable
        columns={columns}
        data={filteredData || []}
        key={'ThisProductData'}
        pagination
        keyField="id"
        title={`Products list`}
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
            placeholder={"Product Name"} />
        }
        className="bg-white px-4 h-4/6 "
      />

    </div>
  )
}