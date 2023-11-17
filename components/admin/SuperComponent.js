import React from 'react'
import { useSelector } from 'react-redux'
import TileContainer from './TileContainer';
import ProductDataTable from './ProductDataTable';
import CategoryDataTable from './CategoryDataTable';
import PendingOrdersDataTable from './PendingOrdersDataTable';
import CompletedOrderDataTable from './CompletedOrderDataTable';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';

export default function SuperComponent() {
    const navActive = useSelector((state) => state.AdminNav.ActiveNav)
    switch (navActive) {
        case 'Base':
            return <TileContainer />;
        case 'activeProducts':
            return <ProductDataTable />
        case 'activeCategories':
            return <CategoryDataTable/>
        case 'activePendingOrder':
            return <PendingOrdersDataTable/>
        case 'activeDeliveredOrder':
            return <CompletedOrderDataTable/>
        case 'activeAddProduct':
            return <AddProduct/>
        case 'activeAddCategory':
            return <AddCategory/>
        default:
            return <TileContainer />;
    }
}

export const dynamic = 'force-dynamic'