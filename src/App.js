import "./styles.css";
import ExampleBox from "./exampleBox";
import UseRefExample from "./useRefExample";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks Sandbox</h1>
      <h3>Adding components as examples of various React hooks...</h3>
      <dl>
        <dt>useRef</dt>
        <dd>
          Returns a mutable ref object whose <em>.current</em> property is
          initialized to the passed argument (<em>initialValue</em>). The
          returned object will persist for the full lifetime of the component.
        </dd>
        <ExampleBox>
          <UseRefExample />
        </ExampleBox>
      </dl>
    </div>
  );
}
