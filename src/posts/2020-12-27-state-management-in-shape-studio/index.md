---
title: "Zustand: State Management in Shape Studio"
date: "2020-12-27"
---

So as you might already know, I recently launched an open beta for a project I've been working on for a number of months now. The project is called Shape Studio and you can read more about what it is [here](https://technicode.io/posts/shape-studio).

Shape studio is a react app and a relatively large react app at that. And being a large react app, state management is a must. This blog will be about how state is being managed in Shape Studio and why it's being managed the way it is.

So to get started I'll go over how I started building the app. Shape Studio was my final project at Flatiron School's Software Engineering Bootcamp. I had about 2 and a half weeks to build up to my mvp and deciding to build an app with Three.js, a library I had never touched before left me in not a great spot time-wise. I knew this app was going to have a pretty heavy state but in order to save myself time I opted to forego learning a state management solution and figured I'd just get to my MVP, present, and then add some sort of state management later.

I still think this was the right move for the situation. Having to learn redux while only having worked with prop drilling in react seemed a pretty daunting especially when I was also just as unfamiliar with Three.JS and my entire project was based on that. So I opted to continue on building my app with standard prop drilling and it was kind of a mess and pretty ugly but I got to my MVP and presented my project! If you want to check out my presentation from July of 2020, you can do so [here](https://vimeo.com/443515489).

I'm definitely happy with how the MPV came out after the 2 and a half weeks. After the presentation, I had a few more features I wanted to add before making the site live such as user authentication, better UI/styling, better shape generation/deletion flow, live updating of scene manager when shapes were added or removed, and live updating values in the sidebar.

State management still seemed very daunting to me. My app was already pretty large and having to go back and rework all my state variables didn’t seem appealing at all so I figured I’d get to a version I could make live and then deal with the state later. This was my mistake.

A number of the tasks I had set to be completed before launch were very tricky. Specifically getting the scene manager to update when shapes were added or deleted. The scene component was getting the list of shapes from state which was housed in the App component. The Scene manager was also pulling from this state var in App. During shape deletion, the scene would reflect the removal of the shape but the scene manager would still be displaying the deleted shape until you added or deleted another shape.

This bug thoroughly confused me and I got stuck on it for quite a while. I was pretty discouraged and felt like this was something I just wouldn't be able to figure out. I spoke to my brother about the problem and without looking at code, he thought it could be related to the react keys of the dynamically generated shapes. But fixing issues with the keys still left that deleted shape sitting there in the scene manager after deleting from scene.

Then some time in October of 2020, I realized that since this bug appears to stem from the state props, it may finally be time to look into a state management solution. I was using a library called [React-Three-Fiber](https://github.com/pmndrs/react-three-fiber), created by a group of developers called [Poimandres
](https://github.com/pmndrs). These devs also made a state management solution called [Zustand](https://github.com/pmndrs/zustand) which they recommend using to manage state with their libraries. And me barely having any experience with state management solutions figured I might as well try it out and see how it goes. Zustand is a lightweight hooks-based solution and it's very easy to get up and running. It took my maybe a couple hours to move all my state props over to the Zustand hooks and sure enough after everything was moved over, I was no longer getting that object in the scene manager after it was deleted!

The moral that I took away here was that in trying to save time by foregoing learning and implementing a state management solution, I wasted more time than if I had just decided to implement it sooner. Anyway I’m so happy that state management was able to solve my problems entirely and this just goes to reinforce that avoiding a new technology because you don’t want to waste the time to learn it will actually waste way more time than learning how to do something the right way. I do however still prefer not to work with Redux when given the choice as it seems unnecessarily bulky when compared to hooks-based solutions but that hasn't stopped me from picking it up and using it in projects that make use of it. I'm very thankful to have learned this lesson on my own personal project rather than in a professional environment, and since then I've found myself being much more open to learning a new technologies when needed!

This entire state management debacle happened back in October and I made a [tweet thread](https://twitter.com/kyletomanelli/status/1316488690898739200) about it then. If you'd like to hear more of my dev stories while they happen, feel free to follow me there [@kyletomanelli](https://twitter.com/kyletomanelli)