import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NCage } from '../src/NCage';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NCage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
