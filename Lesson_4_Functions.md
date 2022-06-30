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

#### Arguments

It is possible to personalise the instructions with arguments and variables when it is invoked.
Let's see how to work with the one argument:

```html
function sunDiameter(diameter) {
    console.log(`Eratosthenes made the diameter of the Sun to be about ${diameter} times that of the Earth`);
}

sunDiameter(27);
//Eratosthenes made the diameter of the Sun to be about 27 times that of the Earth
```

And, if we need to increase the number of the arguments, separate them with the comma:

```html
function leapYear(normalYearDays, leapYearDays) {
    console.log(`Eratosthenes calculated ${normalYearDays} days in a usual year, fourth year there would be ${leapYearDays} days`);
}

leapYear(365, 366);
//Eratosthenes calculated 365 days in a usual year, fourth year there would be 366 days
```
