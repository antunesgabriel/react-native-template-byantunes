import React from 'react';

import * as Styled from './hello.styles';

function Hello(): React.ReactElement {
  return (
    <Styled.Container>
      <Styled.Text>Hello</Styled.Text>
    </Styled.Container>
  );
}

export default Hello;
