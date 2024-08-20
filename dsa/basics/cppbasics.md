# CPP Skeleton

```
#include <iostream>
```

Allows you to do io operations like take input from user and give output

```
int main(){
    std::cout<< "Hello world!"
    return 0;
}
```

## namespaces

Namespaces are used to group a set of identifiers (like functions, classes, variables etc.) together

eg: `std::cout` is a namespace

```
#include <iostream>
using namespace std;

int main(){
    std::cout<< "Hello world!"
    return 0;
}

```

## bits/stdc++.h

This is a header file that includes all the standard library headers in C++. It is not recommended to
use this file in production code because it can slow down compilation and make the code harder to read.
However, it can be useful for learning and testing purposes.

```
#include <bits/stdc++.h>
using  namespace std;
int main(){
    std::cout<< "Hello world!"
    return 0;
}
```

## datatypes

### int

int is a whole number, it can be positive or negative or zero

### long

long is a whole number, it can be positive or negative or zero, it is used when we
need to store a large number

### float

float is a decimal number, it can be positive or negative or zero

### double

double is a decimal number, it can be positive or negative or zero, it is used when we
need to store a large decimal number

### char

char is a single character, it can be a letter, a number or a special character

### bool

bool is a boolean value, it can be true or false

### string

string is a sequence of characters, it can be a word, a sentence or a paragraph

### void

void is a special type of data type, it is used when a function does not return any value

### nullptr

nullptr is a special value, it is used to represent a null or empty value

### nullptr_t

nullptr_t is a type that represents a null or empty value

### auto

auto is a type that is automatically deduced by the compiler

### decltype

decltype is a type that is deduced by the compiler based on the expression
