# Organization of _Animated Algorithms_

We need to think about how best to organize the website, which contains (or will contain)
pages on the following topics.

+ Tutorials
+ Overviews of categories of algorithms (search, sort, numeric, problem reduction, ...)
+ Descriptions of individual algorithms (linear search, binary search, ...)
+ Discussions algorithmic complexity and correctness
+ Implementations of algorithms
+ Animations of algorithms

## Categories of algorithms

Some algorithms belong in more than one category.  For example, merge sort is both a sorting 
algorithm and a problem reduction algorithm.

Perhaps the organization should distinguish

+ what algorithms do (search, sort, approximate)
+ how they relate to data structures (linked lists, stacks, queues, trees, graphs)
+ what techniques they employ (problem reduction, Monte Carlo methods)
+ how they are applied (simulation, animation)

## Navigation

The header of each page currently contains a fixed set of drop-down menus (Home, Table of Contents, 
About) and a navigation bar that lets readers page through the site as they might page through a
book.  This organization lets users

+ select pages to view from the table of contents and
+ click sequentially through pages from a tutorial or about a particular category of algorithms.

Currently users cannot navigate easily from one tutorial to another or from one category of
algorithms to another.  More general navigation would be easier if the table of contents was
divided into sections that could be expanded or collapsed.  It might also help to keep such
a table of contents in view in a navigation tab on the left side of the screen.

## Order of presentation

In what order should topics be presented?  For example, should numeric algorithms come before
or after searching and sorting algorithms?

In what order should animations be presented?  For example, should algorithms related to 
searching start with something impressive or something simple?