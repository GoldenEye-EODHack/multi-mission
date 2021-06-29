import React from 'react';

import App from '../common/app';
import {
  Inpage,
  InpageBody
} from '../../styles/inpage';

export default class About extends React.Component {
  render () {
    return (
      <App pageTitle='Fusion'>
        <Inpage>
          <InpageBody>
            <p>Fusion Home</p>
          </InpageBody>
        </Inpage>
      </App>
    );
  }
}
