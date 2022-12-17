type Props = {};

function Banner(props: Props) {
  return (
    <div className="w-full h-40 max-w-tablet overflow-hidden relative rounded-lg">
      <div className="w-full h-full bg-black/40 absolute"></div>
      <div className="absolute left-4 right-4 flex flex-col items-start tablet:items-center justify-evenly h-full">
        <h3 className="text-light-neutral text-base font-normal leading-relaxed text-start tablet:text-center">
          Tingkatkan penjualan
          <br />
          dengan optimasi <span className="font-semibold">Sosial Media</span>
        </h3>
        <button className="px-4 py-2 bg-emerald-700 text-light-neutral rounded-md text-xs mt-0">
          Explore Simolek
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Banner"
        className="w-full h-full object-cover bg-cover"
      />
    </div>
  );
}

export default Banner;
