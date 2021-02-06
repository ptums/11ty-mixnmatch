const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: "biqe3ly2",
    dataset: "production",
    useCdn: true // `false` if you want to ensure fresh data
})
