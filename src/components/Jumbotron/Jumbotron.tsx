type Props = {};

const Jumbotron = (props: Props) => {
  return (
    <div>
      {/* Jumbotron */}
      <div className="p-4 shadow-md rounded-lg bg-dark-neutral dark:bg-dark-secondary dark:text-dark-textprimary text-gray-700">
        <h2 className="font-semibold text-lg tablet:text-2xl mb-3">
          Terus terhubung dengan blog Simolek
        </h2>
        <p className="leading-relaxed text-sm tablet:text-lg">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4 border-gray-300" />
        <button
          type="button"
          className="inline-block px-6 py-2.5 mt-2 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Bergabung dengan komunitas
        </button>
      </div>
      {/* Jumbotron */}
    </div>
  );
};

export default Jumbotron;
