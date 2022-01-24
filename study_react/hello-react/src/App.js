import { Component, Fragment } from "react";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import MyComponent from "./MyComponents";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }

  handleClick = () => {
    this.setState({
      color : getRandomColor()
    });
  }

  render(){
    const name = "리액트";

    return (
    <>
      <Fragment>
        <button onClick={this.handleClick}> 랜덤 색상 </button>
        <LifeCycleSample color = {this.state.color} />
      </Fragment>
      <Fragment>
        <IterationSample />
      </Fragment>
      <Fragment>
        <div>
          <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
         </button>
        </div>
        <ValidationSample />
      </Fragment>
      <Fragment>
        <EventPractice />
      </Fragment>
      <hr />
      <Fragment>
        <Counter />
        <Say />
      </Fragment>
      <hr />
      <Fragment>
        <MyComponent name="React" favoriteNumber={1}>
          CHILDREN!
        </MyComponent>
      </Fragment>
      <hr />
      <Fragment>
        <div>
          <div className="react">{name}</div>
        </div>
      </Fragment>
      <hr />
      <Fragment>
        <h1>{name} 안녕</h1>
        <h2>잘 작동하나?</h2>
        <h1>test</h1>
        {/* 주석 다는 방법 */}
      </Fragment>
    </>
  );
  }

}

export default App;
