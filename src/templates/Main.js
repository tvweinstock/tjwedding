import React from 'react';

class Main extends React.Component {
  render() {
    const textData = this.props.data;
    return (
      <section id="home">
        <h1>{textData.mainTitle}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed doloremque deserunt ipsa aliquid aut quas, enim repellat maiores, molestiae mollitia dolores commodi, nihil. Deleniti doloremque nisi officiis laudantium exercitationem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed doloremque deserunt ipsa aliquid aut quas, enim repellat maiores, molestiae mollitia dolores commodi, nihil. Deleniti doloremque nisi officiis laudantium exercitationem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed doloremque deserunt ipsa aliquid aut quas, enim repellat maiores, molestiae mollitia dolores commodi, nihil. Deleniti doloremque nisi officiis laudantium exercitationem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed doloremque deserunt ipsa aliquid aut quas, enim repellat maiores, molestiae mollitia dolores commodi, nihil. Deleniti doloremque nisi officiis laudantium exercitationem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed doloremque deserunt ipsa aliquid aut quas, enim repellat maiores, molestiae mollitia dolores commodi, nihil. Deleniti doloremque nisi officiis laudantium exercitationem!</p>
      </section>
    );
  }
}

export default Main;
