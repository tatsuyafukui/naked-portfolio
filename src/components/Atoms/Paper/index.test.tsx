import React from 'react';
import renderer from 'react-test-renderer';
import Paper from './index';
import { ElevationLevel } from '../../../constants';

describe('Paper', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Paper className={'className'}>ペーパー</Paper>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Paper logic test', () => {
  it('default className', () => {
    const result = renderer
      .create(<Paper>button</Paper>)
      .toJSON()
      .props.className.split(' ');
    expect(['', 'elevation1', 'rounded']).toEqual(result);
  });

  it('custom elevation className ', () => {
    const result = renderer
      .create(<Paper elevation={ElevationLevel.seven}>button</Paper>)
      .toJSON()
      .props.className.split(' ');
    expect(['', 'elevation7', 'rounded']).toEqual(result);
  });

  it('custom elevation className and outlined', () => {
    const result = renderer
      .create(
        <Paper variant={'outlined'} elevation={ElevationLevel.seven}>
          button
        </Paper>
      )
      .toJSON()
      .props.className.split(' ');
    expect(['', 'outlined', 'rounded']).toEqual(result);
  });

  it('not rounded class', () => {
    const result = renderer
      .create(<Paper square>button</Paper>)
      .toJSON()
      .props.className.split(' ');
    expect(['', 'elevation1']).toEqual(result);
  });
});
