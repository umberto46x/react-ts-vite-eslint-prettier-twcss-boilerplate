type QuoteCardProps = {
  author: string;
  imgUrl: string;
  text: string;
};

export const QuoteCard = ({ author, text, imgUrl }: QuoteCardProps) => {
  return (
    <div className="w-50 mx-auto bg-gray-500 m-4  ">
      <img
        src={imgUrl}
        alt="CardImage"
        className="rounded-4xl p-4 w-48  h-48"
      />
      <h6 className="text-center p-4 text-bold text-2xl">{author}</h6>
      <p className="p-5 text-center">{text}</p>
    </div>
  );
};
