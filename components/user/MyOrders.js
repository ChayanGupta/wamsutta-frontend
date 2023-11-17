import { AlertTriangle } from 'lucide-react'
import React from 'react'

const MyOrders = () => {
    return (
        <div style={{display:'flex',alignItems:'start',justifyContent:'center',flexGrow:'1'}}>
            <div style={{ backgroundColor: 'lightyellow', height:'fit-content', width:'100%',padding:'1rem',fontSize: '1.4rem' }}><AlertTriangle size={18}/> You have no orders in the past.</div>
        </div>
    )
}

export default MyOrders