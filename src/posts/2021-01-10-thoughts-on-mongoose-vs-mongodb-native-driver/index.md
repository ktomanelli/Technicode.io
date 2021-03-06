---
title: "Thoughts On Mongoose Vs MongoDB's Native API"
date: "2021-01-10"
---

MongoDB is a noSQL database that's been pretty popular over the last few years. One reason I think it's gotten so popular is that its very easy to understand how the data is stored. Unlike a relational database where you have relationships with everything and foreign keys stored in each table (A method MongoDB can also use if needed), MongoDB's main data storage technique is essentially just storing a big array of JSON objects. Very easy to understand whats going on. It's just a list of objects.

And when I started working with Mongo, this was definitely a big selling point for me. And so I didn't think any abstraction was really needed. An ORM like Active Record wouldn't really be needed since there's not that much crazy confusing stuff going on behind the scenes to warrant a whole other tool to make it easier.

And so for pretty much every project I've worked with that needed a quick and easy database, I've turned to MongoDB and it's native api package. Sloth.Pics, StudyParty, even this Java Library app I built for a college course. All made use of the bare MongoDB package with no abstraction.

And I was completely fine with this method until this weekend when I received a coding challenge from a potential employer that wanted me to build a Node API with some storage capabilities. The challenge didn't specifically mention which storage method would be required but mentioned a few options we could use such as in-memory storage, tedious for SQL or Mongoose for MongoDB. And since this is a code challenge I knew I didn't really want to use in-memory storage, that seemed too easy, where as SQL is old money. I needed something fresh and challenging which showed I was up to date and current with web technologies and data storage. MongoDB it is, and you know what, I might as well try out mongoose for this one just to give it a try and see what all the hype is about.

So I hopped over to Udemy and found a nice Stephen Grider Mongoose course on sale for \$9.99. Great!

I started the course and after just a few hours I really started to see why something like Mongoose is so frequently used. Having worked with Active Record, I knew the benefits of having models for each table in the database and how much of a headache manually making all those SQL queries would be without it. But for some reason I never thought the same concept would be anywhere near as useful with MongoDB. And I was definitely wrong.

I mean sure for some projects the bare Mongo API will do fine. Like Sloth.Pics, a very simple app that's not doing much of anything with the data aside from storing it and pulling a random item out. This definitely doesn't need Mongoose. But an app that frequently making changes, adding, modifying the documents in a collection can certainly benefit from a library like Mongoose.

All of this really just to say that I'm 100% going to be returning to a few projects and re-working them to make use of Mongoose rather than MongoDB. I hope you've enjoyed my ramblings about old projects and my poor misconceptions about which tech is actually useful!

If you'd like to hear more thoughts on data storage or anything else I've been working on, feel free to follow me on Twitter, [@kyletomanelli](https://twitter.com/kyletomanelli)
