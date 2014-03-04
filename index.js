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
  // Behave as an array
  this.sort = [].sort;
  this.push = [].push;
  this.splice = [].splice;
  this.indexOf = [].indexOf;
  this.length = 0;

  // Wrap an existing DOM Node
  if (selector && selector.nodeType === 1) {
    this[0] = selector;
    this.length = 1;
    return;
  }
  // Handle receiving an array of DOM elements
  if (selector && selector.length && selector[0].nodeType === 1) {
    this._mergeArray(selector);
    return;
  }
  // Handle empty arrays
  if (typeof selector !== 'undefined' && selector.length === 0) {
    return;
  }

  context = (typeof context === 'undefined') ? document : context;
  var el = context.querySelectorAll(selector);
  this.selector = selector;
  if (el.length) {
    this._mergeArray(el);
  }
}


/**
 * Merge array into current Helix instance.
 *
 * @param {Array} arr
 * @api private
 */

Helix.prototype._mergeArray = function(arr) {
  for (var i = 0; i < arr.length; ++i) {
    if (this.indexOf(arr[i]) === -1) {
      this.push(arr[i]);
    }
  }
};

/**
 * Generic property getter
 *
 * @param {string} prop
 * @return {Array} - All values of property in current objects.
 * @api private
 */

Helix.prototype._get = function(prop) {
  var vals = [];
  for (var i = 0; i < this.length; ++i) {
    vals.push(this[i][prop])
  }
  return vals;
};

/**
 * Generic property setter
 *
 * @param {string} prop
 * @param {string} val
 * @return {Helix}
 * @api private
 */

Helix.prototype._set = function(prop, val) {
  for (var i = 0; i < this.length; ++i) {
    this[i][prop] = val;
  }
  return this;
};

/**
 * Define the innerText and innerHTML getters and setters
 */

['innerText', 'innerHTML'].forEach(
    function(prop) {
        var funcName = prop.replace('inner', '').toLowerCase();
        Object.defineProperty(Helix.prototype, funcName, {
            value: function(str) {
              if (typeof str === 'undefined') {
                return this._get(prop);
              } else {
                return this._set(prop, str);
              }
            }
        });
    });

/**
 * Add class
 *
 * @param {String} cls
 * @return {Helix}
 * @api public
 */

Helix.prototype.addClass = function(cls) {
  for (var i = 0; i < this.length; ++i) {
    classes(this[i]).add(cls);
  }
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
  for (var i = 0; i < this.length; ++i) {
    classes(this[i]).remove(cls);
  }
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
  for (var i = 0; i < this.length; ++i) {
    classes(this[i]).toggle(cls);
  }
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
  if (typeof val === 'undefined') {
    var vals = [];
    for (var i = 0; i < this.length; ++i) {
      vals.push(this[i].getAttribute(attr));
    }
    return vals;
  } else {
    for (var i = 0; i < this.length; ++i) {
      this[i].setAttribute(attr, val);
    }
    return this;
  }
};

/**
 * Get the descendants of each element in the current set of matched elements,
 * filtered by a selector.
 *
 * @param {String} selector
 * @return {Helix}
 * @api public
 */

Helix.prototype.find = function(selector) {
  var results = [];
  for (var i = 0; i < this.length; ++i) {
      var res = this[i].querySelectorAll(selector);
      res = Array.prototype.slice.call(res);
      results = results.concat(res);
  }
  // Remove duplicates
  return new Helix(results.filter(function(val, i, arr) {
      return (i <= arr.indexOf(val));
  }));
};

/**
 * Return a new Helix instance with the element at the specified index
 *
 * @param {number} index
 * @return {Helix}
 * @api public
 */

Helix.prototype.eq = function(index) {
  return new Helix(this[index]);
};

/**
 * Get the direct children of each element in the current set of matched elements,
 * filtered by a selector.
 *
 * @param {String} selector
 * @return {Helix}
 * @api public
 */

Helix.prototype.children = function(selector) {
  var selector = selector || '*';
  return this.find(this.selector ?
          // Append ' > ' properly for each comma separated selector
          this.selector.split(',').map(function(sel) {
              return sel + ' > ' + selector}).join(',') :
          selector);
};
