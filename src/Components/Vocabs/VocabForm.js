import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const VocabForm = ({ vocab, categories, onSubmit, classes }) => {
  const [en, setEn] = useState("");
  const [fr, setFr] = useState("");
  const [feminine, setFeminine] = useState("");
  const [masculine, setMasculine] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (vocab) {
      const { en, fr, feminine, masculine, imageUrl, category } = vocab;
      setEn(en);
      setFr(fr);
      setFeminine(feminine);
      setMasculine(masculine);
      setImageUrl(imageUrl);
      setCategory(category);
    } else {
      resetVocabState();
    }
  }, [vocab]);

  const resetVocabState = () => {
    setEn("");
    setFr("");
    setFeminine("");
    setMasculine("");
    setImageUrl("");
    setCategory("");
  };

  const handleEnChange = event => {
    setEn(event.target.value);
  };

  const handleFrChange = event => {
    setFr(event.target.value);
  };

  const handleFeminineChange = event => {
    setFeminine(event.target.value);
  };

  const handleMasculineChange = event => {
    setMasculine(event.target.value);
  };

  const handleImageUrlChange = event => {
    setImageUrl(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    // TODO: validation
    onSubmit({
      id: vocab ? vocab.id : en.toLocaleLowerCase().replace(/ /g, "-"),
      en,
      fr,
      feminine,
      masculine,
      imageUrl,
      category
    });

    // resetVocabState();
  };

  return (
    <form className={classes.formRoot} noValidate autoComplete="off">
      <TextField
        id="en"
        label="English**"
        value={en}
        onChange={handleEnChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="fr"
        label="French"
        value={fr}
        onChange={handleFrChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="feminine"
        label="French - feminine"
        value={feminine}
        onChange={handleFeminineChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="masculine"
        label="French - masculine"
        value={masculine}
        onChange={handleMasculineChange}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="imageUrl"
        label="Image URL"
        value={imageUrl}
        onChange={handleImageUrlChange}
        InputLabelProps={{ shrink: true }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="category-select-label">
          Category**
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.slice(1).map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        className={classes.lightText}
        onClick={handleSubmit}
        disabled={!en || !category}
      >
        {vocab ? "Submit" : "Create"}
      </Button>
    </form>
  );
};

export default VocabForm;
