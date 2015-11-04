# Grunt

## grunt-contrib-copy
Note: if you specify a `cwd`, you must set `expand: true` as well.

# Browserify

* Browserify does not cause any code to be invoked; it merely concats files based on the AST resulting from looking for
 `require()` calls.
 

## module.exports

you can assign a value to `exports`:
```
exports.foo = function() { return bar; };
```
because `exports` is the same piece of memory that `module.exports` is.
