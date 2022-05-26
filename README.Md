# Web Components
## Overview
This repo contains basic code snippets to create a reusable web components. For bundling, we are using Webpack. [Refer the documentation different specifications for creating web components](https://www.webcomponents.org/specs)

## How to use
```
    npm install
    npm run prod-build
```
This will generate two folders
- dist - where we get to see the compiled typescript files
- bundle - where we get a single file called bundle.js, which can be refered in any html page to use the web components

Once the bundle.js file is generated refer it any page like below 
```
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'> 
    <script src='bundle/bundle.js'></script>
    <script type="text/javascript">
        window.config = {
            name: "sample name"
        }
    </script>
</head>
<body>
    <form-renderer url="http://localhost:3001/form/627b80043c358c2f0e113d8e/"></form-renderer>
</body>
</html>
```

Here you can see that, I am able to pass a property through the tag called <form-renderer/>
Also, it is possible to access the config passed as a property to the window object

