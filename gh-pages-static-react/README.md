# Using github's gh-pages to host a static react webapp
This example was created by following this example...
- https://github.com/gitname/react-gh-pages

## Additional Setup notes, and journal.  
Note: these notes are more closely related to what I did and some steps from the resource above will be off. So, this guide is better to follow if you trying the do the same thing here. 
- Specifically hosting the static react app in a subfolder. 

Here are my versions vs. the guides...
- $`node --version` > v14.16.1 ...guide was v16.13.2
- $`npm --version` > 8.6.0 ...guide was 8.1.2
- $`git --version` > 2.37.1 (Apple Git-137.1 ) ...git version 2.29.1.windows.1

This example will live in the sub folder `gh-pages-static-react`
- So I created that and `cd` into it, then
- $`npx create-react-app my-app` ! 
- 👀 Decided to do the default app reather than the typscript template as the guide did.

Setup
- $`cd my-app`
- $`npm install gh-pages --save-dev`
- Open `package.json`
- Add a homepage property in this format `https://{username}.github.io/{repo-name}/{subfolder-name}`
  ```diff
  {
    "name": "my-app",
    "version": "0.1.0",
  + "homepage": "https://robbobfrh84.github.io/react-stacks/gh-pages-static-react",
    "private": true,
  ```
- Add `predeploy` and `deploy` scripts...
  ```diff
    "scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
  ```
- Check that the app works. $`npm start` Maybe change somethin code

Deploy the app to github....
- $`npm run deploy`
- 👀This by default added the gh-pages. 

#### REMEMBER
- Pushing changes to `main` branch won't redeploy you must also run...
- $`npm run deploy` to see live changes...
