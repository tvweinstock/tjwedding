import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'

import Header from './components/Header';
import Main from './templates/Main';
import About from './templates/About';
import Contact from './templates/Contact';
import NotFound from './templates/NotFound';
import LangPicker from './components/LangPicker'
import en from './data/en'
import fr from './data/fr'

class Root extends React.Component {
  constructor() {
    super();
    this.setRootLang = this.setRootLang.bind(this);
  }
  componentWillMount() {
    const localStorageRef = localStorage.getItem(`lang`);
    if (localStorageRef) {
      this.setState({
        activeLang: JSON.parse(localStorageRef)
      });
    } else {
      this.setState({activeLang:en});
    }

  }
  setRootLang(lang) {
    if (lang === "fr")
      this.setState({activeLang:fr});
    else
      this.setState({activeLang:en});
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`lang`, JSON.stringify(nextState.activeLang));
  }
  render() {
    const langData = this.state.activeLang;
    return (
      <div>
        <BrowserRouter>
          <div className="main">
            <LangPicker data={langData.lang} setRootLang={this.setRootLang} />
            <Header data={langData.header} />
            <Match pattern="/" component={Main} data={langData.main} />
            <Match pattern="/about" component={About} data={langData.about} />
            <Match pattern="/contact" component={Contact} data={langData.contact} />
            <Miss component={NotFound}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


render(
  <Root />,
  document.getElementById('root')
);
