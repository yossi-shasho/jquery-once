jQuery Just Once
===========

jQuery `.once()` method for adding behaviors or classes once per element.

## Install

1. Download [`jquery.once.js`](https://raw.github.com/yossi-shasho/jquery-once/master/jquery.once.js)
2. Add `<script type="text/javascript" src="PATH/TO/jquery.once.js"></script>` somewhere after your jQuery script

## Usage
### Basic
```js
$('.post').once().doSomethingOnAllPostsOnce();
```
### Common
```js
$('.post').once().highlight(); // highlghts all posts that haven't been highlighted yet
$('.post').once().highlight(); // does nothing
addNewPost();
$('.post').once().highlight(); // highlights only the newly added post
```

### How does it work?

[Play with it in this jsFiddle](http://jsfiddle.net/yossishasho/93TyH/2/)

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

Pass a string to the `once` method, to perform different actions on the same elements, each action only once per element.

```js
$('.post').once('highlighted').highlight() // Highlight all posts
$('.post').once('highlighted').highlight() // Does nothing

$('.post').once('wasBlinked').blink() // Blinks all posts
$('.post').once('wasBlinked').blink() // Does nothing
```

### Passing a Callback

Pass a callback directly to the `once` method, which will be called once per each element.

```js
$('.post').once(function() {
	$(this).doSomethingWithEachPostOnce();
});


// with a custom identifier
$('.post').once('highlight', function() {
	$(this).highlight();
});
```
