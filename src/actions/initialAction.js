import {NEW_GAME, JOIN_GAME, PLAYER_READY, GAME_UPDATE, PLAYER_UPDATE} from './types';
import { post } from './../lib/request';
import socketService from './../lib/socketService';
// import config from './../config';

const url = `/uno`;

export const createNewGame = () => dispatch => {
  const reqUrl = `${url}/new`;

  post(reqUrl)
  .then(data => 
    dispatch({
      type: NEW_GAME,
      payload: data
    })
  );
};

export const joinGame = payload => dispatch => {
  const reqUrl = `${url}/player`;
  const {gameId} = payload;
  // this dispatch is useful when player directly joins a game
  dispatch({
    type: NEW_GAME,
    payload: {gameId, joined: true} // indicates player joined without creating a game
  });

  post(reqUrl, payload)
  .then(data => 
    dispatch({
      type: JOIN_GAME,
      payload: data
    })
  );
};

export const playerReady = payload => dispatch => {
  const reqUrl = `${url}/player/ready`;

  post(reqUrl, payload)
  .then(data => 
    dispatch({
      type: PLAYER_READY,
      payload: data
    })
  );
};

export const prepareForSocket = ({gameId, playerId}) => dispatch => {
  socketService.connect(gameId);
  socketService.onGameUpdate(gameId, data => dispatch({
    type: GAME_UPDATE,
    payload: data
  }));
  socketService.onPlayerUpdate(playerId, data => dispatch({
    type: PLAYER_UPDATE,
    payload: data
  }));
}