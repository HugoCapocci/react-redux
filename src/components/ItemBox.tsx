import React, { Component } from 'react';
import Item from './Item';

export interface ItemBoxProps {
    size: number,
    itemsLabel: string
}

export default class ItemBox extends Component<ItemBoxProps> {
    getItems = () => {
        const items = [];
        for (let i = 0; i < this.props.size; i++) {
            items.push(<Item id={i} key={i} label={this.props.itemsLabel} />);
        }
        return items;
    }

    render() {
        return <div>
            {this.getItems()}
        </div>
    }
}
