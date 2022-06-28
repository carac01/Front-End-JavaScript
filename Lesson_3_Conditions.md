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


Symbol 	        Explanation 	        Example

    > 	         more then 	           if (1 > 0)
    < 	         less then 	           if (1 < 0)
    && 	            and 	           if (1 > 0 && 67 > 0)
    || 	            or 	               if (1 > 10 || 67 > 0)
    == 	        equal in value 	       if ('3' == 3)
    === 	equal in value and type    if ('3' === '3')
    ! 	            not 	           if (!(1 > 0))
    != 	        not equal 	           if ('9' != 6)
    !==  not equal in value and type   if ('9' !== 9)
    >=      	more or equal 	       if (10 >= 10)
    <= 	        less or equal 	       if (10 <= 20)
    true 	       True 	           if (true)
    false 	       False 	           if (false)


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
    {'chromosome' : 'XY', 'gender': 'male'},
    {'chromosome' : 'XX', 'gender': 'female'}
];

let random_index = Math.floor(Math.random() * 2);

switch(genders[random_index].chromosome) {
    case genders[random_index].chromosome:
        console.info(genders[random_index].gender);
        break;
    default:
        console.info('Gender is not defined');
        break;
}

random result:
// male
or
// female
```

