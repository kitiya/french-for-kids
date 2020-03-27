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
    success: { main: "#1765A3" },
    kitiya: "#23ff34"
  }
});

function App() {
  const [categoryVocabs, setCategoryVocabs] = useState([]);
  const [vocabs, setVocabs] = useState([]);
  const [vocab, setVocab] = useState({});
  const [category, setCategory] = useState("all");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setVocabs(vocabDB);
  }, []);

  useEffect(() => {
    const getVocabsByCategories = () => {
      // initialCategoryVocabs = {animals:[], clothes:[], colors:[], ...}
      const initialCategoryVocabs = categoryDB.reduce(
        (combinedCategoryVocabs, category) => {
          return category !== "all"
            ? {
                ...combinedCategoryVocabs,
                [category]: []
              }
            : null;
        },
        {}
      );

      const vocabsObject = vocabs.reduce((vocabs, vocab) => {
        const { category } = vocab;

        vocabs[category] = vocabs[category]
          ? [...vocabs[category], vocab]
          : [vocab];

        return vocabs;
      }, initialCategoryVocabs);

      // using Object.entries() to convert object into array
      setCategoryVocabs(Object.entries(vocabsObject));
    };

    getVocabsByCategories();
  }, [vocabs]);

  const handleCategorySelect = category => {
    setCategory(category);
    if (category === "all" && !editMode) {
      setVocab({});
    }
  };

  const handleVocabSelect = id => {
    setVocab(vocabs.find(v => v.id === id));
    setEditMode(false);
  };

  const handleVocabCreate = vocab => {
    setVocabs([...vocabs, vocab]);
  };

  const handleVocabDelete = id => {
    setVocabs(vocabs.filter(vocab => vocab.id !== id));
    if (vocab.id === id) {
      setVocab({});
      setEditMode(false);
    }
  };

  const handleVocabEdit = vocab => {
    setVocabs([...vocabs.filter(v => v.id !== vocab.id), vocab]);
    setVocab(vocab);
    setEditMode(false);
  };

  const handleVocabEditSelect = id => {
    setVocab(vocabs.find(vocab => vocab.id === id));
    setEditMode(true);
  };

  return (
    <MuiThemeProvider theme={theme}>
      {console.log(theme)}
      <div>
        <Header categories={categoryDB} onVocabCreate={handleVocabCreate} />
        <CategoryMenu
          categories={categoryDB}
          category={category}
          onSelect={handleCategorySelect}
        />
        <Vocabs
          categories={categoryDB}
          category={category}
          categoryVocabs={categoryVocabs}
          vocab={vocab}
          editMode={editMode}
          onVocabSelect={handleVocabSelect}
          onVocabDelete={handleVocabDelete}
          onVocabEdit={handleVocabEdit}
          onVocabEditSelect={handleVocabEditSelect}
        />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
