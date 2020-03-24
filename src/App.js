import React, { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Header } from "./Components/Layouts";

import CategoryMenu from "./Components/CategoryMenu";
import Vocabs from "./Components/Vocabs";
import { categoryDB, vocabDB } from "./store";

// French nuances - https://coolors.co/app/247ba0-70c1b3-b2dbbf-f3ffbd-ff1654
// French revolution - https://coolors.co/app/e63946-f1faee-a8dadc-457b9d-1d3557
// French for kids3 - https://coolors.co/1c2541-456990-70c1b3-f1faee-ed6a5a
const theme = createMuiTheme({
  palette: {
    primary: { main: "#2196f3" },
    secondary: { main: "#f44336" },
    info: { main: "#456990" },
    success: { main: "#70c1b3" }
  }
});

function App() {
  const [vocabs, setVocabs] = useState([]);
  const [vocab, setVocab] = useState({});
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const getVocabsByCategories = () => {
      const vocabsObject = vocabDB.reduce((vocabs, vocab) => {
        const { category } = vocab;

        vocabs[category] = vocabs[category]
          ? [...vocabs[category], vocab]
          : [vocab];

        return vocabs;
      }, {});

      // using Object.entries() to convert object into array
      setVocabs(Object.entries(vocabsObject));
    };

    getVocabsByCategories();
  }, []);

  const handleCategorySelected = category => {
    setCategory(category);
  };

  const handleVocabSelected = id => {
    setVocab(vocabDB.find(v => v.id === id));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <CategoryMenu
          categories={categoryDB}
          category={category}
          onSelect={handleCategorySelected}
        />
        <Vocabs
          category={category}
          vocabs={vocabs}
          vocab={vocab}
          onVocabSelect={handleVocabSelected}
        />
        {/* <Footer /> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
