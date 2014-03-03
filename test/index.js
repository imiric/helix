
/**
 * Module dependencies.
 */

var $ = require('helix'),
    should = require('chai').should();

describe('constructor', function(){
  it('should select correct element', function(){
    var el = $('.name');
    el[0].should.have.property('nodeType').with.valueOf(1);
    el[0].className.should.equal('name');
  })

  it('can receive DOM element', function(){
    $(document.querySelector('.name')).length.should.equal(1);
  })

  it('can receive an array of DOM elements or Helix instance', function(){
    var el = $(document.querySelectorAll('.person span'));
    el.length.should.equal(3);
    $(el).length.should.equal(3);
  })
})

describe('contents', function(){
  it('should return inner text', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('.name', ctx).text().should.deep.equal(['Matt']);
  })

  it('should set inner text', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('.name', ctx).text('Harry');
    $('.name', ctx).text().should.deep.equal(['Harry']);
  })

  it('should return inner HTML', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('a', ctx).html().should.deep.equal(['about']);
  })

  it('should set inner HTML', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('a', ctx).html('<strong>lol</strong>');
    $('a', ctx).html().should.deep.equal(['<strong>lol</strong>']);
  })
})

describe('attributes', function(){
  it('should return existing attribute value', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('a', ctx).attr('href').should.deep.equal(['/about']);
  })

  it('should change attribute value', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('a', ctx).attr('href', '/me');
    $('a', ctx).attr('href').should.deep.equal(['/me']);
  })

  it('should add new attribute', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('.name', ctx).attr('data-type', 'first');
    $('.name', ctx).attr('data-type').should.deep.equal(['first']);
  })
})

describe('classes', function(){
  it('should add a new class', function(){
    var ctx = $('.person')[0].cloneNode(true);
    $('a', ctx).addClass('link');
    $('a', ctx)[0].classList.contains('link').should.deep.equal(true);
  })

  it('should remove a class', function(){
    var ctx = $('body')[0].cloneNode(true);
    $('div', ctx)[0].classList.contains('person').should.equal(true);
    $('div', ctx).removeClass('person');
    $('div', ctx)[0].classList.contains('person').should.equal(false);
  })

  it('should toggle a class', function(){
    var ctx = $('body')[0].cloneNode(true);
    $('div', ctx)[0].classList.contains('person').should.equal(true);
    $('div', ctx).toggle('person');
    $('div', ctx)[0].classList.contains('person').should.equal(false);
    $('div', ctx).toggle('person');
    $('div', ctx)[0].classList.contains('person').should.equal(true);
  })
})

describe('traversal', function(){
  it('should find descendants', function(){
    var $el = $('.person');
    $el.find('span').length.should.equal(3);
    $el.find('span.name').html().should.deep.equal(['Matt']);
  })
})
