interface TabletProps {
  text: string;
  handleShowInput: () => void;
  handleInputOptions: (text: string) => void;
}

function Tablet({ text, handleShowInput, handleInputOptions }: TabletProps) {
  return (
    <li
      className="bg-filterTablets px-3 pt-1 text-primary rounded-sm"
      onClick={() => {
        handleShowInput();
        handleInputOptions(text);
      }}
    >
      {text}
    </li>
  );
}

export default Tablet;
