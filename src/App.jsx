import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

const articles = ["Articolo1", "Articolo2", "Articolo3"];

export default function App() {
  return (
    <div className="container">
      <h1>Articoli</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article}
          </li>
        ))}
      </ul>
    </div>
  );
}
