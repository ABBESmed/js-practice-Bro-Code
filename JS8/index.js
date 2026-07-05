// Math = built in object that provides a collection of properties and methods
console.log(Math.PI);
console.log(Math.E);

let x = 2.1;
let y = 3.5;
let z = 4.9;
let t;
let v;
let w;

t = Math.round(x);
console.log(t);
t = Math.floor(x);
console.log(t);
t = Math.ceil(x);
console.log(t);

v = Math.round(y);
console.log(v);
v = Math.floor(y);
console.log(v);
v = Math.ceil(y);
console.log(v);

w = Math.round(z);
console.log(w);
w = Math.floor(z);
console.log(w);
w = Math.ceil(z);
console.log(w);

let p = 5.269;
let m;
m = Math.trunc(p); // this will delete the decimal portion like in p = 5.269
console.log(m);

let s = 4;
let q = 2;
let h = 0;
let b;

b = Math.pow(s, q);
console.log(b);
b = Math.sqrt(s);
console.log(b);
b = Math.log(s);
console.log(b);

b = Math.sin(0);
console.log(b);
b = Math.cos(h);
console.log(b);
b = Math.tan(h);
console.log(b);

let r = -2;
let o;

o = Math.abs(r);
console.log(o);

let d = -5;
let g;
g = Math.sign(d);
console.log(g);

let nb1 = 9;
let nb2 = 6;
let nb3 = 3;

let max = Math.max(nb1, nb2, nb3);
console.log(max);

let min = Math.min(nb1, nb2, nb3);
console.log(min);
