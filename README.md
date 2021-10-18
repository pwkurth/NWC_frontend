# NWC_FRONT REFACTOR

# Contents
- [Installation](#installation)
- [Organization](#organization)
- [Additional Notes](#additionalnotes)

# Installation <a id="installation"></a>
    # go into your favorite folder
    git clone https://github.com/DataAnalyticsinStudentHands/NWC_frontend.git .
    npm install
    
    # to run
    npm start

# Organization <a id="installation"></a>

## Overview
This project is based off of (Create React App)[https://create-react-app.dev/]. As such, its organization largely follows.

## src/index.js
Mounts app.

## src/custom.css
Sets theming variables.

## src/Router.js
Routes app via (React Router)[https://reactrouter.com/web/guides/quick-start].

## src/config
Stores variables like the base fetch url.

## src/components/util/util.js
Stores important, heavily reused functions, such as deserializers.

## src/components
Stores heavily reused components.

## src/pages
Stores all the different pages. The entry point for each page is src/pages/{PAGE_NAME}/{PAGE_NAME}.js

# Additional Notes <a id="additionalnotes"></a>

## css
This project largely follows the (BEM)[http://getbem.com/] convention.