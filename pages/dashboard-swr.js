import useSWR from "swr";

const fetcher = async () => {
  const data = await (await fetch("http://localhost:4000/dashboard"))?.json();
  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <h3>Posts - {data.posts}</h3>
        <h3>Likes - {data.likes}</h3>
        <h3>Followers - {data.followers}</h3>
        <h3>Following - {data.following}</h3>
      </div>
    </>
  );
}

export default DashboardSWR;
