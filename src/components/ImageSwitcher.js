import React from 'react';

const imageSwitcherContent = {
  image1: {imgSrc: require('../css/images/tj4.jpg')},
  image2: {imgSrc: require('../css/images/tj2.jpg')},
  image3: {imgSrc: require('../css/images/tj5.jpg')},
  image4: {imgSrc: require('../css/images/tj3.jpg')}
};

class ImageSwitcher extends React.Component {
  constructor() {
    super();
    this.renderSwitcherContent = this.renderSwitcherContent.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
    this.addActiveClass = this.addActiveClass.bind(this);
  };
  setActiveImage(image) {
    this.setState({activeImage:image});
    this.addActiveClass(image);
  };
  addActiveClass(image) {
    const switcherContainers = [].slice.call(document.querySelectorAll(".imageSwitcher__image-container"));
    const switcherItems = [].slice.call(document.querySelectorAll(".switcherItemsNav li"));
    switcherContainers.forEach(function(image){
      image.classList.remove("slideActive");
    });
    switcherItems.forEach(function(listItem){
      listItem.classList.remove('slideActive');
    });
    document.getElementById(image).classList.add(this.state.activeClass);
    const activeNav = document.querySelectorAll(`.${image}`)[0];
    activeNav.classList.add(this.state.activeClass);
  };
  componentWillMount() {
    this.state = {
      switcherContent: imageSwitcherContent,
      activeClass: 'slideActive'
    };
  }
  componentDidMount() {
    const initialActiveImage = Object.keys(this.state.switcherContent)[0]
    this.setState({activeImage: initialActiveImage});
    this.addActiveClass(initialActiveImage);
  };
  renderSwitcherContent(key) {
    return <ImageSwitcherItem key={key} index={key} details={this.state.switcherContent[key]}/>
  };
  renderListItems(key) {
    return <NavSwitcherItem key={key} index={key} setActiveImage={this.setActiveImage} />
  };
  render() {
    return (
      <div>
        <div className="imageSwitcher__container">
          {Object.keys(this.state.switcherContent).map(this.renderSwitcherContent)}
          <ul className="switcherItemsNav">
            {Object.keys(this.state.switcherContent).map(this.renderListItems)}
          </ul>
        </div>
        <p>{this.props.caption}</p>
      </div>
    );
  }
};
const ImageSwitcherItem = (props) => {
  return (
    <div id={props.index} className="imageSwitcher__image-container">
      <img src={props.details.imgSrc}
           role="presentation" />
    </div>
  );
};

class NavSwitcherItem extends React.Component {
  constructor() {
    super();
    this.getActiveImage = this.getActiveImage.bind(this);
  }
  getActiveImage() {
    this.props.setActiveImage(this.props.index);
  };
  render() {
    const switcherNumber = this.props.index.slice(-1);
    return (
      <li onClick={this.getActiveImage} className={this.props.index}>
        {switcherNumber}
      </li>
    );
  }
};

export default ImageSwitcher;
