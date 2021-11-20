import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const NewDeckName = () => {
  return (
    <div>
      <form>
        <label>
          New Deck Name:
        </label>
        <input type="text" name="name"/>
      </form>
      <Link to="/add">
      <button>Submit</button>
      </Link>
    </div>
  );
};

export default NewDeckName;