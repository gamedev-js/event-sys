## event-sys

High performance event system mainly foucs on game.

## Install

```bash
npm install event-sys
```

## Usage

**used as class**

```javascript
import { EventEmitter } from 'event-sys';

let e = new EventEmitter();
e.on('foobar', (foo, bar) => {
  // ouput: 'foo', 'bar'
  console.log(`${foo}, ${bar}`);
});
```

**mixin with Node**

```javascript
import { EventEmitter } from 'event-sys';
import { Node } from 'scene-graph';

class EventNode extends Node {
  constructor() {
    this._initEmitter();
  }
}
EventEmitter.mixin(EventNode);
```

## Documentation

TODO

## License

MIT © 2017 Johnny Wu