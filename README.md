jQuery-Once
===========

jQuery `.once()` method for adding behaviors or classes once per element.

## Basic Usage

```js
$('.post').once().doSomethingOnceOnTheseElements()
```

### How does it work?

#### Example: Single Element

```js
$('body').once(); // returns [body] (1st time)
$('body').once(); // returns [] (2nd time)
```

#### Example: Collection of Elements

```html
<div class="post" id="post_1">...</div>
<div class="post" id="post_2">...</div>
<div class="post" id="post_3">...</div>
```

```js
$('.post').once().highlight(); // highlights #post_1, #post_2 and #post_3

$.get(....) // dynamically loaded #post_4 via ajax
$('.post').once().highlight(); // highlights #post_4
```

### Custom Identifiers

You can also provide a custom identifier for the `once` method, to perform different actions on the same elements, each action only once per element.

```js
$('.post').once('highlight').highlight() // Highlight all posts
$('.post').once('highlight').highlight() // Does nothing

$('.post').once('blink').blink() // Blinks all posts
$('.post').once('blink').blink() // Does nothing
```