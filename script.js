function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //1. import React ReactDOM
//2. get the API url
//3. create the layout (box + inner content)
//4. add event listeners
//5. style
//6. complete user stories


const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

// const App = () => (
//   <h1>Selam</h1>
// );

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        "quote": "Life isn’t about getting and having, it’s about giving and being.",
        "author": "Kevin Kruse" }],


      index: 0 });_defineProperty(this, "getRandomIndex",

    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });_defineProperty(this, "getRandomColor",

    () => {
      const { colors } = this.state;
      const colorIndex = Math.floor(Math.random() * colors.length);
      this.setState({
        colorIndex });

    });}componentDidMount() {//call the API and update state
    fetch(API).then(res => res.json()).then(res => {// console.log(res);
      this.setState({ quotes: res.quotes }, this.getRandomIndex);getRandomIndex();});}render() {

    const { quotes, index } = this.state;
    // console.log(quotes[0]);

    const quote = quotes[index];

    // console.log(index)

    const tweetURL = 'https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}';

    return (
      React.createElement("div", { className: "wrapper d-flex align-items-center justify-content-center" },

      React.createElement("div", { className: "col-6 box p-4", id: "quote-box" },

      quote &&
      React.createElement("div", { className: "mb-4 innerbox" },
      React.createElement("div", { className: "speech-bubble p-3" },
      React.createElement("p", { id: "text" }, quote.quote)),

      React.createElement("cite", { className: "d-block text-right mt-4", id: "author" }, quote.author)),





      React.createElement("div", { className: "d-flex justify-content-between" },

      React.createElement("a", { className: "btn btn-primary",
        href: tweetURL,
        target: "_blank",
        id: "tweet-quote" },
      React.createElement("i", { className: "fab fa-twitter" }), " twitter"),


      React.createElement("button", { className: "btn btn-success",
        onClick: this.getRandomIndex, id: "new-quote" },
      React.createElement("i", { className: "fas fa-sync" }), " new quote")))));






  }}





ReactDOM.render(React.createElement(App, null), document.getElementById('app'));