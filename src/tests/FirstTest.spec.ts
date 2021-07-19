import User from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Jony';

  expect(user.name).toEqual('Jony');
});
