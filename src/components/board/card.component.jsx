import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sprite} from 'react-spritesheet';
import PropTypes from 'prop-types';
import spriteMap from './../../images/card.sprite.map';
import largeSpriteSheet from './../../images/spritesheet_uno.png';

class Card extends Component {
  constructor(props) {
    super(props);

    const spriteData = spriteMap[props.color + props.symbol];
    const {x, y, width, height} = spriteData;
    const key = props.key;
    
    this.state = {x, y, width, height, key};
  }

  render() {
    return (
      <div className="d-inline-block" key={this.state.key}>
        <Sprite filename={largeSpriteSheet} x={this.state.x} y={this.state.y} width={this.state.width} height={this.state.height}></Sprite>
      </div>
    );
  }
}


Card.propTypes = {
  color: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  key: PropTypes.string
};

const mapStoreToProps = store => {
  return {
  };
};

export default connect(mapStoreToProps, null)(Card);