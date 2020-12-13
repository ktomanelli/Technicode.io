---
title: "Updating Sloth.Pics"
date: "2020-12-13"
---

A while ago I was looking for an API that would return a random image of a sloth for another project I wanted to build. It didn't take me too long to realize this API didn't exist, so I decided to build it myself! You can read more about this project [here](https://technicode.io/posts/sloth.pics). But a quick run down, I'm pulling 500 images from [Creative Commons](https://creativecommons.org/), passing them to AWS Rekognition and checking if if the label 'sloth' shows up with at least a 75% confidence rating, and if so then saving the image's information to an Mlab database.

Mlab is a document based cloud database which was aquired by MongoDB in 2011. It had a great free teir for small projects which worked great for my needs. However, a couple months after I finished building sloth.pics, Mlab announced that on December 9th they'd be wiping their data and that users who want to keep their data would need to migrate to MongoDB Atlas which also has a free teir. So over the past week I've been looking into ways to keep the database up and running since it's being used frequently by [@SlothEveryHour](https://twitter.com/slotheveryhour), a project you can read more about [here](https://technicode.io/posts/sloth-every-hour).

I decided to go with MongoDB Atlas but instead of just migrating my data over, I wanted to start fresh so I can add more images to the database without creating duplicates as my image collection function currently isn't capable of distinguishing duplicates. Luckily Mlab's databases were accessible through the MongoDB npm package so aside from updating my collection function from making use of Creative Commons pagination, all i really needed to do was create the Atlas db, get my new Mongo URI, and replace my database URI environment variable.

Then once I confirmed my db is connected successfully, I went ahead and started adjusting my collection function to make use of the pagination. CC's pagination works by adding a parameter to the query string, 'page' and a value of which ever page you'd like to access. And since i'm specifying the max image count of 500 on my query, if I iterate through the pages I can get a great deal more than I had previously.

I ended up iterating through 3 pages which gave me 1500 images to pass to AWS, and after the image recognition, I had over 600 images which were confirmed sloth images. This was much better than the 200 images I had from my initial CC image pull.

For the time being, Sloth.pics should be stable and continue providing sloth images for everyone who needs them. When I have the time I'd love to give the site a bit of a face lift as I had put it together when I was not as familiar with full stack development. Adding it to the list! If you'd like to make use of the API, feel free to check it out at [Sloth.Pics](https://sloth.pics)
