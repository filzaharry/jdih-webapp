import _ from "lodash";

const Highlighted = ({ title = "", text = "", highlight = "" }) => {
  if (!highlight.trim()) {
    // return <span>{text}</span>;
    return (
      <div className="flex flex-row mt-1">
        <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4 font-[600]">
          {title}
        </p>
        <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4 "> - </p>
        <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4">
          {text}
        </p>
      </div>
    );
  }
  const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, "gi");
  const partsTitle = title.split(regex);
  const partsText = text.split(regex);
  return (
    <div className="flex flex-row mt-1">
      <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4 font-[600]">
        {partsTitle
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark key={i}>{part}</mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </p>
      <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4 "> - </p>
      <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4">
        {partsText
          .filter((part) => part)
          .map((part, i) =>
            regex.test(part) ? (
              <mark key={i}>{part}</mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </p>
    </div>
  );
};
export default Highlighted;
