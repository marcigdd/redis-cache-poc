import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { TeamMembers } from '../components/TeamMembers';

const Team = gql`
  query {
    teamMembers {
      name
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(Team);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;


  return (
    <div>
      <Head>
        <title>TeamMembers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto max-w-5xl my-20 px-5">
        <div>
          {data.teamMembers.map(i=> 
            <div>
              <a>
                <TeamMembers id={i.name} name={i.name}/>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
