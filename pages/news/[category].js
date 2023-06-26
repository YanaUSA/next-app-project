function ArticleListByCategory({ category, articles }) {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
        <ul>
          {articles.map(({ id, title, description }) => {
            return (
              <li key={id}>
                <h3>
                  {id} {title}
                </h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </h1>
    </>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  //==== set cookies in header for saving the token ===//
  res.setHeader("set-cookie", ["name=Bob"]);

  const { category } = params;
  const data = await (
    await fetch(`http://localhost:4000/news?category=${category}`)
  )?.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
