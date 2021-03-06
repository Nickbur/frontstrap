<p align="center">
    <img src="https://nickbur.top/github/frontstrap-logo.svg" width="90px" height="auto">
</p>

<p align="center">
    Write code, don't configure.
</p>

# Frontstrap

## Introduction:  
> **Frontstrap** is a minimalistic webpack-based boilerplate to quickly start local html-coding and front-end development using [VSCode](https://code.visualstudio.com/).  

Sometimes you need to create HTML-markup for a separate block or even a whole layout for your or client's website. But right now, you don't want to mess around with a CMS or deploy a local development environment to work with.  
Frontstrap is here to help you with that!  
Actually, this tool is a **steroid version of index.html + style.css**.  
  
#### Advantages:  
- Minimal ```starter template```, like [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/)
- ```Reset stylesheet``` out of the box
- ```Auto-refresh``` of the page when editing *.html / *.scss/sass / *.js
- Always ```up-to-date``` versions of required dependencies
- The ability to use both ```scss``` and ```sass``` at the same time
- Basic useful ```userscripts```
- Prepared ```.gitignore``` to quickly initialize your repository

## Installation:  
via [npm](https://www.npmjs.com/)  
```
npm install
```  
or via [Yarn](https://classic.yarnpkg.com/)  
```
yarn
```  
> There will be only ```npm``` commands below, but you can use any other package manager you like.  
  
## Usage:  

#### Development process:  
1. Run ```npm run watch``` in terminal or by running userscript ```watch``` in editor.  

2. Create and open in editor the ```/public/*.html``` file you are going to work with (```index.html``` already exists by default).  

3. Install and run "Live reload" browser extention (for [Firefox](https://addons.mozilla.org/ru/firefox/addon/livereload-web-extension/) or [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=ru)).  

4. Install and run [Visual Studio Code Live Server](https://github.com/ritwickdey/vscode-live-server#shortcuts-to-startstop-server) by clicking "Go Live".  

5. Your page will automatically open at ```http://127.0.0.1:5500/*```.  

6. Write your ```html```, ```css/scss/sass``` and ```js``` code - changes will be immediately displayed on the page without reloading it. 
  
#### Production build:
```
npm run prod
```
  
#### If you need to reinstall all dependencies:
```
npm run upd
```
  
## Deployment:
Put the contents of the ```/public``` directory inside your webroot. That's all. You are gorgeous.  
  
## Tips and tricks:
...
  
## License:
Frontstrap is open-sourced software licensed under the [MIT license](LICENSE).
