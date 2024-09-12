import iconRemove from "/assets/images/icon-remove.svg";

interface SearchOptionProps {
  option: string;
  onRemove: () => void;
}

function SearchOption({ option, onRemove }: SearchOptionProps) {
  return (
    <div className="flex items-center bg-filterTablets pl-2 rounded-sm m-1">
      <span className="text-primary font-bold">{option}</span>
      <button
        className="ml-2 bg-primary p-2 rounded-sm rounded-tl-none rounded-bl-none hover:bg-darkText"
        onClick={onRemove}
      >
        <img src={iconRemove} alt="remove" className="w-3 h-3" />
      </button>
    </div>
  );
}

export default SearchOption;
