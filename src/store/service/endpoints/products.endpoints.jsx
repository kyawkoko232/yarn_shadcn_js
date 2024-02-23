import { ApiService } from "../apiService";

const productEndpoint = ApiService.injectEndpoints({
     endpoints : (builder) => ({
        getAllProducts : builder.query({
            query: ()=> "/products",
        }),
        getProductById : builder.query({
            query: (id)=> `/products/${id}`
        }),

        addProduct: builder.mutation({
            query: (newProduct) => ({
                url : `/products/add`,
                method : "POST",
                headers: {"Content-Type": "application/json"},
                body : newProduct
            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updatedProduct }) => ({
              url: `/products/${id}`,
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: updatedProduct,
            }),
          }),
      
          deleteProduct: builder.mutation({
            query: (id) => ({
              url: `/products/${id}`,
              method: "DELETE",
            }),
          }),
    }),

   
   
});

export const { 
    useGetAllProductsQuery, 
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    
} = productEndpoint