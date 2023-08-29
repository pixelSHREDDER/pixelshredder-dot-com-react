# Mikeintosh

My personal website, built in React + NextJS + TypeScript + MongoDB

###### <center>Desktop</center>

![Lighthouse Desktop](lighthouse_results/desktop/pagespeed.svg)

###### <center>Mobile</center>
![Lighthouse Mobile](lighthouse_results/mobile/pagespeed.svg)

## Table of Contents

- [Stack](#stack)
- [Description](#usage)

## Stack

- React.js
- Next.js
- TypeScript
- MongoDB
- Mongoose / Typegoose

## Description

This site was built on a React.js / Next.js stack, using the magic of server-side rendering! Fonts used include [Sysfont by Alina Sava](https://fontsarena.com/sysfont-by-alina-sava/).

The CRT effect is done in pure CSS, based on the awesome work seen [here](http://aleclownes.com/2017/02/01/crt-display.html) and [here](https://codepen.io/lbebber/pen/XJRdrV).

The projects section implements the full MERN stack. Or would it be MRNN in this case....? Either way, we've got a MongoDB database wired up via Next.js's internal API routing feature, with dynamic app routing for the frontend that takes advantage of Next's SSG features for minimal load times.