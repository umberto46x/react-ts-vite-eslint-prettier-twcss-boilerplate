import { useEffect, useState } from 'react';
import { GithubUserCard } from './GithubUserCard';
import axios from 'axios';

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

type GithubUserProps = {
  username: string;
};

export const GithubUser = ({ username }: GithubUserProps) => {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<GithubUser>(
        `https://api.github.com/users/umberto46x`
      );
      setUser(response.data);
    })();
  }, [username]);

  /*  if (!user)
    return (
      <p className="text-red-500 text-center text-5xl m-5">Loading . . . . </p>
    ); */

  return (
    <>
      <div className="w-75 mx-auto bg-gray-500 m-4 text-center    ">
        <h4 className="text-center p-4 text-bold text-2xl">
          Github profile info fetcher
        </h4>
        {user && (
          <GithubUserCard
            avatar_url={user!.avatar_url}
            name={user!.name}
            id={user!.id}
            location={user!.location}
            public_repos={user!.public_repos}
            repos_url={user!.repos_url}
          ></GithubUserCard>
        )}
      </div>
      ;
    </>
  );
};
