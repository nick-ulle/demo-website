# Creating a Website

_Author: Nick Ulle_

## Languages of the Web

In order to make a website, you need to know several different programming
languages. This might sound overwhelming, but don't worry! Most of the
languages have specific uses, so they are much simpler than general-purpose
languages like R or Python.

All of the code for a website is written in plain text, just like code you've
seen before.

The three most important languages for making websites are:

*   __Hypertext Markup Language (HTML)__:
    Use HTML to create the sections and content (that is, the _structure_) of a
    web page. HTML is usually stored in a `.html` file.

*   __Cascading Style Sheets (CSS)__:
    Use CSS to create the _style_ (colors, fonts, sizes, and so on) of a web
    page. CSS is usually stored in a `.css` file, although it can also be
    embedded in an `.html` file.

*   __JavaScript (JS)__:
    Use JavaScript to create the interactive parts of a web page.  JavaScript
    is usually stored in a `.js` file. Unlike HTML and CSS, JavaScript is a
    general-purpose programming language, so there's a lot you can do with it.
    On a web page, your JavaScript code runs in the user's web browser, so you
    can't easily save results.

You can learn more about any of these from the [Mozilla Developer
Network][mdn].

[mdn]: https://developer.mozilla.org/en-US/docs/Learn


## Publishing Your Website

Once you've created a website, the next step is to make your website available
online so that other people can visit.

A computer that's online and responds to requests from visitors is called a
_server_.

Most personal computers don't respond to requests from visitors, so they aren't
servers. It's a lot of work to set up a server, and an incorrect setup will
make the server vulnerable to attackers.

Rather than set up your computer as a server, a better option is to use a
_host_. Think of a host as a server service. You upload your website (or other
files) to the host's server, and then anyone can visit that server to see your
site.

GitHub provides free hosting, called GitHub Pages, for simple websites. They
even have [instructions to get started][gh-pages]. The basic steps are:

1.  Create a new repository for the website. Pay attention to the name of the
    repository.

2.  Commit and push your website to the repository. Make sure the front page of
    the website is named `index.html` and is at the top level of the
    repository.

3.  Go to the repository settings page on GitHub. Scroll down to the "GitHub
    Pages" section. Change the source to the master branch.

4.  Now you can visit your website at `https://USERNAME.github.io/REPOSITORY`.
    Of course, you need to replace `USERNAME` with your GitHub username and
    `REPOSITORY` with the name of the repository you created.

As an example, my GitHub username is `nick-ulle`, and this README is in a
repository called `sta160-website-demo`. You can view the demo website at
<https://nick-ulle.github.io/sta160-website-demo>.

There are other hosts that provide more features, but most of them aren't free.
Search online if you want to learn more. For students, the [GitHub Student
Developer Pack][gh-student] includes credit with a professional host (Digital
Ocean) and a free `.me` domain name (Namecheap).

[gh-pages]: https://pages.github.com/
[gh-student]: https://education.github.com/pack

## For STA 160

Web development is not the main focus of this class. __We are most interested
in the content of your project website.__ Flashy styling and interactivity will
not earn you a better grade, so don't spend a lot of time on it (if any).

The __front page__ of your project website should be a short big-picture
overview of the project. Like an elevator pitch, the front page should convince
the reader that the project is interesting. The front page should also include
the main conclusion/punchline/takeaway(s) from your project.

The front page should link to __additional pages that provide more detail__ in
the form of writing and visualization.

In general, you shouldn't need to show us or refer to the code for your project
on the web site.

Make sure to follow the writing and visualization best practices we've
discussed in class when creating your website.
