import React from 'react'

class LangPicker extends React.Component {
  constructor() {
    super();
    this.setActiveLang = this.setActiveLang.bind(this);
  }
  componentDidMount() {
    const activeLangOnLoad = this.props.data;
    const activeLangItems = [].slice.call(document.querySelectorAll(`.${activeLangOnLoad}`));
    for (const activeLangItem of activeLangItems) {
      activeLangItem.classList.add('lang-active');
    };
  };
  setActiveLang(lang) {
    this.props.setRootLang(lang);
    const currentActiveLangLis = document.querySelectorAll('.lang-active');
    for (const langLi of currentActiveLangLis) {
      langLi.classList.remove('lang-active');
    };
    const langsToSetActive = document.querySelectorAll(`.${lang}`);
    for (const langToSetActive of langsToSetActive) {
      langToSetActive.classList.add('lang-active');
    };
  };
  render() {
    return (
      <div className="lang-picker">
        <LangPickerItem lang="en" setActiveLang={this.setActiveLang} /> /
        <LangPickerItem lang="fr" setActiveLang={this.setActiveLang} />
      </div>
    );
  };
};

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
