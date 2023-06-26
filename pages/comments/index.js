import { useState } from "react";

function commentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const data = await (await fetch("/api/comments"))?.json();
    setComments(data);
  };

  const onInputChange = (evt) => {
    setComment(evt.target.value);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    });

    const data = await response.json();
    console.log("data============", data);
  };

  return (
    <>
      <input type="text" value={comment} onChange={onInputChange} />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={fetchComments}>Load comments</button>
      <ul>
        {comments.map(({ id, text }) => {
          return (
            <li key={id}>
              <p>
                {id} {text}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default commentsPage;
