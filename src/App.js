import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/Avatar';
import Greetings from './components/Greetings';
import AboutMe from "./components/AboutMe";
import EducationList from "./components/EducationList";

class App extends Component {
  render() {
    const greetings = {
      line1: 'Hello,',
      line2: 'My name is Kamil 24yo and this is my resume/cv'
    };
    const aboutMeText = 'Lorem ipsum dolor sit amet, consecteur adipisicing elit. Repelledus, non, cumque distinctio magni quam expedia velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.';
    const educationList = [
      {
        year: 1990,
        description: 'I was born in Katowice',
        details: 'Lorem ipsum dolor sit amet, consecteur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
      },
      {
        year: 2005,
        description: 'Secondary school specializing in artistic',
        details: 'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ispum ducimus quibusdam quis voluptatibus.'
      },
      {
        year: 2009,
        description: 'First level graduation in Graphic Design',
        details: 'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.'
      },
      {
        year: 2012,
        description: 'Second level graduation in Graphic Design',
        details: 'Ducimus, aliquam tempore autem itaque et accusantium!'
      }
    ];
    return (
      <main className="app">
        <Avatar />
        <Greetings
          line1={greetings.line1}
          line2={greetings.line2}
        />
        <div className='line-break' />
        <AboutMe text={aboutMeText} />
        <EducationList educationList={educationList} />
      </main>
    );
  }
}

export default App;
