import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { setupIntegrationTest } from './setupIntegrationTest';
import Counter from './Counter';
import { addCount } from './countActions';
import countReducer from './countReducer';

describe('<Count />', () => {
  let counterContainer;
  let store;
  let dispatchSpy;

  beforeEach(() => {
    ({ store, dispatchSpy } = setupIntegrationTest({ count: countReducer }));
    counterContainer = mount(
      <Provider store={store}>
        <Counter />
      </Provider>,
    );
  });

  it('should render count with 1 count', () => {
    const button = counterContainer.find('input[type="button"]');
    expect(button.props().value).toBe('The count is 1');
  });

  it('should increase count in one when clicking on input', () => {
    let button = counterContainer.find('input[type="button"]');
    button.simulate('click');

    expect(dispatchSpy).toBeCalledWith(addCount());

    button = counterContainer.find('input[type="button"]');
    expect(button.props().value).toBe('The count is 2');
  });
});
