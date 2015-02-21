# Furthermore

This is a database-driven blogging platform which, unlike traditional blogging platforms, is based around two central ideas:

* Liveblogging (as pioneered by [Dave Winer](http://www.scriptingnews.com) at [Liveblog](http://reader.liveblog.co/davewiner)
* Topic-oriented blogging

Instead of following the traditional blogging format which presents independent posts presented in reverse chronological order and loosely grouped by tags, Furthermore promotes the idea of creating topics, such as [Better Call Saul](http://www.amctv.com/shows/better-call-saul), and then posting interrelated posts as children to that topic which can be linked together in a variety of ways. When a new post is added to a topic, it thus has a context not only by topic but in its relation to other posts in that topic (and possibly to other topics). You end up with a web of thoughts and ideas that are updated in real time that users can explore in their own ways. Each topic becomes a distributed blog post which evolves as you do.

Furthermore will also be able to pull in data from other sites, such as Twitter, where you can take relevant tweets, add them to a topic, and then add posts in reference to that tweet. And you'll be able to create a new post and push it out to Twitter where Furthermore will automatically limit the text and provide a link back to the relevant full post on the site.

### The Technologies

The plan at this stage is to use React on the front-end with either [Om](https://github.com/omcljs/om) or [Reagent](https://holmsand.github.io/reagent/). The database will be [MongoDB](https://www.mongodb.org/) with [Monger](https://github.com/michaelklishin/monger) although I plan to code it so its agnostic as far as the data store is concerned.

Tests are being written using the wonderfully terse [expectations](https://github.com/jaycfields/expectations). I'm going to try really hard to write tests first this time around. [fingers crossed]

Task tracking is being handled by [Trello](https://trello.com/b/FLVazkwc/furthermore). A very special thanks to Trello for donating some Gold so that I can have fancy backgrounds. A fancy lad like myself absolutely *must* have fancy backgrounds.

I'll be tracking my time using [Wakatime](http://www.wakatime.com).

### The Road Ahead

My plan is to 'live code' this thing from the initial commit to v1.0 and beyond. I'll be posting conversational updates on my [Twitter account](https://www.twitter.com/akiva). Lengthier status reports will be posted [here](https://github.com/akivaschoen/furthermore/blob/dev/UPDATES.md); it'll also serve as a kinda-sorta blog, too. All of my triumphs, mistakes, rabbit holes, and brilliant ideas will play out along with constant code commits so people who are curious can see how an app like this can be developed.

My first milestone will be when I'm able to deploy Furthermore to Heroku and start blogging there regardless of how ugly it looks. A dynamic UI will come later.

Finally, I'm very interested in code reviews and feedback throughout this process. If some people find this useful and helpful, that's great; if someone can show me a better way of doing things, that's even better.

I can be reached at Twitter or via e-mail: furthermore akivamail com (with, y'know, the required RFC 822 punctuation).

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein ring server

## License

Copyright © 2015 Akiva Schoen

Distributed under the Eclipse Public License either version 1.0 or any later version.
