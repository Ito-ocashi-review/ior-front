import handler from '../handler';

export default handler
  .get(async(req, res) => {
    // GETの処理
    const uer = {
      name: 'hoge',
      displayName: 'ほげ',
    };
    return res.json(uer);
  })
  .post(async(req, res) => {
    // POSTの処理
    return res.json({});
  });
