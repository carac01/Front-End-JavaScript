### Introduction

![javascript-curso.png](static/javascript-curso.png)

The website **with HTML and CSS is just static website**, without soul, which **never changes**.
For many animations which were created by important graphic designers, 
**it is always the same for returning to the beginning**.

Just right here it is appeared the third mile factor: the **programming languages**.
They give **the possibility to make the pages dynamic**, dependant for changes from the particular moment or user.


We have 2 types:
* **Frontend, logic from the browser side**. Usually it is used JavaScript.
* **Backend**, the pages are **created(painted) with a server**. You could learn more about this topic in [PHP course](https://programadorwebvalencia.com/cursos/php/base/). <br>

**JavaScript** (abbreviation as JS) is a **high level programming language** which was created in 1995 
(it's syntax's is nearer to human then to machine), 
**multi paradigm** (admit varies organization types) and **executed during the compilation**
(there is no previous step of the code compilation into the binary).
All these make your studying and developing easier. <br>

The **goal of this course** is to learn you the essential tasks 
which every professional frontend programmer has to know:

* Manipulation with HTML(DOM).
* Creation dynamic elements.
* Reaction for user actions (events).
* Form management.
* Interaction with other services (APIs). <br>

Are you ready that the users are being the main characters? 

#### Instruments for the course

You don't arrange nothing new at the moment if you are able to realise WebDesign: 

* Full text editor o IDE, [anything from the list](https://programadorwebvalencia.com/mejores-editores-en-dise%C3%B1o-web/) will be enough. 
* Web Browser.

#### Where do I put my JS code?

It should be inside the <script> tag, but here is the question...
Where should be tag in HTML?

#### Option 1. Naughty

Inside _<head>_ part - the page will not load until script is not completed:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script>
        // Here will be your code
    </script>
</head>
<body>
    <!-- TODO my HTML -->
</body>
</html>
```

#### Option 2: Classic

At the end of the _<body>_ part:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    </head>
    <body>
    
        <!-- TODO my HTML -->
    
        <script>
            // Here will be your code
        </script>
</body>
</html>
```

#### Option 3: Nice

Waiting till everything will be load to execute the script:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script>
    document.addEventListener('DOMContentLoaded', function () {
        // Here will be your code
    });
    </script>
</head>
<body>
    <!-- TODO my HTML -->
</body>
</html>
```

#### Option 4: Modern 

With a _[defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer)_ 👍 attribute which contains the external file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script defer src="code.js"></script>
</head>
<body>
    <!-- TODO my HTML -->
</body>
</html>
```

### Comments

The comments will be ignored by the language, that's why do not put by them.
The more your code will be documented, the easier it will be modified and increased.

#### The line

It should start with _//_.

```html
// My comment

// Another comment on the another line

```

#### The block

It starts with _/*_ and ends with _*/_.

```html
/* 
My comment
on
the different
lines
*/

```