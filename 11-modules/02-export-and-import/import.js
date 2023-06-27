'use strict';

import { sayHi } from './export.js';

sayHi('Ruben'); // Hello, Ruben!

// or import * as object

import * as say from './export.js';

say.sayBye('Ruben'); // Bye, Ruben!

// importing default

import User from './user.js';

new User('Ruben');
