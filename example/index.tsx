import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NCage } from '../.';

const App = () => {
  return (
    <div>
      <NCage alwaysVisible={true} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
