# helix

  jquery-like dom manipulation. Tiny (1kb minified & gzipped)

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
$('.name').text() // Matt
```

### #html(val)

Get and set HTML

```js
$('.name').html('<strong>Matt</strong>')
$('.name').html() // <strong>Matt</strong>
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

### #toggle(cls)

Toggle a class

```js
$('.name').toggle('person')
```

### #attr(attr, val)

Get and set attributes that are on the selected element.

```html
<input class="user" id="user" type="text" name="user">
```

```js
$('.user').attr('type', 'radio').name('person')
$('.user').attr('type') // radio
```

Get and set attribute that doesn't already exist

```js
$('.user').attr('data-author', 'matt')
```

## License

  MIT
