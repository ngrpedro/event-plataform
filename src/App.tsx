import { gql, useQuery } from "@apollo/client";
import "./styles/global.css";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);
  return (
    <div>
      {data?.lessons.map((lesson) => {
        return (
          <h1 key={lesson.id} className="text-2xl text-violet-900">
            {lesson.title}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
