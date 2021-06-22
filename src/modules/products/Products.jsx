import Product from "modules/product/Product";
import useRequest from "hooks/useRequest";
import Loading from "components/loading/loading";

const Products = () => {
  const { items, loading } = useRequest({
    requet: "applicant/2021/products.php",
  });

  return (
    <div className='row mt-4'>
      {loading ? (
        <Loading />
      ) : (
        items.map((item) => <Product item={item} key={item.id} />)
      )}
    </div>
  );
};

export default Products;
