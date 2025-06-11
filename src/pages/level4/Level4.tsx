import { LevelLayout } from '../../layouts/LevelLayout';
import { GithubUser } from './GithubUser';
import { LiveClock } from './LiveClock';


export const Level4 = () => {
  return (
    <>
     <LevelLayout level={4} title="Effects, Lifecycles">
          <GithubUser username="umberto46x"></GithubUser>
          <LiveClock></LiveClock>
        </LevelLayout>
      
    </>
  );
};
