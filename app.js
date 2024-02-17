class Message extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    this.setState(prevState => ({
      messageIsActive: !prevState.messageIsActive
    }));
  }

  render() {
    console.log(this.state.messageIsActive);

    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus provident unde maxime recusandae, ea iusto natus fugit autem molestiae expedita similique qui nostrum ut blanditiis! Sunt mollitia fuga fugiat.';

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>Pokaż</button>
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById('root'));