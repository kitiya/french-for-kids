import React, { useState, useEffect } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Header } from "./Components/Layouts";

import CategoryMenu from "./Components/CategoryMenu";
import Vocabs from "./Components/Vocabs";
import { categoryDB, vocabDB } from "./store";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3F3D56" },
    secondary: { main: "#ff6584" },
    info: { main: "#6C63FF" },
    success: { main: "#1765A3" }
  }
});

function App() {
  const [categoryVocabs, setCategoryVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [vocab, setVocab] = useState({});
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setVocabs(vocabDB);
  }, []);

  useEffect(() => {
    const getVocabsByCategories = () => {
      const vocabsObject = vocabs.reduce((vocabs, vocab) => {
        const { category } = vocab;

        vocabs[category] = vocabs[category]
          ? [...vocabs[category], vocab]
          : [vocab];

        return vocabs;
      }, {});

      // using Object.entries() to convert object into array
      setCategoryVocabs(Object.entries(vocabsObject));
    };

    getVocabsByCategories();
  }, [vocabs]);

  const handleCategorySelect = category => {
    setCategory(category);
  };

  const handleVocabSelect = id => {
    setVocab(vocabs.find(v => v.id === id));
  };

  const handleVocabCreate = vocab => {
    setVocabs([...vocabs, vocab]);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header categories={categoryDB} onVocabCreate={handleVocabCreate} />
        <CategoryMenu
          categories={categoryDB}
          category={category}
          onSelect={handleCategorySelect}
        />
        <Vocabs
          category={category}
          vocabs={categoryVocabs}
          vocab={vocab}
          onVocabSelect={handleVocabSelect}
        />
        {/* <Footer /> */}
      </div>
    </MuiThemeProvider>
  );
}

export default App;
