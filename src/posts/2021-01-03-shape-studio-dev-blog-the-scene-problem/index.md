---
title: "Shape Studio Development Blog: The Scene Problem"
date: "2021-01-03"
---

As Shape Studio grows, I think I'd like to use this blog as an outlet to think through the problems I come across. The most recent problem I've been facing is how I can best update the Scene object to make future changes easier to implement.

The scene object is a large json object created by Three.js. It holds all the information about the scene as well as all the objects in that scene. Currently in order to save the scene I'm making use of Three.js' built in Scene.toJSON method, stringifying it and sending it to the database.

This works. The payload does end up being quite a large string to send over but it only takes a second or two. However I think it can certainly be better. Also currently I have no way of singling out individual objects in a scene and if I'd like to implement an object store later on where users can make their objects available for others to use, this may be a problem.

So in order to remedy this, I'm thinking about breaking up that scene object, specifically taking out the scene children, which are the objects in the scene, and storing them separately in another table in the database. This would make the scene payload smaller and maybe a bit quicker, and could allow me to implement some sort of smart saving where when changes are made to the objects, they get saved to the database automatically.

Now this could turn out to be a terrible idea. The scene object could still be large enough to give a slow load time and adding the individual objects to that scene save in separate database api calls could make it worse. But it might not be too bad, or it might turn out to be quicker since a full scene save would have less data. It would be essentially spreading out the database calls over more time.

Alternatively, I could still break out the objects into their own table and reference them in the scene object, but maybe not call a save on the object after every change. I'd still be sending all the data along on a full save which wouldn't be too different to the load times now, but I'd then have access to all the individual objects for the object store.

Both of these options involve me breaking out the scene children and making an objects table in the database, so I guess that's where I'll start! Once that's complete I'll code out both options on separate branches and see which one works best.

If you'd like to hear more frequent thoughts about Shape Studio's development feel free to follow me on twitter [@kyletomanelli](https://twitter.com/kyletomanelli)
