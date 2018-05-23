
# Creating A Website

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

