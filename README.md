# LivePerson Messaging Knowledge Base

This repository generates LivePerson's Messaging Knowledge Base, which can be found at https://messaging.liveperson.com. The site is generated using [Jekyll](https://jekyllrb.com/). If you find an issue with the documentation, site structure, meta or anything else, please open an issue and we'll respond as soon as possible!

## Contribution Guidelines

Before contributing to this repository, please review the guidelines below. Some of them are GitHub standard process, elucidated here for your convenience, and some of them are repository specific guidelines focused on formatting.

### GitHub Process

**Step 1** - Clone the repository. The best way to do this is to use your terminal (or other command line interface) and input the command

'''git clone git@github.com:EdenKupe/knowledge-center.git'''

**Step 2** - Make your changes. Using your local text editor (like Atom, for example, or Sublime), edit the files in question and hit save.

**Step 3** - Commit your changes. Once you've made a sufficient amount of changes (sufficient being whatever you decide it is; some developers commit often, others don't), you'll need to commit them to GitHub's work tree. Use the command 'git add .' to add all your changes to the work tree (the period after "add" stands for "all") and then 'git commit -m "YOUR COMMENT HERE"' to commit them (make sure to input a concise and helpful commit message).

**Step 4** - Push your changes back to the repository. Use the command 'git push' to push all of the changes you just committed back to the origin repository, making sure that everyone has access to them and that the site gets rebuilt.

**Step 5** - You're done! The Knowledge Center uses continuous deployment, so once you've pushed your changes, it will be rebuilt by our host to incorporate them.

**Remember!** Before starting work, it is advisable to use the command 'git pull' to make sure you have the most updated version of the repository on your machine. Otherwise, you run the risk of conflicts and [no one wants those](https://media1.tenor.com/images/6953aa45b07f7b5a00af409be0931e48/tenor.gif?itemid=5048553).

### Formatting

In general, we use standard Markdown conventions. However, there are a few guidelines you need to take into account when making contributions:

* H3 is our highest title and H5 is our lowest. We don't use any other titles other than H3, H4, or H5.

* When adding new files, if you wish them to be displayed in the sidebar, you must also edit the relevant data file. [This](https://github.com/EdenKupe/knowledge-center/blob/master/_data/chapters.yaml) is the data file for new chapters and [this](https://github.com/EdenKupe/knowledge-center/blob/master/_data/sections.yaml) is the data file for all other documents. Simply add your document following the conventions found in these files and you'll be just fine.

* The permalink front-matter variable **must** match the slugified version of the document's title. So, if my title is "Welcome to Messaging", my permalink **must** be "welcome-to-messaging.html".

* We have three special notification boxes you can use: "Note", "Warning", and "Best Practice". To use them, simply wrap the relevant text in an HTML div with the appropriate class (class="note", for example). If this doesn't mean anything to you, don't worry! Just ask your friendly Product Marketer. If it does though, please feel free to use these notification boxes; they're cool!

# Licensing

All usage of the contents, documentation or code found in this repository is subject to the LivePerson's copyright except where other licensing applies (for plugins, libraries and the like).
