import React, { Component } from 'react';
import './App.scss';
import Periods from './Periods';

class App extends Component {
  state = {
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendous, non, dolorrem, cumque distincito magni quam expedita vielit laborum sunt amet facere temperoa ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.',
    educations: [
      {
        year: 1990,
        activity: 'I was born in Katowice',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
      },
      {
        year: 2005,
        activity: 'Secondary school specializing in artistic',
        detail:
          'Eos, explicabo, nam, tenetur ab elus deserunt aspernatur ipsum ducismus quibusdam quis voluptatibus.',
      },
      {
        year: 2009,
        activity: 'First level graduation in Graphic Design',
        detail:
          'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.',
      },
      {
        year: 2012,
        activity: 'Second level graduation in Graphic Design',
        detail: 'Ducimus, aliquam tempore autem itaque et accusantium!',
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="image-container">
          <img
            className="image-size"
            src={require('./assets/avatar.jpg')}
            alt="avatar"
          />
        </div>
        <main className="app">
          <div className="hello">
            <h1>HELLO,</h1>
            <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
          </div>
          <hr />
          <section>
            <h3>ABOUT ME</h3>
            <p>{this.state.introduce}</p>
          </section>
          <section>
            <h3>EDUCATION</h3>
            <div className="row-grid">
              <Periods educations={this.state.educations} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
