import * as React from 'react';
import './App.css';
import { AppBar, Typography, Button } from 'material-ui';
import ListComponent from './comps/ListComponent';

type State = {
  items: string[],
};

type Props = {

};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      items: [],
    };
  }

  render() {
    const { items } = this.state;

    return (
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}} className="App">
        <AppBar style={{position: 'static'}}>
          <Typography variant="display1">Hello</Typography>
          <Button onClick={this.handleClick}>
            start
          </Button>
        </AppBar>
        <ListComponent items={items}/>
      </div>
    );
  }

  private handleClick() {
    let itemArr: string[] = [];
    if (this.state.items.length === 0) {
      for (let i = 0; i < 100; i++) {
        itemArr.push('item ' + i);
      }
    }

    this.setState({items: itemArr});
  }
}

export default App;
