import { Grid } from '@material-ui/core';
import React from 'react';
import TotalRankingDisplay from './TotalRankingDisplay';

// 仮置き
const repotersArray = [{ name: '城之内まこと', amount: 2000 },
                       { name: '斎藤慶喜', amount: 1000 },
                       { name: '服部健二', amount: 650 },
                       { name: 'ねこぽす', amount: 500 },
                       { name: 'ラカゼット', amount: 340 },
                       { name: 'john smith', amount: 10 }];

// 仮置き
const sweetsArray = [{ name: 'じゃがりこ', amount: 2000 },
                     { name: 'ぽてち', amount: 1000 },
                     { name: 'うまい棒', amount: 650 },
                     { name: 'ぼたぼた焼き', amount: 500 },
                     { name: 'カントリーマウム', amount: 340 },
                     { name: 'ねるねるねるね', amount: 10 }];

const TotalRanking:React.FC = () => {
  return (
    <>
      <Grid item xs={6}>
        <TotalRankingDisplay
          title="お菓子レポーターランキング"
          rankingArray={repotersArray}
          rankingUnit="レビュー"
        />
      </Grid>
      <Grid item xs={6}>
        <TotalRankingDisplay
          title="お菓子ランキング"
          rankingArray={sweetsArray}
          rankingUnit="point"
        />
      </Grid>
    </>
  );
};

export default TotalRanking;
