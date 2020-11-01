import handler from '../handler';
import User from '../../../models/User';

handler.get(async(req, res) => {
  // GETの処理
  const user = {
    name: 'hoge',
    displayName: 'ほげ',
  };
  return res.json(user);
});

// TODO validation
handler.post(async(req, res) => {
  const { name, passeord } = req.body;

  try {
    const user = await User.createUserByName(name, passeord);
    return res.status(200).json(user);
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
