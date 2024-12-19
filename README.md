
# README

This app is a simple photo gallery that takes a file with a list of images, parses it and serves it with an API endpoint.

The back-end uses Ruby on Rails. The front-end is built in React (uses gem react-rails).

### Requirements

* Ruby version: 2.5.1

* Database: this app does not require a database. The only data source is a file that contains a list of URLs.

### Local development
To install rails and required gems, run the following in the terminal:

```
$ bundle install
```

To start the server:

```
$ rails server
```

### Demo
https://user-images.githubusercontent.com/1317431/206602538-ce6e02e1-1cfc-48e2-bf0c-593b48c0a550.mov

### Key files

API:

>app/controllers/api/v1/images_controller.rb

React component:

>app/javascript/components/Gallery.js

Source file for  images:

>public/images.csv
