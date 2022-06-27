### Variables

The variables are the instruments for saving the content in the memory.
Its structure has the next form:

```html
[type] [key] = [value];
```
From the code above probably you've already tumbled to that JS is typed language, 
but it is allowed not to specify type during the variable initialization.

For example:

```html
const name = 'Harmonia';
// or also possible:
name = 'Harmonia';
```

The keywords could not have spaces, accents or start with numbers:

```html
const name = 'Marie'; // Good
const 2name = 'Per'; // Bad
const name with surname = 'Marie Fredriksson'; // Bad
const nameWithSurname = 'Per Gessle'; // Good, camel case format is applicable
```

Instead of spaces it is used camel case format - the next part of word should start from a capital letter:

```html
const vocalsAndGuitar = 'Marie Fredriksson';
const vocalsAndKeyboards = 'Per Gessle';
```

#### Types

* **const**: local access, only read;
* **let**: local access, editable;
* **var**: global access, editable.

```html
const genre = 'Pop Rock';
let tracks = 15;
var album = 'Joyride';
```

#### Content types

**Text** (String)
Could be defined with single or double quotes:

```html
let name = 'Leche Merengada';
let name = "Leche Merengada";
```

#### Integer Precision

```html
let calories = 100;
```

#### Floating Precision
Use dot instead of point:

```html
let weight = 0.5;
```

#### Boolean

```html
let sweet = true;
let sour = false;
```

#### Null

```html
let sugar = null;
```

#### Undefined
Absence of value. We do not define it:

```html
let pieces = undefined;
```

#### JSON (object)

This is the value which contains other values.
It is used to save the complicated structure in one variable.

```html
[type] [key] = {
    [subkey]: [value],
    [subkey]: [value]
};
```

The subkeys are separated with point inside.
For example:

```html
let desert = {
	name: 'Leche Merengada',
	calories: 100,
	weight: 0.5
};
```

```textmate
⚠️Do not make the mistake with adding the point at the last line.
```

#### Arithmetic operations:

#### Addition

It is used the same elements that you already know.
For example, for addition 2 variables we use symbol **+**:

```html
const ten = 10;
const five = 5;
const fifteen = ten + five;

console.info(fifteen);
// 15
```

It is also possible to realise the addition with the values directly:

```html
const age = 34 + 1;

console.info(age);
// 35
```

#### Subtraction

```html
const result = number1 - number2;
```

#### Division

```html
const result = number1 / number2;
```

#### Multiplication

```html
const result = number1 * number2;
```

#### Modulus

```html
const result = 15 % 6;

console.info(result);
// 3
```

#### Exponentiation

```html
const result = number1 ** number2;
```

#### Parenthesis
If you want to realise the operations more complicated, then it could be used Parenthesis:

```html
const result = (2 * 0.5) + (100 / 10);
console.log(result);
// 11
```

#### Increments and decrements

If you want to increase or reduce some numbers, you could use the next strategy:

```html
let number = 1;
number += 1;
// 2
```

It is the same as do:

```html
let number = 1;
number = number + 1;
// 2
```

The most usable is shortcut with ++ 0 --. I advance you that the variable will not be the constant:

```html
let number = 1;
number++;
// 2

let secondNumber = 1;
secondNumber--;
// 0
```

The value is increased and decreased on 1.

Though you have to know that it is possible to use it as prefix and suffix for different outputs/returns:

```html
// Increments with suffix:
let number = 5;
console.log(number++);
// 6
console.log(number);
// 5

// Increments with prefix:
let number = 5;
console.log(++number);
// 6
console.log(number);
// 6
```

The difference is:
_number++_ returns the not modification value, before;
_++number_ returns the modified value.

Also, it is applicable for -- mode.

### Manipulations

#### Concatenations 

To join the strings we have different options:

* with the '+' symbol:

```html
const name = 'Tatra';
const belonging = ' Hunnen';
const complete = name + belonging;
// Tatra Hunnen
```

With the tagged templates:

```html
const place = 'The Alhambra';
const definition = '$place was a palatine city, General Captaincy of the Kingdom of Granada in 1870.';
console.log(definition);
// The Alhambra was a palatine city, General Captaincy of the Kingdom of Granada in 1870.
```

Or with the _concat()_ function:

```html
const place = 'The Alhambra ';
const definition = 'was a palatine city, General Captaincy of the Kingdom of Granada in ';
const year = 1870;
const text = ''.concat(place, definition, year);
console.log(text);
// The Alhambra was a palatine city, General Captaincy of the Kingdom of Granada in 1870.
```

### Manipulations with a string

```html
const normalText = 'Manipulation With The Sting';
const uppercaseText = normalText.toUpperCase();
const lowercaseText = normalText.toLowerCase();
const lengthOfText = normalText.length();
```

### Changing the types

Integer/Float to String:
```html
const text = 2 + '';
const text = (2.0).toSting();
```

Sting to Integer/Float - to move a text into a number we will use 2 functions:
```html
const number = parseInt(2);
const number = parseFloat(2.0);
```