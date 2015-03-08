# The Furthermore Protoblog

## Day 17: Sunday, March 8, 2015

### RSS Time
* Can't have a blog without an RSS feed, as far as I'm concerned. I'm sure my pal Dave Winer would agree with me. This is going to get me to more closely examine and commit to a site update workflow. All the pieces are there but there's no end-to-end path right now which is to be expected seeing as how there's no admin section yet; all updates are occurring through the REPL.
* This is already percolating in the back of my mind: I have a task in Trello for doing some updates to create-post and create-topic where I want to remove the automatic addition to the db-queue. They should be added right before processing and not just because they were created. This prevents situations where, through a hypothetical admin tool, a new post is created and then cancelled. With an early call to add-db-queue!, I have to go dissoc that post and any other entities that got updated due to references or whatever. Without the early call, I can just forget the objects. No problem. Probably.
* I just realized as I typed that that I'm going to have to add a drafts feature sooner or later which means that newly created entities should be added to the db-queue but tagged for draft, publication, etc. Should I combine published and draft posts in the same collection and then filter them out? Or should draft posts go into their own collection and then get moved over when they're published? This will require some thought. 
* Still not writing any tests. Professional!

### Further Changelog Updates
* Eventually, I need to decide what I want to call it. It's referred to as 'weblog' in the CLJS namespace, logging in CLJ, 'changelog' here, and 'Web Log' in the navbar menu.
* I added topic references to the changelog. This is becoming an increasingly painless process the more I get comfortable with how Om works with Ajax calls and the app-state atom. I also added a little more polish to the display. There's still more to go but it's all just UI stuff. The functionality is there.
* Oh, except that I need to add a link to topics once I get the single topic page done.
* Maybe I'll just call it Updates. I was just thinking that calling it a web log was cute seeing as how it's actually a web log and not a blog and oh who cares.

### The Return of Wakatime
* After having announced giving up on using Wakatime, I was contacted again by the Wakatime guys yesterday evening claiming the bug had been found and fixed. Let's hope so because I miss getting an idea of the hours I'm putting in. Here goes nothing...


## Day 16: Saturday, March 7, 2015

### Changelog Added
* A lot of work in but it was the good kind of work. No tooling issues, no struggling with or against libraries... just coding and more coding. But now the 'changelog' is in which lists updates to the site in a traditional reverse chronological order. It's an important feature seeing as how the site is otherwise presented in a non-linear fashion.
* Meanwhile, outside of Furthermore, I've been getting more active in the Clojure community on Twitter and in Google Groups. Feeling pretty confident. Feeling pretty confident that feeling pretty confident won't last so I'm going to enjoy it and make use of it for as long as I'm able.

### Minorly Major (or Majorly Minor) Update
* Realizing that passing around UUIDs was ugly and unintuitive for users, I've added a url key to posts so now we get links like http://www.domain.com/post/2015-03-05-smurf-violence. This required quite a bit of an update across the board but now the site is a little more flexible. The API now allows specifications based on criterion so I can grab a post by ID or by URL. With just a few updates, I'll be able to request regex searches too.
* The create-post workflow hasn't changed since day 3, really, and it shows. A post in the act of being created required its parent and topic to already be saved to the db-queue (which is used to gather entities that need to be updated). This was dumb as every post has to have a topic but the topic doesn't need to know every entity that points to it so the topic doesn't need to be updated. And so on and so forth. This has all been changed so that references are taken directly from the database and then cross-referenced entities would get added to the queue so those updated references can be committed to the database. It's much better now.
* Next I need to change when an entity's last-updated property gets updated. Currently, it's updated any time an entity is committed but this means that entities which are merely gaining a reference are getting their last-updated changed which bumps them to the top of the home page even though no user-facing content changes have been made.
* After that, the changelog.

### Brief Note
* One thing I've been trying to stop doing is 'while-I'm-here' coding. I'm taking are of a particular task in a branch I've created to reflect me doing that task and I see in some source code some cruft or other minor refactoring I could do. My instinct is to just go ahead and do it. But then I have a non-task-related work bundled up in a task. So I just make a note to do it later so at least I know it'll get done.


## Day 15: Friday, March 6, 2015

### Navigation Hades
* Something that seems like it should be easy—enabling history navigation for an SPA—turns out to be a bit fussy. I have it implemented but it's buggy. However, I really want to get a version of the site up so I can start blogging there so I'm willing to look past it for now.
* With that in place, I can move on to the site log and tagging as I had planned yesterday. I'm shooting for a Monday soft launch. No guarantees.


## Day 14: Thursday, March 5, 2015

### Focusing On the UI
* I've been borrowing in its near entirety the layout and colors from my previous and failed blog Backed Up Somewhere. I've known it wasn't what I wanted to do but it gave me a nice layout to look at as I was coding. This morning, I began the work to transition the blog to a new layout. It's still fairly similar but it's getting increasingly different from its predecessor.
* As I was clicking around, I began to realize how close to 'complete' the site is getting. The very basic functionality is all there with the exception of inter-post references. Although the underlying structure is there, I haven't yet decided on how I want to present it in the UI. I have an idea but it'll be complex due to the responsive design. At regular sizes (probably col-md-* and higher), it'll be three columns on an individual post page. Those columns will have to be repositioned below in a reasonable manner.
* Before I give the site a soft launch, there are a few more things I want to get done: the site log and tags. Site log will require some back-end work to add logging to all user-facing admin activities. Tagging is already there, I just need to add a tag index page, link to and from posts, and add a Tags drop-down to the navbar.
* Oh, and I need to settle on the name for the blog. I'm definitely moving it off of backedupsomewhere.com so it can return to its job as a file repository. I have some ideas but none them really get me excited.


## Day 13: Wednesday, March 4, 2015

### Minor Bug Hunt
* Git has suddenly forgotten the dev branch's remote tracking because why not. Sorted with a quick 'git push -u'.
* Fixed the issue of the topics page not behaving properly. It was populating the top level posts for a topic but any posts attached below that level (e.g., to another post) were not populating. I moved the function that references them to the action that opens the parent post so they're sure to be there each time.
* I might want to move that function again because, at least in Chromium, it flickers a little bit as the browser sometimes displays the div before the contents are updated.
* Fixed a display issue with the posts page in that it wasn't working at all and I'm not sure how it was ever working. It works now. Part of the issue was a bug in my Typographer library. I'll upload 1.1.1 sooner or later.

### Individual Post Pages
* Upgraded to MongoDB 3.0 for no other reason than it was part of me running `brew upgrade`. So far so good.
* Conquered what was blocking me with Om and that was, well, me. Part of me just isn't comfortable shoving *everything* into a single atom especially when that stuff is referenced only by one page but, according to everything I've read, that's exactly what you're supposed to do. So I was trying to shove some stuff into local state or putting up an async channel just to update one tiny thing and it was just a bunch of muck. Gave in to the Om way and, whoa hey, wouldja look at that, it suddenly works as expected.
* It's all means to an end as now Furthermore can show individual blog posts. Whoo.
* Meanwhile, stuff I'm doing is starting to introduce bugs for the first time which is kind of neat. This isn't a sign of growing fragility and interdependence, mind you. The bug was brought up because I changed how the server responds to requests for blog data. Previously, it returned an item and went ahead and fleshed out all of its references rather than leaving just the ID to be populated later if necessary. So it was transferring a bunch of stuff that might not even be necessary. For example, on the post page, I just wanted the post's topic's title. But grabbing the topic by ID returned *all* of the data including *all* of the data for each of its references. Wasteful.
* This [post](http://stackoverflow.com/questions/22883759/what-is-the-difference-between-application-state-and-component-local-state-in-cl#22914077) was especially useful in helping me understand the different use cases for Om's states.


## Day 12: Tuesday, March 3, 2015

### Research and Learning
* Spending the evening reading up more on React fundamentals and Flux as well.
* I spent a bit of time today stymied by Om trying to do something that seems like it should be simple but nothing I did seemed to work. Instead of burning time trying to essentially just jam the pieces together based on bits that DDG searches bring up, I decided instead to spend the time being more positively productive by learning React more deeply. I'd like to see a tutorial written that introduces Om in step-by-step context with learning React. Something like that would have been definitely helpful to me.
* was: re: could be a future blog post for me.

### It Ain't a Day Without Some Hassle
* Suddenly, Compojure started shitting the bed, refusing to serve any stylesheets or images, claiming 'Resource interpreted as Stylesheet but transferred with MIME type text/html' (for example). I've made no changes to Compojure's routing; I even checked back through the commit history just to be certain. Nope. Just up and started puking this morning.
* I briefly entertained the idea of just taking the opportunity and jumping to Luminus but decided to just rip out all the Compojure guts that had been put there by whichever lein template I had used to get started and replacing them with the barest minimum from the compojure lein template. And now everything works again.


## Day 11: Monday, March 2, 2015

### More Reactification
* Spent some time converting the static navbar to dynamic and React-driven. The user can now switch between pages without a browser refresh. This includes adding to the history so the back button works. Well, mostly. There are some bugs to iron out but I'm pretty happy with how everything's working.
* This means there'll be an initial pause in loading when the site is first accessed but, after that, the navigation from page to page is almost instantaneous. It's pretty neat.
* Tomorrow will be taking care of some bugs relating to this nav work followed by the post page itself. Once those two things are done, I'm going to finalize the layout and then I think it'll be safe to publish and move this blog to there.
* Exciting, yeah?

### Typographer 1.1.0
* Without having to change one line of code, I was able to get Typographer working in ClojureScript so now I can display fancy quotes and dashes as well as the raw HTML I need to make this blog work.
* Typographer is now at Clojars and [here](https://github.com/akivaschoen/typographer) at Github, of course.

### Rendering Issue Sorted
* There's an option that can be passed to an Om tag—:dangerouslySetInnerHTML—that allows you to pass raw HTML so it will be interpreted by the browser. Normally, I'd not recommend this but it's required for post content since it'll have a load of layout baked in.

### Rendering Issue
* I woke up and it's still March. I expected it to be April already.
* Grabbing a post's topic title for the home page display was a cinch.
* But the browser is still not parsing HTML markup in React-generated components. I thought perhaps this might be an issue with the fact that I was parsing the Markdown in the server so I moved it to CLJS and, well, no change.
* I also need to make a CLJS version of Typography so I can get fancy quotes back in there. They were being mangled when translated to EDN and transferred to the UI.


## Day 10: Sunday, March 1, 2015

### Never Mind All That
* I went down the rabbit hole a little bit but after about an hour, I decided it wasn't worth the effort just to have syntactical sugar for working with Bootstrap. I'll keep checking for updates to the libraries and come back to it later.
* With that off the table, creating the home page has been a bit of a snap. Without the niceties of om-bootstrap, the code looks kind of goofy (and incredibly indented) but that's fine.
* I'm slightly behind schedule—I was really hoping to have it publishable tonight—but everything is definitely in a 'nearly almost there' state. Except for two issues.
* One: I'm hard-coding the topic in the post displays for the home page. I just need to reference each post's topic to get that topic's title and plug that in. No big deal.
* Two: The body text of each post is in Markdown and so it gets interpreted which produces HTML. Unfortunately, the browser is just displaying the markup rather than interpreting it further into an expected display; it's just showing the raw markup. I'm sure this isn't a big deal either; I just need to research how to update via React and have it get printed properly to the screen.
* Overall, I'm pretty happy with how things are going.

### The Neverending Fuss
* Trying to get om-bootstrap going but it's relying on [schema](https://github.com/Prismatic/schema) which is crying foul:

<pre><code>WARNING: ->ValidationError at line 68 is being replaced at line 80 file:/Users/akiva/.m2/repository/prismatic/schema/0.3.1/schema-0.3.1.jar!/schema/utils.cljs
WARNING: ->NamedError at line 89 is being replaced at line 101 file:/Users/akiva/.m2/repository/prismatic/schema/0.3.1/schema-0.3.1.jar!/schema/utils.cljs
Compiling "resources/public/js/furthermore.js" failed.
clojure.lang.ExceptionInfo: failed compiling file:src/cljs/furthermore/core.cljs
 at clojure.core$ex_info.invoke (core.clj:4577)
Caused by: clojure.lang.ExceptionInfo: java.lang.ExceptionInInitializerError, compiling:(schema/macros.clj:1:1) at line 1 file:/Users/akiva/.m2/repository/prismatic/schema/0.3.1/schema-0.3.1.jar!/schema/core.cljs
 at clojure.core$ex_info.invoke (core.clj:4577)
Caused by: clojure.lang.Compiler$CompilerException: java.lang.ExceptionInInitializerError, compiling:(schema/macros.clj:1:1)
 at clojure.lang.Compiler.load (Compiler.java:7206)
Caused by: java.lang.ExceptionInInitializerError: null
 at java.lang.Class.forName0 (Class.java:-2)
Caused by: java.lang.ClassNotFoundException: riddley.Util
 at java.net.URLClassLoader$1.run (URLClassLoader.java:372)</code></pre>
I've seen this before with another component (sablono, I think) and just decided to not use it for now. However, om-bootstrap would be incredibly useful so it looks like I'm going to have to figure out a way to get it sorted by hand.
* I'm guessing I'll need to somehow adjust om-bootstrap's dependencies to point to a more recent version of schema.

### Routers Within Routers
* Going with secretary and Compojure together is working great. After a bit of refactoring, I have Compojure taking basically everything that isn't an API call to secretary who then dynamically generates through Om the content that needs to be displayed. I'm really liking this. All I need is a single HTML base file that Om fleshes out based on the user request.
* This means I can also populate the nav bar dynamically. For example, if I add a new post that has a new tag, it'll auto-populate the tags dropdown menu. Well, it'll do that eventually; right now, the only time it talks to the repository is based on user interaction. I plan on having the UI poll the database regularly, looking for changes. It is a liveblog, after all.
* Working on the home/index page now. As for the table of contents, I'm not sure if a parent/child outline-style display is the best way to go but luckily the data is stored with very little prescriptive structure so it can be interpreted and displayed in a variety of ways.

### Paving the Way
* March. Already. Good grief.
* First up today is ensuring the base HTML file from which the different areas of the site are served is capable of serving up more than one page based on which page is meant to be served: home and TOC, for starters; individual post pages later. Maybe static pages before individual post pages. We'll see.
* Basically, I want to be able to go to / and display the home page, /contents to display the table of contents, and so forth, and have it use the same HTML file and just build the page inside of it dynamically based on request. While keeping browser history.
* Time to do some Sunday morning research.
* Looks like [secretary](https://github.com/gf3/secretary) would do the trick but do I need it? That would leave Compojure to handle just a single user-oriented route "/" and then a bunch of RESTful routes used by Om. A part of me is concerned about having two routers; it would *seem* that I could use Compojure for everything if I can easily pass the URL into Om and then... well, route it from there which is exactly what secretary does anyway.
* Clearly I've never built an SPA before.


## Day 9: Saturday, February 28, 2015

### The Figwheel/Om/Sass Carnival of Glory
* I didn't get too much done yesterday but that's no excuse for me slacking on updating this blog. I spent a lot of my day further messing with tooling and learning about Om and React.
* I didn't fully understand how React was expected to work so I spent a bit of time digging my heels against it before I decided to toss the architecture I was going to go with and embracing React fully. That is to say, the site will be an SPA rather than a traditional MVC sort of thing. I was a bit nervous about the idea at first as a blog doesn't seem the right fit for an SPA but, as it turns out, it's been the right choice.
* Getting my head around React wasn't the easiest thing I've done but once it clicked how it all worked, and especially how Om handles cursors, it all fell into place. It was definitely a eureka moment and I was able to follow it up with a couple of hours of solid productivity.
* Instead of doing the home page which is going to display the most recent posts in reverse chronological order—as you do—, I went with the topics page which displays the topics alphabetically and then, again alphabetically, what is generally a tree structure of the posts under that and posts that are under those posts and so forth and so on. All of these are clickable to reveal more in the style of an outline. Once the Om click happened, all of this just fell together quickly and beautifully.
* Meanwhile, my dev environment is humming along nicely. Finally. Spacemacs continues to not crash, Figwheel's REPL and refreshing capabilities make coding a joy, and I've got sass watching my .scss file and updating it which Figwheel notices and refreshes the browser. Meanwhile, from lein, autoexpect is checking my Clojure code each time I save a file so I get immediately notified of any compilation issues. Thus, I just have to write code and then look over at the browser to see what's up. It's seamless, fun, and best of all, trustworthy.
* Tomorrow, I'm going to work on the home page and individual post pages with references. I think at that point, it'll be enough to publish and begin blogging with. And I'll put together some static pages such as an About page.
* Today was a great day of coding and learning. I've been doing software development for 15 years now and the fact that I still get wide eyed and giddy over it is very pleasing. I owe a lot of that to my general nature but I'd say the bulk of it is owed to Clojure itself. Never in my life has a language and community instilled such a joy and passion in me. And this deep in my career? Outstanding.


## Day 7: Thursday, February 26, 2015

### The Figwheel/Weasel Rabbit Hole
* Getting ClojureScript up and running wasn't as easy as I would have expected it to be. In fact, I'm convinced now that going directly for a one-size-fits-all solution like [Chestnut](https://github.com/plexus/chestnut) isn't always the best way to go especially if you're just learning all of this. However, I wanted to get rolling with Om and React as quickly as possible so it seemed a good idea at the time.
* I retrofitted the project with what I saw from Chestnut excepting Enlive since I'm using Selmer. I was able to get Figwheel up and going fairly quickly but ended up getting into a fight getting my tiny ClojureScript test file to compile properly. What I failed to notice was that the code in Chestnut was auto-inserting via Enlive some rather necessary script references into the HTML file. Since Selmer's generating the HTML and serving it via Ring and I had gotten rid of Enlive (and killed the reference to the code that did the inserting), this all got lost in the mess. Once I realized what I had done, it was merely a matter of adding the script references to my base HTML template and off to the races I went. Except...
* ...weasel wouldn't launch. I could get the page served and the test script worked fine but Firefox's Console was filling up with messages that a web socket couldn't be made. I traced it to an error in Chas Emerick's [piggieback](https://github.com/cemerick/piggieback) and posted to the clojure-tools Google group about it.
* Meanwhile, I discovered that Figwheel now has a built-in REPL which seems to do
* Now I can get actually get to work on the topics page now that I have all of this sorted out.
* I think I might one day create and publish a Leiningen template with all of this baked in and call it portabello or something. I'm sure I'll want all of this done again.
* One last thing, after a Spacemacs update or two and a emacs-mac brew update, everything has been mostly stable. Wakatime is still broken but none of the issues I was experiencing days ago have cropped up again. Knock wood.


## Day 6: Wednesday, February 25, 2015

### Enter: ClojureScript
* Of course, no introduction is too terribly easy. I've read about ClojureScript but never actually included it into a project and, unfortunately, the documentation that's out there doesn't explain much and in some places is contradictory. So it took some trial and error just to get all the pieces in the right place and loading properly. Burned about an hour on it.
* The 'gotcha' in my case seems to have been getting the pieces in the right place and referring to the right namespace. Some of the tutorials out there completely ignore the assignation of :main and :asset-path in project.clj. Perhaps they aren't necessary but they were for me. I plan on coming back sooner or later and writing up a tutorial post on getting CLJS up and running. I want to get figwheel and weasel in there as well.
* I'm currently working on the topics page, by the way, and need CLJS to allow the reader to click on a topic and post to reveal references.

### Early Morning Thoughts
* Sometimes it's tough to keep my head wrapped around what I'm trying to accomplish here when it comes to the UI. I try not to spend too much time thinking about it but it's something I'm going to have to deal with properly sooner or later. If I didn't care about responsive design, it'd be so much easier but I do so it isn't.
* Merged routes into the handler. The site isn't complex enough (yet; if ever) to warrant individual namespaces for routers. Maybe individual posts.
* Also, I really need to come up with and buy a domain name for the blog. I know the one I want but I really can't justify spending $35 on a domain name because of the TLD. But it's a good one.


## Day 5: Tuesday, February 24, 2015

### Rendering the Home Page
* The base site layout is complete.
* The home page lists the most recent posts as expected although some links aren't enabled yet. I still need to add references and a link to the topic.
* The navbar is unpopulated as well.
* It's all responsive although there are a few bugs I'd like to work out. For instance, is it possible to change the text justification based on screen size? I'd like to center some stuff that is normally flush left or flush right otherwise when elements get stacked on small screens.
* I'm borrowing the layout and style from subwave and I'm not really sure if that's the way I want to go but it should all be easily changeable.
* I definitely prefer Selmer over Jade (and thus Hiccup which is similar to Jade).
* Next up: a topic index and the changelog along with finalizing stuff on the home page. 

### Unstuck
* It ended up being a combination of things. The primary culprit was that I was referencing a file attached to the handler namespace that sets up some things for REPL development. ring did not like this at all. Removing the reference helped. The other issue was some deprecated ring dependencies. Those are gone now too.
* Thus, web server is up and serving a very ugly home page with the latest posts listed. Progress, finally.

### Stuck
* I didn't get much done yesterday. When I did sit down to finally get some coding done on this project, I decided to prop up the web server first. And, for some reason, it decided to stop working regardless of what I tried. I've made no changes to the files Compojure/Ring touch to get going and display a 'Hello World' page but I was faced with a NullPointerException anyway. I created another app, just to see, and it worked. I went through the two apps line by line and made sure they're the same: they are. Still doesn't work.
* Frustrated, I gave up and watched Better Call Saul.
* This morning, determined to get this solved, I'm going to completely delete (after a backup, of course) my project.clj, handler.clj, and any other related file and copy them over from the empty app that does work and see what happens. If I have to, I'll rebuild the whole thing from scratch, even if it forces me to restart the git local repo and lose my history.
* I'd rather be coding.


## Day 4: Monday, February 23, 2015

### A Little Light Planning
* Spent a little time this morning adding a bunch of stuff to Trello. I have now a pretty decent plan in mind on what I need to do and the order in which I need to do it to reach alpha status.
* It's all coming together surprisingly quickly. Topics, posts, references, tags, database, rendering.
* Now on to getting up at least a mildly tolerable UI.


## Day 3: Sunday, February 22, 2015

### Just a Little Bit More...
* Just realized that doing the database by reference rather than embeds was a good idea (along with two-way references) because it will make deleting posts a snap since I can touch every referenced post and remove the soon-to-be-deleted post's :_id. Boom.

### Winding Down for the Day
* Tagging is in.
* Database reads are done whether it's grabbing all topics, grabbing all references, grabbing a single reference, etc.
* Rendering to HTML is already done and I could easily start pushing out HTML files but... I'm getting kind of tired! Might save that for tomorrow unless I catch a second wind.

### Database Victory
* Created a hash-map which contains all entities that need to be updated the next time a commit is made to the database.
* References are now two-way and everything upserts to the database perfectly.
* Technically, at this point, I could start posting to the blog although there's not much I can do with it after that.
* Next stop: enable tagging of posts and topics. It'll be a simple matter.
* After that, reading things out of the database and doing something with those references. If work continues at this decent pace, I should be able to produce HTML pages by tonight. Maybe even enough to move this bloggage to its own site.

### References Everywhere
* Now all posts must have a 'parent'. That parent can be a topic which is the only top-level entity allowed. I'm not thinking too much about UI yet but when a topic is displayed, the top-level posts are shown with some indicator of references.
* What I had never even thought of was that all references are two-way. This avoids being unable to retrace your steps as you explore a topic.
* References, or links, now have types. A parent is just a special link type. So far, the only other link type is simply 'post'. But I imagine 'tweet' might be another. And 'image'. If nothing else, it'll allow sorting and filtering of references when viewing a post and it would also allow me to inject special handlers when a particular type of link is visited. Custom CSS. For instance, a different Selmer template could be used.
* Even more importantly, it gives me a point where I can enact optimizations. For example, I can pre-load certain link types. 
* I'm starting to get more comfortable with my choices here.

### Back to the Database
* I was originally going to use the standard document embedding model of MongoDB so I can handle database transactions atomically. But, since a document can reference and be referenced any number of other documents, a document would thus be able to appear many times and updating that document all over the place is nightmare-inducing.
* Plus, coding toward references rather than embedding makes it easier to swap out MongoDB for something like PostgreSQL. Time for a bit of refactoring!
* And document saving and referencing is handled.

### Meanwhile, Back at the Horror Show
* More Emacs issues. Something is kicking back an elisp error:
    (error "Invalid search bound (wrong side of point)")
    search-forward("\n" 687 t)
which is completely interruptive. It points to fringe-mode and ac-ispell. If it's ispell, that's fine; I don't need that anyway. fringe-mode is pretty helpful, though. And aesthetically pleasing. Burrowing deeper, it might have to do with how Emacs displays icons in the fringe (e.g., to display git differences).
* I tried switching to a different version of Emacs [Emacs for OS X](http://emacsformacosx.com/) but the errors continued so I'm back to the version installed through brew (emacs-mac).

### Brief Note
* Clojure is in some ways like JavaScript in that it has a few eccentricities. Unlike JavaScript, however, Clojure's eccentricities are grounded in a reasonable and logical foundation. What we really need is basically a Clojure equivalent of JavaScript: The Good Parts. For instance, new Clojurists get fouled up by conj behaving differently based on the collection or how assoc and related functions will take a PersistentArrayMap but return a PersistentHashMap which destroys any order the original map might have had. Stuff like that.


## Day 2: Saturday, February 21, 2015

### The Hardest Part About Coding...
* ...is when your tools get in the way.
* Suddenly Leiningen can't find expectations using lein-autoexpect which I use to automatically re-run all tests when source code changes. Flip over to another project with a similar project.clj and it works. Flip back to Furthermore, it doesn't work. This kind of stuff drives me crazy.
* Checked ~/.m2/repository and expectations is there. Went ahead and deleted the directory and ran `lein deps` to re-install it. No go.
* Checked the classpath and expectations is *not* there even after re-installing the dependency.
* Deleted the expectations directory again and now it's not even bothering to re-download Expectations. So I go nuclear and delete the entire .m2 directory and get lein to download everything again.
* Figured it out. User error, of course. Forgot that I had added profiles.clj which also had some :dev stuff in it. Leiningen clobbers keys when it comes to finding the same profile in multiple places so the :dev key in profiles.clj was over-writing the :dev key in project.clj (because profiles.clj takes precedence) which thus made all of my dev profile dependencies disappear. Oy vey.
* On the positive side, I've now learned about how you can combine profiles in Leiningen by using a vector rather than a map. Now I've a :private key in profiles.clj and the 'public' dev in project.clj which refers to the :private key. Okay. Now that *that's* done...

### Whoa There, Lil Fella
* Happily jumped into saving entities—posts and topics so far—only to comically screech my tires as I began to dream up different scenarios about how entities should be stored: which ones are allowed to be top-level (topics only?), can a post belong to more than one topic (e.g., Clojure *and* Furthermore or is Clojure better served as a tag...), and stuff like that. 
* The saving part is made easy by Monger, by the way. How I structure the data in Mongo? Therein lies yon challenge. I figure my first draft will fail so I might as well, as Kevin Rose put it, fail *fast* and often... fast being emphasized by me.


## Day 1: Friday, February 20, 2015

### Last Minute Productivity
* Adding a handshake between Furthermore and MongoDB was easy as I already had Mongo installed. I was using it for xyzzwhy development months ago. All I needed to do, really, was to add shell aliases to easily start and stop the server.
* Added Monger and environ dependencies and stuck the connection URI in a profiles.clj which I use to keep stuff I don't want checked in to the public repo.
* I use an atom for the db object simply so I can avoid having to bind every action to the connection. I'm not convinced this is the best way although it certainly is the most convenient. It'll do for now.

### Wasted Afternoon
* Again with the yak shaving: burned up a lot of time trying to get Wakatime to work with Emacs. I failed even with some help from the Wakatime guys. Will tackle again next week. For now, back to coding.
* Furthermore can now create posts and topics and add references to each other. Need to make a note that eventually I'm going to run into a circular reference and figure out if that's going to be a Bad Thing or not. Instinct says, 'No.'
* Realized that adding a reference to a post is the same as adding a reference to a topic so that's generalized to add-reference.
* Fussed briefly about which collection to use for references when I realized that update and delete functions will be applied at the database level. At the model level, the references will be better served by something easily sorted and reversed. Going with a list because access by index isn't important; I'll almost always be processing the list classically. If I need to pull a reference from one post to the next, I grab the post ID from the reference and chat with the DB about it.
* This is all kind of surprising to me as I've been working on a static blog generator so all this sort of referential stuff has to be handled programmatically inline, so to speak. I keep thinking, 'Oh, yeah, I guess the database can handle that.'
* Speaking of databases, might as well get MongoDB up and running next and start populating the repository namespace with useful functions...
* One last thing: I think I might be an Emacs convert. [Spacemacs](https://github.com/syl20bnr/spacemacs) is great.

### Creating Posts
* Wasted too much time looking at different CLJS tools and debating with myself whether I really needed the traditional MVC folder structure.
* Ripped a bunch of code from the Clojure subwave rebuild so getting a post created and rendered was a snap.
* Next up: creating topics and linking posts to those topics.

### First Commit
* Starting from zero lines of code.
* First steps will be to produce a post that can be committed to a database. Since there's no UI, I'll be doing initial updates by hand from text files. Luckily, I can borrow most of this code from the aborted conversion of [subwave](https://www.github.com/akivaschoen/subwave) from Node to Clojure.
* After that, I'll get into setting up Mongo and committing posts. The architecture for this is already in my head; I'll write more about it when the time comes. Here we go!
