/**
 * Module dependencies
 */

var classes = require('classes');

/**
 * Export `Helix`
 */

module.exports = create;

/**
 * Create `Helix`
 *
 * @param {string} selector
 * @param {DOMNode} [context=document]
 * @return {Helix}
 * @api public
 */

function create(selector, context) {
  return new Helix(selector, context);
}

/**
 * Initialize `Helix`
 *
 * @param {string} selector
 * @param {DOMNode} [context=document]
 * @return {Helix}
 * @api public
 */

function Helix(selector, context) {
  context = (typeof context === 'undefined') ? document : context;
  this.el = context.querySelector(selector);
  if (!this.el) throw new Error('cannot find ' + selector + ' selector');
  this.classes = classes(this.el);
}

/**
 * Get and set text
 *
 * @param {String} str
 * @return {Helix}
 * @api public
 */

Helix.prototype.text = function(str) {
  if (!str) return this.el.innerText;
  this.el.innerText = str;
  return this;
};

/**
 * Get and set HTML
 *
 *   $()
 *
 * @param {String} str
 * @return {Helix}
 * @api public
 */

Helix.prototype.html = function(str) {
  if (!str) return this.el.innerHTML;
  this.el.innerHTML = str;
  return this;
};

/**
 * Add class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.addClass = function(cls) {
  this.classes.add(cls);
  return this;
};

/**
 * Remove class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.removeClass = function(cls) {
  this.classes.remove(cls);
  return this;
};

/**
 * Toggle class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.toggle = function(cls) {
  this.classes.toggle(cls);
  return this;
};


/**
 * Get and set attribute
 *
 * @param {String} attr
 * @param {Mixed} val
 * @return {Helix}
 * @api public
 */

Helix.prototype.attr = function(attr, val) {
  if (!val) return this.el.getAttribute(attr);
  this.el.setAttribute(attr, val);
  return this;
};
