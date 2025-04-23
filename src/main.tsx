import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import ReactLenis from "lenis/react";
import Meta from "./components/layout/Meta.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Meta
      title="Adel Yasser — Frontend Developer"
      description="Adel Yasser's portfolio"
      canonicalUrl="https://my-portfolio-website-orpin.vercel.app/"
      ogImage="/favicon.ico"
    />
    <React.StrictMode>
      <ReactLenis root={true}>
        <App />
      </ReactLenis>
    </React.StrictMode>
  </>
);
