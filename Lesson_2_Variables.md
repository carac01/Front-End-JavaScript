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