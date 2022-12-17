type Props = {};

const RecommendationCard = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
        <RecommendationCard.RecommendationList />
      </div>
    </>
  );
};

// Recomendation List
const RecommendationList = () => {
  return (
    <>
      <div className="h-[200px] tablet:h-[240px] w-full relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="Product"
          className="w-full h-full object-cover bg-cover"
        />
        <div className="flex flex-row justify-between left-2 right-2 p-2 bottom-2 absolute bg-light-neutral/40 rounded-md backdrop-blur-sm">
          <div className="flex flex-col">
            <h3 className="font-semibold text-[0.75rem] line-clamp-1 text-dark-secondary">
              Bala bala Mak Cicih enak sekali ayodong cobaein
            </h3>
            <h6 className="text-[0.625rem] font-light text-dark-secondary">
              Rp. 400.000
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

RecommendationCard.RecommendationList = RecommendationList;

export default RecommendationCard;
