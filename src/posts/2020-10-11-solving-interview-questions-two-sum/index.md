---
title: "Solving Interview Questions: Two Sum"
date: "2020-10-11"
---

So as a recent Software Engineering Bootcamp grad, I've been practicing some interview questions on LeetCode and figured I'd use this blog as an outlet for fully explaining the problems as well as the solutions I come to. I find that one of the best ways to fully understand a concept is to have to explain it to someone else, so that's what I'll be doing here.

Since this is the first post of it's kind that I'll be making, I'll start with a problem that LeetCode classifies as 'Easy'. Two Sum has an acceptance rate of 45.9% so at least one of the solutions should be easy to get and this is exactly what I found. I was able to get the brute force solution fairly quickly but when trying to optimize the solution I had a bit more trouble than I was expecting. Let's get into it.

## The Problem

> Given an array of integers (nums) and an integer (target), return indices of the two numbers such that they add up to target.
> 
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
> 
> You can return the answer in any order.

Okay, so we're being given an array of numbers and a target. We need to check to see there are any numbers in the array that add up to the target, and if so, return the indices of the numbers. Also, we can't use the same element twice. Let's jump into it.

## Brute Force

So to start lets just get it working, I'll start with a nested for-loop with variables i=0 and x=i+1, then check if the value at nums\[x\] is equal to the target-nums\[i\], if so, then return \[i,x\]

`var twoSum = function(nums, target) { for (let i = 0; i < nums.length; i++) { for(let x = i + 1;x < nums.length;x++) { if(nums[x] === target - nums[i]) { return [i,x] } } } };`

This solution will pass all the tests but has a time complex of O(n^2). This is because we're for each item in the array, we're comparing it to every other item in the array. And since just 1 loop through an array has O(n) time complexity, our adding another full loop to each iteration exponentially increases the time needed to compute the problem leaving us with O(n^2). As for space complexity, we're not doing much here so we're left with O(1) for space.

Let's see if we can optimize this.

## Optimization

So the key for lowering the time complexity for this problem is something called memoization. Instead of looping through the entire array exponentially until we find a match, we can store the data from the given array into an object which will allow us to significantly cut back on our time complexity. This will however increase our space complexity since our object will end up being exactly as large as the array we pass in. Let's try it out.

So first, we'll make our object. To do so, we'll initialize an empty object, loop through our array and for each item in the array create a key value pair from that value and index respecively.

`const object = {} for(let i = 0;i < nums.length;i++){ object[nums[i]] = i }`

This will allow us to find the value we want, which will be the complement of the current array index to add to the target, and then look for object\[complement\]!

So to make this work we'll need another loop after this one, to initialize each complement and check for that key in the object. We'll also confirm that the current index we're at in the loop is not the same index saved in our object. and if this is the case we'll return our two values.

`for(let i = 0;i < nums.length;i++){ const complement = target - nums[i] if(object[complement] && object[complement] !== i){ return [i,object[complement]] } }`

So our full solution should look something like this:

`var twoSum = function(nums, target) { const object = {} for(let i = 0;i < nums.length;i++){ object[nums[i]] = i } for(let i = 0;i < nums.length;i++){ const complement = target - nums[i] if(object[complement] && object[complement] !== i){ return [i,object[complement]] } } };`

This solution will have a time complexity of O(2n) since we're making 2 passes through the array but when there is a constant the complexity simplifies down to just O(n). And our space complexity did increase, as predicted, to O(n) as we're using space to create our object but that's not too bad of a trade-off considering we cut back out our time complexity.

Overall this is a great improvement from our initial brute force solution. You can see from the following screenshot on LeetCode, our second solution was able to shave off a solid 32ms from our runtime. This may not seem like a lot right now but the test cases we're working with are very simple and these differences in runtime will increase exponentially as the data sets get bigger!

I hope you enjoyed following along on this coding problem and I look forward to trying out more of these in the future!
