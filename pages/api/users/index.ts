import handler from '../handler';

handler.get(async(req, res) => {
  // GETの処理
  const user = {
    name: 'hoge',
    displayName: 'ほげ',
  };
  return res.json(user);
});

export default handler;
