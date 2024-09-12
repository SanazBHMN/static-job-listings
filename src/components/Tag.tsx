interface TagProps {
  tags: {
    newTag: boolean;
    featuredTag: boolean;
  };
}

function Tag({ tags }: TagProps) {
  const { newTag, featuredTag } = tags;

  return (
    <>
      {newTag && (
        <p
          className={`w-full h-full bg-primary px-3 pt-1 text-white rounded-full`}
        >
          NEW!
        </p>
      )}
      {featuredTag && (
        <p className="w-full h-full bg-darkText px-3 pt-1 text-white rounded-full">
          FEATURED
        </p>
      )}
    </>
  );
}

export default Tag;
