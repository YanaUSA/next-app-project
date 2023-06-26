import User from "/components/User";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

function userList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default userList;
