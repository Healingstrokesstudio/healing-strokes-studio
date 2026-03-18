import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{fontFamily:"sans-serif", padding:"40px"}}>
      <h1>Aunt Sam's Healing Strokes Studio</h1>
      <p>A welcoming space for creativity, healing, and growth.</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuf--RklDakIYFPFSGgGaGvJv2HgTqbmmVJreq0CqoXEZG5g/viewform" target="_blank">
        Sign Up Here
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
