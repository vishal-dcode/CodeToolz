import React, { useState, useEffect } from "react";
import Editor from "./Editor";

// use comment below if need to save the changes
// import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  // const [html, setHtml] = useLocalStorage("html", "");
  // const [css, setCss] = useLocalStorage("css", "");
  // const [js, setJs] = useLocalStorage("js", "");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="main-container">
      <div className="panel top-panel">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
      </div>

      <div className="panel bottom-panel">
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>
  );
}
