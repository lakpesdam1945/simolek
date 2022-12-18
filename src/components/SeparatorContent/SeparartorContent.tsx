import { Link } from "react-router-dom";

type Props = {
  link?: string;
  name?: string;
};

const defaultProps = {
  link: "/",
  name: "Home",
};

const SeparartorContent = (propsIn: Props) => {
  const props = { ...defaultProps, ...propsIn };
  return (
    <>
      <div className="py-5">
        <div className="flex items-center justify-between w-full h-auto max-w-tablet">
          <Link to={props.link} className="text-sm tablet:text-lg font-medium">
            {props.name}
          </Link>
          <Link to={props.link} className="text-xs tablet:text-sm font-light">
            lihat Semua
          </Link>
        </div>
      </div>
    </>
  );
};

export default SeparartorContent;
