"use strict";

// While

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

let j = 3;
while (j) {
    console.log(j);
    j--;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 3);

// For

for (let l = 0; l < 3; l++) {
    console.log(l);
}

let l = 0;
for (; l < 3; l++) {
    console.log(l);
}

let m = 0;
for (; m < 3; ) {
    console.log(m);
    m++;
}

// Breaking the loop

for (;;) {
    break;
}

// Continue to next iteration

for (let n = 0; n < 100; n++) {
    if (n % 2 == 0) continue;
    console.log(n);
}

// Labels

Outer: for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (j == 99) break Outer;
    }
}

Outer: for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (j == 1) continue Outer;
    }
}
