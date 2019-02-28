import React from 'react';
import Board from './board.component';
import Players from './players.component';

const Page = props => (
  <div class="container-fluid d-flex h-100 flex-column">
    <div class="row flex-fill">
      <div class="col-9 bg-secondary card pb-3">
        <Board ></Board>
      </div>
      <div class="col-3">
        <div class="row h-100">
          <div class="col-12 h-50 pb-3">
            <Players></Players>
          </div>
          <div class="col-12 h-50 pb-3">
            <div class="card bg-light h-100">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;