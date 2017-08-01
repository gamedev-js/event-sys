/**
 * @class Event
 */
export default class Event {
  /**
   * @param {string} name
   * @param {object} opts
   * @param {object} [opts.detail]
   * @param {boolean} [opts.bubbles]
   */
  constructor(name, opts = {}) {
    this.name = name;
    this.detail = opts.detail;
    this.bubbles = opts.bubbles;
    this.target = null;
    this.sender = null;

    this._stopped = false;
  }

  /**
   * @method stop
   *
   * Stop propgation
   */
  stop() {
    this._stopped = true;
  }
}