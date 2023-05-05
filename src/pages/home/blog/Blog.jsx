import React from "react";
import Pdf from "react-to-pdf";
import useTitle from "../../../hooks/useTitle";
const ref = React.createRef();

const Blog = () => {
  useTitle("Blog");
  return (
    <div>
      <div className="text-center my-10">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="text-center bg-yellow-600 rounded-md p-2">
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-10 ms-12">
          <div>
            <h1 className="font-bold">
              1. Tell us the differences between uncontrolled and controlled
              components.
            </h1>
            <p>
              Ans: In a controlled component, form data is handled by a React
              component.The alternative is uncontrolled components, where form
              data is handled by the DOM itself. To write an uncontrolled
              component, instead of writing an event handler for every state
              update, you can use a ref to get form values from the DOM
            </p>
            <h1 className="font-bold">
              2. What is a custom hook, and why will you create a custom hook?
            </h1>
            <p>
              Ans: A custom hook in React is a JavaScript function that utilizes
              React's built-in hooks or other custom hooks to encapsulate
              reusable logic. Custom hooks allow you to abstract away complex
              logic and share it across multiple components, promoting code
              reusability and making your code more organized.
            </p>
          </div>
          <div>
            <h1 className="font-bold">
              3. Tell us the difference between nodejs and express js ?
            </h1>
            <p>
              Ans: Node.js, you can develop server-side applications using
              JavaScript. It provides a vast set of built-in modules and
              libraries, making it suitable for building scalable network
              applications, real-time applications, microservices, and more.
            </p>
            <p>
              Express.js is a web application framework for Node.js. It provides
              a lightweight, flexible, and minimalist approach to building web
              applications and APIs.
            </p>
            <h1 className="font-bold">
              4. How to validate React props using PropTypes.
            </h1>
            <p>
              Ans: Install PropTypes,Have to import the PropTypes module from
              component file and have to Define propTypes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
