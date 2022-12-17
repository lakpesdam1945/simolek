import { IoChevronForward } from "react-icons/io5";

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
        <ProductCard.ProductList />
      </div>
    </>
  );
};

// Card
const ProductList = () => {
  return (
    <>
      <div className="h-[200px] w-full bg-dark-neutral dark:bg-dark-secondary overflow-hidden relative rounded-lg p-2">
        <img
          src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Product"
          className="w-full h-4/6 object-cover bg-cover rounded-lg"
        />
        <div className="flex flex-row justify-between items-center w-full h-2/6 pt-2">
          <div className="flex flex-col w-5/6">
            <h3 className="font-semibold text-[0.75rem] line-clamp-1">
              Bala bala Mak Cicih enak sekali ayodong cobaein
            </h3>
            <h6 className="text-[0.625rem] font-light">Rp. 400.000</h6>
          </div>
          <div className="w-1/6 flex items-end justify-end">
            <IoChevronForward className="w-4 h-4 text-end" />
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.ProductList = ProductList;

export default ProductCard;
