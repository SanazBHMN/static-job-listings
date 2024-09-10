interface TabletProps {
  text: string;
  handleShowInput: () => void;
  handleInputOptions: (text: string) => void;
}

function Tablet({ text, handleShowInput, handleInputOptions }: TabletProps) {
  return (
    <li
      className="bg-filterTablets font-bold px-3 pt-1 text-primary rounded-sm hover:cursor-pointer hover:text-white hover:bg-primary focus:none"
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
