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

The ley words could not have spaces, accents or start with numbers:

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
