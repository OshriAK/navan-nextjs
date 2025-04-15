import { useState } from 'react';
import classes from './blogs-search.module.css';

function BlogsSearch(props) {
  const { onSearchHandler } = props;
  
  const [search, setSearch] = useState('');

  function submitHandler(event) {
    event.preventDefault();

    onSearchHandler(search);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputLabel}>
        <label htmlFor="search-blog" className={classes.label}>
          Search Blog
        </label>
        <input
          id="search-blog"
          className={classes.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className={classes.button}>Search</button>
    </form>
  );
}

export default BlogsSearch;
