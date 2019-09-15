const sao = require('sao');

const generator = __dirname;

test('default', async () => {
  const stream = await sao.mock(
    {
      generator
    },
    {
      name: 'sao-test'
    }
  );

  expect(stream.fileList).toContain('README.md');
});
