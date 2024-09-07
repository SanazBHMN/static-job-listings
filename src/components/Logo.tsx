function Logo({ logo }) {
  return (
    <div className="w-14 h-14 absolute top-[-30px] md:static md:w-16 md:h-16">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
