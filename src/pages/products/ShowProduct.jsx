import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../store/service/endpoints/products.endpoints';

const ShowProduct = () => {
  const { productId } = useParams(); // Get the productId from URL parameters
  const { data, isError, isLoading } = useGetProductByIdQuery(productId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching data.</p>}
      {data && (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={data.thumbnail} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.title}
              <div className="badge badge-secondary">{data.category}</div>
            </h2>
            <p>{data.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{data.category}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default ShowProduct;
