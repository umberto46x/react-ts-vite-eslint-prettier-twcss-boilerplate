type CardProps = {
  title: string;
  imgUrl: string;
  description: string;
};

export const Card = ({ description, imgUrl, title }: CardProps) => {
  return (
    <div className="w-50 mx-auto bg-gray-500 m-4  ">
      <img
        src={imgUrl}
        alt="CardImage"
        className="rounded-4xl p-4 w-48  h-48"
      />
      <h6 className="text-center p-4 text-bold text-2xl">{title}</h6>
      <p className="p-5 text-center">{description}</p>
    </div>
  );
};
