# A Journal of re-deploying Kiss The Sky webapp

## Creating a Client side only webapp app version of Kiss The Sky
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