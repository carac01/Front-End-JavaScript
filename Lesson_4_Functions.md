### Functions

There is the moment in the developing when you reuse the same code. 
Probably, that the code is formed in a couple of lines or hundreds of them.
At the organisational level it is more practical to create the group is capable to be invoked 
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

#### Argument by default

There can be the feature when the argument is optional, or which provides the permanent/fixed value 
if it was not declared:

```html
function logistic(packages=1) {
    console.info(`The numbers of packages for transportation: ${packages}`);
}

logistic();
// The numbers of packages for transportation: 1
logistic(3);
// The numbers of packages for transportation: 3
```

#### With an array of arguments

What will happen if we do not want to register the number of arguments?
O saying in other words:
when it could be represented the infinite number of arguments.
It is possible even if we create the array of arguments (let's look forward more):

```html
function categoriesOfThingsForTransportation(...categories) {
    console.info(categories);
}

categoriesOfThingsForTransportation('cloth', 'cosmetics', 'electronics');
// 
```

#### return

There are the functions that could be executed without returning any response in console: 
such functions contain _return_ statement instead of console.info() etc.:

```html
function reminder() {
    return 'Meeting at 15pm';
}

reminder();
```

Now the function is saved in const variable and call with console.info() to print it:

```html
const showReminder = reminder();
console.info(showReminder);
// Meeting at 15pm
```

The another advanced and practical example, could be the small function which helps us to calculate 
how old the person is:

```html
function calculateAge(birthdayDate) {
    let todayTimestamp = new Date().getTime();
    let birthdayDateTimestamp = (new Date(birthdayDate)).getTime();
    let oversightDaysInSeconds = 777600000; // does not work with older years
    let yearsInMilliseconds = 31536000000;
    return Math.trunc((todayTimestamp - birthdayDateTimestamp - oversightDaysInSeconds)/yearsInMilliseconds);
}

const name = "Andros";
const birthdayDate = "1987-07-11";
const age = calculateAge(birthdayDate);

console.info(`${name} was born ${birthdayDate} and has ${age} years`);
```

This mechanism that you executed by yourself the same as you used function _.toUpperCase()_ as it was the variable,
or in other words _pure functions_.

You can go further in the topic learning what the _functional programming_ is with 
[brief introduction to JavaScript](https://programadorwebvalencia.com/breve-introduccion-a-la-programacion-funcional-en-javascript/),
one of the three programming paradigms in the world.
