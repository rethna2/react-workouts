import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';

const containerStyle = {
  height: 30,
  width: 80,
  border: '1px solid #333',
  color: 'white',
  padding: 5,
  textAlign: 'center',
  fontSize: 14,
  lineHeight: 'normal',
  position: 'absolute',
};

const boxPosition = [
  {
    left: 213,
    top: 48,
  },
  {
    left: 213,
    top: 82,
  },
  {
    left: 213,
    top: 126,
  },
  {
    left: 213,
    top: 162,
  },
  {
    left: 213,
    top: 196,
  },

];

const boxTarget = {
  drop(props, monitor) {
    // return { name: 'Dustbin' };
    props.onDrop(monitor.getItem());
  },
};

@DropTarget(props => (props.droppedItems.length === 0 ? ItemTypes.BOX : ''), boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const {
      canDrop, isOver, index, isSubmitted, connectDropTarget,
    } = this.props;
    const isActive = canDrop && isOver;

    let background = '#fff';
    if (isActive) {
      background = '#ccc';
    } else if (canDrop) {
      // backgroundColor = 'darkkhaki';
    }
    const { left, top } = boxPosition[index];

    const tickStyle = {
      display: isSubmitted ? 'inline-block' : 'none',
      paddingLeft: 5,
    };

    return connectDropTarget(<div style={{
 ...containerStyle, background, left, top,
}}
    >
      {
          this.props.droppedItems.map(({ text, isCorrect }, i) =>
            (<div key={i} style={{ color: isSubmitted ? isCorrect ?'green':'red' : 'black', whiteSpace: 'nowrap' }}> {text}
              <i className={isCorrect ? "fa fa-check" : "fa fa-times"} aria-hidden="true" style={tickStyle} />
             </div>))
        }
                             </div>, );
  }
}
