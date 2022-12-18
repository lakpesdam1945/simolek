import { IoChevronForward } from "react-icons/io5";

type Props = {};

const BlogCard = (props: Props) => {
  return (
    <div className="flex w-full h-auto flex-col justify-start gap-2">
      <BlogList />
      <BlogList />
      <BlogList />
      <BlogList />
      <BlogList />
    </div>
  );
};

const BlogList = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center overflow-hidden relative rounded-md bg-dark-neutral dark:bg-dark-secondary p-2 gap-3">
        <div className="flex-none w-20 tablet:w-40 h-20 tablet:h-32">
          <img
            src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Product"
            className="w-full h-full object-cover bg-cover rounded-md"
          />
        </div>
        <div className="flex-grow flex flex-col gap-2">
          <h3 className="font-semibold text-base tablet:text-xl leading-relaxed line-clamp-3">
            Title
          </h3>
          <p className="line-clamp-2 text-xs tablet:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            reiciendis veniam distinctio tenetur possimus enim aliquid,
            perspiciatis assumenda aperiam, quisquam rerum laudantium fuga,
            voluptatem cupiditate sed neque illo dignissimos delectus.
          </p>
        </div>
        <div className="flex-none w-5">
          <IoChevronForward className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};

BlogCard.BlogList = BlogList;
export default BlogCard;
