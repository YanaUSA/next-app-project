import { useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const data = await (
    await fetch(`http://localhost:4000/events?${queryString}`)
  )?.json();

  return {
    props: {
      eventList: data,
    },
  };
}

//========== shallow routing ===============//
function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const data = await (
      await fetch("http://localhost:4000/events?category=sports")
    )?.json();
    setEvents(data);

    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports events</button>
      <h1> List of events </h1>
      <ul>
        {events.map(({ id, title, date, category, description }) => {
          return (
            <li key={id}>
              <h3>
                {id} {title} {date} | {category}
              </h3>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default EventList;
