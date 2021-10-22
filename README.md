<p align="center">
 <img src="./banner.png"/>
</p>

# Introduction
A template for [Wails beta.13](https://wails.io) with Angular 12. (TypeScript + SASS + Hot Reload)

Current Versions:
 - Angular 12.2.0
 - Wails beta.13 or newer

# Getting Started
## Prerequisites
 - Node 14+ with npm
 - Wails CLI beta.13 or newer | (https://wails.io/docs/gettingstarted/installation)
 - Angular CLI | Install with `npm i -g @angular/cli`

## Creating the Projekt
Create a new Application with the Wails CLI and this template:
```
wails init -n projektname -t https://github.com/TAINCER/wails-angular-template
```

## Running the Application in Developer Mode
The easiest way is to use the Wails CLI: `wails dev`

This should hot refresh when making changes the Frontend and rebuild when making changes in the Go.

## Building the Application for Production
When building for Production, there are some parts to notice:
 - Angular is going to use the `frontend/src/environments/environment.prod.ts` when building the frontend.
 - You should properly change the Icons for your Application in `build/` and `build/windows` (when building for Windows)
 - The Developer Console will not work.

Finally, you can build you Application with: `wails build`

# Adding Angular Material
In order to add Angular Material you can use the build in Angular CLI command:
```
cd frontend
ng add @angular/material
```
This will prompt you what theme you want to use, etc.
