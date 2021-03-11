<p align="center">
    <img src="https://nickbur.top/github/frontstrap-logo.svg" width="90px" height="auto">
</p>

<p align="center">
    Write code, don't configure.
</p>

# Frontstrap

## Introduction:

> **Frontstrap** is a minimalistic webpack-based boilerplate to quickly start local html-coding and front-end development using [VSCode](https://code.visualstudio.com/).

#### Advantages:  

- Auto-refresh of the page when editing ```html```
- Auto-refresh of the page when editing ```scss/sass```
- The ability, if desired, to use both ```scss``` and ```sass``` at the same time
- Basic ```npm-scripts```
- Always ```up-to-date``` versions of required dependencies
- ```Reset stylesheet``` out of the box
- Minimal ```html-template```
- Prepared ```.gitignore``` to quickly initialize your repository

## Installation:  
```
npm install
```
  
## Usage:  

#### Development process:  
1. Run
```
npm run watch
```  
on terminal or by running npm-script in editor.  

2. Open in editor the ```*.html``` file you are going to work with.  

3. Next run [Visual Studio Code Live Server](https://github.com/ritwickdey/vscode-live-server).  

4. Your page will automatically open at ```http://127.0.0.1:5500/*```.  
  
#### Production build:
```
npm run prod
```
  
#### If you need to reinstall all dependencies :  
```
npm run upd
```

## License

Frontstrap is open-sourced software licensed under the [MIT license](LICENSE).
