import "./App.css";
import { useState, useEffect } from "react";
import { useLoading } from "./useloading";

function App() {
  const [loading, setLoading] = useState(true);
  useLoading(loading);

  useEffect(() => {
    // LOAD SOME BIG DATA
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <section>
      <h1>Page Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        maxime provident eaque tenetur iusto quibusdam natus, eius architecto
        ipsum repellat dolorum voluptate quam animi illo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        deleniti facilis ipsum dolor pariatur illo libero cupiditate rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        maxime provident eaque tenetur iusto quibusdam natus, eius architecto
        ipsum repellat dolorum voluptate quam animi illo deriom closure.
      </p>
    </section>
  );
}

export default App;
