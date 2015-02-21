# The Furthermore Protoblog

## Day 2: Saturday, February 21, 2015

### The Hardest Part About Coding...
* ...is when your tools get in the way.
* Suddenly Leiningen can't find Expectations using lein-autoexpect which I use to automatically re-run all tests when source code changes. Flip over to another project with a similar project.clj and it works. Flip back to Furthermore, it doesn't work. This kind of stuff drives me crazy.
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
