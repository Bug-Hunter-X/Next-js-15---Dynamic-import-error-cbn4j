# Next.js 15 - Dynamic import error

This repository demonstrates a bug in Next.js 15 where using dynamic imports inside components causes an error. 

The bug occurs when a dynamic import is used in a component that is rendered server-side. The error message is unhelpful and the stack trace does not point to the source of the problem. 

This repository contains two files: 
- `bug.js` which demonstrates the bug.
- `bugSolution.js` contains the solution to the bug.

## Solution

The solution is to use the `dynamic` function provided by Next.js to wrap the dynamic import.

This allows Next.js to handle the dynamic import correctly and prevents the error.