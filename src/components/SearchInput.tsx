interface SearchInputProps {
  inputOptions: string[];
  handleClearInput: () => void;
}

function SearchInput({ inputOptions, handleClearInput }: SearchInputProps) {
  return (
    <>
      <input
        className="w-full min-h-16 absolute top-[-80px] rounded-md"
        value={inputOptions}
        onChange={() => {}}
      />
      <button
        className="absolute top-[-60px] right-4"
        onClick={handleClearInput}
      >
        clear
      </button>
    </>
  );
}

export default SearchInput;
