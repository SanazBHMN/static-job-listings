interface TabletProps {
  text: string;
}

function Tablet({ text }: TabletProps) {
  return (
    <li className="bg-filterTablets px-3 pt-1 text-primary rounded-sm">
      {text}
    </li>
  );
}

export default Tablet;
