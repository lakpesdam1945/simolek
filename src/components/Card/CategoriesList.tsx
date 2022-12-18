type Props = {};

const CategoriesList = (props: Props) => {
  return (
    <>
      <div className="pt-5">
        <div className="overflow-x-scroll overflow-auto flex w-full h-[90px]  tablet:h-[90px] gap-4 snap-mandatory snap-x scrollbar">
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
          <CategoriesList.CategoriesListCard />
        </div>
      </div>
    </>
  );
};

const CategoriesListCard = () => {
  return (
    <>
      <div className="w-40 flex-shrink-0 bg-slate-400 rounded-md overflow-hidden relative snap-center">
        <div className="w-full h-full absolute bg-gray-800/30 flex items-center justify-center">
          <span className="text-light-neutral text-sm font-semibold">
            Category
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Product"
          className="w-full h-full object-cover bg-cover"
        />
      </div>
    </>
  );
};

CategoriesList.CategoriesListCard = CategoriesListCard;

export default CategoriesList;
