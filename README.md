# [ZingChart](https://www.zingchart.com/)

Our JavaScript charting library is a commercial product. But the full branded version is free to try, forever.

![npm](https://img.shields.io/npm/v/zingchart)
![](https://img.shields.io/npm/dw/zingchart)

![](https://img.shields.io/david/zingchart/zingchart)
![](https://img.shields.io/david/peer/zingchart/zingchart)
![](https://img.shields.io/david/dev/zingchart/zingchart)

![](https://d2ddoduugvun08.cloudfront.net/items/0h0Z183K27213h0H0x1n/Screen%20Recording%202020-03-05%20at%2001.45%20PM.gif)

## Install


### *CDN*

We publish our live, dev and ALL previous builds on our CDN. This is the quickest way to get started.

##### Live Version

Live Version and Modules (https://cdn.zingchart.com/zingchart.min.js | https://cdn.zingchart.com/modules/)

```
https://cdn.zingchart.com/zingchart.min.js
https://cdn.zingchart.com/modules/
```

##### ES6 Version

ES6 Version and Modules (https://cdn.zingchart.com/zingchart-es6.min.js | https://cdn.zingchart.com/modules-es6/)

```
https://cdn.zingchart.com/zingchart-es6.min.js
https://cdn.zingchart.com/modules-es6/
```
##### Previous Version

Previous Version v2.8.8 (https://cdn.zingchart.com/2.8.8)

```
https://cdn.zingchart.com/2.8.8/zingchart.min.js
https://cdn.zingchart.com/2.8.8/modules/
```

##### Dev/Canary Version

Dev/Canary Version (https://cdn.zingchart.com/dev/zingchart.min.js | https://cdn.zingchart.com/dev/modules/)

```
https://cdn.zingchart.com/dev/zingchart.min.js
https://cdn.zingchart.com/dev/modules/
```

### Package Managers

We have a variety of package managers to download our library, as well as integrations


#### *npm*

```
npm install zingchart
```

#### nuget

If you are looking for the ZingChart package and are a .NET user go to [nuget package here](https://www.nuget.org/packages/ZingChart/).

```
Install-Package ZingChart -Version 2.5.0
```

#### Integrations

Installing our integration packages will also install the library for you. ZingChart is wrapped in a variety of ways for easy consumption with popular JS libraries and frameworks. Official releases are shown here.  If you have a third party integration please contact us for inclusion.

##### Angular

```
npm install zingchart-angular
```

##### React

```
npm install zingchart-react
```

##### Vue

```
npm install zingchart-react
```

##### Web Component

``` 
npm install zingchart-web-component
```

##### AngularJS

```
npm install zingchart-angularjs
```

List of integrations:
* [Angular](https://github.com/zingchart/zingchart-angular)
* [React](https://github.com/zingchart/zingchart-react)
* [Vue](https://github.com/zingchart/zingchart-vue)
* [WebComponent](https://github.com/zingchart/zingchart-web-component)
* [JQuery](https://github.com/zingchart/ZingChart-jQuery)
* [PHP](https://github.com/zingchart/ZingChart-PHP)
* [AngularJS](https://github.com/zingchart/ZingChart-AngularJS)
* [Ember](https://github.com/zingchart/ember-zingchart)
* [Backbone](https://github.com/zingchart/backbone-zingchart)

## Quick Start es5 
Include a reference to the zingchart library

```html
<!DOCTYPE html>
<html>
<head>
  <!--Script Reference [1] -->
  <script src="/zingchart/zingchart.min.js"></script>

</head>
<body>
  <!--Chart Component [2] -->
  <div id="myChart"></div>

  <script>
    let chartData = {
      type: 'pareto',
      series: [
        {
          values: [
            4642,
            4345,
            2350,
            1251
          ]
        }
      ]
    };

    // Render Method[3]
    zingchart.render({ 
      id: 'myChart',
      data: chartData,
      height: 400,
      width: '100%'
    });
  </script>
</body>
</html>
```

## Quick Start es6 Imports
A general best practice to use ZingChart in any of your frameworks is used in the following:

`import {zingchart, ZC} from 'zingchart/es6';`

And if you have and modules you want to include you do the following

`import {pareto} from 'zingchart/modules-es6/zingchart-pareto.min.js';`


## Quick Start es6 w/Script Modules

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Import Library [1] -->
  <script type="module">
    import {zingchart, ZC} from './zingchart/es6.js';
    import './zingchart/modules-es6/zingchart-pareto.min.js';
  </script>
  <!-- fallback for no module support -->
  <script nomodule src="/zingchart/zingchart.min.js"></script>
</head>
<body>
  <!-- Chart Component [2] -->
  <div id="myChart"></div>

  <script>
    let chartConfig = {
      type: 'pareto',
      series: [
        {
          values: [
            4642,
            4345,
            2350,
            1251
          ]
        }
      ]
    };

    // Render Method[3]
    zingchart.render({ 
      id: 'myChart',
      data: chartConfig,
      height: 400,
      width: '100%'
    });
  </script>
</body>
</html>
```

## Resources: 
* [Getting Started Guide](https://www.zingchart.com/docs/getting-started/your-first-javascript-chart)
* [Docs](http://www.zingchart.com/docs) 
* [JSON Docs](https://www.zingchart.com/docs/api/json-configuration)
* [API Events](https://www.zingchart.com/docs/events/all-events)
* [API Methods](https://www.zingchart.com/docs/methods/all-methods)
* [Gallery](https://www.zingchart.com/gallery/) 
* [Download](https://www.zingchart.com/download/)
* [Support](https://www.zingchart.com/support)
* [Stack Overflow](https://stackoverflow.com/search?q=zingchart)
* [Studio](https://app.zingsoft.com)


<!-- ## Browserify
This package supports the CommonJS module format to be used with bundlers such as [Browserify](http://browserify.org/) when being used with NPM.

Usage : `var zingchart = require('zingchart');`



## Package Directory
The package includes the following:
```
|   README.md
├── client
│   ├── zingchart.min.js
│   ├── modules
├── custom
│   ├── build.js
|   ...
``` -->


## Support
If you need any assistance or would like to report any bugs found in ZingChart, please contact us at support@zingchart.com or through our chat client on our website www.zingchart.com
