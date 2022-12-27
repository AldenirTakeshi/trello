import "./App.css";
import { useState } from "react";

const inicialItems = [
  { id: "1", content: "Conteudo 1" },
  { id: "2", content: "Conteudo 2" },
  { id: "3", content: "Conteudo 3" },
];
const inicialColumns = [{ name: "To do", id: "123", items: inicialItems }];
function App() {
  const [columns, setColumns] = useState(inicialColumns);

  return (
    <div className="App">
      {columns.map((column) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>{column.name}</h2>
          <div style={{ backgroundColor: "lightBlue", height: 500, width: 250 }}>
            {column.items.map((item) => (
              <div
                style={{
                  backgroundColor: "gray",
                  padding: ".8rem",
                  margin: ".8rem",
                }}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
