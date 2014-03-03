
/**
 * Module dependencies.
 */

var $ = require('helix'),
    should = require('chai').should();

describe('selector', function(){
  it('should throw error if missing', function(){
    // Work on a copy of the elements, to not modify for other tests
    var ctx = $('.person').el.cloneNode(true);
    (function() { $('.missing', ctx) }).should.throw(Error);
  })

  it('should select correct element', function(){
    var ctx = $('.person').el.cloneNode(true);
    (function() { $('.name', ctx) }).should.not.throw(Error);
    var el = $('.name', ctx).el;
    el.should.have.property('nodeType').with.valueOf(1);
    el.className.should.equal('name');
  })
})

describe('contents', function(){
  it('should return inner text', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('.name', ctx).text().should.equal('Matt');
  })

  it('should set inner text', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('.name', ctx).text('Harry');
    $('.name', ctx).text().should.equal('Harry');
  })

  it('should return inner HTML', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('a', ctx).html().should.equal('about');
  })

  it('should set inner HTML', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('a', ctx).html('<strong>lol</strong>');
    $('a', ctx).html().should.equal('<strong>lol</strong>');
  })
})

describe('attributes', function(){
  it('should return existing attribute value', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('a', ctx).attr('href').should.equal('/about');
  })

  it('should change attribute value', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('a', ctx).attr('href', '/me');
    $('a', ctx).attr('href').should.equal('/me');
  })

  it('should add new attribute', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('.name', ctx).attr('data-type', 'first');
    $('.name', ctx).attr('data-type').should.equal('first');
  })
})

describe('classes', function(){
  it('should add a new class', function(){
    var ctx = $('.person').el.cloneNode(true);
    $('a', ctx).addClass('link');
    $('a', ctx).classes.contains('link').should.equal(true);
  })

  it('should remove a class', function(){
    var ctx = $('body').el.cloneNode(true);
    $('div', ctx).classes.contains('person').should.equal(true);
    $('div', ctx).removeClass('person');
    $('div', ctx).classes.contains('person').should.equal(false);
  })

  it('should toggle a class', function(){
    var ctx = $('body').el.cloneNode(true);
    $('div', ctx).classes.contains('person').should.equal(true);
    $('div', ctx).toggle('person');
    $('div', ctx).classes.contains('person').should.equal(false);
    $('div', ctx).toggle('person');
    $('div', ctx).classes.contains('person').should.equal(true);
  })
})
