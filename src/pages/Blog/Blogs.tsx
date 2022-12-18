import BlogCard from "../../components/Card/BlogCard";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SeparartorContent from "../../components/SeparatorContent/SeparartorContent";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <>
      <div className="py-20 min-h-screen px-4">
        <Jumbotron />
        <SeparartorContent name="Terbaru" link="/blogs" />
        <BlogCard />
      </div>
    </>
  );
};

export default Blogs;
