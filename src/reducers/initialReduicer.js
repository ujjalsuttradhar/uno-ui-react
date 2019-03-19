import {NEW_GAME, JOIN_GAME, PLAYER_READY, PLAYER_UPDATE, GAME_UPDATE} from '../actions/types';

const initialState = {
  game: {},
  player: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case NEW_GAME:
      return {
        ...state,
        game: action.payload
      };
    case GAME_UPDATE:
      return {
        ...state,
        game: {...state.game, ...action.payload.game}
      }
    case JOIN_GAME:
      return {
        ...state,
        game: {...state.game, ...action.payload.game},
        player: {...state.player, ...action.payload.player}
      };
    case PLAYER_READY:
      return {
        ...state,
        player: action.payload
      };
    case PLAYER_UPDATE:
      return {
        ...state,
        game: {...state.game, ...action.payload.game},
        player: {...state.player, ...action.payload.player}
      }
    default:
      return state;
  }
}