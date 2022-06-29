### Functions

There is the moment in the developing when you reuse the same code. 
Probably, that that code is formed in a couple of lines or hundreds of them.
At hte organisational level it is more practical to create the group is capable to be invoked 
to copy and paste in different sites. Also, to modify it more quickly once instead of many.
This characteristic is controlled by the _function_.


#### Simple

The structure is the next:

```html
function alias() {
    // ... code ...
}
```

To execute (call) the function we use _alias_ with parenthesis:

```html
alias();
```

The example:

```html
function greeting() {
    console.info("Hello everyone!");
}

greeting();
// Hello everyone
```
