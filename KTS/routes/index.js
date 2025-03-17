const path = require("path")
const router = require("express").Router()
const apiRoutes = require("./api")

router.use("/api", apiRoutes)

// Redirecting incomplete routes...
router.get("/", (req, res) => {
  res.redirect("/api/manifest")
})
router.get("/api", (req, res) => {
  res.redirect("/api/manifest")
})

// Error message for unknown api requests...
router.use(function(req, res) {
  console.log('🤔...unknown api request')
  const manifestUrl = `${req.protocol}://${req.get('host')}/api/manifest`;
  res.json({
    message: '🤔...unknown api request',
    try_manifest: manifestUrl
  })
})

module.exports = router
