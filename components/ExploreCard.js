import Image from 'next/image'
import React from 'react'
import '../styles/ExploreCard.css'
import { useRouter } from 'next/navigation'

const ExploreCard = ({category}) => {

  const router = useRouter()
  
  const handleClick = () => {
    router.push(`/products?category=${category.name}`)
  }

  return (
    <div className='explore-card' onClick={handleClick}>
        <Image objectFit='cover' src={category.image} width={300} height={450} className='explore-img' alt={category.name} />
        <h3>{category.name}</h3>
    </div>
  )
}

export default ExploreCard