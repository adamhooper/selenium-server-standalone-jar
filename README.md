This repository includes a jarfile. It points to it.

## Usage

### Installation

    npm install --save-dev selenium-server-standalone-jar

### Usage

This is up to you. All you get is:

    var jar = require('selenium-server-standalone-jar');
    console.log(jar.path);    // path to selenium-server-standalone-X.YY.Z.jar
    console.log(jar.version); // X.YY.Z

This repository has no advice as to how to run the jar. Other libraries should
fill that void; they can depend on this library to keep things simple.

### TypeScript

This library includes a TypeScript definition file. If you're using TypeScript,
you can use this library like this:

    import * as jar from 'selenium-server-standalone-jar';
    console.log(jar.path);    // path to selenium-server-standalone-X.YY.Z.jar
    console.log(jar.version); // X.YY.Z