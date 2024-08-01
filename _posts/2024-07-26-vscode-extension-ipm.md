---
layout: post
title: Visual Studio Code Extension for Intersystems
subtitle: Building an custom VSCode extension for Intersystems
author: JohnM
thumbnail-img: /assets/images/ipmextension/ipmactivitybar.png
---

In some of my previous roles in developer advocacy I have built a few extension to help developers be a little more productive. A few of them are below and there are a few extension in the marketplace under my name (if interested)

- [Citrix Developer tools for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=CitrixDeveloper.citrixdeveloper-vscode)

- [Citrix Developer Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=CitrixDeveloper.CitrixDeveloperVisualStudioExtension)

## Project links

- [Github Project](https://github.com/johnmcbride/ipm.explorer)
- [Extension Download from Marketplace](https://marketplace.visualstudio.com/items?itemName=extensionsbyjohn.ipm-explorer)

## Video showcasing the extension
{% include youtube.html id="MutZ0PhBrw8" %}

## Overview
After attending a vendor conference for some tech that I'm using in my current role I listened to a few conversations saw an interesting opportunity to build an extension to help developers (and admins) view and get packages installed on this particular tech stack.

For this particular tech stack, the community has built a domain specific package manager for distributing code/packages. This package manager is call the Intersystems Package Manager or IPM for short. You can check out articles on it [here](https://community.intersystems.com/smartsearch?search=IPM)

Currently there isn't a good way to visualize the list of community packages with a UI around it, So I figured i'd write a VSCode extension to surface a UI for listing packages and allow it to be integrated in a standard developer workflow environment.

The result is an open source project and Visual Studio code extension that integrates into the Intersystems tech stack and hopefully makes it a little easier to target the Intersystems specific tech stack.

The extension adds a few features to VSCode.

A new Activity bar that displays the configured IPM Repositories
![](/assets/images/ipmextension/ipmactivitybar.png)

Ability to list and copy commands to install the package on the Intersystems stack
![](/assets/images/ipmextension/actionbuttons.gif)

Settings for configuring multiple package repositories
![](/assets/images/ipmextension/settings.gif)


