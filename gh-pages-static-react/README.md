# Using github's gh-pages to host a static react webapp
This example was created by following this example...
- https://github.com/gitname/react-gh-pages

## Additional Setup notes, and journal.  
This isn't a complete guide, just notes and differences from the guide linked above ☝️.

Here are my versions vs. the guides...
- $`node --version` > v14.16.1 ...guide was v16.13.2
- $`npm --version` > 8.6.0 ...guide was 8.1.2
- $`git --version` > 2.37.1 (Apple Git-137.1 ) ...git version 2.29.1.windows.1

I decided to create a new repo and git `clone` to get started.
- This guide dosn't do that. So note that and...
- ❗️Skip **"6. Add a "remote" that points to the GitHub repository"** if choosing the same. 

This example will live in the sub folder `gh-pages-static-react`
- So I created that and `cd` into it, then
- $`npx create-react-app my-app` ! 
- Decided to do the default app reather than all the typscript fuss because KTS is default.

