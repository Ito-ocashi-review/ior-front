import handler from '../handler';
import Review from '../../../models/Review';

// TODO validation
handler.post(async(req, res) => {
  const { comment, star } = req.body;
  console.log(req.body);

  try {
    const review = await Review.create({ comment, star });
    return res.status(200).json(review);
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

export default handler;
