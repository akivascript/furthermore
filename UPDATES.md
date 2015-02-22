# The Furthermore Protoblog

## Day 3: Sunday, February, 22, 2015

### Database Victory
* Created a hash-map which contains all entities that need to be updated the next time a commit is made to the database.
* References are now two-way and everything upserts to the database perfectly.
* Technically, at this point, I could start posting to the blog although there's not much I can do with it after that.
* Next stop: enable tagging of posts and topics. It'll be a simple matter.
* After that, reading things out of the database and doing something with those references. If work continues at this decent pace, I should be able to produce HTML pages. Maybe even enough to move this bloggage to its own site.

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
* Figured it out. User error,  of course. Forgot that I had added profiles.clj which also had some :dev stuff in it. Leiningen clobbers keys when it comes to finding the same profile in multiple places so the :dev key in profiles.clj was over-writing the :dev key in project.clj (because profiles.clj takes precedence) which thus made all of my dev profile dependencies disappear. Oy vey.
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
