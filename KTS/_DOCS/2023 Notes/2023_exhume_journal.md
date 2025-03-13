## Developing the Static version of KTS

- The first thing to note when developing on the static version of KTS is that you need to be inside the `client` directory. So from the root level of the repo, you'll need to..
  - $ `cd webapp/client`
- Then run `npm run static`
  - NOTE: `npm start` is preserved for full stack development. And can still run from here. But will have issues developing for a static deploy.
- That will execute:  `PORT=3005 REACT_APP_STATIC_BUILD=TRUE PUBLIC_URL=/ react-scripts start`
  - `Port=3005`: Just using a different port to not conflict with maybe open 3003 full stack dev env.
  - `REACT_APP_STATIC_BUIL=TRUE`: THIS is the bread and butter! This status is used to point the front end to a static env
  - `PUBLIC_URL=/`: This just makes it so our hosting endpoints don't show up in the url. 



## Deploying static app to Github's gh-pages

If you've done a build before from you local machine, and all the installs are set, just run the following command and visit the url and it should be updated!

- `npm run deploy` 
- ... 🟡 Add url here. 
- ... 🟡 Note Actions...

Here's how to set it up and a little more insight into what's happening...

- `cd webapp/cleint` 

- If this is your first time deploying locally to ghithub, you'll need to Install gh-pages: 

  - `npm install gh-pages --save-dev` 

- Now, you can simply deploy the build with...

  -  `npm run deploy`

    ... 🟡 Always hangs first time....

- ... 🟡 Now, go to 

- ...🟡 This builds to url

- ...🟡 This 





----- Review / update / move back to `_DOCS`? 👇

----

# A Journal of re-deploying Kiss The Sky webapp

## Creating a Client side only webapp app version of Kiss The Sky

- ⚠️Important NOTE: this should be cleaned up and added to the kts repo
- And, info from here added to PR.

I think It'd be nice to have a fall-back client side version of the app to share that dosn't require the full backend, which we may want to turn off again the future. But, would want to have the game in place hosted for free, at least. 
- first, sI created `client-only-webapp` branch for last `master` locally
- my goal is to build a client-side only version of the webapp to be hosted with this repos gh-pages.
- I'm following this guide: https://github.com/gitname/react-gh-pages


~ Raw Notes (clean, move above, and remove this section)
- ✅`cd webapp`
- ✅`npm install gh-pages --save-dev`
- 🟡 Update the package.json to include the target url
  ```
  🟡 {
    "name": "kiss_the_sky",
    "version": "1.0.0",
  + "homepage": "https://matthewmain.github.io/kiss_the_sky/gh-pages",
  ```
- 🟡 ...