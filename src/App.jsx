import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const initialArticles = ["Articolo1", "Articolo2", "Articolo3"];

export default function App() {
  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!newArticle) {
      return;
    }

    setArticles([...articles, newArticle]);
    setNewArticle("");
  };

  return (
    <div className="container">
      <h1>Articoli</h1>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit}>
        <h3>Aggiungi Articolo</h3>
        <div className="form-group">
          <label htmlFor="article-input" className="form-label">
            Nome articolo
          </label>
          <input
            value={newArticle}
            onChange={(e) => setNewArticle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Aggiungi</button>
      </form>
    </div>
  );
}
