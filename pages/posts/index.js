import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data,
      //   posts: data.slice(0, 3),
    },
  };
}

function PostList({ posts }) {
  return (
    <>
      <h1>List of posts</h1>
      <ul>
        {posts.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link href={`posts/${id}`} passHref>
                <h3>
                  {id} {title}
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PostList;
