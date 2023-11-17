"use client"

import React, { useState } from 'react'
import StatsTiles from '@/admin/StatsTiles';
import GettingDatasLength from '../../tilesData/Tiles';



export default function TileContainer() {
  const [data , setData] =  useState(GettingDatasLength());


  return (
    <>
 {
            data?.map((tile, index) => {
              return (
                <StatsTiles key={index}
                  Icon={tile.icon}
                  color={tile.color}
                  title={tile.title}
                  count={tile.count} />
              )
            })
          }
    </>
  )
}