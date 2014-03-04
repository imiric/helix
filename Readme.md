# helix

  jquery-like dom manipulation. Tiny (2.1kB minified & gzipped)

## Installation

    $ component install matthewmueller/helix

## Tests

    $ make clean && make
    $ xdg-open test/test.html

## API

Require Helix.

```js
var $ = require('helix');
```

### $(selector)

Select an element.

```js
$('.name')
$('#nav')
```

### #text(val)

Get and set text

```js
$('.name').text('Matt')
$('.name').text() // ["Matt"]
```

### #html(val)

Get and set HTML

```js
$('.name').html('<strong>Matt</strong>')
$('.name').html() // ["<strong>Matt</strong>"]
```

### #find(selector)

Get the descendants of each element in the current set of matched elements,
filtered by a selector.

```js
$('.person').find('span')
```

### #children(selector)

Get the direct descendants of each element in the current set of matched
elements, filtered by a selector.

```js
$('.person').children('span')
```

### #eq(index)

Get a single element from the set of matched elements.

```js
$('span').eq(1).html()
```

### #addClass(cls)

Add a class

```js
$('.name').addClass('person')
```

### #removeClass(cls)

Remove a class

```js
$('.name').removeClass('person')
```

### #toggleClass(cls)

Toggle a class

```js
$('.name').toggleClass('person')
```

### #attr(attr, val)

Get and set attributes that are on the selected element.

```html
<input class="user" id="user" type="text" name="user">
```

```js
$('.user').attr('type', 'radio').attr('name', 'person')
$('.user').attr('type') // ["radio"]
```

Get and set attribute that doesn't already exist

```js
$('.user').attr('data-author', 'matt')
```

### #hide()

Hide all matched elements.

```js
$('span').hide()
```

### #show()

Show all matched elements.

```js
$('span').show()
```

### #toggle()

Toggle display of all matched elements.

```js
$('span').toggle()
```

## License

  MIT
