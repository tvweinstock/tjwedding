import React from 'react';
import FontAwesome from 'react-fontawesome';
import PlaylistEmbed from '../components/PlaylistEmbed';


class Contact extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="contact">
        <h1 className="underline white">{textData.title}</h1>
        <div className="icon-group">
          <input id="🎵" type="radio" name="contact-icons" defaultChecked="checked"/>
          <label htmlFor="🎵">
            <FontAwesome name='music' />
            <div className="contact-textcontent">
              <p>{textData.playlist}</p>
              <a href="https://open.spotify.com/user/11168621671/playlist/71h1aCpVqrvnLqrq0oU8SC">{textData.spotify}</a>
              <PlaylistEmbed />
            </div>
          </label>
          <input id="🏰" type="radio" name="contact-icons" />
          <label htmlFor="🏰">
            <FontAwesome name='map-marker' />
            <div className="contact-textcontent">
              <p>{textData.location}</p>
              <a href="https://www.google.fr/maps/place/Chalet+de+la+Porte+Jaune/@48.8384397,2.4593961,15z/data=!4m5!3m4!1s0x0:0x49071ec1487040be!8m2!3d48.8384397!4d2.4593961?sa=X&ved=0ahUKEwjH-KvO--LSAhUQsBQKHTycBpYQ_BIIlAEwDg">{textData.googleMapsLink}</a>
              <a href="http://www.chaletportejaune.com/fr/">{textData.venueLink}</a>
            </div>
          </label>
          <input id="💌" type="radio" name="contact-icons"/>
          <label htmlFor="💌">
            <FontAwesome name='envelope' />
            <div className="contact-textcontent">
              <p>{textData.contactInfo}</p>
              <h4>Tobi:</h4>
              <a className="tel" href="tel:+33 7 83 18 67 24">+33 7 83 18 67 24</a>
              <a className="email" href="mailto:tv.weinstock@gmail.com">tv.weinstock@gmail.com</a>
              <h4>Jeoffrey:</h4>
              <a className="tel" href="tel:+33 7 82 34 04 55">+33 7 82 34 04 55</a>
              <a className="email" href="mailto:jeoffrey.roussey@gmail.com">jeoffrey.roussey@gmail.com</a>
            </div>
          </label>
          <input id="🎁" type="radio" name="contact-icons"/>
          <label htmlFor="🎁">
            <FontAwesome name='gift' />
            <div className="contact-textcontent">
              <p>{textData.giftInfo}</p>
            </div>
          </label>
        </div>
      </section>
    );
  }
}


export default Contact;
