function Tag({ tags }) {
  const { newTag, featuredTag } = tags;
  return (
    <>
      <p
        className={`w-full h-full bg-primary px-3 pt-1 text-white rounded-full`}
      >
        {newTag && "NEW!"}
      </p>
      <p className="w-full h-full bg-darkText px-3 pt-1 text-white rounded-full">
        {featuredTag && "FEATURED"}
      </p>
    </>
  );
}

export default Tag;
