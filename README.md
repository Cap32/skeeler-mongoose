# skeeler-mongoose

[![Build Status](https://travis-ci.org/Cap32/skeeler-mongoose.svg?branch=master)](https://travis-ci.org/Cap32/skeeler-mongoose)
[![Coverage Status](https://coveralls.io/repos/github/Cap32/skeeler-mongoose/badge.svg?branch=master)](https://coveralls.io/github/Cap32/skeeler-mongoose?branch=master)

[WIP] JSON Schema Draft 6 plugin for [Skeeler](https://github.com/Cap32/skeeler)

## Table of Contents

<!-- MarkdownTOC -->

* [Simple Example](#simple-example)
  * [Equals native mongoose Schema](#equals-native-mongoose-schema)
* [Keywords](#keywords)
* [Related projects](#related-projects)
* [License](#license)

<!-- /MarkdownTOC -->

## Simple Example

```js
import Skeeler from 'skeeler';
import SkeelerMongoose from 'skeeler-mongoose';

const types = Skeeler.use('mongoose', new SkeelerMongoose()).getTypes();

const mySkeeler = new Skeeler({
  foo: types.string.required.unique,
  bar: types.number.index,
  baz: types.objectId.required,
  qux: types.array(types.string),
  quux: types.object({
    corge: types.mixed,
  }),
});

export default mySkeeler.export('mongoose', { timestamps: true });
```

##### Equals native mongoose Schema

```js
const { Schema } = Mongoose;
export default new Schema(
  {
    foo: {
      type: String,
      required: true,
      unique: true,
    },
    bar: {
      type: Number,
      index: true,
    },
    baz: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    qux: [
      {
        type: String,
      },
    ],
    quux: {
      type: new Schema({
        corge: Schema.Types.Mixed,
      }),
    },
  },
  {
    timestamps: true,
  },
);
```

## Keywords

Please checkout [keywords.js](/src/keywords.js)

## Related projects

* [skeeler](https://github.com/Cap32/skeeler)
* [skeeler-json-schema-draft-6](https://github.com/Cap32/skeeler-json-schema-draft-6)

## License

MIT
