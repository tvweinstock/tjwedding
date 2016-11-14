import React from 'react'

class LangPicker extends React.Component {
  constructor() {
    super();
    this.setActiveLang = this.setActiveLang.bind(this);
  }
  setActiveLang(lang) {
    // send active lang down with props and set active class on load
    console.log(document.querySelector(`.${lang}`));
    this.props.setRootLang(lang);
    document.querySelector('.lang-active').classList.remove('lang-active');
    document.querySelector(`.${lang}`).classList.add('lang-active');
  }
  render() {
    return (
      <div className="lang-picker">
        <LangPickerItem lang="en" setActiveLang={this.setActiveLang} /> /
        <LangPickerItem lang="fr" setActiveLang={this.setActiveLang} />
      </div>
    )
  }
}

class LangPickerItem extends React.Component {
  getActiveLang() {
    this.props.setActiveLang(this.props.lang);
  }
  render() {
    return (
      <li onClick={this.getActiveLang.bind(this)} className={this.props.lang}>
        {this.props.lang}
      </li>
    );
  }
};

export default LangPicker;
