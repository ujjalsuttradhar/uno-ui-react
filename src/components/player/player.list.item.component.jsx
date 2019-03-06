import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ArrowDownIcon, ArrowUpIcon} from 'react-octicons';
import { ShakeSlow} from 'reshake';

class PlayerListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isMeCurrentPlayer = this.props.playing && this.props.player.turn;
    return (
      <ShakeSlow   {...{fixed: true, fixedStop: true, dur:2500, trigger: isMeCurrentPlayer}}>
        <li className={'list-group-item d-flex justify-content-between align-items-center ' 
            + (isMeCurrentPlayer ? 'active' : '')}>
            <div>
              <span className={this.props.playing ? 'visible' : 'invisible'}>
                {this.props.game.direction > 0 ? <ArrowDownIcon/> : <ArrowUpIcon/>}
              </span>
              <span className="pl-3">{this.props.playerName}</span>
            </div>
          <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
        </li>
      </ShakeSlow>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(PlayerListItem);