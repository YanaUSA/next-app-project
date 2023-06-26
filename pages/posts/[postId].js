import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      post: data,
    },
  };
}

//===== fetch a list of parts of dynamic page =====//
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postId: `${post.id}`,
  //       },
  //     };
  //   });
  //   return {
  //     paths,
  //     fallback: false,
  //     };
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: false,
  };
}

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const { id, title, body } = post;
  return (
    <>
      <h2>
        {id} {title}
      </h2>
      <p>{body}</p>
    </>
  );
}

export default Post;
