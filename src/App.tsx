import { useState } from "react";
import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function setId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        // handleClickButton={setId}
        handleClickButton={setSelectedGenreId}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
