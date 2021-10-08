import React, { useState } from 'react';
import getJoke from '../api/data/jokeData';

function Initialize() {
  const [btnText, setBtnText] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
      setBtnText('Get Punchline');
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="jokeContainer p-5 text-center">
          <h1 className="display-4 mb-5">{joke.setup}</h1>
          <h5 className="display-6">
            {btnText !== 'Get Punchline' ? joke.punchline : ''}
          </h5>
        </div>
        <div className="btnContainer text-center">
          {btnText === 'Get a Joke' || btnText === 'Get Another Joke' ? (
            <div>
              <p>Want to hear a joke?</p>
              <button
                onClick={getAJoke}
                className="btn btn-primary m-5 mt-1"
                type="button"
              >
                {btnText}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setBtnText('Get Another Joke')}
              className="btn btn-success m-5"
              type="button"
            >
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Initialize;
