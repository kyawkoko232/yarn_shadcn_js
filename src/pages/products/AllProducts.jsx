import React from 'react'
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../store/service/endpoints/products.endpoints'

const AllProducts = () => {
    const {data, isError, isLoading } = useGetAllProductsQuery();

  return (
    <div>
        {data?.products.map((p, index) => (
            <div key={p.id }> {/* Providing a unique key */}
                <h3>{p.id}</h3>
                <h1>{p.title}</h1>
                <p>{p.description}</p>
                <Link to={`/products/${p.id}`}>View Details</Link>
                <hr />
                {/* Link to the product detail page */}
            </div>
             
        ))}
    </div>
  )
}

export default AllProducts
