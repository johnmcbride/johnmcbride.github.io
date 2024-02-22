---
layout: projectdoc
css:
    /assets/css/projectsdocs.css
ext-css:
    https://fonts.googleapis.com/icon?family=Material+Icons
js:
  - /assets/js/copymarkupcode.js
title: JWT CLI Parser .NET Global Tool
description: A .NET global tool to enable you to decode and create JWTs from the command line.
show_downloads: true
nuget:
    show_nuget: true
    nuget_url: https://www.nuget.org/packages/console.jwtparser
show_nuget: true
github:
    repository_url: https://github.com/johnmcbride/console.jwtparser
    is_project_page: true
    zip_url: https://github.com/johnmcbride/console.jwtparser/archive/refs/heads/main.zip
carousels:
  - images: 
    - image: /assets/images/docs/jwkstools/s1.png
    - image: /assets/images/docs/jwkstools/s2.png
    - image: /assets/images/docs/jwkstools/s3.png
    - image: /assets/images/docs/jwkstools/s4.png
    - image: /assets/images/docs/jwkstools/s5.png
---

# JWT CLI Parser .NET Global Tool

## Overview

A .NET global tool that enable you to decode and create JWTs from the command line

I there are other web bases tools out there like [jwt.io](https://www.jwt.io/) that do a great job at helping with decoding JWTs. The general purpose of this global tool is the ability to use it on the command line.

## Installation
you can install the tool as a global tool using the following .NET Commands
```sh
dotnet tool install --global console.jwtparser
```

## Instructions
Once you have the tool installed you can run by issuing the **jwtconsole** command


### Extract Command

Parameters
- --pretty Prints out a formatted and colorized JSON string
- -p Prints out a formatted and colorized JSON string

### Examples


```sh
jwtconsole extract eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

```sh
jwtconsole extract eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c --pretty
```

```sh
jwtconsole extract eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c -p
```
### Developer Dependencies
- System.IdentityModel.Tokens.Jwt
- Spectre.Console.Cli
- Spectre.Console.Json