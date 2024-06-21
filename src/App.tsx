import "./App.css";
import Question1 from "./questions/question1";
import Question2 from "./questions/question2";
import Question3 from "./questions/question3";

function App() {
  return (
    <>
      <h1 className="text-center">
        HatchHead
        <br />
        Technical Interview
      </h1>
      <div className="text-center">
        <p className="text-center">
          Read the questions in <code>src/questions</code> and
          <br />
          edit those files to solve the problem
        </p>

        <p>
          Exit <code>src/main</code> to see your results
        </p>
      </div>

      <div className="card">
        <Question1 />
      </div>

      <p className="read-the-docs text-center">
        <a href="https://hatchhead.co">https://hatchhead.co</a>
      </p>
    </>
  );
}

export default App;
