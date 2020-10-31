import React from 'react';
import css from '../styles/index.scss'

function Top() {
  return(
    <div>
      {/* attach test style */}
      <p className={css.test}>
        Topページ
      </p>
    </div>
  );
}

export default Top;