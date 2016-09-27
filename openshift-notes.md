## OpenShift 3.x

OpenShift 3.x is not currently available to the public other
than a time constrained developer preview. There is, however,
an internal developer [site](https://console.dev-preview-stg.openshift.com/)
that can be used.

### Pros

### Cons

* You have to have a github URL to get started
* Steps to get application going are long, complicated, a little confusing
* Create image, instructions describe what to do, but CLI says otherwise
* Custom URL possible but not clear how to configure - DNS super confusing
  * Dig around, find routes. Update YAML?
  * I'm sure my service doesn't have to listen on 8080, but that was the default
  and it's not clear how to change that after the service has been created.
* Only one project allowed



#### Transcript

```shell
~/s/status-reports git:master ❯❯❯ oc new-project todoist-status-reports                 ⏎ ✱ ◼
Now using project "todoist-status-reports" on server "https://api.dev-preview-stg.openshift.com:443".

You can add applications to this project with the 'new-app' command. For example, try:

    $ oc new-app centos/ruby-22-centos7~https://github.com/openshift/ruby-hello-world.git

to build a new hello-world application in Ruby.
~/s/status-reports git:master ❯❯❯                                                         ✱ ◼
```

## Four ways to create OSE3 applications

1. Source code
  * User provides a github URL for a Node.js application with an npm 'start' script.
  * OpenShift examines the application, figures out what you need,
    and builds your application with appropriate docker images.
  * This makes me uncomfortable, you place a lot of trust in OSE3 to get it right.
2. OpenShift templates
  * You specify everything in a 400 line JSON file.
  * Gives user total control.
DockerHub images