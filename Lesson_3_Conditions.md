### Conditions

The conditions let us to make the decisions:
* which conditions do I have to follow the instructions with?
* what should I do if the conditions are not met?

```html
if (condition) {
...
...
}
```

In case of the single order the instruction could be in one line:

```html
if (condition) ...;
```

#### Condition types:


|Symbol    |     Explanation 	   |     Example             |
|:-------: |:---------------------:| -----------------------:|
|    > 	   |      more then 	   |       if (1 > 0)        |
|    < 	   |      less then 	   |        if (1 < 0)       |
|    &&    |         and 	       |    if (1 > 0 && 67 > 0) |
|    //    |         or 	       |    if (1 > 10 // 67 > 0)|
|    ==    |    equal in value 	   |    if ('3' == 3)        |
|    ===   |equal in value and type|    if ('3' === '3')     |
|    ! 	   |         not 	       |    if (!(1 > 0))        |
|    !=    |     not equal 	       |    if ('9' != 6)        |
|    !==   |not equal in value and type |  if ('9' !== 9)    |
|    >=    |	more or equal 	   |   if (10 >= 10)         |
|    <=    |     less or equal 	   |    if (10 <= 20)        |
|    true  |       True 	       |    if (true)            |
|    false |       False 	       |    if (false)           |


```html
if (false === 0 > undefined && '10VE' === ''.concat(10, 'VE')) {
  console.info('The statement is ' + true);
}
// The statement is true
```

In one line (for short conditions the code looks cleaner):

```html
if (true) console.info('The statement is ' + true);
```

#### else

_else_ permit realising the other statement if the condition is not met:

```html
if (condition) {
 ...
} else {
 ...
}
```

#### else if

It is possible to have several conditions - one of them will be executed:

```html
if (condition) {
...
} else if (other condition) {
...
} else {
...
}
```

#### Ternary operator

It is possible to execute one instruction with _if_ and _else_. When you just start, 
do not recommend using it, but do not forget it.
The structure:
```html
condition ? 'Value that is resolved' : 'Value that is not resolved';
```

Example:
```html
(11-10) === parseInt('1') ? 'Statement is true' : 'Statement is false';
// Statement is true

(11-10) === '1' ? 'Statement is true' : 'Statement is false';
// Statement is false
```

One more example for real life of turtles 🐢🐢:
```html
let random_temperature = Math.floor(Math.random() * 50);
random_temperature < 28 ? 'Male of turtle' : 'Female of turtle';
```

#### switch

It behaves as the condition which value matched the all the cases:

```html
switch (variable) {
    case 0:
        ...;
        break;
    case 1:
        ...;
        break;
    case 2:
        ...;
        break;
    ...
    default:
        ...;
        break;
}
    
```

Let's watch the example:

```html
let genders = [
    {'chromosome' : 'XY', 'SRY': true, 'gender': 'male human ♂️'},
    {'chromosome' : 'XX', 'SRY': false, 'gender': 'female human ♀️'},
    {'chromosome' : 'ZZ', 'gender': 'male bird ♂️🦆'},
    {'chromosome' : 'ZW', 'gender': 'female bird ♀️🦆'},
];

let random_index = Math.floor(Math.random() * genders.length);

switch(genders[random_index].chromosome) {
    case genders[random_index].chromosome:
        console.info(genders[random_index].gender);
        break;
    default:
        console.info('Gender is not defined');
        break;
}

```

Some information about reproductive system mechanism - 
there are the links to some articles which helped to write the code above:
https://medlineplus.gov/genetics/gene/sry/
https://www.ncbi.nlm.nih.gov/books/NBK22266/#A273
https://rarediseases.org/rare-diseases/swyer-syndrome/
https://www.ncbi.nlm.nih.gov/books/NBK9989/
https://youtu.be/kMWxuF9YW38

#### Nullish Coalescing Operator

Sometimes we find the Null values. To prevent the problem, in ideal, to give the default value.
In JS there is the tool that returns the right side if the left is _null_ or _undefined_.

```html
const variable = 'Alternative' || 'Water'
// Alternative

const variable = undefined || 'Water'
// Water
```

It is recommended to use _??_, the alternative of _||_, which returns in some conditions with
_false_, _''_ or _0_:

```html
0 || 'Alternative' // Alternative
'' || 'Alternative' // Alternative
false || 'Alternative' // Alternative
undefined || 'Alternative' // Alternative
null || 'Alternative' // Alternative
```

While it is being used _??_:

```html
0 ?? 'Alternative' // 0
'' ?? 'Alternative' // ""
false ?? 'Alternative' // false
undefined ?? 'Alternative' // 'Alternative'
null ?? 'Alternative' // 'Alternative'
```
Without doubts, it is more reliable.

#### Optional chaining operator

Optional chaining operator defines the _undefined_ value for a property of object which does not exist.
For example, there is the object:

```html
const book = {
    title: "Real-time Django over the Wire",
    author: "Andros Fenollosa",
    details: {
        date: 2022-10-11,
        language: "English",
        pages: 210 
    }
};

book.title // "Real-time Django over the Wire"
book.published // undefined
```

There is no prevention when if we work with the first level of depth. 
But when we want to get the value with more depth level, and it does not exist, it is returned the 
error which will stop the execution:

```html
book.details.language // "English"
book.details.color // Uncaught TypeError
```

To resolve this we may catch the error and process or give the _undefined_. 
To make this we will be able to use the _question mark_ to mark it as optional:

```html
book.details.pages // 210
book.details?.timeToDeliver // undefined
```

If we mix with Coalescing Operator _??_, we may get the default value:

```html
book.details.language ?? "Spanish" // English
book.details?.audio ?? "Without audio" // Without audio 
```
