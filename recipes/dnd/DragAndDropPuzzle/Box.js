import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
  height: 30,
  width: 80,
  fontSize: 14,
  backgroundColor: 'darkgreen',
  color: 'white',
  padding: 5,
  textAlign: 'center',
  marginBottom: '1rem',
  cursor: 'move',
  display: 'inline-block',
};

const boxSource = {
  beginDrag(props) {
    return {
      index: props.index,
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
    }
  },
};


@DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name, index } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    return (
      connectDragSource(<div style={{ ...style, opacity, position: 'block' }}>
        {name}
                        </div>, )
    );
  }
}
