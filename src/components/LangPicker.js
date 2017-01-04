import React from 'react'

class LangPicker extends React.Component {
  constructor() {
    super();
    this.setActiveLang = this.setActiveLang.bind(this);
  }
  componentDidMount() {
    const activeLangOnLoad = this.props.data;
    const activeLangItems = document.querySelectorAll(`.${activeLangOnLoad}`)
    for (let i = 0; i < activeLangItems.length; i++) {
      activeLangItems[i].classList.add('lang-active');
    }
  }
  setActiveLang(lang) {
    this.props.setRootLang(lang);
    let currentActiveLang = document.querySelectorAll('.lang-active');
    for (let i = 0; i < currentActiveLang.length; i++) {
      currentActiveLang[i].classList.remove('lang-active');
    }
    let langToSetActive = document.querySelectorAll(`.${lang}`);
    for (let i = 0; i < langToSetActive.length; i++) {
      langToSetActive[i].classList.add('lang-active');
    }
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
