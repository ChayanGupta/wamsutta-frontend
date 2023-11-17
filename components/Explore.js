'use client'
import React, { useEffect, useState } from 'react'
import ExploreCard from './ExploreCard'
import '../styles/Explore.css'
import { getAllCategories } from '@/services/category'

const Explore = () => {

  const [categories, setCategories]= useState([])

  useEffect(()=>{
    getAllCategories().then(res=>{
      setCategories(res)
    })
  },[])

  return (
    <div className='explore-main-div'>
      <h1>Explore</h1>
      <div className='explore-cards'>
        {categories.map((cat)=>{
          return <ExploreCard category={cat} key={cat.id}/>
        })}
      </div>
    </div>
  )
}

export default Explore