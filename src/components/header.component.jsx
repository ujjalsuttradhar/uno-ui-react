import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button.component';
import GameCreatedModal from './game.created.modal.component';
import JoinGameModal from './join.game.modal.component';
import { createNewGame } from './../actions/initialAction';
import { toggleJoinGameModal } from './../actions/uiAction';
import get from 'lodash.get';
import packageJson from './../../package.json';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onCreateGameClick = this.onCreateGameClick.bind(this);
    this.onJoinGameClick = this.onJoinGameClick.bind(this);
  }

  onCreateGameClick() {
    this.props.createNewGame();
  }

  onJoinGameClick() {
    this.props.toggleJoinGameModal();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="navbar-brand h1">Halum Uno <small className="text-muted">&ndash; {packageJson.version}</small></div>
          <div>
            { get(this.props.player, 'status') === undefined
              ? <Button content="Join Game"
                  className="btn-outline-success" wrapperClassName="pl-3"
                  onClick={this.onJoinGameClick}>
                </Button>
              : ''
            }
            <Button content="Create Game" 
              className="btn-outline-warning" wrapperClassName="pl-3"
              onClick={this.onCreateGameClick}>
            </Button>
          </div>
        </nav>
        <GameCreatedModal></GameCreatedModal>
        <JoinGameModal show={this.state.showJoinGameModal}></JoinGameModal>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, { createNewGame, toggleJoinGameModal })(HeaderComponent);