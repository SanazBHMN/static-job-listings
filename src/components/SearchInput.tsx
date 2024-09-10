import SearchOption from "./SearchOption";

interface SearchInputProps {
  inputOptions: string[];
  handleClearInput: () => void;
  handleRemoveOption: (option: string) => void;
}

function SearchInput({
  inputOptions,
  handleClearInput,
  handleRemoveOption,
}: SearchInputProps) {
  return (
    <div className="flex items-center bg-white shadow-md rounded-md p-4 w-full -mt-8 sm:-mt-28">
      <div className="flex flex-wrap gap-2">
        {inputOptions.map((option, index) => (
          <SearchOption
            key={index}
            option={option}
            onRemove={() => handleRemoveOption(option)}
          />
        ))}
      </div>
      <button
        className="ml-auto text-text font-bold hover:text-primary hover:underline"
        onClick={handleClearInput}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchInput;
