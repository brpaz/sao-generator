import { SAO } from 'sao';

test('it works', async () => {
  const sao = new SAO({
    generator: __dirname,
    mock: true,
    answers: {
      name: 'sao-test',
      desccription: 'Example Generator',
    },
  });

  await sao.run();

  const files = await sao.getOutputFiles();
  expect(files.length).toBeGreaterThan(0);
});
