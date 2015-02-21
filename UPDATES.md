# The Furthermore Protoblog

## Day 1: Friday, February 20, 2015

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
