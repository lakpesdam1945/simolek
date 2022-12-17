import Banner from "../components/Banner/Banner";
import ProductCard from "../components/Card/ProductCard";
import SeparartorContent from "../components/SeparatorContent/SeparartorContent";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="py-20 min-h-screen px-4">
        <Banner />
        <SeparartorContent name="Produk Terbaru" link="/product" />
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
