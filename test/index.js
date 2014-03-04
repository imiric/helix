
/**
 * Module dependencies.
 */

var $ = require('helix'),
    should = require('chai').should();

describe('Helix', function(){
  describe('Helix(selector, context)', function(){
    it('should select correct element', function(){
      var el = $('.name');
      el[0].should.have.property('nodeType').with.valueOf(1);
      el[0].className.should.equal('name');
    })

    it('should be able to receive a DOM element', function(){
      $(document.querySelector('.name')).length.should.equal(1);
    })

    it('should be able to receive an array of DOM elements or Helix instance', function(){
      var el = $(document.querySelectorAll('.person span'));
      el.length.should.equal(3);
      $(el).length.should.equal(3);
    })

    it('should be able to receive an empty array', function(){
      (function() { $([]) }).should.not.throw(Error);
      $([]).length.should.equal(0);
    })

    it('should be able to receive undefined', function(){
      (function() { $(undefined) }).should.not.throw(Error);
      $(undefined).length.should.equal(0);
    })

    it('should be able to receive a context element', function(){
      var el = $('span', document.querySelector('.person'));
      el.length.should.equal(3);
      el.html().should.deep.equal(['Matt', 'mattmuelle@gmail.com', '']);
    })
  })

  describe('#text()', function(){
    it('should return inner text', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('.name', ctx).text().should.deep.equal(['Matt']);
    })
  })

  describe('#text(val)', function(){
    it('should set inner text', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('.name', ctx).text('Harry');
      $('.name', ctx).text().should.deep.equal(['Harry']);
    })
  })

  describe('#html()', function(){
    it('should return inner HTML', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('a', ctx).html().should.deep.equal(['about']);
    })
  })

  describe('#html(val)', function(){
    it('should set inner HTML', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('a', ctx).html('<strong>lol</strong>');
      $('a', ctx).html().should.deep.equal(['<strong>lol</strong>']);
    })
  })

  describe('#attr(attr)', function(){
    it('should return an existing attribute value', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('a', ctx).attr('href').should.deep.equal(['/about']);
    })
  })

  describe('#attr(attr, val)', function(){
    it('should change an existing attribute value', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('a', ctx).attr('href', '/me');
      $('a', ctx).attr('href').should.deep.equal(['/me']);
    })

    it('should add a new attribute', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('.name', ctx).attr('data-type', 'first');
      $('.name', ctx).attr('data-type').should.deep.equal(['first']);
    })
  })

  describe('#addClass()', function(){
    it('should add a new class', function(){
      var ctx = $('.person')[0].cloneNode(true);
      $('a', ctx).addClass('link');
      $('a', ctx)[0].classList.contains('link').should.deep.equal(true);
    })
  })

  describe('#removeClass()', function(){
    it('should remove a class', function(){
      var ctx = $('body')[0].cloneNode(true);
      $('div', ctx)[0].classList.contains('person').should.equal(true);
      $('div', ctx).removeClass('person');
      $('div', ctx)[0].classList.contains('person').should.equal(false);
    })
  })

  describe('#toggle()', function(){
    it('should toggle a class', function(){
      var ctx = $('body')[0].cloneNode(true);
      $('div', ctx)[0].classList.contains('person').should.equal(true);
      $('div', ctx).toggle('person');
      $('div', ctx)[0].classList.contains('person').should.equal(false);
      $('div', ctx).toggle('person');
      $('div', ctx)[0].classList.contains('person').should.equal(true);
    })
  })

  describe('#find()', function(){
    it('should return all descendants', function(){
      var $el = $('.person');
      $el.find('span').length.should.equal(3);
      $el.find('span.name').html().should.deep.equal(['Matt']);
    })
  })

  describe('#children()', function(){
    it('should return direct descendants', function(){
      var $el = $('body');
      $el.children('span.email').length.should.equal(0);
      $el.children('.person').length.should.equal(1);
    })
  })

  describe('#eq()', function(){
    it('should return a specific element or empty if not found', function(){
      var $el = $('.person span');
      $el.eq(1).html().should.deep.equal(['mattmuelle@gmail.com']);
      $el.eq(4).html().should.deep.equal([]);
    })
  })
})
