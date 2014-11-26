# yieldable

Make functions/methods yieldable.

## Installation

```
npm install make-yieldable --save
```

## Example

Here is an example how to use yieldable with an object method: 

```js
var yieldable = require('make-yieldable');
var SomeClass = require('some-package').SomeClass;

var koa = require('koa');
var app = koa();

app.use(function *() {
    // do something...
    var myObj = new SomeClass();
    this.body = yield yieldable(myObj.someFunc, myObj, ['some', 'arguments'])
});
```

And if you want to use a static function:

```js
var yieldable = require('make-yieldable');
var readFile = require('fs').readFile;

var koa = require('koa');
var app = koa();

app.use(function *() {
    // do something...
    this.body = yield yieldable(readFile, ['/path/to/file...']);
});
```

# License

  MIT