# The Waterfall Model does not exist (at least not in the way you might think)

Developing software is hard and often chaotic. By using a software development process, there is potential to reduce risks, costs, and enable us to deliver better software. I would like to share the often-cited 1970 article by Winston W. Royce on an early model for software development, namely the humble [Waterfall Model](http://www-scf.usc.edu/~csci201/lectures/Lecture11/royce1970.pdf). While many people seem to think to have a good grasp of what it is, and why it is absolutely terrible, the model seems often to be fundamentally misunderstood.

<h2>A Grandiose Approach</h2>

Searching for the origins of the structured approach to software development typically brings us back to an 1970 article named "Managing the Development of Large Software Systems", in which Winston W. Royce presents what came to be known as the Waterfall Model (although the term "Waterfall" is never used in the article). The model contains a series of discrete steps carried out in succession to build the software: System Requirements, Software Requirements, Analysis, Program Design, Coding, Testing, and Operations. The output of each step is used in the next, and at the end, software is delivered and installed.

The Waterfall Model is often seen as dangerous as it seems to assume that it is perfectly realistic to finish each step completely, never return to it, and at the end of the process, deliver a fully working, feature-complete, and bug free software, ready to use. Anyone with experience within software development knows that this is next to impossible for any non-trivial software (_no citation needed_), meaning software will often be delivered late and not live up to the customer's expectations.

The legacy of Royce lives on to this day as proponents of more recent methods, such as Scrum, argue that software development teams need to switch from the inferior old style of software development to newer methods that are better at managing changing requirements, promoting communication with the customer, delivering software early, and more.

If there is something we have all learned, it's that if you want to develop good software, you need to stay away from the waterfall model, as its Big Design Up Front approach is highly risky, something that was not recognized in the 70s when Royce published his paper.

<h2>It's only Rocket Science</h2>

At least, that would appear to be the case if you didn't bother to read past the first page in Royce's article. If you did, you would realize that Royce himself states that:

> I believe in this concept, but the implementation described above is risky and invites failure.

The article then continues to how the process should be adjusted, and the final model paints a much more complex picture that allows jumping between phases. Royce also recommends adding several features in order to reduce risk, such as "Do it twice" by adding an additional prototyping phase, and "Involve the customer" because, as he states:

> To give the contractor free rein between requirement definition and operation is inviting trouble.

The suggested approach still remains fairly rigid and documentation heavy, but for the type of systems Royce had experience in, those were not necessarily bad things. Royce had spent the preceding nine years developing mostly "_software packages for spacecraft mission planning, commanding and post-flight analysis_". With a PhD in aeronautical engineering, Royce was literally a rocket scientist, and might explain why some aspects of the model may not suit all software projects. In aeronautics, quick fixes post-launch may not have been possible nor desirable.

<h2>An Inconclusive Conclusion</h2>

Now, this is not supposed to mean that the Waterfall Model is actually "good", or that is better than a more modern approach to software development. The industry has come a long way since the 1970s and doing planning, implementation, and deployment in anything but short phases is risky and difficult, if not impossible, in many projects. Even the final model suggested by Royce is sure to prove too inflexible for many projects.

But there are a few takeaways:

* It is often stated that one of the main weaknesses of the Waterfall Model is that it does not allow for going back to a previous step in the development, but the model proposed by Royce actually doesn't forbid that but rather sees such a rigid approach as risky.

* Providing citations is meaningless unless you actually read the source. [Many](https://medium.com/@dsvgroup/what-is-software-development-life-cycle-waterfall-model-58b15eb986bf) [articles](https://www.toolsqa.com/software-testing/waterfall-model/) [refer](https://www.guru99.com/what-is-sdlc-or-waterfall-model.html) to the Royce 1970 paper but often it appears that the author didn't bother to read it - but the reader may assume that they did. 
 
* It appears that the famous Waterfall Model in its commonly understood form does not exist in academic literature. We should not accept statements about this model, or any other model - or tool, for that matter - at face value.

In conclusion, if someone is criticizing you for using a waterfall approach to solve a problem, you may now shamelessly attack them for not knowing an article from 1970 in full detail. Thanks for reading.

https://dl.acm.org/doi/pdf/10.5555/41765.41798
