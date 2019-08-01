import React from 'react';
import { shallow } from 'enzyme';
import { Item, ItemProps, DispatchProps } from './Item';

describe('Item component', () => {
    it('Should render', () => {
        const props: ItemProps & DispatchProps = {
            label: 'fakeLabel',
            id: 42,
            ownAddLine: jest.fn()
        };
        const wrapper = shallow(<Item {...props}  />);

        expect(wrapper).toBeTruthy();
        expect(props.ownAddLine).toHaveBeenCalledWith(
            'render Item Component with id: 42'
        );
    });
});
