---
title: "Solving Interview Questions: Palindromes"
date: "2020-11-01"
---

Continuing on with the blog series for solving interview questions, I figured I'd touch on a topic that's very common to see on technical interviews. The Palindrome.

A palindrome is a string that when reversed is equal to the initial un-reversed string. Palindromes are a fun coding problem and will more than likely show up in some form or another during your job search.

So a question you might come across could be something along these lines:

"Given a string, determine if the string is a palindrome"

```
const isPalindrome=(string)=>{
    //return true if string is a
    //palindrome and false if not
}
```

This is a very barebones question, we're just reversing the string we are given, comparing it with the initial string and returning true or false, simple right?

Let's try it out.

## For Loop

```
const isPalindrome=(string)=>{
    let reverse = ''
    for(let i = string.length-1;i>=0;i--){
        reverse+=string[i]
    }
    return(string===reverse)
}
```

So here we're creating a new empty string variable called reverse, iterating through the given string in reverse and appending each char to reverse. This gives us a completely reversed string which we then compare to the given string.

This method is fine but there's a built in JavaScript function that would make this code a bit cleaner.

## Array

So instead of looping through the given string and building the reversed string, we can instead try something like this:

```
const isPalindrome=(string)=>{
    const reverse = string.split('').reverse().join('')
    return (string===reverse)
}
```

In this function, we're converting the given string into an array of each char. We're then calling array.reverse() which is a built in JavaScript Array function which completely reverses the contents of the array. We're then calling array.join('') which then puts the array back into a string leaving us with the reversed string to which we then compare to the given string.

This way of solving the problem looks significantly cleaner than the For Loop solution.

## Edge Cases

Now these solutions will work fine for single word palindromes like 'racecar' but not for sentances or multi-word strings like 'taco cat'. We also want to account for the possibility that a string with capital letters can be checked, so we'll have to add some code to account for these cases.

```
const isPalindrome=(string)=>{
    const cleanString = string.replace(/[^\w]/g,'').toLowerCase()
    const reverse = cleanString.split('').reverse().join('')
    return (cleanString===reverse)
}
```

So to account for the cases stated above, I added another line which declares cleanString as string without any special chars and lowercase. I'm using .replace() and passing the regex `/[^\w]/g`, and an empty string. This will remove any character that isn't alphanumeric. We're then just calling toLowerCase() on the result of that replace() call.

I then changed reverse to split cleanString rather than string into the array for reversal. From there we're just comparing cleanString with reverse, giving us our answer.

We have a pretty decent solution here
