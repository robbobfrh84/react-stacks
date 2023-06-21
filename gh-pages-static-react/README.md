# Using github's gh-pages to host a static react webapp
Overview
- **Setup Journal:** step-by-step guide for deploying to gh-pages.
- **Testing build folder locally:** how to test static `build` specific deployments. 
  - You may want to have a static version and a dyanmic version of your webapp. This allows you test write code that makes those two versions behave differently, while sharing the same code base. 
- **🌟 Important Notes**: 
  - The app being hosted can live in whatever folder/sub-folder you prefer. 
  - It's the `npm run deploy` (`"deploy":...`) command AND the `"homepage": "<url>"` value, both within the package.json that tells Github what `repo/sub-page` to deploy. 
    - So, YES, you can host multiple react apps, by targeting a different `/sub-page`.

  - 🌟 This example matches `sub-page` with `sub-folder`, but notice it's even nested in `my-app`!

 - **Also:** I only nested `my-app` in this folder to preserve original `README.md` within app folder.

<br/>

----
# Setup journal.  
This example was created from the following this "guide": https://github.com/gitname/react-gh-pages

- **Note:** the following notes may differ from the guide linked above, as I wanted to include subfolders. 

Here are my versions vs. the "guide"'s...
- $`node --version` > v14.16.1 ...guide was v16.13.2
- $`npm --version` > 8.6.0 ...guide was 8.1.2
- $`git --version` > 2.37.1 (Apple Git-137.1 ) ...git version 2.29.1.windows.1

This example will live in the sub folder `gh-pages-static-react`
- So I created that and `cd` into it, then
- $`npx create-react-app my-app` ! 
- 👀 Decided to do the default app rather than the typescript template as the guide did. Just wanted to keep it as simple as possible as a fallback example.

Setup
- $`cd my-app`
- $`npm install gh-pages --save-dev`
- Open `package.json`
- Add a homepage property in this format `https://{username}.github.io/{repo-name}/`
- Or, for **sub-page** format `https://{username}.github.io/{repo-name}/{sub-page-name}/`
  - NOTE: This isn't connected to the actual folder you host the build code. Because the `npm run deploy` command builds it in a different branch.
  ```diff
  {
    "name": "my-app",
    "version": "0.1.0",
  + "homepage": "https://robbobfrh84.github.io/react-stacks",
    "private": true,
  ```
- Add `predeploy` and `deploy` scripts...
  
  - For subfolder, deploy example: `"deploy": "gh-pages -d build -e "`
  
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

<br/>

----
# Testing build folder locally

- Copy `"homepage": "https://robbobfrh84.github.io/react-stacks/",` from package.json
- Save it somewhere reliable. 
  - You CAN note it out, but it's just annoying. 
  - looks like this `"//": [ "homepage", "https://robbobfrh84.github.io/react-stacks/" ],`
- REMOVE `"homepage": "https://robbobfrh84.github.io/react-stacks/",`
- `npm install -g serve` 
- `serve -s build`

