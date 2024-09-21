A module is a piece of program that specifies which other pieces it relies on and which functionality it provides for other modules to use (its interface).

# ES Modules

Modules have their own scope. \
Modules use the `import` and `export` keywords to define their dependencies and interface, respectively. \
This module system is usually called ES modules (where ES stands for ECMAScript). \
How such a module name is resolved to an actual program differs by platform. The browser treats them as web addresses, whereas Node.js resolves them to files. \
\
\
So, `import`, `export` are ES Modules system. 


# Packages

A package is a chunk of code that can be distributed (copied and installed). \
Contains one or more modules and info about other packages it depends on. \
`npm` to install and update packages. \

# CommonJS Modules

This looks like a shittier older version (pre 2015) that was bolted onto JS by necessity. \
Uses `require` & `exports` (not `export` like ES Modules). \

- read chapter for more details
\
The transition of the JavaScript community from CommonJS style to ES modules has been a slow and somewhat rough one. Fortunately we are now at a point where most of the popular packages on NPM provide their code as ES modules, and Node.js allows ES modules to import from CommonJS modules. While CommonJS code is still something you will run across, there is no real reason to write new programs in this style anymore.

# Building and bundling

Because fetching a single big file tends to be faster than fetching a lot of tiny ones, web programmers have started using tools that combine their programs (which they painstakingly split into modules) into a single big file before they publish it to the web. Such tools are called bundlers.