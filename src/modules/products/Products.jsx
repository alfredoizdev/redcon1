import { useEffect } from "react";
import Product from "modules/product/Product";
import useRequest from "hooks/useRequest";

const Products = () => {
  const { items, error, loading } = useRequest({
    requet: "applicant/2021/products.php",
  });

  useEffect(() => {
    if (items) {
      console.log(items);
    }
  }, [items]);

  return (
    <div className='row mt-4'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => <Product item={item} key={item.id} />)
      )}
    </div>
  );
};

export default Products;
