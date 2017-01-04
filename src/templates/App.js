import React from 'react';

import Header from '../components/Header';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import en from '../data/en'
import fr from '../data/fr'

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
      <div className="main">
        <Header data={langData.header} setRootLang={this.setRootLang} />
        {/* <LangPicker data={langData.data.lang}  /> */}
        <Main data={langData.main} />
        <About data={langData.about} />
        <Contact data={langData.contact} />
      </div>
    )
  }
}

export default App;
