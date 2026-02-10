# Learning Notes 

## Day 1 – JavaScript & Node JS

Today, started learning JavaScript basics to rewrite my Python logic in JS - (3rd and 4th of February 2026 )

Things I learned:
JavaScript runs using Node.js (not like Python directly)
JS File format : node ZeroToEnd.js

Initially, Installed the node.js and understood why we using node.js and checked the version of it in the command prompt just to verify whether the download is done or not.

Next, Forgot to refresh the VScode, got struck there for a while dont know why I was getting error, when I tried to check the node --version in the VS Terminal. Later when seeked help from GPT, Understood that we need to refresh/Restart the VS code once we have downloaded any framework ( Day-1 lesson) 
Next Started Understanding Coding Stuffs: 
For python its `def` whereas for JS it is written using the `function` keyword
  Example:
  function moveZerosToEnd(arr) { }

Arrays:
  Example:
  let arr = [1, 2, 0, 3];

For python we use len() and in JS it is:
  arr.length

JS uses `{}` instead of indentation (Confused)

Loops in JS:
  for (let i = 0; i < arr.length; i++) { }

( 4th feb) Today, Tried to replace all this to write the proper code, still didnt get the proper output. Need to check it tomorrow.


5th feb- Understood the basics- How to assign a variable, for loops, how to get the length of an array which was needed for the zertoend code, and tried to work on with the code, And yeah successfully done with the code, But still need to work with multiple codes, so that will get some guts to start coding myself. 
Also referred the website FreeCodeCamp for understanding the basivcs of JS- [text](https://www.freecodecamp.org/learn/javascript-v9/lecture-introduction-to-javascript/what-is-javascript)

Maybe tomorrow, ill start an another code freshly trying on my own. 


10th of Feb:

Today I faced an issue while running `npm init -y` in PowerShell.
It said scripts are disabled and npm.ps1 cannot be loaded.

At first I thought Node or npm was broken, but actually Windows PowerShell blocks scripts by default.

Fixed it by giving some commands in the powershell. After this, `npm init -y` worked and `package.json` got created.