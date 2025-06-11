type GithubUserCardProps = {
  name: string;
  avatar_url: string;
  id: number;
  location: string;
  repos_url: string;
  public_repos: number;
};

export const GithubUserCard = ({
  name,
  avatar_url,
  id,
  location,
  public_repos,
  repos_url,
}: GithubUserCardProps) => {
  return (
    <>
      <div className=" mx-auto">
        <img
          className="size-32 rounded-xl border-4 border-gray-300 mb-4 mx-auto  hover:animate-pulse"
          src={avatar_url}
          alt={name}
        />
        <p className="text-gray-200 text-2xl text-center p-4">
          <span className="text-gray-800">ID: </span>
          {id}
        </p>
        <p className="text-gray-200 text-2xl text-center p-4">
          <span className="text-gray-800">Name: </span> {name}
        </p>
        <p className="text-gray-200 text-2xl text-center p-4">
          <span className="text-gray-800">Location: </span> {location}
        </p>
        <p className="text-gray-200 text-2xl text-center p-4">
          <span className="text-gray-800">Repos number: </span> {public_repos}
        </p>
        <p className="text-gray-200 text-2xl text-center p-4 ">
          <span className="text-gray-800">Repos URL: </span>
          <a href={repos_url} className="link ">
            Link
          </a>
        </p>
      </div>
    </>
  );
};
