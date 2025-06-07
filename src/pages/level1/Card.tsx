type CardProps = {
  title: string;
  imgUrl: string;
  description: string;
};

export const Card = (props: CardProps) => {
  return (
    <div>
      <h2 className="text-center text-bold">Level 1</h2>
      <h4 className="text-center">Component and Props</h4>

      <div className="w-50 mx-auto bg-gray-500 opacity-50 ">
        <img src={props.imgUrl} alt="CardImage" className="rounded-xl p-4" />
        <h6 className="text-center p-4">{props.title}</h6>
        <p className="p-5 text-center">{props.description}</p>
      </div>
    </div>
  );
};
