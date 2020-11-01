import Local from 'passport-local';

export const localStrategy = new Local.Strategy((
    username,
    password,
    done,
) => {
  return done(null);

  // TODO find user after IOR-20
  findUser({ username, password })
    .then((user) => {
      done(null, user);
    })
    .catch((error) => {
      done(error);
    });
});
