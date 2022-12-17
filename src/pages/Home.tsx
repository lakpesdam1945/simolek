import Banner from "../components/Banner/Banner";
import CategoriesList from "../components/Card/CategoriesList";
import ClothesCard from "../components/Card/ClothesCard";
import ProductCard from "../components/Card/ProductCard";
import RecommendationCard from "../components/Card/RecommendationCard";
import SeparartorContent from "../components/SeparatorContent/SeparartorContent";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="py-20 min-h-screen px-4">
        <Banner />
        <SeparartorContent name="Produk Terbaru" link="/product" />
        <ProductCard />
        <SeparartorContent name="Rekomendasi" link="/rekomendasi" />
        <RecommendationCard />
        <CategoriesList />
        <SeparartorContent name="Pakaian" link="/pakaian" />
        <ProductCard />
        <SeparartorContent name="Kesehatan" link="/pakaian" />
        <ProductCard />
        <SeparartorContent name="Olahraga" link="/pakaian" />
        <ProductCard />
        <div className="py-3"></div>
        <Banner />
      </div>
    </>
  );
};

export default Home;
