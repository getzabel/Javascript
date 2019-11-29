// Data Types

// Primitive Types

//Boolean 
true
false

//Null (It's just a special value which represents "nothing", "empty", or "value unknown")
null 

//String (must be surrounded by quotes)
'Hello World'

//Number (represents both integer and floating point numbers)
1, 2, 4.5

//Undefined (a declared variable but hasn’t been given a value)
let a;
console.log(a); //undefined

// Object 
/*(The object literal is a simple way of creating an object using { } brackets. 
You can include key-value pair in { }, where key would be property or method name 
and value will be value of property of any data type or a function.
Use comma (,) to separate multiple key-value pairs.) 
*/ 
let <object-name> = { key1: value1, key2: value2,... keyN: valueN};

// Symbols (are new primitive type introduced in ES6. Symbols are completely unique identifiers. )
const symbol = Symbol('description')