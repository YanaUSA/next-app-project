import { fetchHandler } from "../../helpers/fetchHandler";

function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map(({ id, title, category }) => {
        return (
          <div key={id}>
            <h2>
              {id} {title} | {category}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  // console.log("Pre-rendering NewsArticleList");

  const response = await fetchHandler("http://localhost:4000/news");
  const data = await response.json();

  // const data = await (await fetch("http://localhost:4000/news"))?.json();

  return {
    props: {
      // articles: data,
      articles: data === false ? [] : data,
    },
  };
}
