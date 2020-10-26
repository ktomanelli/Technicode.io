---
title: "Sloth Every Hour"
date: "2020-06-15"
---

![](images/Screen-Shot-2020-06-14-at-5.14.11-PM-300x158.png)

If you've read my last post you'd know that I was recently looking for an API endpoint that provided random images of Sloths for a project I wanted to work on. After searching for this tool and realizing it didn't exist, I ended up building it myself (_you can access and use the Sloth API at [Sloth.pics](https://Sloth.pics), as well as read my blog post about it [here](https://technicode.io/index.php/2020/06/05/sloth-pics/)_).

But anyway**,** the project I initially wanted to make was [Sloth Every Hour](https://twitter.com/SlothEveryHour). A Twitter bot that posts images of sloths every hour, very much in the inspired by accounts like [@PossumEveryHour.](https://twitter.com/PossumEveryHour) I was seeing accounts like this pop-up quite a bit on my Twitter feed and was curious about how these accounts worked. A few of them seemed to be posted via automation tools like IFTTT, but a number of them claimed to be manual. I thought this was crazy. Who has the time to manually search for pictures and post them every hour?!

This got me thinking and I realized that this could be a really fun project to work on. Some sort of bot that would continually search for images, confirm what's in them, and then post to twitter. This is what led me to build Sloth.pics.

Now that I had the first part of this complete, all I had to do was make an app that could send an HTTP GET request to the Sloth API, download the image from the URL I received and then upload that image back to Twitter. Rinse and Repeat.

## The Build

This turned out to be really easy. I once again built this bot using Node.js as it's what I'm most familiar with. I used [Axios](https://www.npmjs.com/package/axios) to send my HTTP requests and [Image-downloader](https://www.npmjs.com/package/image-downloader) to download each sloth image from the API as Twitter won't show an image from its URL. And lastly, I used the [Twitter NPM package](https://www.npmjs.com/package/twitter) to upload my media and send out each tweet.

In order to send tweets via Twitter's API, I needed to set up a Twitter Developer account and create an app through their interface to get my hands on the API keys needed to actually send tweets programmatically. Once I had those, I was all set and ready to get started!

At the end of the day, abstracting the image collection/sorting from this project made the twitter side incredibly easy. The actual bot is really just 3 functions running in a setInterval every hour.

First I had to grab the image data from the API:

```
async function getSlothThenTweet(cb) {
  const resp = await axios.get('https://sloth.pics/api');
  const sloth = resp.data;
  const options = {
    url: sloth.url,
    dest: './sloth.jpg',
  };
  download
    .image(options)
    .then(data => {
      cb('./sloth.jpg', sloth);
    })
    .catch(err => console.log(err));
}
```

This function handles getting the image, downloading it, and then calls on the function passed to it in the parameters. The callback function is what actually handles uploading and sending out the initial tweet, as you can see here:

```
function sendTweet(imagePath, sloth) {
  const data = require('fs').readFileSync(imagePath);

  client.post('media/upload', { media: data }, (error, media, response) => {
    if (!error) {
      const status = {
        status: `Photo by ${sloth.creator}`,
        media_ids: media.media_id_string,
      };

      client.post('statuses/update', status, (error, tweet, response) => {
        if (!error) {
          console.log('Sent Tweet.');
          const tweetId = tweet.id_str;
          sendReplies(
            {
              status: `Link to Photographer: ${sloth.creator_url}`,
              in_reply_to_status_id: tweetId,
              username: '@slotheveryhour',
            },
            {
              status: `Photo License: ${sloth.license} => ${sloth.license_url}`,
              in_reply_to_status_id: null,
              username: '@slotheveryhour',
            }
          );
        }
      });
    } else {
      console.log(error);
    }
  });
}
```

This function reads the image from the specified file path and then uploads it to twitter via the client.post('media/upload'). This doesn't actually post it though. We need to then run client.post again but with the ('statuses/update') parameter for the tweet to actually be posted. So that's exactly what we do after. Then once I confirm no errors sending the tweet, I grab the tweet ID and then use it to attach a reply which contains a link to the photographer's Flickr page. And I do that once more to grab the reply's ID and attached another reply which contains info about the image's license:

```
function sendReplies(first, second) {
  client.post('statuses/update', first).then(tweet => {
    const replyId = tweet.id_str;
    second.in_reply_to_status_id = replyId;
    client.post('statuses/update', second);
  });
}
```

Once I had this all set up, I just threw the function calls into a setInterval which runs every 3,600,000 milliseconds!

```
getSlothThenTweet(sendTweet);
setInterval(() => {
  getSlothThenTweet(sendTweet);
}, 3600000);
```

> Just a side note, I'm calling getSlothThenTweet here before the setInterval specifically because setInterval won't initially call the function until after the specified time frame, so if you want your function to run once when you start your app, you have to call that function first!

## Hosting

Once again I'm hosting through Heroku. It's just incredibly easy to get an app up and running through Heroku, that I couldn't not use it again, and since I'm not making the bot accessible via the web, it was actually even easier to set then Sloth.pics!

## Things to Change

Honestly, this project was so easy and simple that I really can't see myself wanting to change anything with it in the future. Any thing I'd want to change would really be on the Sloth API side, rather than the Twitter side. So I guess really not much will change with this one!

If you'd like to look at the code for this project, you can do so [here](https://github.com/ktomanelli/SlothEveryHour)!
