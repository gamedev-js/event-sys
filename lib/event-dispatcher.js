import Event from './event';

/**
 * @class EventDispatcher
 */
export default class EventDispatcher {
  constructor() {
    this._events = [];
  }

  /**
   * @method tick
   */
  tick() {
    for (let i = 0; i < this._events.length; ++i) {
      this._processEvent(this._events[i]);
    }
    this._events = [];
  }

  /**
   *
   * @param {EventEmitter} sender
   * @param {Event|string} evt
   * @param {object} [opts]
   */
  dispatch(target, evt, opts) {
    let event = evt;
    if (typeof evt === 'string') {
      event = new Event(evt, opts);
      event.target = target;
    }

    this._events.push(event);
  }

  _processEvent(event) {
    let node = event.target;

    while(node) {
      node.emit(event.name, event);

      if (!event.bubbles || event._stopped) {
        break;
      }

      node = node.parent;
    }
  }
}