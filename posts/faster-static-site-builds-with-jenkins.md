---
title: Faster static site builds with Jenkins
slug: faster-static-site-builds-with-jenkins
date: '2019-05-05'
---

# Faster static site builds with Jenkins

Lately I've been working with a static site with Gatsby and using Jenkins as our CI/CD tool. Jenkins builds the site and deploys it to a S3 bucket in AWS. Builds are triggered by a webhook when any of our content gets updated in Contentful CMS. If you are free to choose your tools and are looking for an easier setup, you should consider some other tools such as Travis CI, CircleCI and Netlify.

### Our full build process

1. Install dependencies
2. Gatsby build
3. Run unit tests
4. Run end to end tests
5. Deploy the site to S3

It's great to have automated tests, but the builds can take a quite a lot of time. Builds being a bit slow are usually not a problem when you are running builds on each code change. When updating the content though, slow builds can become frustrating.

In our case it made sense to skip some of the build steps when running a build after a code change. Most likely you'll want to do only the steps that allow you to build and deploy the site. You can either create a separate Jenkins pipeline for content changes or create a build parameter to conditionally skip build steps. You'll need pass the parameter with your webhook call to Jenkins.

#### Defining a Jenkins build parameter:

```
pipeline {
    parameters {
        booleanParam (
            defaultValue: false,
            description: 'Content update',
            name : 'CONTENT_BUILD'
        )
    }
}
```

#### Skipping a build step:

```
when { expression { return !params.CONTENT_BUILD } }
steps {
    sh 'yarn e2e'
}
```

## Bonus: caching dependencies

Many CI's such as Travis CI and CircleCI handle caching node_modules out of the box without much addinitional effort. Jenkins unfortunately doesn't. There are different approaches to caching dependencies depending on wheter you are running your builds in docker etc.

You can write a shell script that generates a md5 hash based on the yarn.lock or package.lock file and uploads the node_modules to S3 with the md5 hash in the file name. Next time the script is run, it attempts to download the dependencies from S3 before installing. This approach saved us a significant amount of build time. For reference of how to do this, check out this example: https://dev.to/khsing/speed-up-jenkins-with-npm-build-3pc

### The content build process with skipped steps

1. ~~Install dependencies~~
2. Gatsby build
3. ~~Run unit tests~~
4. ~~Run end to end tests~~
5. Deploy the site to S3

I hope this will help you shave off some minutes off your build time and improve the user experience of your content editors.
