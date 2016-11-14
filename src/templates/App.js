import React from 'react';

import Header from '../components/Header';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import LangPicker from '../components/LangPicker'
import en from '../data/en'
import fr from '../data/fr'
import { Match } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    let langData = this.state.activeLang;
    return (
      <div>
          <div className="main">
            <LangPicker data={langData.data.lang} setRootLang={this.setRootLang} />
            <Header data={langData.header} />
            <Match exactly pattern="/"
                           render={() => <Main data={langData.main} />} />
            <Match exactly pattern="/about"
                          render={() => <About data={langData.about} />} />
            <Match exactly pattern="/contact"
                          render={() => <Contact data={langData.contact} />} />
          </div>
      </div>
    )
  }
}

export default App;
