# <%= name %>

[![Travis CI](https://img.shields.io/travis/<%= username %>/<%= name %>.svg?style=flat-square)](https://travis-ci.org/<%= username %>/<%= name %>)
[![npm](https://img.shields.io/npm/l/<%= name %>.svg?style=flat-square)](https://www.npmjs.org/<%= username %>/<%= name %>)

> <%= description %>

## Usage

Install [SAO](https://github.com/saojs/sao) first.

```bash
yarn global add sao
# or
npm i -g sao
```

### From npm

```bash
sao <%= name.replace('sao-', '') %> <my-project>
```

### From git

```bash
sao <%= username %>/<%= name %> <my-project>
```

## Contributing

All contributings are welcome. Just submit a PR!

## Authors

- [<%= authorName %>](<%= website %>)

## License

MIT &copy; [<%= authorName %>](<%= website %>)
