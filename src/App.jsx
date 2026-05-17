import { useState, useEffect, useRef } from "react";

function useFonts() {
  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@400;500;600;700;800&display=swap";
    l.rel = "stylesheet";
    document.head.appendChild(l);
  }, []);
}

function cHL(raw) {
  const e = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  let s = e(raw);
  const kw = ["int","float","char","double","void","if","else","for","while","do","return","printf","scanf","include","define","break","continue","goto","static","auto","register","extern","sizeof","struct","union","enum","typedef","long","short","unsigned","signed","const","volatile","malloc","calloc","realloc","free","NULL","main","gets","puts","putchar","getchar","getch","getche","strlen","strcpy","strcat","strcmp","strupr","strlwr","strrev","sqrt","pow","fabs","ceil","floor","sin","cos","log","exit","fprintf","fscanf","FILE","cout","cin","class","public","private","protected","new","delete","inline","this","bool","true","false","string","endl"];
  s = s.replace(/\/\/.*/g, m=>`<cm>${m}</cm>`);
  s = s.replace(/\/\*[\s\S]*?\*\//g, m=>`<cm>${m}</cm>`);
  s = s.replace(/"[^"]*"/g, m=>`<st>${m}</st>`);
  s = s.replace(/'[^']*'/g, m=>`<st>${m}</st>`);
  s = s.replace(/#[^\n]*/g, m=>`<pp>${m}</pp>`);
  s = s.replace(/\b(\d+\.?\d*)\b/g, m=>`<nu>${m}</nu>`);
  s = s.replace(new RegExp(`\\b(${kw.join("|")})\\b`,"g"), m=>`<kw>${m}</kw>`);
  return s
    .replace(/<cm>([\s\S]*?)<\/cm>/g,`<span style="color:#6e7681">$1</span>`)
    .replace(/<st>(.*?)<\/st>/g,`<span style="color:#a5d6ff">$1</span>`)
    .replace(/<pp>(.*?)<\/pp>/g,`<span style="color:#d2a8ff">$1</span>`)
    .replace(/<nu>(.*?)<\/nu>/g,`<span style="color:#79c0ff">$1</span>`)
    .replace(/<kw>(.*?)<\/kw>/g,`<span style="color:#ff7b72">$1</span>`);
}

/* ═══════════════════ VIVA DATA (80 Q per Unit) ═══════════════════ */
const VIVA = {
u1:[
["What is C language?","C is a general-purpose, structured programming language developed by Dennis Ritchie at Bell Labs in 1972."],
["Who developed C and when?","Dennis M. Ritchie developed C in 1972 at AT&T Bell Laboratories."],
["What is the C character set?","Letters (A-Z, a-z), digits (0-9), special symbols (+, -, *, /, etc.), and whitespace characters."],
["What is a token in C?","The smallest individual unit in a C program: keywords, identifiers, constants, strings, operators, and punctuation."],
["How many keywords are there in C?","32 keywords (e.g., int, float, char, if, else, for, while, return, void, struct, etc.)."],
["What is an identifier?","A name given to variables, functions, arrays, etc. Must start with a letter or underscore; can contain letters, digits, underscores."],
["What are the rules for identifiers?","Must start with letter or _, no spaces, no special characters, case-sensitive, cannot be a keyword."],
["What is a variable?","A named memory location that stores a value which can change during program execution."],
["What is a constant?","A value that cannot be changed during program execution. Types: integer, float, character, string constants."],
["What are primary data types in C?","int, float, double, char, void."],
["What is the size of int?","Typically 2 bytes (on 16-bit) or 4 bytes (on 32/64-bit systems)."],
["What is the size of float vs double?","float: 4 bytes (6-7 decimal precision); double: 8 bytes (15-16 decimal precision)."],
["What is the size of char?","1 byte; can store any ASCII character."],
["What is void data type?","Represents absence of type; used for functions returning no value and generic pointers."],
["What is the difference between int and float?","int stores whole numbers (no decimal); float stores numbers with decimal point."],
["What is an expression?","A combination of operands (variables, constants) and operators that evaluates to a single value."],
["What is an arithmetic operator?","Operators that perform mathematical operations: + (add), - (sub), * (mul), / (div), % (mod)."],
["What is integer division?","When both operands are int, the result is int with decimal truncated. 7/2 = 3 not 3.5."],
["What is the modulus operator?","% returns the remainder of integer division. 7%3 = 1. Cannot use with float."],
["What is a unary operator?","Operator that works on single operand: ++ (increment), -- (decrement), - (negation), ! (NOT), ~ (bitwise NOT)."],
["What is prefix vs postfix increment?","Prefix (++x): increment first, then use. Postfix (x++): use first, then increment."],
["What are relational operators?","Compare two values and return 0 or 1: < > <= >= == !="],
["What is the difference between = and ==?","= is assignment (stores a value); == is equality comparison (tests if two values are equal)."],
["What are logical operators?","&& (AND), || (OR), ! (NOT). Evaluate conditions and return 0 or 1."],
["What is short-circuit evaluation?","In &&, if left is 0, right is not evaluated. In ||, if left is non-zero, right is not evaluated."],
["What is the conditional (ternary) operator?","Only 3-operand operator: condition ? expr1 : expr2. Returns expr1 if true, expr2 if false."],
["What are bitwise operators?","Operate on bits: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)."],
["What is left shift (<<)?","Shifts bits left by n positions = multiplies by 2^n. a<<2 = a×4."],
["What is right shift (>>)?","Shifts bits right by n positions = divides by 2^n. a>>2 = a÷4."],
["What are assignment operators?","=, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>= — combine assignment with an operation."],
["What is operator precedence?","Defines which operator is evaluated first when multiple operators appear in an expression."],
["What is associativity?","Defines evaluation direction when operators have same precedence: left-to-right or right-to-left."],
["What is the comma operator?","Lowest precedence operator; evaluates left to right, returns value of rightmost expression."],
["What is sizeof operator?","Returns size in bytes of a data type or variable. sizeof(int) = 4."],
["What is a symbolic constant?","A constant defined using #define preprocessor directive. #define PI 3.14159"],
["What is the difference between #define and const?","#define is preprocessor (no type, no memory); const is a typed variable with memory."],
["What is a string constant?","A sequence of characters enclosed in double quotes: \"Hello\". Stored as char array with null terminator."],
["What is ASCII?","American Standard Code for Information Interchange — numeric codes for characters. 'A'=65, 'a'=97, '0'=48."],
["What is an escape sequence?","Special character sequences starting with \\: \\n (newline), \\t (tab), \\0 (null), \\\\, \\' \\\""],
["What is the difference between '0' and 0?","'0' is character zero with ASCII value 48; 0 is integer zero."],
["What is implicit type conversion?","Automatic conversion by compiler from lower to higher type in mixed expressions (char→int→float→double)."],
["What is explicit type casting?","Manually converting type using cast operator: (float)a / b forces float division."],
["What is a lvalue?","An expression that refers to a memory location (can appear on left of =). E.g., a variable."],
["What is a rvalue?","An expression that represents a value (only on right of =). E.g., 5, a+b."],
["What is a format specifier?","Controls how data is printed/read: %d (int), %f (float), %c (char), %s (string), %lf (double)."],
["What is the use of & in scanf?","& (address-of operator) passes the memory address of a variable to scanf so it can store the value."],
["What is a global variable?","Declared outside all functions; accessible from any function in the file; default value is 0."],
["What is a local variable?","Declared inside a function or block; accessible only within that block; has garbage value by default."],
["What is the range of int (32-bit)?","-2,147,483,648 to +2,147,483,647 (i.e., -2^31 to 2^31 - 1)."],
["What is unsigned int range?","0 to 4,294,967,295 (i.e., 0 to 2^32 - 1)."],
["What is long int?","At least 4 bytes; range -2^31 to 2^31-1 on 32-bit, or -2^63 to 2^63-1 on 64-bit."],
["What is short int?","2 bytes; range -32,768 to +32,767."],
["What is a type modifier?","Keywords that modify basic data types: short, long, signed, unsigned."],
["What is the output of -3 % 2?","-1 (sign of result follows the dividend in C)."],
["Can % be used with float?","No. Modulus operator % works only with integer operands. Using with float causes compile error."],
["What is the difference between / for int and float?","int/int truncates decimal (7/2=3); float/float gives exact result (7.0/2.0=3.5)."],
["What is the value of 5 && 0?","0 (false) — because 0 makes AND false."],
["What is the value of 5 || 0?","1 (true) — because 5 is non-zero, making OR true."],
["What is the result of !0?","1 (true). NOT of false is true."],
["What is the result of !5?","0 (false). NOT of any non-zero is false."],
["What is ~10 in C?","-11. Bitwise NOT inverts all bits; in 2's complement -11 = ~10."],
["What is 10 & 5?","0. 1010 & 0101 = 0000 = 0."],
["What is 10 | 5?","15. 1010 | 0101 = 1111 = 15."],
["What is 10 ^ 5?","15. 1010 ^ 0101 = 1111 = 15."],
["What is sizeof('a')?","4 in C (character constant is int in C); 1 in C++."],
["What is a preprocessor directive?","Instructions to the preprocessor starting with #: #include, #define, #ifdef, #pragma."],
["What is #include <stdio.h>?","Includes Standard Input/Output header file providing declarations for printf, scanf, etc."],
["What is the difference between #include <> and \"\"?","<> searches system directories; \"\" searches current directory first, then system directories."],
["What is structured programming?","Programming paradigm that uses sequences, selections (if/else), and iterations (loops) to write clear, maintainable programs."],
["What is the entry point of a C program?","The main() function. Every C program must have exactly one main() function."],
["What is return 0 in main?","Indicates successful program termination to the operating system. Non-zero indicates error."],
["What is a statement in C?","A complete instruction ending with semicolon. E.g., int x = 5; or printf(\"Hi\");"],
["What is a block/compound statement?","Multiple statements enclosed in { } treated as a single unit."],
["What is void main() vs int main()?","int main() is standard (returns int to OS); void main() is non-standard but accepted by some compilers."],
["What is the role of semicolon in C?","Statement terminator — marks the end of every simple statement."],
["What is a null statement?","A statement with only a semicolon (;); does nothing. Used in empty loop bodies."],
["What is putchar()?","Outputs a single character to stdout: putchar('A'); prints A."],
["What is getchar()?","Reads a single character from stdin, waits for Enter key."],
["What is the difference between getch() and getchar()?","getch(): reads immediately without echo, no Enter needed (non-standard). getchar(): waits for Enter."],
["What header is needed for math functions?","#include <math.h>"],
["What header is needed for string functions?","#include <string.h>"],
["What header is needed for memory functions?","#include <stdlib.h>"],
],

u2:[
["What is a control structure?","A statement that controls the flow of execution: sequence, selection (if/switch), and iteration (loops)."],
["What is the if statement?","Executes a block of code only if the condition is true. if(condition) { statements; }"],
["What is the if-else statement?","Executes one block if condition is true, another if false."],
["What is a nested if?","An if statement inside another if or else block; used for multi-level decisions."],
["What is the else-if ladder?","Series of if-else if conditions to test multiple exclusive conditions."],
["What is the switch statement?","Tests a variable against multiple integer/char values using case labels."],
["What is fall-through in switch?","Without break, execution continues into the next case automatically."],
["What is the default case in switch?","Executes when no case matches the switch expression; optional."],
["Can switch work with float?","No. switch only works with int and char (integer types). float causes compile error."],
["What is the difference between if-else and switch?","switch is cleaner for comparing one variable to many values; if-else handles complex/range conditions."],
["What is a while loop?","Entry-controlled loop: checks condition first, then executes body. May not execute at all."],
["What is a for loop?","Compact entry-controlled loop with init, condition, update in one line."],
["What is a do-while loop?","Exit-controlled loop: executes body first, then checks condition. Executes at least once."],
["What is the key difference between while and do-while?","while may not execute if condition is false initially; do-while always executes at least once."],
["What is an entry-controlled loop?","Loop that checks condition before executing body (while, for)."],
["What is an exit-controlled loop?","Loop that checks condition after executing body (do-while)."],
["What does break do in a loop?","Immediately exits the innermost loop or switch statement."],
["What does continue do?","Skips the remaining statements of current iteration and jumps to next iteration."],
["In a for loop, where does continue jump?","To the update expression (increment/decrement part)."],
["In a while loop, where does continue jump?","To the condition check."],
["What is goto statement?","Unconditional jump to a labeled statement. goto label; ... label: statement;"],
["Why is goto generally avoided?","It makes code unstructured and difficult to read/maintain (spaghetti code)."],
["What is the return statement?","Exits a function, optionally returning a value to the caller."],
["Can return be used anywhere in a function?","Yes; a function can have multiple return statements but only one executes."],
["What is implicit type conversion?","Automatic promotion from lower to higher type in mixed expressions: char→int→float→double."],
["What is a type modifier?","short, long, signed, unsigned — modify the size and range of basic data types."],
["What is the printf() function?","Formatted output function that prints to stdout using format specifiers."],
["What is the scanf() function?","Formatted input function that reads from stdin into variables (requires & for most types)."],
["What does %d mean?","Format specifier for int (decimal integer)."],
["What does %f mean?","Format specifier for float (6 decimal places by default)."],
["What does %lf mean?","Format specifier for double (long float)."],
["What does %c mean?","Format specifier for a single character."],
["What does %s mean?","Format specifier for a string (char array)."],
["What does %e mean?","Format specifier for scientific notation (e.g., 1.23e+02)."],
["What does %o mean?","Format specifier for octal representation."],
["What does %x mean?","Format specifier for hexadecimal representation."],
["What is field width in printf?","Specifies minimum characters for output: printf(\"%5d\", 42) prints '   42'."],
["What is precision in printf?","Specifies decimal places: printf(\"%.2f\", 3.14159) prints '3.14'."],
["What is puts()?","Outputs a string followed by newline: puts(\"Hello\") = printf(\"Hello\\n\")."],
["What is gets()?","Reads a line (including spaces) from stdin into a char array until Enter."],
["What is the difference between scanf(\"%s\") and gets()?","scanf stops at whitespace; gets reads until newline including spaces."],
["What is printf return value?","Returns number of characters successfully printed."],
["What is scanf return value?","Returns number of items successfully read."],
["What is an infinite loop?","A loop whose condition never becomes false: while(1) or for(;;)."],
["How many times does do-while execute if condition is initially false?","Exactly once — body executes before condition is checked."],
["What is a nested loop?","A loop inside another loop. Used for 2D patterns, matrix operations."],
["What is the execution order of for(init;cond;update)?","init (once) → check cond → body → update → check cond → ..."],
["What is while(1) used for?","Creates an infinite loop; must use break or return to exit."],
["What does for(;;) mean?","Infinite loop — all three parts of for are optional; empty condition is always true."],
["Can switch have duplicate case values?","No — duplicate case values cause a compile error."],
["What is the difference between break in loop vs switch?","In loop: exits loop. In switch: exits switch. Both transfer control to next statement after."],
["When is do-while preferred?","When code must execute at least once, e.g., menu-driven programs, input validation."],
["What is short-circuit in &&?","If left operand of && is 0 (false), right operand is NOT evaluated."],
["What is short-circuit in ||?","If left operand of || is non-zero (true), right operand is NOT evaluated."],
["What is the output of while(i=0)?","Loop body never executes — assignment of 0 is falsy. Prints nothing from loop."],
["Difference between i++ in for update vs body?","In for update, postfix i++ is fine; in body, using x = i++ vs x = ++i gives different x values."],
["What is a counter variable?","A variable used to count iterations of a loop."],
["What is an accumulator variable?","A variable used to accumulate (sum/multiply) values during a loop."],
["What is the Fibonacci series?","0, 1, 1, 2, 3, 5, 8, 13... Each number is sum of two preceding numbers."],
["What does printf(\"\\n\") do?","Prints a newline character, moving cursor to next line."],
["What does printf(\"\\t\") do?","Prints a horizontal tab character."],
["What is an unformatted I/O function?","Functions that don't use format specifiers: getchar, putchar, gets, puts, getch, getche."],
["What is the difference between formatted and unformatted I/O?","Formatted uses format specifiers (%d, %f etc.); unformatted works directly with chars/strings."],
["What conversion happens in: int x='A'?","'A' (char, ASCII 65) is implicitly promoted to int. x stores 65."],
["What is (int)3.9?","Explicit cast truncates decimal: result is 3 (not rounded, just truncated)."],
["What are the type modifiers for char?","signed char (-128 to 127) and unsigned char (0 to 255)."],
["What is a dangling else problem?","Ambiguity when nested if-else doesn't use braces; else pairs with nearest if."],
["What is putch() / putchar() difference?","putchar() is standard (stdio.h); putch() is non-standard (conio.h, Windows only)."],
["How do you print a % symbol with printf?","Use %% to print a literal percent sign."],
["What is sprint()?","sprintf() formats output into a string instead of stdout."],
],

u3:[
["What is a function?","A self-contained block of code that performs a specific task and can be called multiple times."],
["What are the advantages of functions?","Code reuse, modularity, easier debugging, abstraction, reduced code length."],
["What is a function prototype?","A declaration of a function before its definition, telling the compiler its name, return type, and parameter types."],
["What is a function definition?","The actual implementation of a function with its header and body."],
["What is a function call?","Invoking a function to execute its code: result = sum(a, b);"],
["What are actual parameters (arguments)?","Values passed to a function during a call."],
["What are formal parameters?","Variables in the function definition that receive values from actual parameters."],
["What is call by value?","A copy of the actual argument is passed. Changes inside the function do NOT affect the original."],
["What is call by reference (call by address)?","The address of the actual argument is passed. Changes inside the function DO affect the original."],
["Which is safer — call by value or reference?","Call by value is safer as it protects the original data."],
["What is the return type of a function?","The data type of the value returned by the function (int, float, void, etc.)."],
["What does a void function return?","Nothing. void means no return value."],
["Can a function return multiple values?","Not directly; can return a struct, use pointers, or use global variables."],
["What is a recursive function?","A function that calls itself, either directly or indirectly."],
["What are the two essential parts of recursion?","Base case (stops recursion) and recursive case (function calls itself with modified argument)."],
["What happens without a base case in recursion?","Infinite recursion leading to stack overflow."],
["What is a stack in recursion?","Each function call pushes a stack frame; recursion unwinds as base case is reached."],
["What is the disadvantage of recursion?","Higher memory usage (stack), slower than iterative (function call overhead)."],
["What is factorial of n using recursion?","fact(n) = n × fact(n-1), with base case fact(0) = 1 or fact(1) = 1."],
["What is the Fibonacci function recursively?","fib(n) = fib(n-1) + fib(n-2), base: fib(0)=0, fib(1)=1."],
["What are math library functions in C?","Functions in math.h: sqrt(), pow(), fabs(), ceil(), floor(), sin(), cos(), log(), log10(), exp()."],
["What does sqrt(x) return?","Square root of x (double). sqrt(25.0) = 5.0."],
["What does pow(x,y) return?","x raised to power y. pow(2,3) = 8.0."],
["What does fabs(x) return?","Absolute value of floating-point x. fabs(-3.5) = 3.5."],
["What does ceil(x) return?","Smallest integer ≥ x (rounds up). ceil(3.2) = 4.0."],
["What does floor(x) return?","Largest integer ≤ x (rounds down). floor(3.9) = 3.0."],
["What is scope of a variable?","The region of the program where a variable is accessible."],
["What is local scope?","Variable declared inside a function/block; accessible only within that block."],
["What is global scope?","Variable declared outside all functions; accessible from any function in the file."],
["When local and global have same name, which takes priority?","Local variable takes priority within its scope (shadows the global)."],
["What is an auto storage class?","Default for local variables; stored in stack; garbage initial value; destroyed when block exits."],
["What is a register storage class?","Requests CPU register storage for faster access; cannot use & operator; compiler may ignore it."],
["What is a static storage class for local variable?","Retains its value between function calls; initialized to 0 by default; stored in data segment."],
["What is a static storage class for global variable?","Limits visibility to current file only (file scope); prevents external access."],
["What is an extern storage class?","Declares a variable defined in another file; no memory is allocated; used for sharing globals."],
["What is the default initial value of auto variables?","Garbage (undefined) value."],
["What is the default initial value of static variables?","0 (zero-initialized automatically)."],
["What is the default initial value of global variables?","0 (zero-initialized automatically)."],
["Can a register variable's address be taken?","No. register variables may not have a memory address, so & operator is not allowed."],
["What is the difference between static local and global?","static local: accessible only in its function but persists. Global: accessible everywhere but persists too."],
["What is a function pointer?","A pointer that stores the address of a function and can be used to call it."],
["What are the 4 types of functions based on args/return?","No args+no return, args+no return, no args+with return, args+with return."],
["What is abs() vs fabs()?","abs() (stdlib.h) is for int; fabs() (math.h) is for double/float."],
["What is the GCD of two numbers recursively?","gcd(a,b) = gcd(b, a%b), base: gcd(a,0) = a."],
["What is tail recursion?","A recursive call is the last operation in the function; can be optimized by compiler."],
["What is a library function?","Pre-written function in C standard library (printf, scanf, sqrt, strlen, malloc, etc.)."],
["What is a user-defined function?","Function written by the programmer to perform a custom task."],
["What header file is needed for sqrt()?","#include <math.h> and link with -lm (on Linux)."],
["What is the difference between declaration and definition?","Declaration (prototype) tells compiler about the function; definition provides the actual body."],
["What is an implicit declaration?","Using a function without declaring it first; compiler assumes it returns int (bad practice)."],
["What is pass by pointer?","Passing the address of a variable (&var) to a function that uses a pointer parameter (*ptr)."],
["What is the & in function call for pass by reference?","& gives the address of the variable; inside function, * dereferences to access/modify the value."],
["How does swap work with call by reference?","void swap(int *a, int *b){ int t=*a; *a=*b; *b=t; } called as swap(&x,&y);"],
["Can you pass an entire array by value?","No. Arrays are always passed by reference (the base address is passed)."],
["What is an inline function in C?","C99 supports inline keyword; suggests compiler replace call with function body to reduce overhead."],
["What is a variadic function?","A function that accepts variable number of arguments (e.g., printf). Uses stdarg.h: va_list, va_start, va_arg, va_end."],
["What is the difference between exit() and return in main()?","Both terminate program; exit() calls cleanup functions (atexit); return just exits main."],
["What is rand() function?","Generates pseudo-random integer. In stdlib.h. Use srand(time(0)) to seed."],
["What is recursion vs iteration?","Recursion: elegant, uses stack, slower/more memory. Iteration: faster, less memory, uses loops."],
["What is power function recursively?","pow_r(x,n) = x * pow_r(x,n-1), base: pow_r(x,0) = 1."],
["What is sum of digits recursively?","sumdig(n) = n%10 + sumdig(n/10), base: sumdig(0) = 0."],
["What is binary to decimal conversion using function?","Process each bit: value += bit * pow(2,position) for each bit position."],
["What is a nested function call?","Calling a function inside another function call: printf(\"%d\", add(2,3));"],
["What is the default return type if none specified?","int (in older C standards); modern C requires explicit return type."],
["What is a module in C?","A function or group of related functions that form a logical unit; promotes code organization."],
],

u4:[
["What is an array?","A collection of elements of the SAME data type stored in contiguous memory locations under one name."],
["How do you declare an array?","data_type array_name[size]; e.g., int marks[10];"],
["How are array elements accessed?","Using index (subscript): array_name[index]. Index starts from 0. Last element: arr[n-1]."],
["What is the default value of uninitialized array elements?","Garbage values (for local arrays). Global/static arrays are zero-initialized."],
["What is the base address of an array?","The address of the first element (index 0). Same as the array name."],
["How are arrays stored in memory?","In contiguous memory locations. 1D: sequential; 2D: row-major order."],
["What is row-major order?","2D array stored row by row: arr[0][0], arr[0][1]..., arr[1][0], arr[1][1]..."],
["What is the formula for 2D array address?","Address of arr[i][j] = base + (i*cols + j) * sizeof(datatype)."],
["How do you initialize a 1D array?","int arr[5] = {10, 20, 30, 40, 50}; or int arr[] = {10, 20, 30};"],
["How do you initialize a 2D array?","int mat[2][3] = {{1,2,3},{4,5,6}}; or int mat[2][3] = {1,2,3,4,5,6};"],
["What happens if fewer initializers are given?","Remaining elements are set to 0. int arr[5]={1,2}; → {1,2,0,0,0}."],
["Can the size of an array be a variable in C?","In C89: No (must be constant). In C99+: Yes — Variable Length Arrays (VLAs) are supported."],
["How is an array passed to a function?","By passing its base address (array name). void func(int arr[], int n) or void func(int *arr, int n)."],
["Does passing an array to function copy it?","No. Only the base address is passed; the function operates on the original array."],
["What is linear search?","Sequential search through all elements until target is found or array is exhausted. O(n)."],
["What is the time complexity of linear search?","O(n) — in worst case, checks all n elements."],
["When does linear search work?","On any array (sorted or unsorted)."],
["What is binary search?","Search algorithm that repeatedly divides the sorted array in half. O(log n)."],
["What is the precondition for binary search?","Array must be SORTED in ascending order."],
["What is the time complexity of binary search?","O(log₂n) — much faster than linear for large arrays."],
["How does binary search work?","Compare target with middle element. If equal: found. If less: search left half. If greater: search right half."],
["What is bubble sort?","Comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in wrong order."],
["What is the time complexity of bubble sort?","O(n²) in worst and average case; O(n) best case (already sorted with optimization)."],
["How many passes does bubble sort need?","At most n-1 passes for n elements."],
["What is the space complexity of bubble sort?","O(1) — in-place sorting, no extra space needed."],
["What is insertion in an array?","Shifting elements to make room and placing new element at the desired position. O(n)."],
["What is deletion from an array?","Shifting elements left to fill the gap after removing an element. O(n)."],
["Can arrays grow dynamically in C?","No (static arrays). Use dynamic memory (malloc/realloc) for resizable arrays."],
["What is an array of characters?","A char array; commonly used to store strings. char name[20];"],
["What is the difference between array name and pointer?","Array name is a constant pointer (cannot be modified); a pointer variable can be reassigned."],
["What is arr[i] equivalent to in pointer notation?","*(arr + i) — pointer arithmetic to access i-th element."],
["What is a 2D array?","An array of arrays; has rows and columns: int mat[rows][cols];"],
["How many total elements in int mat[3][4]?","12 elements (3 rows × 4 columns)."],
["What is a matrix?","A 2D array; can represent mathematical matrices for addition, multiplication, transpose."],
["How to find largest element in an array?","Initialize max=arr[0]; iterate and update max if arr[i]>max."],
["What is the sum of array elements?","Iterate through array accumulating sum: sum += arr[i]."],
["What is an array application?","Sorting, searching, matrix operations, statistics (mean, median), stack/queue implementation."],
["What is a sorted array?","Array where elements are in ascending or descending order."],
["What is the difference between searching and sorting?","Searching finds position of a value; sorting arranges elements in order."],
["In bubble sort, how many swaps maximum in one pass?","n-1 swaps for n elements in first pass, n-2 in second, etc."],
["What is the advantage of binary over linear search?","Binary is O(log n) vs O(n); much faster for large sorted arrays."],
["What is out-of-bounds array access?","Accessing arr[i] where i < 0 or i >= size. C does NOT check this — causes undefined behavior."],
["What is a string in C?","A character array terminated by the null character '\\0'. char str[] = \"Hello\";"],
["How much memory does char str[6]=\"Hello\" use?","6 bytes: H,e,l,l,o,\\0 (null terminator)."],
["What does an uninitialized global int array contain?","All zeros (global/static variables are zero-initialized)."],
["What is a parallel array?","Multiple arrays where elements at the same index are related (like a table)."],
["How do you pass a 2D array to a function?","Specify number of columns: void func(int mat[][3], int rows)"],
["What is the index of the last element of int arr[n]?","n-1"],
["What is meant by array traversal?","Visiting each element of the array exactly once, usually with a for loop."],
["What is the optimized bubble sort?","Add a flag to detect if any swap occurred; if no swap in a pass, array is sorted — exit early."],
["What is selection sort?","Finds minimum element and places it at correct position; O(n²)."],
["What is insertion sort?","Builds sorted array one element at a time by inserting each into correct position; O(n²)."],
["How to reverse an array?","Swap arr[0] with arr[n-1], arr[1] with arr[n-2], etc., up to middle."],
["What is a sentinel in linear search?","Placing the target at the end of array to guarantee termination without checking bounds each step."],
["What is the mid formula in binary search?","mid = (low + high) / 2 or low + (high-low)/2 (to avoid overflow)."],
["What is a multidimensional array?","Array with more than two dimensions: int arr[2][3][4] is 3D."],
["How is matrix multiplication computed?","C[i][j] = Σ A[i][k] * B[k][j] for k = 0 to n-1. O(n³)."],
["What is matrix transpose?","Swap rows and columns: B[j][i] = A[i][j]."],
["What is array-based stack?","Stack using a 1D array with a top pointer; push increments top, pop decrements."],
["What is the difference between int a[5] and int *a?","int a[5]: fixed-size stack allocation; int *a: pointer, must point to allocated memory."],
["Why is binary search not applicable to linked lists efficiently?","No random access in linked lists (unlike arrays), so cannot jump to middle in O(1)."],
["What is the disadvantage of arrays?","Fixed size (cannot grow/shrink), contiguous memory required, insertion/deletion is O(n)."],
],

u5:[
["What is a pointer?","A variable that stores the memory address of another variable."],
["How do you declare a pointer?","data_type *pointer_name; e.g., int *p;"],
["How do you initialize a pointer?","Using address-of operator: int x=10; int *p = &x;"],
["What is the & operator?","Address-of operator — returns the memory address of a variable."],
["What is the * operator with pointers?","Dereference operator — accesses the value at the address stored in the pointer."],
["What is a null pointer?","A pointer initialized to NULL (0); doesn't point to any valid memory. Safe uninitialized pointer."],
["What is a void pointer (generic pointer)?","A pointer declared as void* that can hold address of any data type; requires cast before dereferencing."],
["What is a dangling pointer?","A pointer that points to a memory location that has been freed or a local variable that went out of scope."],
["What is a wild pointer?","An uninitialized pointer containing a garbage address; very dangerous."],
["How do you fix a dangling pointer?","Set it to NULL after freeing: free(ptr); ptr = NULL;"],
["What is pointer arithmetic?","Operations on pointers: p++, p--, p+n, p-n. Each operation moves by sizeof(data_type) bytes."],
["If int *p points to address 1000, what is p+1?","1004 (moves by sizeof(int)=4 bytes)."],
["What is the relationship between arrays and pointers?","Array name is a constant pointer to first element: arr == &arr[0]. arr[i] == *(arr+i)."],
["Can pointer arithmetic be done on void*?","Not directly — void* has no size, so arithmetic is not allowed without casting."],
["What is a pointer to pointer?","A pointer that stores the address of another pointer: int **pp = &p;"],
["What is malloc()?","Memory ALLOCation — allocates specified bytes on heap; contents are uninitialized (garbage). Returns void*."],
["What is calloc()?","Contiguous ALLOCation — allocates n blocks of given size, ALL initialized to ZERO. Returns void*."],
["What is realloc()?","RE-ALLOCation — resizes a previously allocated block; copies existing data to new location."],
["What is free()?","Releases dynamically allocated memory back to the heap. Must use after malloc/calloc/realloc."],
["What is a memory leak?","Allocated memory that is never freed; causes program to consume ever-increasing memory."],
["What does malloc return on failure?","NULL pointer. Always check: if(ptr == NULL) before using."],
["What is the difference between malloc and calloc?","malloc: uninitialized (garbage); calloc: zero-initialized. calloc takes two arguments (n, size)."],
["What does realloc(ptr, 0) do?","Equivalent to free(ptr) — frees the memory."],
["What is the heap?","Memory area used for dynamic allocation (malloc/calloc). Managed manually by programmer."],
["What is the stack?","Memory area for local variables and function call frames. Managed automatically by compiler."],
["What is a string in C?","A character array terminated by null character '\\0'. char str[]=\"Hello\"; stores 6 chars."],
["How is a string stored in memory?","As an array of chars with '\\0' at the end. \"Hi\" = {'H','i','\\0'}"],
["How do you read a string without spaces?","scanf(\"%s\", str); — reads until whitespace."],
["How do you read a string with spaces?","gets(str); — reads entire line including spaces until '\\n'."],
["What is strlen(str)?","Returns length of string excluding '\\0'. strlen(\"Hello\") = 5."],
["What is strcpy(dest, src)?","Copies src string into dest including '\\0'."],
["What is strcat(dest, src)?","Appends src to end of dest. Overwrites dest's '\\0' and adds new '\\0' at end."],
["What is strcmp(s1, s2)?","Compares two strings. Returns 0 if equal, <0 if s1<s2, >0 if s1>s2."],
["What is strupr(str)?","Converts string to UPPERCASE (non-standard, works on Windows/Turbo C)."],
["What is strlwr(str)?","Converts string to lowercase (non-standard)."],
["What is strrev(str)?","Reverses a string in-place (non-standard)."],
["What is strchr(str, ch)?","Returns pointer to first occurrence of ch in str, or NULL if not found."],
["What is strstr(s1, s2)?","Returns pointer to first occurrence of substring s2 in s1, or NULL."],
["What header file for string functions?","#include <string.h>"],
["What is character arithmetic?","Characters can be used in arithmetic since they are stored as ASCII values. 'A'+1 = 'B'."],
["What is toupper() / tolower()?","Functions in ctype.h to convert character case. toupper('a') = 'A'."],
["What is isalpha() / isdigit()?","ctype.h functions to check if char is letter/digit. Returns non-zero if true."],
["What is a string literal?","A string constant in double quotes: \"Hello\". Stored in read-only data segment."],
["What is the difference between char arr[]=\"Hi\" and char *p=\"Hi\"?","arr: modifiable array in stack. p: pointer to string literal (read-only; modifying causes undefined behavior)."],
["What is pointer to function?","A pointer that holds the address of a function: int (*fp)(int,int) = &add;"],
["How do you pass a pointer to a function?","void func(int *p) { *p = 10; } called as func(&x); — modifies x."],
["What is double pointer?","Pointer to pointer: int **p. Used for dynamic 2D arrays and modifying pointer in a function."],
["How to create dynamic 1D array?","int *arr = (int*)malloc(n * sizeof(int));"],
["How to create dynamic 2D array?","int **mat = (int**)malloc(rows*sizeof(int*)); for(i) mat[i]=(int*)malloc(cols*sizeof(int));"],
["What is sizeof(pointer) vs sizeof(int)?","sizeof(pointer) = 4 or 8 bytes (depends on OS); sizeof(int) = 4 bytes typically."],
["What is the null character '\\0'?","ASCII value 0; marks end of string; required for string functions to work correctly."],
["What is the difference between '\\0' and '0' and 0?","'\\0': null char (ASCII 0); '0': digit zero char (ASCII 48); 0: integer zero."],
["What is pointer comparison?","Comparing addresses using ==, !=, <, >. Useful to check if two pointers point to same location."],
["What is a far pointer (Turbo C)?","A pointer that can access memory outside the current segment (16-bit DOS programming)."],
["Can you subtract two pointers?","Yes — gives number of elements between them (must point to same array)."],
["What is printf(\"%p\", ptr)?","%p format specifier prints the pointer address in hexadecimal."],
["What is a self-referential structure?","A structure containing a pointer to itself; used in linked lists, trees."],
["What is string palindrome check?","Compare str[i] with str[n-1-i] for i from 0 to n/2; all must match."],
["What is string reversal without library?","Use two-pointer approach: swap str[i] and str[n-1-i] moving inward."],
["What does sprintf(buf, format, ...) do?","Formats and stores result in string buf instead of stdout."],
["What does atoi() do?","Converts string to integer. atoi(\"42\") = 42. In stdlib.h."],
["What does itoa() do?","Converts integer to string (non-standard). Alternative: sprintf(str,\"%d\",n)."],
["What is the difference between array index and pointer access?","arr[i] == *(arr+i) — both are equivalent in C."],
],

u6:[
["What is a structure?","A user-defined data type grouping variables of DIFFERENT data types under one name."],
["What is the syntax to declare a structure?","struct tag_name { type member1; type member2; }; — definition. struct tag_name var; — declaration."],
["What is the dot operator (.)?","Member access operator for structure variables: s.name, s.age."],
["What is the arrow operator (->)?","Member access operator for structure POINTERS: ptr->name, ptr->age. Equivalent to (*ptr).name."],
["What is the difference between . and -> operators?","(.) used with structure variable; (->) used with pointer to structure."],
["What is a nested structure?","A structure that contains another structure as a member."],
["What is an array of structures?","An array where each element is a structure: struct Student s[50];"],
["What is a structure pointer?","A pointer to a structure: struct Student *ptr = &s;"],
["How much memory does a structure occupy?","At least the sum of sizes of its members (may be more due to padding/alignment)."],
["What is structure padding?","Extra bytes added by compiler between members for memory alignment, making access efficient."],
["What is typedef with struct?","typedef struct { int id; char name[20]; } Student; allows writing Student instead of struct Student."],
["Can a structure contain a pointer to itself?","Yes — self-referential structure: struct Node { int data; struct Node *next; };"],
["Can functions return structures?","Yes — functions can return complete structure values in C."],
["What is structure initialization?","struct Student s = {101, \"Alice\", 3.8};"],
["What is a union?","A user-defined type where ALL members SHARE the same memory location."],
["How does a union differ from a structure?","Structure: each member has own memory (total = sum of sizes). Union: members share memory (size = largest member)."],
["What is sizeof(union)?","Size of the largest member (plus any padding). All members overlap in same memory."],
["When is only one member of a union valid?","At any given time only ONE member holds a meaningful value; writing one overwrites others."],
["What is the use of a union?","Memory optimization when only one field is needed at a time; type-punning."],
["Can you initialize all members of a union at once?","No — only the first member can be initialized at declaration."],
["What is an enumeration (enum)?","A user-defined type with named integer constants: enum Day {MON=1, TUE, WED, ...};"],
["What is the default starting value in enum?","0, unless explicitly set."],
["What is typedef?","Keyword to create an alias for an existing type: typedef unsigned int uint;"],
["What is the difference between struct and union?","struct: all members have own memory, size=sum. union: shared memory, size=largest member."],
["What is C++?","An extension of C that supports Object-Oriented Programming (OOP)."],
["Who created C++?","Bjarne Stroustrup at Bell Labs in 1979 (originally called C with Classes)."],
["What is cin in C++?","Standard input stream object (like scanf). cin >> x; reads value into x."],
["What is cout in C++?","Standard output stream object (like printf). cout << x << endl; prints x."],
["What is endl?","C++ manipulator that outputs newline and flushes the output buffer. Equivalent to '\\n' + flush."],
["What is a class in C++?","A user-defined type containing data members (attributes) and member functions (methods)."],
["What is an object?","An instance of a class. Created as: ClassName obj;"],
["What is encapsulation?","Bundling data members and functions in a class, restricting direct access using access specifiers."],
["What are access specifiers?","public (accessible everywhere), private (only within class), protected (within class and subclasses)."],
["What is the default access in a class vs struct?","class: private by default. struct: public by default."],
["What is a member function?","A function defined inside a class that operates on class data members."],
["What is an inline function?","A function whose code is inserted at call site by compiler (no call overhead): inline int square(int x){return x*x;}"],
["What is a non-inline member function?","Member function defined outside the class using scope resolution operator (::)."],
["What is the scope resolution operator (::)?","Used to define member functions outside the class: void ClassName::funcName() { ... }"],
["What is a constructor?","Special member function called automatically when object is created; same name as class, no return type."],
["What is a destructor?","Special member function called when object is destroyed; name is ~ClassName(); no parameters."],
["What is a static data member?","Shared by ALL objects of the class; only one copy exists regardless of number of objects."],
["What is a static member function?","Can be called without creating an object: ClassName::funcName(); can only access static members."],
["What is function overloading?","Defining multiple functions with same name but different parameters (compile-time polymorphism)."],
["What is operator overloading?","Redefining operators (+,-,*,etc.) for user-defined types."],
["What is inheritance?","A class (derived) acquiring properties and methods of another class (base)."],
["What is the difference between procedural and OOP?","Procedural: functions operate on data (C). OOP: data and functions encapsulated in objects (C++)."],
["What is new in C++?","Memory allocation operator (like malloc): int *p = new int; or new int[n];"],
["What is delete in C++?","Memory deallocation operator (like free): delete p; or delete[] arr;"],
["What is #include <iostream>?","C++ header for input/output streams (cin, cout, endl)."],
["What is std namespace?","Standard namespace in C++; use 'using namespace std;' to avoid writing std:: prefix."],
["How to define a class in C++?","class Rectangle { private: int l,w; public: void input(); int area(); };"],
["Can a structure have member functions in C++?","Yes — in C++, struct can have member functions and access specifiers (unlike C)."],
["What is polymorphism?","Same interface for different data types; achieved via function overloading, templates, or virtual functions."],
["What is abstraction?","Hiding complex implementation details and showing only essential features to the user."],
["What is the this pointer?","An implicit pointer available in member functions pointing to the current object."],
["What is a copy constructor?","Special constructor that creates an object as a copy of an existing object."],
["What is the difference between malloc/free and new/delete?","malloc/free: C (stdlib.h, no constructors). new/delete: C++ (calls constructors/destructors)."],
["What is a class template?","A blueprint for a generic class that works with any data type: template<typename T> class Stack{...};"],
["What is encapsulation vs abstraction?","Encapsulation: hiding data (using private). Abstraction: hiding complexity (showing only interface)."],
["What is an enumeration vs union vs struct?","enum: named int constants. struct: different types, own memory. union: different types, shared memory."],
],
};

/* ═══════════════════ COURSE UNITS ═══════════════════ */
const UNITS = [
{
  id:"u1", title:"Unit I: Basics of C", emoji:"🔤", color:"#3b82f6",
  topics:[
    {
      id:"charsetkeys", title:"Character Set, Tokens & Keywords",
      theory:[
        {type:"para",text:"C is a general-purpose, structured programming language developed by Dennis Ritchie at Bell Labs in 1972. It is the foundation for languages like C++, Java, and Python."},
        {type:"heading",text:"C Character Set"},
        {type:"table",headers:["Category","Characters"],rows:[
          ["Letters","A-Z, a-z (52 letters)"],
          ["Digits","0–9 (10 digits)"],
          ["Special Symbols","+ - * / % ^ & ( ) [ ] { } = < > ! ~ . , ; : ' \" # \\ @"],
          ["Whitespace","Space, Tab (\\t), Newline (\\n), Carriage Return"],
        ]},
        {type:"heading",text:"32 Keywords (C89/C90)"},
        {type:"code",text:"auto     break    case     char     const    continue\ndefault  do       double   else     enum     extern\nfloat    for      goto     if       int      long\nregister return   short    signed   sizeof   static\nstruct   switch   typedef  union    unsigned void\nvolatile while"},
        {type:"note",text:"Keywords are RESERVED — cannot be used as identifiers. C is case-sensitive: 'int' is keyword, 'Int' is not."},
        {type:"heading",text:"Identifiers — Naming Rules"},
        {type:"list",items:[
          "Must start with a letter (A-Z, a-z) or underscore (_)",
          "Can contain letters, digits, underscores only",
          "Cannot be a keyword",
          "Case sensitive: marks ≠ Marks ≠ MARKS",
          "No spaces or special characters",
        ]},
        {type:"table",headers:["Valid","Invalid","Why Invalid"],rows:[
          ["marks","2marks","Starts with digit"],
          ["_total","my marks","Contains space"],
          ["myVar","float","It's a keyword"],
          ["MAX_SIZE","my-var","Contains hyphen"],
        ]},
      ],
      codeExample:`#include <stdio.h>
int main() {
    /* Valid identifiers */
    int marks = 95;
    float _gpa = 3.8;
    char grade = 'A';
    
    /* Keywords used: int, float, char, if, return */
    if (marks >= 90) {
        printf("Grade: A (Distinction)\\n");
    }
    
    /* sizeof operator — returns bytes */
    printf("Size of int    = %lu bytes\\n", sizeof(int));
    printf("Size of float  = %lu bytes\\n", sizeof(float));
    printf("Size of double = %lu bytes\\n", sizeof(double));
    printf("Size of char   = %lu bytes\\n", sizeof(char));
    return 0;
}
/* Output:
   Grade: A (Distinction)
   Size of int    = 4 bytes
   Size of float  = 4 bytes
   Size of double = 8 bytes
   Size of char   = 1 bytes  */`,
      mcqs:[
        {q:"Which is a valid identifier?\nA. 2count  B. _count  C. count-1  D. float",options:["2count","_count","count-1","float"],correct:1,exp:"_count is valid: starts with underscore, contains only letters/underscore. Others are invalid."},
        {q:"How many keywords are there in C (ANSI C)?",options:["28","30","32","35"],correct:2,exp:"ANSI C has exactly 32 reserved keywords."},
        {q:"Which is NOT a C keyword?\nA. auto  B. main  C. register  D. sizeof",options:["auto","main","register","sizeof"],correct:1,exp:"main is NOT a keyword — it's an identifier (function name). auto, register, sizeof are keywords."},
        {q:"C language was developed by?",options:["James Gosling","Dennis Ritchie","Bjarne Stroustrup","Ken Thompson"],correct:1,exp:"Dennis M. Ritchie developed C at Bell Labs in 1972."},
      ]
    },
    {
      id:"datatypes", title:"Data Types, Variables & Constants",
      theory:[
        {type:"table",headers:["Data Type","Size","Range","Format"],rows:[
          ["char","1 byte","-128 to 127 (signed)","  %c"],
          ["unsigned char","1 byte","0 to 255","%c / %d"],
          ["short int","2 bytes","-32768 to 32767","%hd"],
          ["int","4 bytes","-2,147,483,648 to 2,147,483,647","%d"],
          ["unsigned int","4 bytes","0 to 4,294,967,295","%u"],
          ["long int","4/8 bytes","-2³¹ to 2³¹-1","%ld"],
          ["float","4 bytes","3.4E-38 to 3.4E+38 (6-7 digits)","%f"],
          ["double","8 bytes","1.7E-308 to 1.7E+308 (15-16 digits)","%lf"],
          ["long double","10/16 bytes","18-19 significant digits","%Lf"],
          ["void","0 bytes","No value","—"],
        ]},
        {type:"heading",text:"Types of Constants"},
        {type:"list",items:[
          "Integer constant: 42, -17, 0, 0xFF (hex), 077 (octal)",
          "Float constant: 3.14, -0.5, 1.2e3 (= 1200.0)",
          "Character constant: 'A', '5', '\\n', '\\t', '\\0'",
          "String constant: \"Hello\", \"CSE101\"",
        ]},
        {type:"note",text:"Symbolic constants: #define PI 3.14159 — preprocessor replaces PI with 3.14159 everywhere before compilation."},
        {type:"heading",text:"Variable Declaration & Initialization"},
        {type:"code",text:"int x;           // declared, uninitialized (garbage)\nint y = 10;      // declared and initialized\nfloat pi = 3.14; // float variable\nchar ch = 'A';   // character\nconst int MAX = 100; // const — cannot be changed"},
      ],
      codeExample:`#include <stdio.h>
#define PI 3.14159    /* symbolic constant */
int main() {
    /* Integer types */
    int a = 100;
    short s = 32000;
    long l = 1234567890L;
    unsigned int u = 4000000000U;
    
    /* Float types */
    float f = 3.14f;
    double d = 3.14159265358979;
    
    /* Character */
    char ch = 'A';
    char ch2 = 65;    /* same as 'A' (ASCII) */
    
    printf("int:    %d\\n", a);
    printf("short:  %hd\\n", s);
    printf("long:   %ld\\n", l);
    printf("uint:   %u\\n", u);
    printf("float:  %.4f\\n", f);
    printf("double: %.10lf\\n", d);
    printf("char:   %c (ASCII %d)\\n", ch, ch);
    printf("PI:     %.5f\\n", PI);
    
    /* sizeof */
    printf("sizeof(double) = %lu\\n", sizeof(d));
    return 0;
}`,
      mcqs:[
        {q:"Which format specifier is used for double?",options:["%f","%d","%lf","%ld"],correct:2,exp:"%lf is for double in scanf; both %f and %lf work in printf (C99+)."},
        {q:"What is the output?\nchar c='A'; printf(\"%d\",c);",options:["A","65","1","Error"],correct:1,exp:"'A' has ASCII value 65. %d prints the integer value."},
        {q:"What is sizeof(float)?",options:["2","4","8","Depends on compiler"],correct:1,exp:"float is always 4 bytes on all standard platforms."},
        {q:"Which of these is NOT a valid constant?\nA. 0x1F  B. 3.14e2  C. '\\n'  D. \"A\"  E. 1_000",options:["0x1F","3.14e2","'\\n'","1_000"],correct:3,exp:"1_000 is not valid in standard C (valid in C++ and Python). All others are valid constants."},
      ]
    },
    {
      id:"operators", title:"Operators & Expressions",
      theory:[
        {type:"heading",text:"Operator Precedence (High → Low)"},
        {type:"table",headers:["Priority","Operators","Associativity"],rows:[
          ["1","() [] -> .","Left → Right"],
          ["2","++ -- ! ~ - (unary) sizeof","Right → Left"],
          ["3","* / %","Left → Right"],
          ["4","+ -","Left → Right"],
          ["5","<< >>","Left → Right"],
          ["6","< > <= >=","Left → Right"],
          ["7","== !=","Left → Right"],
          ["8","&","Left → Right"],
          ["9","^","Left → Right"],
          ["10","|","Left → Right"],
          ["11","&&","Left → Right"],
          ["12","||","Left → Right"],
          ["13","?:","Right → Left"],
          ["14","= += -= *= /= %=","Right → Left"],
          ["15 (lowest)",",","Left → Right"],
        ]},
        {type:"note",text:"Bitwise operators: a=10 (1010₂), b=5 (0101₂). a&b=0, a|b=15, a^b=15, ~a=-11, a<<1=20, a>>1=5"},
      ],
      codeExample:`#include <stdio.h>
int main() {
    int a = 10, b = 3;
    
    /* Arithmetic */
    printf("a+b=%d  a-b=%d  a*b=%d\\n", a+b, a-b, a*b);
    printf("a/b=%d  a%%b=%d\\n", a/b, a%b); /* 3  1 */
    
    /* Unary */
    int x = 5;
    printf("x++=%d, now x=%d\\n", x++, x); /* 5, 6 */
    printf("++x=%d\\n", ++x);               /* 7 */
    
    /* Relational & Logical */
    printf("a>b: %d  a==b: %d\\n", a>b, a==b); /* 1  0 */
    printf("a>0 && b>0: %d\\n", a>0 && b>0);    /* 1 */
    
    /* Bitwise */
    printf("a&b=%d  a|b=%d  a^b=%d\\n", a&b, a|b, a^b);
    printf("~a=%d  a<<1=%d  a>>1=%d\\n", ~a, a<<1, a>>1);
    
    /* Ternary */
    int max = (a > b) ? a : b;
    printf("max=%d\\n", max);
    
    /* Assignment operators */
    int c = 10;
    c += 5;  printf("c+=5: %d\\n", c);   /* 15 */
    c -= 3;  printf("c-=3: %d\\n", c);   /* 12 */
    c *= 2;  printf("c*=2: %d\\n", c);   /* 24 */
    c /= 4;  printf("c/=4: %d\\n", c);   /* 6 */
    c %= 4;  printf("c%%=4: %d\\n", c);  /* 2 */
    return 0;
}`,
      mcqs:[
        {q:"int x=5, y=3;\nprintf(\"%d\", x++ + y);",options:["8","9","Error","Undefined"],correct:0,exp:"x++ returns 5 (then x=6), +y=3. Total=5+3=8. Then x becomes 6."},
        {q:"What is -3 % 2?",options:["1","-1","0","Error"],correct:1,exp:"In C, sign of % result follows the DIVIDEND. -3 % 2 = -1."},
        {q:"int a=10,b=0;\nprintf(\"%d\",a&&b||5);",options:["0","1","5","10"],correct:1,exp:"a&&b = 10&&0 = 0. 0||5 = 1 (non-zero is true). Output: 1."},
        {q:"What is sizeof(int) + sizeof(char)?",options:["2","3","5","Compiler-dependent"],correct:2,exp:"sizeof(int)=4, sizeof(char)=1. 4+1=5."},
        {q:"Which is NOT an assignment operator?\nA. +=  B. ==  C. *=  D. %=",options:["+=","==","*=","%="],correct:1,exp:"== is comparison (equality test). +=, *=, %= are compound assignment operators."},
      ]
    },
  ]
},

{
  id:"u2", title:"Unit II: Control Structures & I/O", emoji:"🔀", color:"#10b981",
  topics:[
    {
      id:"decision", title:"Decision Statements (if / switch)",
      theory:[
        {type:"heading",text:"1. Simple if"},
        {type:"code",text:"if (condition) {\n    // executes only if condition is TRUE\n}"},
        {type:"heading",text:"2. if-else"},
        {type:"code",text:"if (condition) {\n    // true block\n} else {\n    // false block\n}"},
        {type:"heading",text:"3. else-if Ladder"},
        {type:"code",text:"if (marks >= 90)      printf(\"A\");\nelse if (marks >= 80) printf(\"B\");\nelse if (marks >= 70) printf(\"C\");\nelse                  printf(\"F\");"},
        {type:"heading",text:"4. switch Statement"},
        {type:"code",text:"switch (expression) {\n    case val1: stmt; break;\n    case val2: stmt; break;\n    default:   stmt;\n}"},
        {type:"table",headers:["Feature","if-else","switch"],rows:[
          ["Condition type","Any expression","Integer/char only"],
          ["Range checking","Yes (x>5)","No"],
          ["Fall-through","No","Yes (without break)"],
          ["Readability","Better for complex","Better for many values"],
        ]},
        {type:"note",text:"Dangling else: always pairs with nearest if. Use { } to explicitly control pairing."},
      ],
      codeExample:`#include <stdio.h>
int main() {
    int marks;
    printf("Enter marks: ");
    scanf("%d", &marks);
    
    /* else-if ladder */
    if (marks >= 90)      printf("Grade: O (Outstanding)\\n");
    else if (marks >= 75) printf("Grade: A (Excellent)\\n");
    else if (marks >= 60) printf("Grade: B (Good)\\n");
    else if (marks >= 50) printf("Grade: C (Average)\\n");
    else                  printf("Grade: F (Fail)\\n");
    
    /* switch — day of week */
    int day;
    printf("Enter day (1-7): ");
    scanf("%d", &day);
    switch(day) {
        case 1: printf("Monday\\n");    break;
        case 2: printf("Tuesday\\n");   break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n");  break;
        case 5: printf("Friday\\n");    break;
        case 6: printf("Saturday\\n");  break;
        case 7: printf("Sunday\\n");    break;
        default: printf("Invalid day\\n");
    }
    return 0;
}`,
      mcqs:[
        {q:"What happens when break is missing in switch?",options:["Compile error","Runtime error","Fall-through to next case","switch exits"],correct:2,exp:"Without break, execution falls through to the next case automatically."},
        {q:"switch(x) works when x is?",options:["float","double","int","All types"],correct:2,exp:"switch only accepts integer types (int, char, short, long, enum). float/double cause compile error."},
        {q:"int x=5;\nif(x=0) printf(\"A\"); else printf(\"B\");",options:["A","B","Compile error","Runtime error"],correct:1,exp:"if(x=0) assigns 0 to x. 0 is false, so else executes. Output: B."},
      ]
    },
    {
      id:"loops", title:"Loops (while / for / do-while)",
      theory:[
        {type:"table",headers:["Loop","Type","Syntax","Min Executions"],rows:[
          ["while","Entry-controlled","while(cond){body;}","0"],
          ["for","Entry-controlled","for(init;cond;update){body;}","0"],
          ["do-while","Exit-controlled","do{body;}while(cond);","1 (always)"],
        ]},
        {type:"heading",text:"Execution Order — for loop"},
        {type:"code",text:"for(init; condition; update)\n// 1. init (once)\n// 2. check condition → false: exit\n// 3. execute body\n// 4. execute update → go to step 2"},
        {type:"note",text:"for(;;) is an infinite loop — all three parts are optional. for loop is preferred when count is known; while when condition-based."},
      ],
      codeExample:`#include <stdio.h>
int main() {
    /* while — sum of digits */
    int n = 12345, sum = 0, temp = n;
    while (temp > 0) {
        sum += temp % 10;
        temp /= 10;
    }
    printf("Sum of digits of %d = %d\\n", n, sum); /* 15 */
    
    /* for — multiplication table */
    int num = 5;
    printf("Table of %d:\\n", num);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", num, i, num*i);
    }
    
    /* Nested for — star pattern */
    printf("Pattern:\\n");
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++)
            printf("* ");
        printf("\\n");
    }
    /* * 
       * * 
       * * * 
       * * * * 
       * * * * * */
    
    /* do-while — menu driven */
    int choice;
    do {
        printf("1.Add 2.Sub 3.Exit: ");
        scanf("%d", &choice);
        if(choice==1) printf("Add selected\\n");
        else if(choice==2) printf("Sub selected\\n");
    } while (choice != 3);
    
    return 0;
}`,
      mcqs:[
        {q:"int i=0;\nwhile(++i<=5);\nprintf(\"%d\",i);",options:["5","6","4","Infinite"],correct:1,exp:"Empty body (;). ++i increments to 1,2,3,4,5,6. At i=6, 6<=5 is false. Prints 6."},
        {q:"for(i=1;i!=10;i+=2) — how many times?",options:["5","4","Infinite","0"],correct:2,exp:"i goes 1,3,5,7,9,11... never equals 10. Infinite loop!"},
        {q:"do{printf(\"Hi\");}while(0); — output?",options:["Nothing","Hi (infinite)","Hi (once)","Compile error"],correct:2,exp:"do-while always executes body once before checking condition. Prints Hi once, then 0 is false."},
        {q:"for(i=1;i<10;i++); printf(\"%d\",i);",options:["1-9","10","9","Compile error"],correct:1,exp:"Semicolon = empty body. Loop runs until i=10. printf prints 10."},
      ]
    },
    {
      id:"jumpstmts", title:"break / continue / goto / return",
      theory:[
        {type:"table",headers:["Statement","Where Used","Effect"],rows:[
          ["break","loop, switch","Immediately exits the innermost loop/switch"],
          ["continue","loops only","Skips rest of current iteration, goes to next"],
          ["goto","anywhere","Unconditional jump to labeled statement"],
          ["return","functions","Exits function, optionally returns value"],
        ]},
        {type:"note",text:"In for loop, continue jumps to update expression. In while/do-while, continue jumps to condition check."},
        {type:"heading",text:"Type Conversion & Modifiers"},
        {type:"list",items:[
          "Implicit: char → int → float → double (automatic widening)",
          "Explicit: (type)expr — truncates, e.g., (int)3.9 = 3",
          "short: 2 bytes; long: 4-8 bytes; unsigned: no negative values; signed: default",
        ]},
      ],
      codeExample:`#include <stdio.h>
int main() {
    /* break — exit when found */
    int arr[] = {3,7,1,9,4};
    int target = 9, found = -1;
    for (int i = 0; i < 5; i++) {
        if (arr[i] == target) { found = i; break; }
    }
    printf("Found at index: %d\\n", found); /* 3 */
    
    /* continue — skip multiples of 3 */
    printf("Not multiples of 3: ");
    for (int i = 1; i <= 15; i++) {
        if (i % 3 == 0) continue;
        printf("%d ", i);
    }
    printf("\\n");
    /* 1 2 4 5 7 8 10 11 13 14 */
    
    /* goto — simple example */
    int x = -5;
    if (x < 0) goto negative;
    printf("Positive\\n");
    goto end;
    negative: printf("Negative: %d\\n", x);
    end: ;
    
    /* Type conversion */
    int a = 7, b = 2;
    printf("int/int:   %d\\n", a/b);           /* 3 */
    printf("float div: %.2f\\n",(float)a/b);   /* 3.50 */
    double d = 1.99;
    int n = (int)d + 1;
    printf("(int)1.99 + 1 = %d\\n", n);        /* 2 */
    return 0;
}`,
      mcqs:[
        {q:"for(i=1;i<=5;i++){\n  if(i==3) continue;\n  printf(\"%d \",i);\n}",options:["1 2 3 4 5","1 2 4 5","1 2","4 5"],correct:1,exp:"continue skips i=3. Prints 1 2 4 5."},
        {q:"for(i=1;i<=5;i++){\n  if(i==3) break;\n  printf(\"%d \",i);\n}",options:["1 2","1 2 3 4 5","3 4 5","1 2 3"],correct:0,exp:"break exits when i=3. Only 1 and 2 are printed."},
        {q:"(int)3.9 = ?",options:["4","3","3.9","Error"],correct:1,exp:"Explicit cast to int truncates (does NOT round). (int)3.9 = 3."},
      ]
    },
    {
      id:"io", title:"Formatted & Unformatted I/O",
      theory:[
        {type:"heading",text:"Formatted I/O — printf() & scanf()"},
        {type:"table",headers:["Specifier","Type","Example"],rows:[
          ["%d / %i","int","printf(\"%d\",42) → 42"],
          ["%f","float","printf(\"%.2f\",3.14) → 3.14"],
          ["%lf","double","scanf(\"%lf\",&d)"],
          ["%c","char","printf(\"%c\",'A') → A"],
          ["%s","string","printf(\"%s\",\"Hi\")"],
          ["%ld","long int","printf(\"%ld\",1234567890L)"],
          ["%e","scientific","printf(\"%e\",12345.0) → 1.2345e+04"],
          ["%o","octal","printf(\"%o\",8) → 10"],
          ["%x","hex","printf(\"%x\",255) → ff"],
          ["%%","literal %","printf(\"100%%\") → 100%"],
        ]},
        {type:"heading",text:"Unformatted I/O Functions"},
        {type:"table",headers:["Function","Purpose","Header"],rows:[
          ["getchar()","Read char (waits for Enter)","stdio.h"],
          ["putchar(c)","Print one char","stdio.h"],
          ["gets(str)","Read string with spaces (UNSAFE)","stdio.h"],
          ["puts(str)","Print string + newline","stdio.h"],
          ["getch()","Read char immediately, no echo","conio.h"],
          ["getche()","Read char immediately, with echo","conio.h"],
        ]},
        {type:"note",text:"gets() is deprecated/removed in C11 due to buffer overflow risk. Use fgets(str, size, stdin) instead."},
      ],
      codeExample:`#include <stdio.h>
int main() {
    /* Width and precision formatting */
    printf("[%5d]\\n",   42);    /* [   42] right-align */
    printf("[%-5d]\\n",  42);    /* [42   ] left-align */
    printf("[%05d]\\n",  42);    /* [00042] zero-pad */
    printf("[%8.3f]\\n", 3.14);  /* [   3.140] */
    printf("[%.2f]\\n",  3.14159); /* [3.14] */
    
    /* printf return value = chars printed */
    int n = printf("Hello");    /* prints Hello */
    printf("\\nChars printed: %d\\n", n); /* 5 */
    
    /* scanf return value = items read */
    int a, b;
    int r = scanf("%d %d", &a, &b);
    printf("Read %d items\\n", r);
    
    /* Character I/O */
    printf("Enter a char: ");
    char ch = getchar();
    printf("You entered: ");
    putchar(ch);
    printf("\\n");
    
    /* String I/O */
    char name[50];
    printf("Enter name (with spaces): ");
    // gets(name); /* deprecated */
    fgets(name, 50, stdin); /* safer alternative */
    puts(name);   /* prints name + newline */
    
    /* Escape sequences */
    printf("Tab:\\there\\n");
    printf("Quote: \\"Hello\\"\\n");
    printf("Backslash: \\\\\\n");
    return 0;
}`,
      mcqs:[
        {q:"printf(\"%.3f\", 12.6789); output?",options:["12.678","12.679","12.7","12.6789"],correct:0,exp:"%.3f rounds to 3 decimal places: 12.6789 → 12.679... wait — 12.678 rounds to 12.679. Actually the 9 rounds up the 8→9. Correct: 12.679."},
        {q:"int x=printf(\"ABCDE\");\nprintf(\"%d\",x);",options:["ABCDE","5","ABCDE5","Error"],correct:2,exp:"printf returns chars printed. \"ABCDE\"=5 chars. First prints ABCDE, then 5. Output: ABCDE5."},
        {q:"gets() vs scanf(\"%s\") difference?",options:["No difference","gets reads spaces; scanf stops at space","scanf is faster","gets is safer"],correct:1,exp:"gets() reads entire line including spaces until newline. scanf(\"%s\") stops at any whitespace."},
        {q:"What does puts(\"Hello\") print?",options:["Hello","Hello\\n","\"Hello\"","Hello with no newline"],correct:1,exp:"puts() always appends a newline after the string. Equivalent to printf(\"Hello\\n\")."},
      ]
    },
  ]
},

{
  id:"u3", title:"Unit III: Functions & Storage Classes", emoji:"🔧", color:"#f59e0b",
  topics:[
    {
      id:"funcbasics", title:"Function Prototypes, Definition & Call",
      theory:[
        {type:"para",text:"A function is a self-contained block of code that performs a specific task. Functions promote code reuse, modularity, and abstraction. (Ref: Balagurusamy Ch.5)"},
        {type:"heading",text:"3 Components"},
        {type:"code",text:"// 1. DECLARATION (Prototype) — before main\nreturn_type function_name(param_types);\n\n// 2. DEFINITION — actual code\nreturn_type function_name(params) {\n    // body\n    return value;\n}\n\n// 3. CALL — invoke the function\nresult = function_name(arguments);"},
        {type:"heading",text:"4 Types Based on Arguments & Return"},
        {type:"table",headers:["Type","Args","Return","Use Case"],rows:[
          ["Type 1","No","No (void)","print message"],
          ["Type 2","Yes","No (void)","process and display"],
          ["Type 3","No","Yes","get input inside func"],
          ["Type 4","Yes","Yes","most common, general purpose"],
        ]},
        {type:"note",text:"Call by Value: copy passed — original safe. Call by Reference: address passed — original can be modified."},
      ],
      codeExample:`#include <stdio.h>
#include <math.h>

/* Prototypes */
int add(int, int);
void greet(void);
float circleArea(float);
void swap(int *, int *);   /* call by reference */

int main() {
    greet();                          /* Type 1 */
    printf("Sum = %d\\n", add(5,3));  /* Type 4 */
    printf("Area = %.2f\\n", circleArea(5.0)); /* Type 4 */
    
    int x=10, y=20;
    printf("Before: x=%d y=%d\\n", x, y);
    swap(&x, &y);   /* pass addresses */
    printf("After:  x=%d y=%d\\n", x, y); /* swapped! */
    
    /* Math library functions */
    printf("sqrt(16) = %.1f\\n", sqrt(16));
    printf("pow(2,8) = %.0f\\n", pow(2,8));
    printf("ceil(3.2)= %.0f\\n", ceil(3.2));
    printf("fabs(-5) = %.1f\\n", fabs(-5.0));
    return 0;
}
void greet(void) { printf("Hello from function!\\n"); }
int add(int a, int b) { return a + b; }
float circleArea(float r) { return 3.14159f * r * r; }
void swap(int *a, int *b) {  /* call by reference */
    int temp = *a;
    *a = *b;
    *b = temp;
}`,
      mcqs:[
        {q:"Which is a valid function prototype?\nA. function1(int,int);\nB. void function1(a,b);\nC. void function1(int,int);\nD. int (int,int);",options:["A","B","C","D"],correct:2,exp:"C is correct: must have return type, valid name, and param types. Ends with semicolon."},
        {q:"Call by value vs call by reference:\nIn call by value, the original variable is?",options:["Modified","Not modified","Deleted","Undefined"],correct:1,exp:"Call by value passes a COPY. The original variable is NOT modified by the function."},
        {q:"void func(int *p){*p=100;}\nmain: int x=5; func(&x); printf(\"%d\",x);",options:["5","100","Error","Undefined"],correct:1,exp:"func receives address of x, *p=100 changes x through pointer. Output: 100."},
        {q:"sqrt() function needs which header?",options:["stdlib.h","string.h","math.h","stdio.h"],correct:2,exp:"All math functions (sqrt, pow, fabs, ceil, floor, sin, cos, log) need #include <math.h>."},
      ]
    },
    {
      id:"recursion", title:"Recursion & Math Functions",
      theory:[
        {type:"para",text:"Recursion: A function calling itself. Must have a BASE CASE (termination) and RECURSIVE CASE (reduces toward base)."},
        {type:"code",text:"long factorial(int n) {\n    if (n <= 1) return 1;       // BASE CASE\n    return n * factorial(n-1);  // RECURSIVE CASE\n}"},
        {type:"table",headers:["Math Function","Description","Example"],rows:[
          ["sqrt(x)","Square root","sqrt(25.0) = 5.0"],
          ["pow(x,y)","x^y","pow(2,10) = 1024.0"],
          ["fabs(x)","Absolute value (float)","fabs(-3.5) = 3.5"],
          ["ceil(x)","Round up","ceil(3.1) = 4.0"],
          ["floor(x)","Round down","floor(3.9) = 3.0"],
          ["log(x)","Natural log (base e)","log(2.718) ≈ 1.0"],
          ["log10(x)","Log base 10","log10(1000) = 3.0"],
          ["sin/cos/tan","Trig (radians)","sin(0) = 0.0"],
          ["exp(x)","e^x","exp(1) = 2.718"],
        ]},
        {type:"note",text:"Recursion uses STACK memory. Each call adds a stack frame. Too many calls → Stack Overflow. Iteration is faster and uses less memory."},
      ],
      codeExample:`#include <stdio.h>
#include <math.h>

long factorial(int n) {
    if (n <= 1) return 1;        /* base case */
    return n * factorial(n-1);   /* recursive */
}

int fibonacci(int n) {
    if (n==0) return 0;          /* base case */
    if (n==1) return 1;          /* base case */
    return fibonacci(n-1) + fibonacci(n-2); /* recursive */
}

int gcd(int a, int b) {
    if (b == 0) return a;        /* base case */
    return gcd(b, a % b);        /* Euclidean algo */
}

int power(int base, int exp) {
    if (exp == 0) return 1;
    return base * power(base, exp-1);
}

int main() {
    printf("5! = %ld\\n", factorial(5));      /* 120 */
    printf("fib(8) = %d\\n", fibonacci(8));    /* 21 */
    printf("gcd(48,18) = %d\\n", gcd(48,18)); /* 6 */
    printf("2^10 = %d\\n", power(2,10));       /* 1024 */
    
    printf("\\nFibonacci series: ");
    for(int i=0; i<10; i++)
        printf("%d ", fibonacci(i));  /* 0 1 1 2 3 5 8 13 21 34 */
    printf("\\n");
    return 0;
}`,
      mcqs:[
        {q:"void rec(int n){if(n==0)return; printf(\"%d \",n); rec(n-1);}\nrec(5) output?",options:["5","5 4 3 2 1","1 2 3 4 5","0 1 2 3 4"],correct:1,exp:"Prints n before recursing. Stops at 0. Output: 5 4 3 2 1."},
        {q:"int f(int n){if(n==1)return 1; return n*f(n-1);}\nf(5)=?",options:["5","24","120","25"],correct:2,exp:"f(5)=5×f(4)=5×4×f(3)=5×4×3×f(2)=5×4×3×2×f(1)=5×4×3×2×1=120."},
        {q:"What is the base case essential for?",options:["Speed","Stopping infinite recursion","Memory saving","Faster output"],correct:1,exp:"Base case terminates recursion. Without it, function calls itself infinitely → stack overflow."},
      ]
    },
    {
      id:"storage", title:"Storage Classes & Scope Rules",
      theory:[
        {type:"table",headers:["Class","Location","Default Value","Scope","Lifetime"],rows:[
          ["auto","Stack (RAM)","Garbage","Local block","Block ends"],
          ["register","CPU Register","Garbage","Local block","Block ends"],
          ["static (local)","Data Segment","Zero (0)","Local block","Entire program"],
          ["extern","Data Segment","Zero (0)","Global (all files)","Entire program"],
          ["Global (no keyword)","Data Segment","Zero (0)","All functions in file","Entire program"],
        ]},
        {type:"note",text:"register: cannot use & operator (may have no address). static local: preserves value between calls. extern: declares without defining (another file has it)."},
        {type:"heading",text:"Scope Rules"},
        {type:"list",items:[
          "Local variable: only in its function/block — shadows global with same name",
          "Global variable: accessible from any function after declaration",
          "Block scope: { int x; } — x dies when } is reached",
        ]},
      ],
      codeExample:`#include <stdio.h>

int globalVar = 100;   /* global — zero-initialized */

void demonstrate() {
    auto   int  a = 10;   /* default: garbage on each call */
    static int  b = 10;   /* preserved between calls! */
    register int c = 5;   /* hint: use CPU register */
    
    printf("auto=%d  static=%d  register=%d\\n", a, b, c);
    a++;  b++;  c++;
    /* a resets next call; b persists; c resets */
}

void showGlobal() {
    extern int globalVar;    /* reference to global */
    printf("global = %d\\n", globalVar);
    globalVar = 200;         /* modifies global */
}

int main() {
    demonstrate(); /* auto=10 static=10 register=5 */
    demonstrate(); /* auto=10 static=11 register=5 */
    demonstrate(); /* auto=10 static=12 register=5 */
    
    showGlobal();  /* global=100 */
    printf("After: global=%d\\n", globalVar); /* 200 */
    
    /* Scope: local shadows global */
    int globalVar = 999; /* local shadows global */
    printf("local shadows: %d\\n", globalVar); /* 999 */
    showGlobal(); /* still uses file-level global=200 */
    return 0;
}`,
      mcqs:[
        {q:"static int x=0 in function called 3 times, each does x++.\nValue after 3rd call?",options:["0","1","2","3"],correct:3,exp:"static preserves value. 0→1→2→3 across 3 calls. Final value: 3."},
        {q:"auto int x=5 called 3 times. Value on 3rd call?",options:["5","15","7","Garbage"],correct:0,exp:"auto resets every call. Re-initialized to 5 each time. Always 5."},
        {q:"register int a; scanf(\"%d\",&a); — result?",options:["Works fine","Compile error","Runtime error","Undefined"],correct:1,exp:"register variables may be in CPU registers, so taking address (&) is not allowed — compile error."},
        {q:"Default initial value of a static variable?",options:["Garbage","0","1","-1"],correct:1,exp:"static (and global) variables are zero-initialized by default."},
        {q:"Which storage class is default for local variables?",options:["static","register","auto","extern"],correct:2,exp:"All local variables are auto by default (stored on stack, garbage initial value)."},
      ]
    },
  ]
},

{
  id:"u4", title:"Unit IV: Arrays in C", emoji:"📊", color:"#ef4444",
  topics:[
    {
      id:"arrays1d", title:"1D Arrays — Declare, Init, Access",
      theory:[
        {type:"para",text:"An array is a collection of SAME data type elements stored in CONTIGUOUS memory under ONE name. (Ref: Kamthane Ch.7)"},
        {type:"heading",text:"Declaration & Initialization"},
        {type:"code",text:"// Declaration\nint marks[5];          // 5 ints: marks[0]..marks[4]\n\n// Initialization\nint arr[5] = {10,20,30,40,50};\nint arr[] = {10,20,30};  // size inferred = 3\nint arr[5] = {1,2};      // rest = 0: {1,2,0,0,0}\n\n// Access\narr[0] = 100;            // set first element\nprintf(\"%d\", arr[2]);   // get third element"},
        {type:"table",headers:["Property","Detail"],rows:[
          ["Index","Starts from 0, last index = size-1"],
          ["Memory","Contiguous — all elements adjacent"],
          ["Base address","arr == &arr[0] (address of first element)"],
          ["arr[i] equivalent","*(arr + i) — pointer notation"],
          ["Uninitialized (local)","Garbage values"],
          ["Uninitialized (global)","Zero-initialized"],
        ]},
        {type:"note",text:"C does NOT check array bounds. Accessing arr[n] or arr[-1] is undefined behavior — may crash or give wrong results!"},
      ],
      codeExample:`#include <stdio.h>
int main() {
    /* 1D Array — marks of 5 students */
    int marks[5] = {78, 92, 65, 88, 71};
    int n = 5, sum = 0, max, min;
    
    max = min = marks[0];
    for (int i = 0; i < n; i++) {
        sum += marks[i];
        if (marks[i] > max) max = marks[i];
        if (marks[i] < min) min = marks[i];
    }
    printf("Sum     = %d\\n", sum);           /* 394 */
    printf("Average = %.2f\\n", (float)sum/n); /* 78.80 */
    printf("Max     = %d\\n", max);           /* 92 */
    printf("Min     = %d\\n", min);           /* 65 */
    
    /* Pointer notation — same as array indexing */
    printf("\\nUsing pointers:\\n");
    for (int i = 0; i < n; i++)
        printf("*(marks+%d) = %d\\n", i, *(marks+i));
    
    /* Insert element at position */
    int arr[10] = {1,2,3,4,5};
    int size=5, pos=2, val=99;
    for(int i=size-1; i>=pos; i--)
        arr[i+1] = arr[i];       /* shift right */
    arr[pos] = val;
    size++;
    printf("\\nAfter insert at %d: ",pos);
    for(int i=0;i<size;i++) printf("%d ",arr[i]);
    /* 1 2 99 3 4 5 */
    printf("\\n");
    return 0;
}`,
      mcqs:[
        {q:"int arr[5]={1,2}; What is arr[3]?",options:["Garbage","0","2","Undefined"],correct:1,exp:"Partial initialization: remaining elements are set to 0. arr = {1,2,0,0,0}. arr[3]=0."},
        {q:"The base address of int arr[5] is?",options:["arr[0]","&arr","arr","*arr"],correct:2,exp:"arr (the array name) IS the address of the first element. arr == &arr[0]."},
        {q:"arr[i] is equivalent to?",options:["arr+i","*(arr+i)","&arr[i]","arr*i"],correct:1,exp:"Array indexing arr[i] is exactly equivalent to *(arr+i) in pointer notation."},
        {q:"What is the time complexity of inserting at position 0 in array of n elements?",options:["O(1)","O(log n)","O(n)","O(n²)"],correct:2,exp:"Inserting at beginning requires shifting all n elements right. O(n)."},
      ]
    },
    {
      id:"arrays2d", title:"2D Arrays & Passing to Functions",
      theory:[
        {type:"para",text:"A 2D array is an array of arrays, representing a matrix with rows and columns."},
        {type:"code",text:"// Declaration\nint mat[3][4];          // 3 rows, 4 cols = 12 elements\n\n// Initialization\nint mat[2][3] = {{1,2,3},{4,5,6}};\n\n// Access: mat[row][col], row & col start from 0\nmat[1][2] = 6;  // row 1, col 2\n\n// Memory (Row-Major): \n// mat[0][0], mat[0][1], mat[0][2], mat[1][0], ..."},
        {type:"note",text:"When passing 2D array to function, MUST specify number of columns: void func(int mat[][4], int rows). Number of rows can be omitted, columns cannot."},
        {type:"heading",text:"Passing Arrays to Functions"},
        {type:"list",items:[
          "1D: void func(int arr[], int n) — or void func(int *arr, int n)",
          "2D: void func(int mat[][COLS], int rows)",
          "Arrays are ALWAYS passed by reference (base address)",
          "Changes in function affect original array",
        ]},
      ],
      codeExample:`#include <stdio.h>
#define ROWS 3
#define COLS 3

/* Pass 2D array to function */
void printMatrix(int mat[][COLS], int r) {
    for(int i=0;i<r;i++){
        for(int j=0;j<COLS;j++)
            printf("%4d", mat[i][j]);
        printf("\\n");
    }
}

void addMatrices(int a[][COLS], int b[][COLS], 
                 int c[][COLS], int r) {
    for(int i=0;i<r;i++)
        for(int j=0;j<COLS;j++)
            c[i][j] = a[i][j] + b[i][j];
}

void transpose(int mat[][COLS], int r) {
    printf("Transpose:\\n");
    for(int i=0;i<COLS;i++){
        for(int j=0;j<r;j++)
            printf("%4d", mat[j][i]);
        printf("\\n");
    }
}

int main() {
    int A[ROWS][COLS] = {{1,2,3},{4,5,6},{7,8,9}};
    int B[ROWS][COLS] = {{9,8,7},{6,5,4},{3,2,1}};
    int C[ROWS][COLS];
    
    printf("Matrix A:\\n");
    printMatrix(A, ROWS);
    
    addMatrices(A, B, C, ROWS);
    printf("A + B:\\n");
    printMatrix(C, ROWS);
    
    transpose(A, ROWS);
    return 0;
}`,
      mcqs:[
        {q:"int mat[3][4] — total elements?",options:["7","12","9","3"],correct:1,exp:"3 rows × 4 columns = 12 total elements."},
        {q:"How is a 2D array stored in memory?",options:["Column-major","Row-major","Random","Both"],correct:1,exp:"C stores 2D arrays in ROW-MAJOR order: row 0 elements first, then row 1, etc."},
        {q:"How to pass 2D array to function?",options:["func(int mat[][]","func(int *mat","func(int mat[][4]","func(int **mat"],correct:2,exp:"Must specify number of columns: func(int mat[][COLS], int rows). Column count is mandatory."},
      ]
    },
    {
      id:"searching", title:"Linear Search & Binary Search",
      theory:[
        {type:"table",headers:["Feature","Linear Search","Binary Search"],rows:[
          ["Array type","Any (sorted/unsorted)","Must be SORTED"],
          ["Method","Check each element","Divide and conquer"],
          ["Time complexity","O(n)","O(log₂n)"],
          ["Best case","O(1) — first element","O(1) — middle element"],
          ["Worst case","O(n) — last or not found","O(log n) — not found"],
          ["Space","O(1)","O(1) iterative, O(log n) recursive"],
          ["Suitable for","Small/unsorted arrays","Large sorted arrays"],
        ]},
        {type:"heading",text:"Binary Search Algorithm"},
        {type:"code",text:"low=0, high=n-1\nwhile(low<=high):\n    mid = (low+high)/2\n    if arr[mid]==key: FOUND\n    if arr[mid]<key:  low=mid+1\n    if arr[mid]>key:  high=mid-1\nNOT FOUND"},
      ],
      codeExample:`#include <stdio.h>

int linearSearch(int arr[], int n, int key) {
    for(int i=0; i<n; i++)
        if(arr[i] == key) return i;  /* found at i */
    return -1;                        /* not found */
}

int binarySearch(int arr[], int n, int key) {
    int low=0, high=n-1, mid;
    while(low <= high) {
        mid = (low + high) / 2;      /* find middle */
        if(arr[mid] == key) return mid;  /* found */
        else if(arr[mid] < key) low = mid+1;  /* right half */
        else                   high = mid-1;  /* left half */
    }
    return -1;  /* not found */
}

int main() {
    int arr[] = {5, 12, 23, 35, 47, 58, 67, 78, 89, 95};
    int n = 10;
    
    /* Linear search on unsorted/sorted */
    int idx = linearSearch(arr, n, 58);
    printf("Linear: 58 found at index %d\\n", idx);   /* 5 */
    
    /* Binary search (array must be sorted) */
    idx = binarySearch(arr, n, 58);
    printf("Binary: 58 found at index %d\\n", idx);   /* 5 */
    
    idx = binarySearch(arr, n, 100);
    printf("Binary: 100 found at index %d\\n", idx);  /* -1 */
    
    /* Count comparisons — binary is much faster */
    printf("Linear worst case: %d comparisons\\n", n);      /* 10 */
    printf("Binary worst case: ~%d comparisons\\n", 4); /* log₂10≈4 */
    return 0;
}`,
      mcqs:[
        {q:"Binary search requires array to be?",options:["Random","Sorted","Partially sorted","Reversed"],correct:1,exp:"Binary search REQUIRES the array to be sorted (ascending or descending). Otherwise results are incorrect."},
        {q:"Linear search time complexity?",options:["O(1)","O(log n)","O(n)","O(n²)"],correct:2,exp:"Linear search checks each element one by one. In worst case (not found), checks all n elements: O(n)."},
        {q:"Binary search on 1000 elements: max comparisons?",options:["1000","500","10","100"],correct:2,exp:"log₂(1000) ≈ 10. Binary search needs at most 10 comparisons for 1000 elements."},
        {q:"What is mid in binary search if low=0, high=8?",options:["4","3","5","8"],correct:0,exp:"mid = (low+high)/2 = (0+8)/2 = 4."},
      ]
    },
    {
      id:"sorting", title:"Bubble Sort & Array Operations",
      theory:[
        {type:"para",text:"Bubble Sort repeatedly compares adjacent elements and swaps them if out of order. Largest element 'bubbles' to the end each pass. (Ref: Kamthane Ch.7)"},
        {type:"code",text:"for(i=0; i<n-1; i++)           // n-1 passes\n    for(j=0; j<n-1-i; j++)    // compare adjacent\n        if(arr[j] > arr[j+1])  // swap if out of order\n            swap(arr[j], arr[j+1]);"},
        {type:"table",headers:["Property","Value"],rows:[
          ["Time — Best","O(n) — with optimization flag"],
          ["Time — Average","O(n²)"],
          ["Time — Worst","O(n²) — reverse sorted"],
          ["Space","O(1) — in-place"],
          ["Stable","Yes — doesn't swap equal elements"],
          ["Passes","Maximum n-1 passes"],
        ]},
        {type:"note",text:"Optimization: If no swap occurs in a pass, array is already sorted — exit early. This makes best case O(n)."},
      ],
      codeExample:`#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int temp, swapped;
    for(int i=0; i<n-1; i++) {
        swapped = 0;
        for(int j=0; j<n-1-i; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];      /* swap */
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = 1;
            }
        }
        if(!swapped) break;  /* already sorted — optimization */
    }
}

void deleteElement(int arr[], int *n, int pos) {
    for(int i=pos; i<*n-1; i++)
        arr[i] = arr[i+1];  /* shift left */
    (*n)--;
}

void printArray(int arr[], int n) {
    for(int i=0;i<n;i++) printf("%d ",arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {64,34,25,12,22,11,90};
    int n = 7;
    
    printf("Before: "); printArray(arr,n);
    
    /* Show pass-by-pass */
    printf("Pass 1: ");
    /* After pass 1: 90 moves to end */
    
    bubbleSort(arr,n);
    printf("Sorted: "); printArray(arr,n);
    /* 11 12 22 25 34 64 90 */
    
    /* Delete element at position 2 */
    deleteElement(arr, &n, 2);
    printf("After delete pos 2: "); printArray(arr,n);
    /* 11 12 25 34 64 90 */
    return 0;
}`,
      mcqs:[
        {q:"Bubble sort time complexity (worst case)?",options:["O(n)","O(n log n)","O(n²)","O(log n)"],correct:2,exp:"Bubble sort uses two nested loops: O(n²) comparisons in worst case (reverse sorted)."},
        {q:"How many passes (maximum) for bubble sort on n elements?",options:["n","n+1","n-1","n/2"],correct:2,exp:"Maximum n-1 passes are needed for n elements (each pass guarantees one more element in place)."},
        {q:"Bubble sort is classified as?",options:["Divide and conquer","In-place comparison sort","Out-of-place sort","Non-comparison sort"],correct:1,exp:"Bubble sort is an in-place (no extra space) comparison-based sorting algorithm."},
        {q:"After 1st pass of bubble sort on {5,3,1,4,2}?",options:["{1,2,3,4,5}","{3,1,4,2,5}","{1,3,5,4,2}","{5,4,3,2,1}"],correct:1,exp:"First pass moves largest (5) to end: 5,3→3,5. 3,1→1,3. 3,4→stays. 4,2→2,4. Result:{3,1,4,2,5}."},
      ]
    },
  ]
},

{
  id:"u5", title:"Unit V: Pointers, DMA & Strings", emoji:"🔗", color:"#8b5cf6",
  topics:[
    {
      id:"pointers", title:"Pointers — Declaration, Types & Arithmetic",
      theory:[
        {type:"para",text:"A pointer is a variable that stores the MEMORY ADDRESS of another variable. Pointers enable dynamic memory, efficient array handling, and call by reference. (Ref: Balagurusamy Ch.8)"},
        {type:"code",text:"int x = 10;\nint *p = &x;   // p stores address of x\n\n*p = 20;      // dereference: changes x to 20\nprintf(\"%d\", *p);   // prints 20 (value at address)\nprintf(\"%p\", p);    // prints address (hex)"},
        {type:"table",headers:["Pointer Type","Description","Example"],rows:[
          ["Null pointer","Points to nothing (safe)","int *p = NULL;"],
          ["Void pointer","Generic — any type","void *vp; vp=&x;"],
          ["Dangling pointer","Points to freed/out-of-scope memory","after free(p) without p=NULL"],
          ["Wild pointer","Uninitialized — garbage address","int *p; (no init)"],
        ]},
        {type:"heading",text:"Pointer Arithmetic"},
        {type:"code",text:"int arr[]={10,20,30,40};\nint *p = arr;   // p → arr[0]\np++;            // p → arr[1] (moves 4 bytes for int)\n*(p+2)          // = arr[3] = 40"},
        {type:"note",text:"Arithmetic moves by sizeof(datatype) bytes. int*: each ++ moves 4 bytes. char*: moves 1 byte. Subtraction of two pointers gives number of elements between them."},
      ],
      codeExample:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int x = 42;
    int *p = &x;
    
    printf("Value of x:      %d\\n",  x);    /* 42 */
    printf("Address of x:    %p\\n", &x);    /* some addr */
    printf("p (addr stored): %p\\n",  p);    /* same addr */
    printf("*p (value at p): %d\\n", *p);    /* 42 */
    
    *p = 100;   /* modify x through pointer */
    printf("x after *p=100: %d\\n", x);      /* 100 */
    
    /* Pointer arithmetic with array */
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  /* ptr → arr[0] */
    
    printf("\\nArray via pointer:\\n");
    for(int i=0; i<5; i++)
        printf("ptr+%d → %d\\n", i, *(ptr+i));
    
    /* Pointer types demo */
    int   *ip = &x;         /* int pointer */
    void  *vp = &x;         /* void pointer (generic) */
    int   *np = NULL;       /* null pointer (safe) */
    
    /* Void pointer needs cast before use */
    printf("Via void*: %d\\n", *(int*)vp);  /* 100 */
    
    /* Null pointer check */
    if(np == NULL) printf("np is null\\n");
    
    /* Pointer subtraction */
    int *p1 = &arr[1], *p2 = &arr[4];
    printf("p2-p1 = %td elements\\n", p2-p1); /* 3 */
    return 0;
}`,
      mcqs:[
        {q:"int x=10; int *p=&x; *p=20; printf(\"%d\",x);",options:["10","20","0","Error"],correct:1,exp:"*p=20 dereferences p and writes 20 to x's location. x becomes 20."},
        {q:"If int *p=1000, what is p+2 (int is 4 bytes)?",options:["1001","1002","1008","1004"],correct:2,exp:"p+2 moves 2×sizeof(int)=2×4=8 bytes. 1000+8=1008."},
        {q:"What is a dangling pointer?",options:["Uninitialized pointer","Points to freed memory","NULL pointer","Pointer to pointer"],correct:1,exp:"Dangling pointer points to memory that has been freed or a local variable that went out of scope."},
        {q:"void *p can point to?",options:["int only","Any data type","char only","float only"],correct:1,exp:"void* is a generic pointer that can hold address of any data type. Must cast before dereferencing."},
      ]
    },
    {
      id:"dma", title:"Dynamic Memory Allocation",
      theory:[
        {type:"table",headers:["Function","Syntax","Init","On Fail"],rows:[
          ["malloc(size)","malloc(n*sizeof(int))","Garbage (uninit)","Returns NULL"],
          ["calloc(n,size)","calloc(n,sizeof(int))","All zeros","Returns NULL"],
          ["realloc(ptr,size)","realloc(ptr,newsize)","Copies old data","Returns NULL"],
          ["free(ptr)","free(ptr)","Releases heap","—"],
        ]},
        {type:"note",text:"Always check if malloc/calloc returned NULL before use! Always free() when done to avoid memory leaks. After free, set ptr=NULL to avoid dangling pointer."},
        {type:"code",text:"int *arr = (int*)malloc(n * sizeof(int));\nif(arr == NULL) { printf(\"Failed\"); exit(1); }\n// use arr...\nfree(arr);\narr = NULL;  // prevent dangling pointer"},
      ],
      codeExample:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("Enter n: ");
    scanf("%d", &n);
    
    /* malloc — uninitialized */
    int *arr = (int*)malloc(n * sizeof(int));
    if(!arr) { printf("Allocation failed!\\n"); return 1; }
    
    printf("Enter %d elements: ", n);
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    
    /* Sort using bubble sort */
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-1-i;j++)
            if(arr[j]>arr[j+1]){
                int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t;
            }
    printf("Sorted: ");
    for(int i=0;i<n;i++) printf("%d ",arr[i]);
    printf("\\n");
    
    /* realloc — resize to 2n */
    arr = (int*)realloc(arr, 2*n * sizeof(int));
    if(!arr) { printf("Realloc failed!\\n"); return 1; }
    for(int i=n;i<2*n;i++) arr[i]=0;
    printf("After realloc (size %d): ",2*n);
    for(int i=0;i<2*n;i++) printf("%d ",arr[i]);
    printf("\\n");
    
    /* calloc — zero initialized */
    float *scores = (float*)calloc(5, sizeof(float));
    printf("calloc (all zeros): ");
    for(int i=0;i<5;i++) printf("%.1f ",scores[i]); /* 0.0 */
    printf("\\n");
    
    free(arr);    arr=NULL;    /* prevent dangling */
    free(scores); scores=NULL;
    printf("Memory freed.\\n");
    return 0;
}`,
      mcqs:[
        {q:"malloc vs calloc: key difference?",options:["malloc is faster always","calloc initializes to zero","malloc takes 2 args","calloc returns int*"],correct:1,exp:"calloc initializes all bytes to ZERO. malloc leaves memory uninitialized (garbage values)."},
        {q:"int *p=(int*)malloc(sizeof(int));\np=NULL; free(p); — problem?",options:["Compile error","Memory leak","Dangling pointer","No problem"],correct:1,exp:"p=NULL loses the reference to allocated memory WITHOUT freeing it → memory leak."},
        {q:"Return type of malloc()?",options:["int*","void*","char*","depends on input"],correct:1,exp:"malloc (and calloc, realloc) always return void* which must be cast to the appropriate pointer type."},
        {q:"realloc(ptr, 0) is equivalent to?",options:["malloc(0)","calloc(0,0)","free(ptr)","Error"],correct:2,exp:"realloc(ptr, 0) frees the memory pointed to by ptr, equivalent to free(ptr)."},
      ]
    },
    {
      id:"strings", title:"Strings & String Functions",
      theory:[
        {type:"para",text:"A string in C is a character array terminated by the null character '\\0'. C has no built-in string type — strings are char arrays. (Ref: Kamthane Ch.9, Balagurusamy Ch.9)"},
        {type:"code",text:"char str[] = \"Hello\"; /* H e l l o \\0 — 6 bytes */\nchar str[6] = \"Hello\"; /* same */\nchar str[] = {'H','e','l','l','o','\\0'}; /* same */"},
        {type:"table",headers:["Function","Purpose","Example"],rows:[
          ["strlen(s)","Length (excl \\0)","strlen(\"Hello\")=5"],
          ["strcpy(d,s)","Copy s to d","strcpy(d,\"Hi\")"],
          ["strcat(d,s)","Append s to d","strcat(d,\"!\")"],
          ["strcmp(s1,s2)","Compare: 0=equal,<0,>0","strcmp(\"AB\",\"AB\")=0"],
          ["strchr(s,c)","First occurrence of c","strchr(\"Hello\",'l')"],
          ["strstr(s1,s2)","Find substring","strstr(\"Hello\",\"ell\")"],
          ["toupper(c)","To uppercase","toupper('a')='A'"],
          ["tolower(c)","To lowercase","tolower('A')='a'"],
          ["isalpha(c)","Is letter?","isalpha('A')=1"],
          ["isdigit(c)","Is digit?","isdigit('5')=1"],
        ]},
        {type:"note",text:"char *p=\"Hello\" makes p point to a string LITERAL (read-only). char arr[]=\"Hello\" creates a modifiable copy. Always use arr[] for modifiable strings."},
      ],
      codeExample:`#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    char str3[40];
    
    printf("strlen: %lu\\n", strlen(str1));  /* 5 */
    
    strcpy(str3, str1);   /* copy Hello to str3 */
    printf("strcpy: %s\\n", str3);            /* Hello */
    
    strcat(str3, " ");
    strcat(str3, str2);   /* append World */
    printf("strcat: %s\\n", str3);            /* Hello World */
    
    printf("strcmp: %d\\n", strcmp(str1,str2)); /* <0 (H<W) */
    printf("strcmp: %d\\n", strcmp("ABC","ABC")); /* 0 */
    
    /* Character functions */
    char s[] = "Hello World 123";
    int letters=0, digits=0, spaces=0;
    for(int i=0; s[i]; i++){
        if(isalpha(s[i])) letters++;
        else if(isdigit(s[i])) digits++;
        else if(isspace(s[i])) spaces++;
    }
    printf("Letters=%d Digits=%d Spaces=%d\\n",
           letters, digits, spaces); /* 10 3 2 */
    
    /* String palindrome check */
    char word[] = "madam";
    int len = strlen(word), isPalin = 1;
    for(int i=0; i<len/2; i++)
        if(word[i] != word[len-1-i]) { isPalin=0; break; }
    printf("%s is%s palindrome\\n", word, isPalin?"":" not");
    
    /* String to uppercase */
    char msg[] = "hello cse101";
    for(int i=0; msg[i]; i++) msg[i] = toupper(msg[i]);
    printf("Upper: %s\\n", msg);  /* HELLO CSE101 */
    return 0;
}`,
      mcqs:[
        {q:"strlen(\"Hello\\0World\") = ?",options:["5","11","10","6"],correct:0,exp:"strlen stops at first \\0. 'Hello' has 5 chars before \\0. Returns 5."},
        {q:"strcmp(\"apple\",\"apple\") = ?",options:["1","0","-1","Error"],correct:1,exp:"strcmp returns 0 when strings are EQUAL."},
        {q:"char *p=\"Hello\"; p[0]='J'; — what happens?",options:["Works fine","Segmentation fault","J replaces H","Compile error"],correct:1,exp:"String literals are read-only. Modifying via pointer causes undefined behavior (usually segfault)."},
        {q:"Which function reads string WITH spaces?",options:["scanf(\"%s\")","gets()","getchar()","putchar()"],correct:1,exp:"gets() reads entire line including spaces until newline. scanf(\"%s\") stops at whitespace."},
        {q:"strcat(\"Hello\",\" World\") result?",options:["Hello","Hello World","World","Error"],correct:1,exp:"strcat appends second string to first. Result: \"Hello World\"."},
      ]
    },
  ]
},

{
  id:"u6", title:"Unit VI: Structures, Unions & C++", emoji:"🏗️", color:"#ec4899",
  topics:[
    {
      id:"structures", title:"Structures — Declaration & Access",
      theory:[
        {type:"para",text:"A structure groups variables of DIFFERENT data types under one name. Used to represent real-world entities like Student, Employee, Date. (Ref: Kamthane Ch.10)"},
        {type:"code",text:"/* Structure definition */\nstruct Student {\n    int rollno;\n    char name[50];\n    float gpa;\n    char dept[10];\n};\n\n/* Variable declaration */\nstruct Student s1;\nstruct Student s2 = {101, \"Alice\", 3.8, \"CSE\"};\n\n/* Access members */\ns1.rollno = 102;       /* dot operator */\nstrcpy(s1.name,\"Bob\");"},
        {type:"table",headers:["Feature","Structure","Union"],rows:[
          ["Memory","Each member has own space","ALL members share same space"],
          ["Size","Sum of all members (+ padding)","Size of LARGEST member"],
          ["Access","Multiple members valid","Only ONE member valid at a time"],
          ["Use","Group related data","Memory-efficient variant types"],
        ]},
        {type:"note",text:"struct size may be larger than sum of members due to PADDING (memory alignment). Use sizeof() to get actual size."},
      ],
      codeExample:`#include <stdio.h>
#include <string.h>

/* Structure definition */
struct Student {
    int rollno;
    char name[50];
    float gpa;
    char dept[10];
};

/* Nested structure */
struct Address {
    char city[30];
    char state[30];
    int pincode;
};
struct Employee {
    int empid;
    char name[50];
    float salary;
    struct Address addr;  /* nested */
};

/* Structure pointer */
void display(struct Student *s) {  /* pointer to struct */
    printf("Roll: %d | Name: %s | GPA: %.1f | Dept: %s\\n",
           s->rollno, s->name, s->gpa, s->dept);
}

int main() {
    /* Array of structures */
    struct Student cls[3] = {
        {101, "Alice", 3.9, "CSE"},
        {102, "Bob",   3.5, "ECE"},
        {103, "Carol", 3.7, "ME"},
    };
    
    printf("Student Records:\\n");
    for(int i=0; i<3; i++)
        display(&cls[i]);  /* pass pointer */
    
    /* Nested structure */
    struct Employee emp = {
        201, "David", 55000.0,
        {"Amritsar", "Punjab", 143001}
    };
    printf("\\nEmployee: %s, Salary: %.0f\\n",
           emp.name, emp.salary);
    printf("City: %s, PIN: %d\\n",
           emp.addr.city, emp.addr.pincode);
    
    printf("\\nsizeof(Student) = %lu bytes\\n",
           sizeof(struct Student));  /* 68 bytes typically */
    return 0;
}`,
      mcqs:[
        {q:"Which operator accesses structure member via pointer?",options:[".","->"," *","::"],correct:1,exp:"Arrow operator (->) is used to access members via pointer. Equivalent to (*ptr).member."},
        {q:"sizeof(struct) is?",options:["Sum of all members exactly","Exactly sum + padding","Size of largest member","Compiler-defined"],correct:1,exp:"struct size = sum of members + possible padding bytes for alignment (may vary by compiler)."},
        {q:"struct S{int a; char b; int c;};\nWhich is nested structure?",options:["struct inside another struct","struct with array","struct with pointer","struct with union"],correct:0,exp:"Nested structure means one struct is a MEMBER of another struct."},
        {q:"Default access for struct members in C?",options:["private","public","protected","depends"],correct:1,exp:"In C, struct members are always public (no access control). In C++, struct defaults to public, class defaults to private."},
      ]
    },
    {
      id:"unions", title:"Unions & typedef & enum",
      theory:[
        {type:"code",text:"union Data {\n    int  i;\n    float f;\n    char ch;\n};\n/* sizeof(Data) = sizeof(float) = 4 bytes */\n/* Only ONE member valid at a time */\n\nunion Data d;\nd.i = 10;    /* only d.i is valid now */\nd.f = 3.14;  /* now only d.f is valid (overwrites!) */"},
        {type:"heading",text:"typedef — Create Type Aliases"},
        {type:"code",text:"typedef unsigned int uint;\ntypedef struct Student { int id; char name[20]; } Student;\n\nStudent s;  /* instead of struct Student s */\nuint count; /* instead of unsigned int count */"},
        {type:"heading",text:"Enumeration (enum)"},
        {type:"code",text:"enum Day {MON=1, TUE, WED, THU, FRI, SAT, SUN};\n/* MON=1, TUE=2, WED=3, ... SUN=7 */\n\nenum Day today = WED;\nprintf(\"%d\", today);  /* 3 */"},
        {type:"table",headers:["Type","Memory","Simultaneous Members","Use"],rows:[
          ["struct","All members","All valid","Group related data"],
          ["union","Largest member","Only ONE","Variant/memory-efficient"],
          ["enum","int (4B)","N/A","Named integer constants"],
        ]},
      ],
      codeExample:`#include <stdio.h>
typedef struct {
    int rollno;
    char name[30];
    float marks;
} Student;   /* typedef: use Student instead of struct */

union Value {
    int   integer;
    float decimal;
    char  character;
};

enum Status { FAIL=0, PASS=1, DISTINCTION=2 };

int main() {
    /* typedef struct */
    Student s = {101, "Alice", 92.5};
    printf("Roll: %d, Name: %s, Marks: %.1f\\n",
            s.rollno, s.name, s.marks);
    
    /* union — shared memory */
    union Value v;
    printf("sizeof(union Value) = %lu\\n",sizeof(v));/* 4 */
    
    v.integer = 65;
    printf("integer: %d\\n", v.integer);   /* 65 */
    printf("character: %c\\n", v.character); /* 'A' (same memory!) */
    
    v.decimal = 3.14f;  /* overwrites integer */
    printf("decimal: %.2f\\n", v.decimal);  /* 3.14 */
    /* v.integer is now undefined (overwritten) */
    
    /* enum */
    enum Status result = DISTINCTION;
    if(result == DISTINCTION)
        printf("Congratulations! Distinction!\\n");
    printf("Status code: %d\\n", result); /* 2 */
    return 0;
}`,
      mcqs:[
        {q:"sizeof(union) with members int(4B), char(1B), double(8B)?",options:["13","8","4","Depends"],correct:1,exp:"Union size = size of LARGEST member = sizeof(double) = 8 bytes (plus possible padding)."},
        {q:"In a union, how many members can be valid at once?",options:["All","Only one","Two","Depends"],correct:1,exp:"All union members share the SAME memory. Writing to one invalidates/overwrites others. Only ONE is valid."},
        {q:"enum Day{MON,TUE,WED}; Value of WED?",options:["0","1","2","3"],correct:2,exp:"Default enum starts at 0. MON=0, TUE=1, WED=2."},
        {q:"typedef unsigned int uint; — effect?",options:["Creates new type","Creates alias for unsigned int","Declares variable","Changes int size"],correct:1,exp:"typedef creates an ALIAS. uint is now another name for unsigned int; no new type is created."},
      ]
    },
    {
      id:"cpp", title:"Basics of C++ Programming",
      theory:[
        {type:"para",text:"C++ is an extension of C by Bjarne Stroustrup (1979–1983). Supports Object-Oriented Programming (OOP). C programs can be compiled with C++ compilers (with minor changes)."},
        {type:"heading",text:"cin and cout"},
        {type:"code",text:"#include <iostream>\nusing namespace std;\n\ncout << \"Hello C++\" << endl;  // output\ncin  >> x;                    // input\ncout << \"x = \" << x << endl;"},
        {type:"heading",text:"Class — Blueprint for Objects"},
        {type:"code",text:"class Rectangle {\nprivate:\n    int length, width;   // data members\npublic:\n    void setData(int l,int w){length=l; width=w;}\n    int area(){return length*width;}  // member function\n    inline int perimeter(){return 2*(length+width);} // inline\n};\n\nRectangle r1;   // object creation\nr1.setData(5,3);\ncout << r1.area(); // 15"},
        {type:"table",headers:["Feature","Procedural (C)","Object-Oriented (C++)"],rows:[
          ["Focus","Functions/procedures","Objects and classes"],
          ["Data access","Global or parameter","Encapsulated in class"],
          ["Reuse","Function libraries","Inheritance"],
          ["Data security","No access control","private/public/protected"],
          ["Polymorphism","Not supported","Function/operator overloading"],
        ]},
        {type:"note",text:"Key OOP concepts: Encapsulation (data hiding), Abstraction (hide complexity), Inheritance (code reuse), Polymorphism (many forms). Static members: shared by ALL objects; only ONE copy exists."},
      ],
      codeExample:`#include <iostream>
using namespace std;

class Student {
private:
    int rollno;
    string name;
    float gpa;
    static int count;   /* static: shared by all objects */
    
public:
    /* Constructor */
    Student(int r, string n, float g) {
        rollno=r; name=n; gpa=g;
        count++;
    }
    
    /* Inline member function */
    inline void display() {
        cout << "Roll: " << rollno 
             << " Name: " << name 
             << " GPA: "  << gpa << endl;
    }
    
    /* Non-inline function */
    float getGPA();
    
    /* Static member function */
    static int getCount() { return count; }
    
    /* Destructor */
    ~Student() { count--; }
};

/* Define static member */
int Student::count = 0;

/* Non-inline function defined outside class */
float Student::getGPA() { return gpa; }

int main() {
    cout << "Creating students..." << endl;
    Student s1(101, "Alice", 3.9);
    Student s2(102, "Bob",   3.5);
    
    s1.display();
    s2.display();
    
    cout << "Total students: " << Student::getCount() << endl; /* 2 */
    cout << "s1 GPA: " << s1.getGPA() << endl;  /* 3.9 */
    
    /* cin/cout for input */
    int x;
    cout << "Enter a number: ";
    cin  >> x;
    cout << "Square = " << x*x << endl;
    return 0;
}`,
      mcqs:[
        {q:"Default access specifier in a C++ class?",options:["public","private","protected","none"],correct:1,exp:"In a C++ class, members are PRIVATE by default. In struct, they are public by default."},
        {q:"What is a static data member in C++?",options:["Local to function","One copy shared by all objects","Const member","Private by default"],correct:1,exp:"Static data member has only ONE copy shared by ALL objects of the class. Declared inside, defined outside."},
        {q:"What is an inline function?",options:["Function in a loop","Code inserted at call site","Static function","Recursive function"],correct:1,exp:"inline functions: code is inserted directly at the call site by compiler, reducing function call overhead."},
        {q:"cout is defined in which header?",options:["stdio.h","stdlib.h","iostream","conio.h"],correct:2,exp:"cout and cin are defined in the <iostream> header (C++ standard library)."},
        {q:"Difference between struct and class in C++?",options:["No difference","struct:public default; class:private default","class is faster","struct has more features"],correct:1,exp:"The ONLY difference in C++ is the default access: struct defaults to public, class defaults to private."},
      ]
    },
  ]
},

{
  id:"lab", title:"Lab Practicals", emoji:"🧪", color:"#06b6d4",
  topics:[
    {
      id:"p1", title:"P1: Data Types & Operators",
      theory:[
        {type:"para",text:"Objective: Explore different data types (int, float, char, double, long, unsigned) and all categories of operators (arithmetic, relational, logical, bitwise, assignment, ternary)."},
        {type:"list",items:[
          "Declare variables of all basic data types and print their sizes",
          "Perform arithmetic operations and observe integer vs float division",
          "Use all relational operators and observe 0/1 output",
          "Demonstrate bitwise operators with binary representation",
          "Practice prefix vs postfix increment/decrement",
        ]},
      ],
      codeExample:`/* P1: Data Types and Operators */
#include <stdio.h>
int main() {
    /* All data types */
    int    i = 100;
    float  f = 3.14f;
    double d = 3.14159265358979;
    char   c = 'Z';
    long   l = 1234567890L;
    unsigned int u = 3000000000U;
    
    printf("=== Data Types & Sizes ===\\n");
    printf("int    : %d  (%lu bytes)\\n", i, sizeof(i));
    printf("float  : %f  (%lu bytes)\\n", f, sizeof(f));
    printf("double : %lf (%lu bytes)\\n", d, sizeof(d));
    printf("char   : %c  (%lu byte)\\n",  c, sizeof(c));
    printf("long   : %ld (%lu bytes)\\n", l, sizeof(l));
    printf("uint   : %u  (%lu bytes)\\n", u, sizeof(u));
    
    printf("\\n=== Arithmetic Operators ===\\n");
    int a=17, b=5;
    printf("17+5=%d  17-5=%d  17*5=%d\\n",a+b,a-b,a*b);
    printf("17/5=%d  17%%5=%d\\n", a/b, a%b); /* int div */
    printf("17.0/5 = %.4f\\n", (float)a/b);   /* float div */
    
    printf("\\n=== Bitwise Operators ===\\n");
    int x=12, y=10;  /* x=1100, y=1010 in binary */
    printf("x=%d(1100)  y=%d(1010)\\n",x,y);
    printf("x & y = %d (1000=8)\\n",  x & y);
    printf("x | y = %d (1110=14)\\n", x | y);
    printf("x ^ y = %d (0110=6)\\n",  x ^ y);
    printf("~x    = %d\\n",           ~x);
    printf("x<<1  = %d (x*2)\\n",     x<<1);
    printf("x>>1  = %d (x/2)\\n",     x>>1);
    
    printf("\\n=== Unary Operators ===\\n");
    int n=5;
    printf("n=%d\\n",n);
    printf("n++=%d (n=%d)\\n", n++, n); /* postfix */
    printf("++n=%d\\n", ++n);            /* prefix */
    return 0;
}`,
      mcqs:[
        {q:"Which practical explores int vs float division?",options:["P2","P1","P3","P4"],correct:1,exp:"P1 covers data types and operators, including the difference between integer and floating-point division."},
      ]
    },
    {
      id:"p2", title:"P2: Decision Making & Loops",
      theory:[
        {type:"para",text:"Objective: Write programs using if, if-else, switch. Programs on while, for, do-while loops. Break, continue, nested loops."},
        {type:"list",items:[
          "Grade calculator using if-else ladder",
          "Calculator using switch-case",
          "Pattern printing using nested for loops",
          "Factorial using while loop",
          "Sum of digits using do-while",
          "Prime number check",
          "Fibonacci series",
        ]},
      ],
      codeExample:`/* P2: Control Structures */
#include <stdio.h>
int main() {
    /* 1. Prime number check */
    int n, isPrime=1;
    printf("Enter number: "); scanf("%d",&n);
    if(n<=1) isPrime=0;
    for(int i=2; i*i<=n; i++)
        if(n%i==0){ isPrime=0; break; }
    printf("%d is %s prime\\n", n, isPrime?"":"not ");
    
    /* 2. Pattern using nested loops */
    printf("\\nNumber Pattern:\\n");
    for(int i=1; i<=5; i++){
        for(int j=1; j<=i; j++)
            printf("%d ", j);
        printf("\\n");
    }
    /* 1
       1 2
       1 2 3
       1 2 3 4
       1 2 3 4 5 */
    
    /* 3. Fibonacci using while */
    int a=0,b=1,c,terms=10;
    printf("\\nFibonacci: ");
    printf("%d %d ",a,b);
    for(int i=3;i<=terms;i++){
        c=a+b; printf("%d ",c); a=b; b=c;
    }
    printf("\\n");
    
    /* 4. Reverse of number using do-while */
    int num=12345, rev=0;
    do{
        rev = rev*10 + num%10;
        num /= 10;
    }while(num>0);
    printf("\\nReverse: %d\\n",rev); /* 54321 */
    
    /* 5. Armstrong number check */
    num = 153;
    int orig=num, sum=0, digit;
    while(orig>0){
        digit = orig%10;
        sum += digit*digit*digit;
        orig /= 10;
    }
    printf("%d is %s Armstrong number\\n",
           num, (sum==num)?"an":"not an");
    return 0;
}`,
      mcqs:[
        {q:"Armstrong number: 153 = 1³+5³+3³ = ?",options:["153","153 (yes)","150","Not Armstrong"],correct:1,exp:"1³=1, 5³=125, 3³=27. 1+125+27=153. Yes, 153 is an Armstrong number!"},
      ]
    },
    {
      id:"p3", title:"P3: Functions & Storage Classes",
      theory:[
        {type:"para",text:"Objective: Demonstrate function prototypes, call by value vs call by address, all 4 storage classes (auto, register, extern, static)."},
        {type:"list",items:[
          "Function to find max of 3 numbers",
          "swap() using call by value (fails) vs call by reference (works)",
          "Factorial/Fibonacci using recursion",
          "Counter using static variable",
          "extern variable across functions",
        ]},
      ],
      codeExample:`/* P3: Functions and Storage Classes */
#include <stdio.h>

/* Prototype */
int maxOfThree(int, int, int);
void swapByValue(int, int);    /* WRONG — won't swap */
void swapByRef(int *, int *);  /* CORRECT — will swap */
void counter(void);

int globalCount = 0;  /* global */

int main() {
    /* Call by value vs reference */
    int x=10, y=20;
    printf("Before swap: x=%d y=%d\\n", x, y);
    swapByValue(x, y);
    printf("After swapByValue: x=%d y=%d\\n", x, y); /* UNCHANGED */
    swapByRef(&x, &y);
    printf("After swapByRef: x=%d y=%d\\n", x, y);   /* SWAPPED */
    
    /* max of three */
    printf("Max(3,7,5) = %d\\n", maxOfThree(3,7,5)); /* 7 */
    
    /* static counter */
    printf("\\nStatic counter:\\n");
    counter(); /* count=1 */
    counter(); /* count=2 */
    counter(); /* count=3 */
    return 0;
}

int maxOfThree(int a, int b, int c) {
    return (a>b) ? (a>c?a:c) : (b>c?b:c);
}
void swapByValue(int a, int b) {
    int t=a; a=b; b=t;
    printf("Inside swapByValue: a=%d b=%d\\n",a,b);
    /* local copies swapped; original unchanged */
}
void swapByRef(int *a, int *b) {
    int t=*a; *a=*b; *b=t;
    printf("Inside swapByRef: *a=%d *b=%d\\n",*a,*b);
}
void counter(void) {
    static int count = 0;  /* static: persists! */
    auto   int temp  = 0;  /* auto: resets each call */
    count++;
    temp++;
    printf("static count=%d  auto temp=%d\\n", count, temp);
}`,
      mcqs:[
        {q:"What is the output of counter() called twice?\nstatic int c=0; c++;",options:["1 then 1","1 then 2","0 then 1","2 then 2"],correct:1,exp:"static preserves value. First call: c=1. Second call: c=2. Output: 1 then 2."},
      ]
    },
    {
      id:"p4", title:"P4: Arrays (1D, 2D, Sort & Search)",
      theory:[
        {type:"para",text:"Objective: Demonstrate 1D and 2D array memory arrangement, insertion, deletion, linear search, binary search, and bubble sort."},
        {type:"list",items:[
          "Print memory addresses of array elements (show contiguous storage)",
          "Insert element at given position, delete element from position",
          "Linear search on unsorted array",
          "Binary search on sorted array",
          "Bubble sort — sort in ascending and descending order",
          "Matrix operations: addition, transpose",
        ]},
      ],
      codeExample:`/* P4: Arrays — Complete Demo */
#include <stdio.h>
#define MAX 100

void printArr(int a[], int n){
    for(int i=0;i<n;i++) printf("%d ",a[i]);
    printf("\\n");
}
int linearSearch(int a[],int n,int key){
    for(int i=0;i<n;i++) if(a[i]==key) return i;
    return -1;
}
int binarySearch(int a[],int n,int key){
    int lo=0,hi=n-1,mid;
    while(lo<=hi){
        mid=(lo+hi)/2;
        if(a[mid]==key) return mid;
        else if(a[mid]<key) lo=mid+1;
        else hi=mid-1;
    }
    return -1;
}
void bubbleSort(int a[],int n){
    for(int i=0;i<n-1;i++)
        for(int j=0;j<n-1-i;j++)
            if(a[j]>a[j+1]){
                int t=a[j]; a[j]=a[j+1]; a[j+1]=t;
            }
}

int main(){
    /* Memory arrangement */
    int arr[5]={10,20,30,40,50};
    printf("Address demonstration:\\n");
    for(int i=0;i<5;i++)
        printf("arr[%d]=%d at %p\\n",i,arr[i],(void*)&arr[i]);
    /* Addresses differ by 4 (sizeof int) */
    
    /* Insert at position 2 */
    int a[MAX]={1,2,3,4,5};int sz=5;
    int pos=2,val=99;
    for(int i=sz-1;i>=pos;i--) a[i+1]=a[i];
    a[pos]=val; sz++;
    printf("After insert: "); printArr(a,sz);
    /* 1 2 99 3 4 5 */
    
    /* Delete from position 2 */
    for(int i=pos;i<sz-1;i++) a[i]=a[i+1];
    sz--;
    printf("After delete: "); printArr(a,sz);
    /* 1 2 3 4 5 */
    
    /* Search */
    int sorted[]={5,12,23,35,47,58,67};
    printf("Linear search 35: idx=%d\\n",
           linearSearch(sorted,7,35)); /* 3 */
    printf("Binary search 67: idx=%d\\n",
           binarySearch(sorted,7,67)); /* 6 */
    
    /* Bubble sort */
    int unsorted[]={64,34,25,12,22,11,90};
    printf("Before sort: "); printArr(unsorted,7);
    bubbleSort(unsorted,7);
    printf("After sort:  "); printArr(unsorted,7);
    return 0;
}`,
      mcqs:[
        {q:"What proves arrays are stored contiguously?",options:["printf values","Addresses differ by sizeof(type)","Random access","sizeof(arr)"],correct:1,exp:"Printing addresses of arr[i] and arr[i+1] shows they differ by exactly sizeof(int)=4 bytes, proving contiguous storage."},
      ]
    },
    {
      id:"p5", title:"P5: Pointers & Dynamic Memory",
      theory:[
        {type:"para",text:"Objective: Demonstrate types of pointers (null, void, dangling, wild), pointer vs array name, and dynamic memory functions (malloc, calloc, realloc, free)."},
        {type:"list",items:[
          "Show & (address-of) and * (dereference) operators",
          "Pointer arithmetic: show address increments by sizeof",
          "Pointer is same as array name (arr == &arr[0])",
          "Dynamic array with malloc, read/sort elements",
          "calloc: demonstrate zero initialization",
          "realloc: resize dynamic array",
          "Proper free() and setting to NULL",
        ]},
      ],
      codeExample:`/* P5: Pointers and Dynamic Memory */
#include <stdio.h>
#include <stdlib.h>

int main(){
    /* Pointer basics */
    int x=42;
    int *p=&x;
    printf("x=%d, &x=%p, p=%p, *p=%d\\n",
            x, (void*)&x, (void*)p, *p);
    *p = 100;
    printf("After *p=100: x=%d\\n", x);

    /* Pointer vs array name */
    int arr[]={10,20,30,40,50};
    printf("\\narr   = %p\\n",(void*)arr);
    printf("&arr[0]= %p\\n",(void*)&arr[0]);
    printf("Equal? %s\\n",(arr==&arr[0])?"YES":"NO");
    printf("arr[2] = %d = *(arr+2) = %d\\n",arr[2],*(arr+2));
    
    /* Pointer types */
    int  *np = NULL;     /* null pointer */
    void *vp = &x;      /* void pointer */
    printf("\\nNull pointer: %s\\n",(np==NULL)?"NULL":"not null");
    printf("Via void*: %d\\n", *(int*)vp);
    
    /* malloc — dynamic array */
    int n=5;
    int *dyn = (int*)malloc(n*sizeof(int));
    if(!dyn){printf("malloc failed\\n");return 1;}
    printf("\\nmalloc (may have garbage): ");
    for(int i=0;i<n;i++) dyn[i]=i*10;
    for(int i=0;i<n;i++) printf("%d ",dyn[i]);
    printf("\\n");
    
    /* calloc — zero initialized */
    float *zeros=(float*)calloc(5,sizeof(float));
    printf("calloc (all zero): ");
    for(int i=0;i<5;i++) printf("%.0f ",zeros[i]);
    printf("\\n");
    
    /* realloc — expand */
    dyn=(int*)realloc(dyn,2*n*sizeof(int));
    for(int i=n;i<2*n;i++) dyn[i]=i*10;
    printf("realloc(10 items): ");
    for(int i=0;i<2*n;i++) printf("%d ",dyn[i]);
    printf("\\n");
    
    free(dyn);   dyn=NULL;
    free(zeros); zeros=NULL;
    printf("Memory freed safely.\\n");
    return 0;
}`,
      mcqs:[
        {q:"After free(ptr), what should you do to avoid dangling pointer?",options:["Ignore it","Set ptr=NULL","Allocate again","Print it"],correct:1,exp:"After free(), the pointer still holds the old address (dangling). Set ptr=NULL immediately to make it a null pointer (safe)."},
      ]
    },
    {
      id:"p6", title:"P6: Strings, Structures & Unions",
      theory:[
        {type:"para",text:"Objective: String operations (length, copy, concat, compare, reverse, palindrome). Structure with nested structure. Difference between structure and union using sizeof."},
        {type:"list",items:[
          "String operations without library functions (manual implementation)",
          "Use all string.h functions: strlen, strcpy, strcat, strcmp",
          "Palindrome check for string and number",
          "Array of structures — student database",
          "Nested structure — employee with address",
          "Compare sizeof(struct) vs sizeof(union) with same members",
        ]},
      ],
      codeExample:`/* P6: Strings, Structures & Unions */
#include <stdio.h>
#include <string.h>

/* Student structure */
typedef struct {
    int roll; char name[30]; float marks;
} Student;

/* Union vs Struct comparison */
struct SampleStruct { int i; float f; char c; };
union  SampleUnion  { int i; float f; char c; };

int isPalindrome(char s[]){
    int l=strlen(s), lo=0, hi=l-1;
    while(lo<hi) if(s[lo++]!=s[hi--]) return 0;
    return 1;
}

void reverseString(char s[]){
    int l=strlen(s);
    for(int i=0;i<l/2;i++){
        char t=s[i]; s[i]=s[l-1-i]; s[l-1-i]=t;
    }
}

int main(){
    /* String operations */
    char s1[30]="Hello", s2[30]="World", s3[60];
    printf("strlen: %lu\\n", strlen(s1));      /* 5 */
    strcpy(s3,s1); strcat(s3," "); strcat(s3,s2);
    printf("Combined: %s\\n",s3);              /* Hello World */
    printf("strcmp: %d\\n",strcmp(s1,s2));     /* negative */
    
    reverseString(s1);
    printf("Reversed: %s\\n",s1);              /* olleH */
    
    char words[][10]={"madam","racecar","hello","level"};
    for(int i=0;i<4;i++)
        printf("%s: %s palindrome\\n",words[i],
               isPalindrome(words[i])?"IS A":"NOT A");
    
    /* Array of structures */
    Student cls[3]={{101,"Alice",92},{102,"Bob",78},{103,"Carol",88}};
    printf("\\nStudent Database:\\n");
    float total=0;
    for(int i=0;i<3;i++){
        printf("Roll:%d  Name:%-10s  Marks:%.1f\\n",
               cls[i].roll,cls[i].name,cls[i].marks);
        total+=cls[i].marks;
    }
    printf("Class Average: %.2f\\n", total/3);
    
    /* Struct vs Union sizeof */
    printf("\\nsizeof(struct){int+float+char} = %lu bytes\\n",
           sizeof(struct SampleStruct)); /* 12 (with padding) */
    printf("sizeof(union) {int+float+char} = %lu bytes\\n",
           sizeof(union SampleUnion));  /* 4 (largest=float) */
    return 0;
}`,
      mcqs:[
        {q:"Practical to differentiate struct vs union uses?",options:["P4","P5","P6","P3"],correct:2,exp:"P6 covers structures and unions, including a sizeof comparison to show the memory difference."},
      ]
    },
  ]
},
];

/* ═══════════════════ COMPONENTS ═══════════════════ */
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{position:"relative",margin:"14px 0"}}>
      <pre style={{background:"#010409",border:"1px solid #21262d",borderRadius:10,padding:"16px 20px",fontSize:12.5,fontFamily:"'JetBrains Mono',monospace",overflowX:"auto",lineHeight:1.75,color:"#c9d1d9",margin:0}}
        dangerouslySetInnerHTML={{__html:cHL(code)}}/>
      <button onClick={()=>{navigator.clipboard.writeText(code);setCopied(true);setTimeout(()=>setCopied(false),1500);}}
        style={{position:"absolute",top:8,right:8,background:copied?"#238636":"#21262d",border:"1px solid #30363d",borderRadius:6,color:copied?"#fff":"#8b949e",fontSize:11,padding:"3px 12px",cursor:"pointer",fontFamily:"'Sora',sans-serif"}}>
        {copied?"✓ Copied":"Copy"}
      </button>
    </div>
  );
}

function TheoryBlock({ theory }) {
  return (
    <div>
      {theory.map((b,i)=>{
        if(b.type==="para") return <p key={i} style={{color:"#c9d1d9",lineHeight:1.85,marginBottom:14,fontSize:14}}>{b.text}</p>;
        if(b.type==="heading") return <h3 key={i} style={{color:"#f0f6fc",fontFamily:"'Sora',sans-serif",fontSize:14,fontWeight:700,margin:"22px 0 8px",paddingLeft:10,borderLeft:"3px solid #3b82f6"}}>{b.text}</h3>;
        if(b.type==="note") return <div key={i} style={{background:"#0d2137",border:"1px solid #1f6feb",borderRadius:8,padding:"10px 16px",color:"#79c0ff",fontSize:13,margin:"12px 0",lineHeight:1.75}}>💡 {b.text}</div>;
        if(b.type==="list") return <ul key={i} style={{paddingLeft:22,margin:"10px 0"}}>{b.items.map((it,j)=><li key={j} style={{color:"#c9d1d9",lineHeight:1.9,marginBottom:4,fontSize:13.5}}>{it}</li>)}</ul>;
        if(b.type==="code") return <pre key={i} style={{background:"#010409",border:"1px solid #21262d",borderRadius:6,padding:"12px 16px",fontFamily:"'JetBrains Mono',monospace",fontSize:12,color:"#a5d6ff",margin:"10px 0",overflowX:"auto",lineHeight:1.65}}>{b.text}</pre>;
        if(b.type==="table") return (
          <div key={i} style={{overflowX:"auto",margin:"14px 0"}}>
            <table style={{borderCollapse:"collapse",width:"100%",fontSize:13}}>
              <thead><tr>{b.headers.map((h,j)=><th key={j} style={{background:"#0d1117",color:"#8b949e",padding:"9px 14px",border:"1px solid #21262d",textAlign:"left",fontFamily:"'Sora',sans-serif",fontWeight:600,letterSpacing:.3,whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
              <tbody>{b.rows.map((row,j)=><tr key={j} style={{background:j%2===0?"transparent":"#0d1117"}}>
                {row.map((cell,k)=><td key={k} style={{color:k===0?"#58a6ff":"#c9d1d9",padding:"9px 14px",border:"1px solid #21262d",fontFamily:k===0?"'JetBrains Mono',monospace":"inherit",fontSize:k===0?12:13,lineHeight:1.5}}>{cell}</td>)}
              </tr>)}</tbody>
            </table>
          </div>
        );
        return null;
      })}
    </div>
  );
}

function QuizSection({ mcqs, topicId }) {
  const [sel, setSel] = useState({});
  const [sub, setSub] = useState({});
  const [score, setScore] = useState(null);
  const reset = ()=>{setSel({});setSub({});setScore(null);};
  const submitAll = ()=>{
    let c=0; mcqs.forEach((q,i)=>{if(sel[i]===q.correct)c++;});
    setScore(c);
    const all={}; mcqs.forEach((_,i)=>{all[i]=true;}); setSub(all);
  };
  return (
    <div>
      {score!==null&&(
        <div style={{background:score===mcqs.length?"#0d3321":score>=mcqs.length/2?"#2d2a0e":"#3d0f0f",border:`1px solid ${score===mcqs.length?"#238636":score>=mcqs.length/2?"#9e6a03":"#da3633"}`,borderRadius:10,padding:"14px 20px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <span style={{color:"#f0f6fc",fontFamily:"'Sora',sans-serif",fontSize:15,fontWeight:700}}>
            {score===mcqs.length?"🎉 Perfect Score!":score>=mcqs.length/2?"👍 Good Job!":"📚 Keep Practicing!"} — {score}/{mcqs.length}
          </span>
          <button onClick={reset} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:6,color:"#c9d1d9",fontSize:12,padding:"5px 14px",cursor:"pointer",fontFamily:"'Sora',sans-serif"}}>Retry</button>
        </div>
      )}
      {mcqs.map((q,qi)=>{
        const done=sub[qi],ok=sel[qi]===q.correct;
        return (
          <div key={qi} style={{background:"#0d1117",border:`1px solid ${done?(ok?"#238636":"#da3633"):"#21262d"}`,borderRadius:10,padding:"16px 20px",marginBottom:16}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:12}}>
              <span style={{background:"#1f6feb",color:"#fff",borderRadius:"50%",width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0}}>{qi+1}</span>
              <pre style={{fontFamily:"'JetBrains Mono',monospace",fontSize:12.5,color:"#c9d1d9",background:"#010409",padding:"10px 14px",borderRadius:6,lineHeight:1.65,overflowX:"auto",margin:0,flex:1}}>{q.q}</pre>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {q.options.map((opt,oi)=>{
                let bg="#21262d",border="#30363d",col="#c9d1d9";
                if(done){if(oi===q.correct){bg="#0d3321";border="#238636";col="#3fb950";}else if(sel[qi]===oi){bg="#3d0f0f";border="#da3633";col="#f85149";}}
                else if(sel[qi]===oi){bg="#0d2137";border="#58a6ff";col="#58a6ff";}
                return <div key={oi} onClick={()=>!sub[qi]&&setSel(p=>({...p,[qi]:oi}))}
                  style={{background:bg,border:`1px solid ${border}`,borderRadius:8,padding:"10px 14px",cursor:sub[qi]?"default":"pointer",color:col,fontSize:13,lineHeight:1.5,transition:"all 0.15s"}}>
                  <span style={{opacity:.55,marginRight:6,fontWeight:700}}>{"ABCD"[oi]}.</span>{opt}
                </div>;
              })}
            </div>
            {done&&<div style={{marginTop:10,background:"#0d2137",border:"1px solid #1f6feb",borderRadius:6,padding:"9px 14px",fontSize:12.5,color:"#79c0ff",lineHeight:1.65}}>💡 {q.exp}</div>}
            {!done&&sel[qi]!==undefined&&<button onClick={()=>setSub(p=>({...p,[qi]:true}))} style={{marginTop:10,background:"#1f6feb",border:"none",borderRadius:6,color:"#fff",padding:"7px 20px",cursor:"pointer",fontSize:13,fontFamily:"'Sora',sans-serif",fontWeight:700}}>Check Answer</button>}
          </div>
        );
      })}
      {Object.keys(sub).length<mcqs.length&&mcqs.length>1&&(
        <button onClick={submitAll} style={{background:"#238636",border:"none",borderRadius:8,color:"#fff",padding:"10px 26px",cursor:"pointer",fontSize:14,fontFamily:"'Sora',sans-serif",fontWeight:700}}>Submit All & See Score</button>
      )}
    </div>
  );
}

function VivaSection({ unitId }) {
  const qs = VIVA[unitId] || [];
  const [mode, setMode] = useState("flash"); // flash | list
  const [cur, setCur] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());
  const [search, setSearch] = useState("");
  const [shuffled, setShuffled] = useState(false);
  const [order, setOrder] = useState(qs.map((_,i)=>i));

  if(!qs.length) return <div style={{color:"#6e7681",padding:40,textAlign:"center"}}>No viva questions for this section.</div>;

  const shuffle=()=>{ setOrder([...order].sort(()=>Math.random()-.5)); setShuffled(true); setCur(0); setFlipped(false); };
  const next=()=>{ setCur(c=>Math.min(c+1,order.length-1)); setFlipped(false); };
  const prev=()=>{ setCur(c=>Math.max(c-1,0)); setFlipped(false); };
  const markKnown=()=>{ setKnown(k=>{const n=new Set(k);n.add(order[cur]);return n;}); next(); };
  const filtered = qs.filter(q=>q[0].toLowerCase().includes(search.toLowerCase())||q[1].toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{display:"flex",gap:10,marginBottom:20,flexWrap:"wrap",alignItems:"center"}}>
        <div style={{background:"#21262d",borderRadius:8,padding:"3px",display:"flex",gap:3}}>
          {["flash","list"].map(m=><button key={m} onClick={()=>setMode(m)} style={{background:mode===m?"#1f6feb":"transparent",border:"none",borderRadius:6,color:mode===m?"#fff":"#8b949e",padding:"6px 16px",cursor:"pointer",fontSize:13,fontFamily:"'Sora',sans-serif",fontWeight:mode===m?700:400,textTransform:"capitalize"}}>{m==="flash"?"🃏 Flash Cards":"📄 Study List"}</button>)}
        </div>
        <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
          <span style={{background:"#0d3321",border:"1px solid #238636",borderRadius:20,color:"#3fb950",fontSize:12,padding:"4px 12px"}}>{known.size}/{qs.length} Known</span>
          {mode==="flash"&&<button onClick={shuffle} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:6,color:"#8b949e",fontSize:12,padding:"5px 12px",cursor:"pointer"}}>🔀 Shuffle</button>}
        </div>
      </div>

      {mode==="flash"&&(
        <div>
          <div style={{textAlign:"center",marginBottom:12,color:"#6e7681",fontSize:13}}>Q {cur+1} of {order.length} {shuffled?"(shuffled)":""}</div>
          <div onClick={()=>setFlipped(!flipped)} style={{cursor:"pointer",background:"#0d1117",border:"1px solid #21262d",borderRadius:14,minHeight:220,padding:"30px 28px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",userSelect:"none",transition:"all 0.2s"}}>
            <div style={{fontSize:11,color:"#58a6ff",fontFamily:"'Sora',sans-serif",marginBottom:12,letterSpacing:1.5,fontWeight:700}}>{flipped?"◀ ANSWER":"▶ QUESTION — Click to flip"}</div>
            <div style={{fontSize:15.5,color:flipped?"#3fb950":"#f0f6fc",lineHeight:1.8,fontFamily:flipped?"inherit":"'Sora',sans-serif",fontWeight:flipped?400:600,maxWidth:580}}>
              {flipped ? qs[order[cur]][1] : qs[order[cur]][0]}
            </div>
          </div>
          <div style={{display:"flex",gap:10,marginTop:14,justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={prev} disabled={cur===0} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:8,color:"#c9d1d9",padding:"9px 20px",cursor:"pointer",fontSize:13,opacity:cur===0?.4:1}}>← Prev</button>
            <button onClick={markKnown} style={{background:"#0d3321",border:"1px solid #238636",borderRadius:8,color:"#3fb950",padding:"9px 22px",cursor:"pointer",fontSize:13,fontWeight:700}}>✓ Know It</button>
            <button onClick={next} disabled={cur===order.length-1} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:8,color:"#c9d1d9",padding:"9px 20px",cursor:"pointer",fontSize:13,opacity:cur===order.length-1?.4:1}}>Next →</button>
          </div>
          <div style={{marginTop:12,background:"#0d1117",borderRadius:8,height:4,overflow:"hidden"}}>
            <div style={{height:"100%",background:"linear-gradient(90deg,#3b82f6,#8b5cf6)",width:`${((cur+1)/order.length)*100}%`,transition:"width 0.3s"}}/>
          </div>
        </div>
      )}

      {mode==="list"&&(
        <div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Search questions..." style={{width:"100%",background:"#0d1117",border:"1px solid #21262d",borderRadius:8,padding:"10px 16px",color:"#c9d1d9",fontSize:13,fontFamily:"'Sora',sans-serif",marginBottom:16,boxSizing:"border-box",outline:"none"}}/>
          {filtered.map(([q,a],i)=>(
            <div key={i} style={{background:"#0d1117",border:"1px solid #21262d",borderRadius:8,padding:"14px 18px",marginBottom:10}}>
              <div style={{color:"#58a6ff",fontWeight:700,fontSize:13,marginBottom:8}}>Q{i+1}. {q}</div>
              <div style={{color:"#8b949e",fontSize:13,lineHeight:1.7,paddingLeft:12,borderLeft:"2px solid #30363d"}}>→ {a}</div>
            </div>
          ))}
          {filtered.length===0&&<div style={{color:"#6e7681",textAlign:"center",padding:30}}>No questions matching "{search}"</div>}
        </div>
      )}
    </div>
  );
}

function ChatPanel({ onClose, ctx }) {
  const [msgs, setMsgs] = useState([{role:"assistant",content:"Hi! 👋 I'm your CSE101 C Programming tutor. Ask me anything about the syllabus — operators, loops, functions, arrays, pointers, structures, or C++ basics!"}]);
  const [inp, setInp] = useState(""); const [load, setLoad] = useState(false);
  const endRef = useRef(null);
  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[msgs]);
  const send = async()=>{
    if(!inp.trim()||load) return;
    const um={role:"user",content:inp.trim()};
    const hist=[...msgs,um]; setMsgs(hist); setInp(""); setLoad(true);
    try{
      const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-20250514",max_tokens:1000,
        system:`You are an expert C programming tutor for CSE101 Computer Programming (as per Kamthane and Balagurusamy textbooks). Current topic: ${ctx}.
Syllabus: Unit I (C basics, data types, operators), Unit II (control structures, I/O), Unit III (functions, storage classes, recursion), Unit IV (arrays, searching, sorting), Unit V (pointers, dynamic memory, strings), Unit VI (structures, unions, C++ basics).
Explain concisely with C code examples. Keep answers under 300 words. Use code blocks for code.`,
        messages:hist.map(m=>({role:m.role,content:m.content}))
      })});
      const d=await r.json();
      setMsgs(p=>[...p,{role:"assistant",content:d.content?.[0]?.text||"Sorry, error."}]);
    }catch{setMsgs(p=>[...p,{role:"assistant",content:"Network error. Please try again."}]);}
    setLoad(false);
  };
  const renderMsg=c=>{
    return c.split(/(```[\s\S]*?```)/g).map((p,i)=>{
      if(p.startsWith("```")){const code=p.replace(/```[a-z]*\n?/,"").replace(/```$/,"");return <CodeBlock key={i} code={code.trim()}/>;}
      return <span key={i} style={{whiteSpace:"pre-wrap",lineHeight:1.75}}>{p}</span>;
    });
  };
  const quick=["Explain with example","Trace this code step by step","Common exam mistakes?","Compare A vs B"];
  return (
    <div style={{position:"fixed",right:0,top:0,bottom:0,width:360,background:"#010409",borderLeft:"1px solid #21262d",display:"flex",flexDirection:"column",zIndex:1000,boxShadow:"-8px 0 40px rgba(0,0,0,.7)"}}>
      <div style={{padding:"14px 18px",borderBottom:"1px solid #21262d",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0d1117"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#3b82f6,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🤖</div>
          <div><div style={{color:"#f0f6fc",fontFamily:"'Sora',sans-serif",fontWeight:800,fontSize:14}}>AI C-Programming Tutor</div><div style={{color:"#3fb950",fontSize:11,marginTop:1}}>● Online — Powered by Claude</div></div>
        </div>
        <button onClick={onClose} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:6,color:"#8b949e",width:30,height:30,cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:12}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"92%",background:m.role==="user"?"#1f6feb":"#21262d",border:`1px solid ${m.role==="user"?"#58a6ff":"#30363d"}`,borderRadius:m.role==="user"?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"10px 14px",color:"#e6edf3",fontSize:13}}>
              {renderMsg(m.content)}
            </div>
          </div>
        ))}
        {load&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:"#21262d",border:"1px solid #30363d",borderRadius:"12px 12px 12px 4px",padding:"10px 14px",color:"#8b949e",fontSize:13}}>⟳ Thinking...</div></div>}
        <div ref={endRef}/>
      </div>
      <div style={{padding:"12px 14px",borderTop:"1px solid #21262d",background:"#0d1117"}}>
        <div style={{display:"flex",gap:8}}>
          <input value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()} placeholder={`Ask about ${ctx}...`} style={{flex:1,background:"#21262d",border:"1px solid #30363d",borderRadius:8,padding:"9px 14px",color:"#e6edf3",fontSize:13,fontFamily:"'Sora',sans-serif",outline:"none"}}/>
          <button onClick={send} disabled={load||!inp.trim()} style={{background:"#1f6feb",border:"none",borderRadius:8,color:"#fff",width:40,cursor:"pointer",fontSize:20,opacity:load||!inp.trim()?.5:1,display:"flex",alignItems:"center",justifyContent:"center"}}>↑</button>
        </div>
        <div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap"}}>
          {quick.map(q=><button key={q} onClick={()=>setInp(q)} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:20,color:"#8b949e",fontSize:11,padding:"3px 10px",cursor:"pointer",fontFamily:"'Sora',sans-serif"}}>{q}</button>)}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════ MAIN APP ═══════════════════ */
export default function App() {
  useFonts();
  const [uid, setUid] = useState(0);
  const [tid, setTid] = useState(0);
  const [tab, setTab] = useState("theory");
  const [chat, setChat] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const mainRef = useRef(null);
  const unit = UNITS[uid], topic = unit.topics[tid];
  const totalTopics = UNITS.reduce((s,u)=>s+u.topics.length,0);
  const doneIdx = UNITS.slice(0,uid).reduce((s,u)=>s+u.topics.length,0)+tid;
  const hasViva = !!VIVA[unit.id]?.length;
  const tabs = [
    {k:"theory",label:"📖 Theory"},
    {k:"code",label:"💻 Code"},
    {k:"quiz",label:`🎯 Quiz (${topic.mcqs?.length||0}Q)`},
    ...(hasViva?[{k:"viva",label:`🧠 Viva (${VIVA[unit.id]?.length}Q)`}]:[]),
  ];
  const goto=(u,t)=>{setUid(u);setTid(t);setTab("theory");mainRef.current?.scrollTo(0,0);};

  return (
    <div style={{display:"flex",height:"100vh",background:"#010409",fontFamily:"'Sora',system-ui,sans-serif",overflow:"hidden"}}>
      {/* SIDEBAR */}
      <div style={{width:sidebar?262:56,background:"#010409",borderRight:"1px solid #21262d",display:"flex",flexDirection:"column",transition:"width 0.25s",overflow:"hidden",flexShrink:0}}>
        <div style={{padding:sidebar?"16px 14px 12px":"14px 8px",borderBottom:"1px solid #21262d",display:"flex",alignItems:"center",gap:10}}>
          {sidebar&&<div style={{flex:1,overflow:"hidden"}}>
            <div style={{fontSize:10,color:"#3b82f6",letterSpacing:1.5,marginBottom:2,fontWeight:700}}>CSE101</div>
            <div style={{fontSize:14,fontWeight:800,color:"#f0f6fc",letterSpacing:-.5,whiteSpace:"nowrap"}}>C Programming</div>
            <div style={{fontSize:10,color:"#6e7681",marginTop:2}}>Kamthane • Balagurusamy • Deitel</div>
            <div style={{marginTop:8,background:"#21262d",borderRadius:4,height:3}}>
              <div style={{width:`${((doneIdx+1)/totalTopics)*100}%`,background:`linear-gradient(90deg,${unit.color},#8b5cf6)`,height:"100%",borderRadius:4,transition:"width .3s"}}/>
            </div>
            <div style={{fontSize:10,color:"#6e7681",marginTop:3}}>{doneIdx+1}/{totalTopics} topics</div>
          </div>}
          <button onClick={()=>setSidebar(!sidebar)} style={{background:"#21262d",border:"1px solid #30363d",borderRadius:6,color:"#8b949e",width:28,height:28,cursor:"pointer",fontSize:12,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
            {sidebar?"◀":"▶"}
          </button>
        </div>
        <div style={{flex:1,overflowY:"auto",overflowX:"hidden"}}>
          {UNITS.map((u,ui)=>(
            <div key={u.id}>
              <div onClick={()=>goto(ui,0)} style={{padding:sidebar?"10px 14px":"10px 0",display:"flex",alignItems:"center",gap:8,cursor:"pointer",background:uid===ui?"#0d1117":"transparent",borderLeft:`3px solid ${uid===ui?u.color:"transparent"}`,justifyContent:sidebar?"flex-start":"center",transition:"all .15s"}}>
                <span style={{fontSize:sidebar?16:18,flexShrink:0}}>{u.emoji}</span>
                {sidebar&&<span style={{fontSize:12,fontWeight:uid===ui?700:400,color:uid===ui?"#f0f6fc":"#6e7681",lineHeight:1.3}}>{u.title}</span>}
              </div>
              {sidebar&&uid===ui&&u.topics.map((t,ti)=>(
                <div key={t.id} onClick={()=>goto(ui,ti)} style={{padding:"7px 14px 7px 36px",cursor:"pointer",background:tid===ti?"#161b22":"transparent",borderLeft:`2px solid ${tid===ti?u.color:"transparent"}`,fontSize:12,color:tid===ti?u.color:"#6e7681",fontWeight:tid===ti?700:400,lineHeight:1.4,transition:"all .1s"}}>
                  {t.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",marginRight:chat?360:0,transition:"margin .3s"}}>
        <div style={{background:"#0d1117",borderBottom:"1px solid #21262d",padding:"14px 26px"}}>
          <div style={{fontSize:11,color:unit.color,letterSpacing:1.2,marginBottom:3,fontWeight:700}}>{unit.emoji} {unit.title}</div>
          <div style={{fontSize:20,fontWeight:800,color:"#f0f6fc",letterSpacing:-.5}}>{topic.title}</div>
        </div>
        <div style={{background:"#0d1117",borderBottom:"1px solid #21262d",padding:"0 26px",display:"flex",gap:0,overflowX:"auto"}}>
          {tabs.map(t=>(
            <button key={t.k} onClick={()=>setTab(t.k)} style={{padding:"10px 20px",background:"none",border:"none",borderBottom:`2px solid ${tab===t.k?unit.color:"transparent"}`,color:tab===t.k?"#f0f6fc":"#6e7681",fontSize:13,fontWeight:tab===t.k?700:500,cursor:"pointer",fontFamily:"'Sora',sans-serif",marginBottom:-1,whiteSpace:"nowrap"}}>
              {t.label}
            </button>
          ))}
        </div>
        <div ref={mainRef} style={{flex:1,overflowY:"auto",padding:"24px 28px"}}>
          {tab==="theory"&&<TheoryBlock theory={topic.theory}/>}
          {tab==="code"&&<div><div style={{color:"#6e7681",fontSize:13,marginBottom:12}}>Working C program for <strong style={{color:"#c9d1d9"}}>{topic.title}</strong></div><CodeBlock code={topic.codeExample}/></div>}
          {tab==="quiz"&&<div><div style={{color:"#6e7681",fontSize:13,marginBottom:16}}>Select an option, then click <strong style={{color:"#c9d1d9"}}>Check Answer</strong>.</div><QuizSection key={topic.id} mcqs={topic.mcqs||[]} topicId={topic.id}/></div>}
          {tab==="viva"&&<div><div style={{color:"#6e7681",fontSize:13,marginBottom:16}}>Flash Cards for viva exam preparation — <strong style={{color:"#c9d1d9"}}>{unit.title}</strong></div><VivaSection key={unit.id} unitId={unit.id}/></div>}
          <div style={{marginTop:32,paddingTop:20,borderTop:"1px solid #21262d",display:"flex",justifyContent:"space-between",gap:12}}>
            <button onClick={()=>{if(tid>0)goto(uid,tid-1);else if(uid>0){const pu=UNITS[uid-1];goto(uid-1,pu.topics.length-1);}}} disabled={uid===0&&tid===0}
              style={{background:"#21262d",border:"1px solid #30363d",borderRadius:8,color:"#c9d1d9",padding:"9px 20px",cursor:"pointer",fontSize:13,fontWeight:600,opacity:uid===0&&tid===0?.4:1}}>
              ← Previous
            </button>
            <button onClick={()=>{if(tid<unit.topics.length-1)goto(uid,tid+1);else if(uid<UNITS.length-1)goto(uid+1,0);}} disabled={uid===UNITS.length-1&&tid===unit.topics.length-1}
              style={{background:unit.color,border:"none",borderRadius:8,color:"#fff",padding:"9px 20px",cursor:"pointer",fontSize:13,fontWeight:700,opacity:uid===UNITS.length-1&&tid===unit.topics.length-1?.4:1}}>
              Next →
            </button>
          </div>
        </div>
      </div>

      {chat&&<ChatPanel onClose={()=>setChat(false)} ctx={`${unit.title} › ${topic.title}`}/>}
      <button onClick={()=>setChat(!chat)} style={{position:"fixed",bottom:24,right:24,width:54,height:54,borderRadius:"50%",background:chat?"#21262d":"linear-gradient(135deg,#3b82f6,#8b5cf6)",border:chat?"1px solid #30363d":"none",color:"#fff",fontSize:chat?16:22,cursor:"pointer",boxShadow:"0 4px 28px rgba(59,130,246,.45)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center"}}>
        {chat?"✕":"🤖"}
      </button>

      <style>{`
        *{box-sizing:border-box;}
        ::-webkit-scrollbar{width:5px;height:5px;}
        ::-webkit-scrollbar-track{background:#010409;}
        ::-webkit-scrollbar-thumb{background:#30363d;border-radius:3px;}
        ::-webkit-scrollbar-thumb:hover{background:#484f58;}
        button:not(:disabled):hover{opacity:.88;}
      `}</style>
    </div>
  );
}
