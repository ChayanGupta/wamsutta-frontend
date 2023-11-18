import React from 'react'
import { useSelector } from 'react-redux'
import TileContainer from './TileContainer';
import ProductDataTable from './ProductDataTable';
import CategoryDataTable from './CategoryDataTable';
import PendingOrdersDataTable from './ReviewDataTable';
import CompletedOrderDataTable from './CompletedOrderDataTable';
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import AddReview from './AddReview';
import ReviewDataTable from './ReviewDataTable';

export default function SuperComponent() {
    const navActive = useSelector((state) => state.AdminNav.ActiveNav)
    switch (navActive) {
        case 'Base':
            return <TileContainer />;
        case 'activeProducts':
            return <ProductDataTable />
        case 'activeCategories':
            return <CategoryDataTable/>
        case 'activeAddProduct':
            return <AddProduct/>
        case 'activeAddCategory':
            return <AddCategory/>
        case 'activeAddReview':
            return <AddReview/>
        case 'activeReview':
            return <ReviewDataTable/>
        default:
            return <TileContainer />;
    }
}

export const dynamic = 'force-dynamic'