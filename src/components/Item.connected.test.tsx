import React from 'react';
import { mount } from 'enzyme';
import Item, { ItemProps } from './Item';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore();
const store = mockStore({});

describe('Item component with store', () => {
    it('Should render', () => {
        const props: ItemProps = {
            label: 'fakeLabel',
            id: 42,
        };
        const wrapper = mount(
            <Provider store={store}>
                <Item {...props}  />
            </Provider>
        );
        expect(wrapper).toBeTruthy();
    });
});
