export default {
  id: "default",
  url: process.env.DEFAULT_URL || "mongodb://mongo:27017/ior-back",
  connectionOptions: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
};
