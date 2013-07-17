var quotes;
quotes =[
	["Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to build bigger and better idiots. So far, the universe is winning.", "Rick Cook"],
	["Lisp isn't a language, it's a building material.", "Alan Kay."],
	["Walking on water and developing software from a specification are easy if both are frozen.", "Edward V Berard"],
	["They don't make bugs like Bunny anymore.", "Olav Mjelde."],
	["A programming language is low level when its programs require attention to the irrelevant.", "Alan J. Perlis."],
	["A C program is like a fast dance on a newly waxed dance floor by people carrying razors.", "Waldi Ravens."],
	["I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.", "Bjarne Stroustrup"],
	["Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "Eric S. Raymond"],
	["Don't worry if it doesn't work right. If everything did, you'd be out of a job.", "Mosher's Law of Software Engineering"],
	["I think Microsoft named .Net so it wouldn't show up in a Unix directory listing.", "Oktal"],
	["Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.", "pixadel"],
	["Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.", "Bill Clinton"],
	["The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.", "E.W. Dijkstra"],
	["In the one and only true way. The object-oriented version of 'Spaghetti code' is, of course, 'Lasagna code'. (Too many layers).", "Roberto Waltman."],
	["FORTRAN is not a flower but a weed — it is hardy, occasionally blooms, and grows in every computer.", "Alan J. Perlis."],
	["For a long time it puzzled me how something so expensive, so leading edge, could be so useless. And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things. They are, in short, a perfect match.", "Bill Bryson"],
	["In My Egotistical Opinion, most people's C programs should be indented six feet downward and covered with dirt.", "Blair P. Houghton."],
	["When someone says: 'I want a programming language in which I need only say what I wish done', give him a lollipop.", "Alan J. Perlis"],
	["The evolution of languages: FORTRAN is a non-typed language. C is a weakly typed language. Ada is a strongly typed language. C++ is a strongly hyped language.", "Ron Sercely"],
	["Good design adds value faster than it adds cost.", "Thomas C. Gale"],
	["Python's a drop-in replacement for BASIC in the sense that Optimus Prime is a drop-in replacement for a truck.", "Cory Dodt"],
	["Talk is cheap. Show me the code.", "Linus Torvalds"],
	["Perfection [in design] is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "Antoine de Saint-Exupéry"],
	["C is quirky, flawed, and an enormous success.", "Dennis M. Ritchie."],
	["In theory, theory and practice are the same. In practice, they're not.", "Yoggi Berra"],
	["You can't have great software without a great team, and most software teams behave like dysfunctional families.", "Jim McCarthy"],
	["PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.", "Jon Ribbens"],
	["Programming is like kicking yourself in the face, sooner or later your nose will bleed.", "Kyle Woodbury"],
	["Perl – The only language that looks the same before and after RSA encryption.", "Keith Bostic"],
	["It is easier to port a shell than a shell script.", "Larry Wall"],
	["I invented the term 'Object-Oriented', and I can tell you I did not have C++ in mind.", "Alan Kay"],
	["Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry", "Ted Nelson"],
	["The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", "Randall E. Stross"],
	["If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, 'We're sorry, here's a coupon for two more.' ", "Mark Minasi"],
	["Beware of bugs in the above code; I have only proved it correct, not tried it.", "Donald E. Knuth."],
	["Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success.", "Tom DeMarco"],
	["I don't care if it works on your machine! We are not shipping your machine!", "Vidiu Platon."],
	["Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", "Christopher Thompson"],
	["Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Bill Gates"],
	["Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Brian W. Kernighan."],
	["People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.", "Donald Knuth"],
	["First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.", "George Carrette"],
	["Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.", "Larry Wall"],
	["Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "Alan Kay"],
	["The trouble with programmers is that you can never tell what a programmer is doing until it's too late.", "Seymour Cray"],
	["To iterate is human, to recurse divine.", "L. Peter Deutsch"],
	["On two occasions I have been asked [by members of Parliament]: 'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.", "Charles Babbage"],
	["Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Linus Torvalds"],
	["Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding"],
	["There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.", "C.A.R. Hoare"],
	["Java is to JavaScript what Car is to Carpet. ", "Chris Heilmann"],
	["It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free. ", "Steve McConnell"],
	["If debugging is the process of removing software bugs, then programming must be the process of putting them in. ", "Edsger Dijkstra"],
	["Rules of Optimization:<br />Rule 1: Don't do it.<br />Rule 2 (for experts only): Don't do it yet. ", "Michael A. Jackson"],
	["The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. ", "Anonymous"],
	["Walking on water and developing software from a specification are easy if both are frozen. ", "Edward V Berard"],
	["Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. ", "Brian Kernighan"],
	["It's not at all important to get it right the first time. It's vitally important to get it right the last time. ", "Andrew Hunt and David Thomas"],
	["First, solve the problem. Then, write the code. ", "John Johnson"],
	["Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration. ", "Stan Kelly-Bootle"],
	["Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. ", "Rick Osborne"],
	["Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ", "Martin Fowler"],
	["Software sucks because users demand it to. ", "Nathan Myhrvold"],
	["Linux is only free if your time has no value. ", "Jamie Zawinski"],
	["Beware of bugs in the above code; I have only proved it correct, not tried it. ", "Donald Knuth"],
	["There is not now, nor has there ever been, nor will there ever be, any programming language in which it is the least bit difficult to write bad code. ", "Flon's Law"],
	["The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. ", "Tom Cargill"],
	["Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\" Improve the code and then document it to make it even clearer. ", "Steve McConnell"],
	["Programs must be written for people to read, and only incidentally for machines to execute. ", "Abelson / Sussman"],
	["Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. ", "Alan Kay"],
	["Programming can be fun, so can cryptography; however they should not be combined. ", "Kreitzberg and Shneiderman"],
	["Copy and paste is a design error. ", "David Parnas"],
	["Before software can be reusable it first has to be usable. ", "Ralph Johnson"],
	["Without requirements or design, programming is the art of adding bugs to an empty text file. ", "Louis Srygley"],
	["When someone says, \"I want a programming language in which I need only say what I want done,\" give him a lollipop. ", "Alan Perlis"],
	["Computers are good at following instructions, but not at reading your mind. ", "Donald Knuth"],
	["Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. ", "Eagleson's law"],
	["Computers are useless.  They can only give you answers.", "Pablo Picasso"],
	["Computers are like bikinis. They save people a lot of guesswork.", "Sam Ewing"],
	["They have computers, and they may have other weapons of mass destruction.", "Janet Reno"],
	["That’s what’s cool about working with computers.  They don’t argue, they remember everything, and they don’t drink all your beer.", "Paul Leary"],
	["If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.", "Robert X. Cringely"],
	["Computers are getting smarter all the time.  Scientists tell us that soon they will be able to talk to us.  And by ‘they’, I mean ‘computers’.  I doubt scientists will ever be able to talk to us.", "Dave Barry"],
	["I’ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.", "Larry DeLuca"],
	["The question of whether computers can think is like the question of whether submarines can swim.", "Edsger W. Dijkstra"],
	["It’s ridiculous to live 100 years and only be able to remember 30 million bytes.  You know, less than a compact disc.  The human condition is really becoming more obsolete every minute.", "Marvin Minsky"],
	["The city’s central computer told you?  R2D2, you know better than to trust a strange computer!", "C3PO"],
	["Never trust a computer you can’t throw out a window.", "Steve Wozniak"],
	["Hardware: The parts of a computer system that can be kicked.", "Jeff Pesis"],
	["Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "Alan Kay"],
	["I’ve finally learned what ‘upward compatible’ means.  It means we get to keep all our old mistakes.", "Dennie van Tassel"],
	["There are two major products that come out of Berkeley: LSD and UNIX.  We don’t believe this to be a coincidence.", "Jeremy S. Anderson"],
	["19 Jan 2038 at 3:14:07 AM", "End of the word according to Unix–2^32 seconds after January 1, 1970"],
	["Every operating system out there is about equal… We all suck.", "Microsoft senior vice president Brian Valentine describing the state of the art in OS security, 2003"],
	["Microsoft has a new version out, Windows XP, which according to everybody is the ‘most reliable Windows ever.‘  To me, this is like saying that asparagus is ‘the most articulate vegetable ever.‘ ", "Dave Barry"],
	["The Internet?  Is that thing still around?"   , "Homer Simpson"],
	["The Web is like a dominatrix.  Everywhere I turn, I see little buttons ordering me to Submit.", "Nytwind"],
	["Come to think of it, there are already a million monkeys on a million typewriters, and Usenet is nothing like Shakespeare.", "Blair Houghton"],
	["The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.", "Henry Petroski"],
	["True innovation often comes from the small startup who is lean enough to launch a market but lacks the heft to own it.", "Timm Martin"],
	["It has been said that the great scientific disciplines are examples of giants standing on the shoulders of other giants.  It has also been said that the software industry is an example of midgets standing on the toes of other midgets.", "Alan Cooper"],
	["It is not about bits, bytes and protocols, but profits, losses and margins.", "Lou Gerstner"],
	["We are Microsoft.  Resistance Is Futile.  You Will Be Assimilated.", "Bumper sticker"],
	["No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.", "Mark Gibbs"],
	["The bulk of all patents are crap.  Spending time reading them is stupid.  It’s up to the patent owner to do so, and to enforce them.", "Linus Torvalds"],
	["Controlling complexity is the essence of computer programming.", "Brian Kernigan"],
	["Complexity kills.  It sucks the life out of developers, it makes products difficult to plan, build and test, it introduces security challenges, and it causes end-user and administrator frustration.", "Ray Ozzie"],
	["There are two ways of constructing a software design.  One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.", "C.A.R. Hoare"],
	["The function of good software is to make the complex appear to be simple." , "Grady Booch"],
	["Just remember: you’re not a ‘dummy,’ no matter what those computer books claim.  The real dummies are the people who–though technically expert–couldn’t design hardware and software that’s usable by normal consumers if their lives depended upon it.", "Walter Mossberg"],
	["Software suppliers are trying to make their software packages more ‘user-friendly’…  Their best approach so far has been to take all the old brochures and stamp the words ‘user-friendly’ on the cover.", "Bill Gates"],
	["There’s an old story about the person who wished his computer were as easy to use as his telephone.  That wish has come true, since I no longer know how to use my telephone.", "Bjarne Stroustrup"],
	["Any fool can use a computer.  Many do.", "Ted Nelson"],
	["There are only two industries that refer to their customers as ‘users’.", "Edward Tufte"],
	["Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots.  So far the Universe is winning.", "Rich Cook"],
	["Most of you are familiar with the virtues of a programmer.  There are three, of course: laziness, impatience, and hubris.", "Larry Wall"],
	["The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.", "Seymour Cray"],
	["That’s the thing about people who think they hate computers.  What they really hate is lousy programmers.", "Larry Niven"],
	["For a long time it puzzled me how something so expensive, so leading edge, could be so useless.  And then it occurred to me that a computer is a stupid machine with the ability to do incredibly smart things, while computer programmers are smart people with the ability to do incredibly stupid things.  They are, in short, a perfect match.", "Bill Bryson"],
	["Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "Eric Raymond"],
	["A programmer is a person who passes as an exacting expert on the basis of being able to turn out, after innumerable punching, an infinite series of incomprehensive answers calculated with micrometric precisions from vague assumptions based on debatable figures taken from inconclusive documents and carried out on instruments of problematical accuracy by persons of dubious reliability and questionable mentality for the avowed purpose of annoying and confounding a hopelessly defenseless department that was unfortunate enough to ask for the information in the first place.", "IEEE Grid newsmagazine"],
	["A hacker on a roll may be able to produce–in a period of a few months–something that a small development group say, /7-8 people/ would have a hard time getting together over a year.  IBM used to report that certain programmers might be as much as 100 times as productive as other workers, or more.", "Peter Seebach"],
	["The best programmers are not marginally better than merely good ones.  They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.", "Randall E. Stross"],
	["A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer.", "Bill Gates"],
	["Don’t worry if it doesn’t work right.  If everything did, you’d be out of a job." , "Mosher’s Law of Software Engineering"],
	["Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Bill Gates"],
	["Writing code has a place in the human hierarchy worth somewhere above grave robbing and beneath managing.", "Gerald Weinberg"],
	["First learn computer science and all the theory.  Next develop a programming style.  Then forget all that and just hack.", "George Carrette"],
	["First, solve the problem. Then, write the code.", "John Johnson"],
	["Optimism is an occupational hazard of programming; feedback is the treatment.", "Kent Beck"],
	["To iterate is human, to recurse divine.", "L. Peter Deutsch"],
	["The best thing about a boolean is even if you are wrong, you are only off by a bit.", "Anonymous"],
	["Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.", "Stan Kelly-Bootle"],
	["There are only two kinds of programming languages: those people always bitch about and those nobody uses.", "Bjarne Stroustrup"],
	["PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil perpetrated by skilled but perverted professionals.", "Jon Ribbens"],
	["The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.", "E.W. Dijkstra"],
	["It is practically impossible to teach good programming style to students that have had prior exposure to BASIC.  As potential programmers, they are mentally mutilated beyond hope of regeneration.", "E. W. Dijkstra"],
	["I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.", "Oktal"],
	["There is no programming language–no matter how structured–that will prevent programmers from making bad programs.", "Larry Flon"],
	["Computer language design is just like a stroll in the park.  Jurassic Park, that is.", "Larry Wall"],
	["Fifty years of programming language research, and we end up with C++?", "Richard A. O’Keefe"],
	["Writing in C or C++ is like running a chain saw with all the safety guards removed.", "Bob Gray"],
	["In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.", "Bjarne Stroustrup"],
	["C++ : Where friends have access to your private members.", "Gavin Russell Baker"],
	["One of the main causes of the fall of the Roman Empire was that–lacking zero–they had no way to indicate successful termination of their C programs.", "Robert Firth"],
	["Java is, in many ways, C++–.", "Michael Feldman"],
	["Saying that Java is nice because it works on all OSes is like saying that anal sex is nice because it works on all genders.", "Alanna"],
	["Fine, Java MIGHT be a good example of what a programming language should be like.  But Java applications are good examples of what applications SHOULDN’T be like.", "pixadel"],
	["If Java had true garbage collection, most programs would delete themselves upon execution.", "Robert Sewell"],
	["Software is like sex: It’s better when it’s free.", "Linus Torvalds"],
	["The only people who have anything to fear from free software are those whose products are worth even less.", "David Emery"],
	["Good code is its own best documentation.", "Steve McConnell"],
	["Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.", "Eagleson’s Law"],
	["The first 90% of the code accounts for the first 90% of the development time.  The remaining 10% of the code accounts for the other 90% of the development time.", "Tom Cargill"],
	["Good programmers use their brains, but good guidelines save us having to think out every case.", "Francis Glassborow"],
	["In software, we rarely have meaningful requirements.  Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.", "Jeff Atwood"],
	["Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.", "Bill Clinton"],
	["You can’t have great software without a great team, and most software teams behave like dysfunctional families.", "Jim McCarthy"],
	["As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.", "Maurice Wilkes discovers debugging, 1949"],
	["Debugging is twice as hard as writing the code in the first place.  Therefore, if you write the code as cleverly as possible, you are–by definition–not smart enough to debug it.", "Brian Kernighan"],
	["If debugging is the process of removing bugs, then programming must be the process of putting them in.", "Edsger W. Dijkstra"],
	["I don’t care if it works on your machine!  We are not shipping your machine!", "Vidiu Platon"],
	["Programming is like sex: one mistake and you’re providing support for a lifetime.", "Michael Sinz"],
	["There are two ways to write error-free programs; only the third one works.", "Alan J. Perlis"],
	["You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time.", "Bertrand Meyer"],
	["If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, ‘We’re sorry, here’s a coupon for two more.’ ", "Mark Minasi"],
	["Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding"],
	["To err is human, but to really foul things up you need a computer.", "Paul Ehrlich"],
	["A computer lets you make more mistakes faster than any invention in human history–with the possible exceptions of handguns and tequila.", "Mitch Radcliffe"],
	["Everything that can be invented has been invented.", "Charles H. Duell, Commissioner, U.S. Office of Patents, 1899"],
	["I think there’s a world market for about 5 computers.", "Thomas J. Watson, Chairman of the Board, IBM, circa 1948"],
	["It would appear that we have reached the limits of what it is possible to achieve with computer technology, although one should be careful with such statements, as they tend to sound pretty silly in 5 years."  , "John Von Neumann, circa 1949"],
	["But what is it good for?", "Engineer at the Advanced Computing Systems Division of IBM, commenting on the microchip, 1968"],
	["There is no reason for any individual to have a computer in his home.", "Ken Olson, President, Digital Equipment Corporation, 1977"],
	["640K ought to be enough for anybody.", "Bill Gates, 1981"],
	["Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need."  , "Microsoft, on the development of Windows NT, 1992"],
	["We will never become a truly paper-less society until the Palm Pilot folks come out with WipeMe 1.0.", "Andy Pierson"],
	["Mobile didn’t create more unknowns for web designers. It just forced us to recognize the unknowns that were already there.", "Jeremy Keith"],
	["If it keeps up, man will atrophy all his limbs but the push-button finger.", "Frank Lloyd Wright"],
	["Making responsiveness only about grids, responsive images and media queries is a disservice to customers and brands. It needs to be about providing readable content for any device, and that means starting with type.", "typecast.com"],
	["Responsive web design isn’t your site working on phones and tablets. It’s about your site working everywhere.", "Scott Kellum"],
	["If you can't explain it simply, you don't understand it well enough.", "Einstein"],
	["You haven’t fixed it if you can’t explain it.", "Sam Stephenson"],
	["We’re not designing pages, we’re designing systems of components.", "Stephen Hay"],
	["We designed from the content out, meaning that the content shaped the layout and grid, as opposed to having the layout define the content.", "Matt Gibson"],
	["80-90% of the end-user response time is spent downloading all the components in the page: images, stylesheets, scripts, Flash, etc.", "Yahoo"],
	["When you are finished changing, you’re finished.", "Benjamin Franklin"],
	["Web developers are masters at taking something created for one purpose and using it to accomplish other things.", "Tyson Matanich"],
	["There are no tiny features when you’re doing things properly.", "insideintercom.io"],
	["To find the reason causing the bug is more valuable then fixing the bug itself. Isn't it?", "Krasimir Tsonev"],
	["Knowing \"HTML5\" is the equivalent of yesteryear's \"Web 2.0\"", "David Walsh"]
];