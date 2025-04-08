# Webpage


## Description
This is description

### Responsive Design

![Responsive Design](src/assets/responsevi.PNG)

The image above showcases the responsive design of my personal website. It demonstrates how the site adapts seamlessly to different screen sizes, ensuring a consistent user experience across devices.

## Table of Contents
- [Description](#description)
    - [Responsive Design](#responsive-design)
    - [Front View](#front-view)
        - [Mobile View](#mobile-view)
        - [Desktop View](#desktop-view)
    - [Contact Feature Overview](#contact-feature-overview)
        - [Mobile View](#mobile-view-1)
        - [Desktop View](#desktop-view-1)
    - [Project Section](#project-section)
        - [Desktop View](#desktop-view-2)
        - [Mobile View](#mobile-view-2)
    - [Contact Section](#contact-section)
        - [Desktop View](#desktop-view-3)
        - [Mobile View](#mobile-view-3)
    - [Teknik Section](#teknik-section)
        - [Desktop View](#desktop-view-4)
        - [Mobile View](#mobile-view-4)
    - [Footer Section](#footer-section)
        - [Desktop View](#desktop-view-5)
        - [Mobile View](#mobile-view-5)
- [Technical Stack](#technical-stack)
    - [Install Dependencies](#install-dependencies)
- [Deployment](#deployment)
    - [Deployment to Heroku](#deployment-to-heroku)
    - [Deploying to GitHub](#deploying-to-github)
- [Improvements](#improvements)
- [Installed Libraries](#installed-libraries)
- [Problems with Deployment](#problems-with-deployment)
- [Bugs](#bugs)
- [Testing in React](#testing-in-react)
    - [CSS Jigsaw Validation](#css-jigsaw-validation)
    - [W3C Validator](#w3c-validator)
    - [JSHint Validation](#jshint-validation)
- [Lighthouse Test](#lighthouse-test)
- [Credit](#credit)


### Front View

#### Mobile View

* The image above shows the initial mobile view of the website. Users are greeted with a clean and intuitive interface, ensuring easy navigation.

#### Desktop View

* The image above shows the initial desktop view of the website. The navigation bar at the top allows users to easily access different sections of the site, including projects, contact, and more.

This section provides an overview of the initial view of the website when users first visit. The navigation bar ensures that users can easily find and access all parts of the site.

### Contact Feature Overview

#### Mobile View

* The image above shows the mobile view of the contact feature. Users can send messages by providing their name, email, and a description. All fields are required to send a message.

#### Desktop View

* The image above shows the desktop view of the contact feature. Similar to the mobile view, users must provide their name, email, and a description to send a message.


### Project Section

#### Desktop View

* The image above shows the desktop view of the project section. Here, you can find information about the project and the frameworks used, such as Django REST and React. The GitHub repository is also linked for easy access.

#### Mobile View

* The image above shows the mobile view of the project section. The layout is optimized for smaller screens, ensuring that all information is easily accessible and readable.



### Contact Section

#### Desktop View

* The image above shows the desktop view of the contact section. This part includes my contact information such as my email address, name, and location.

#### Mobile View

* The image above shows the mobile view of the contact section. The layout is optimized for smaller screens, ensuring that all contact information is easily accessible and readable.




### Teknik Section

#### Desktop View

* The image above shows the desktop view of the teknik section. This section highlights my skills and the technologies I am proficient in, such as Django REST, React, and PostgreSQL.

#### Mobile View

* The image above shows the mobile view of the teknik section. The layout is optimized for smaller screens, ensuring that all information about my skills and technologies is easily accessible and readable.


### Footer Section

The footer of my personal website includes my name and copyright information. It is built using **Django REST** and **React**.

#### Desktop View

* The image above shows the desktop view of the footer. It includes my name and copyright information, ensuring that visitors know who created the website.

#### Mobile View

* The image above shows the mobile view of the footer. The layout is optimized for smaller screens, ensuring that all information is easily accessible and readable.



## Technical Stack
- **Frontend**: React, React Router
- **Deployment**: Frontend on netlify

### Install Dependencies
#### Frontend:
```bash
cd frontend
npm install
npm start
```

## Deployment 
The frontend is deployed on **Netlify**

## Deployment to Netlify

### Preparations
1. Create an account on [Netlify](https://www.netlify.com/).
2. (Optional) Install the Netlify CLI for command-line deployment.

### Create a Netlify App
1. Log in to your Netlify account.
2. Click on **"Add new site"** > **"Import an existing project"** on the Netlify dashboard.
3. Choose **GitHub** as your Git provider and authorize Netlify to access your GitHub repositories.
4. Select the repository you want to deploy (e.g., `Webpage`).
5. Set the branch to deploy (usually `main` or `master`).
6. In the **Build settings**:
    - Set the **Build Command** to `npm run build` (or `yarn build` if using Yarn).
    - Set the **Publish Directory** to `build` (default for React apps).
7. Click **"Deploy site"**.

### Deploying to Netlify with GitHub
1. Create a GitHub Repository:
    - Go to [GitHub](https://github.com/) and log in to your account.
    - Click on the "+" icon in the top right corner and select **"New repository"**.
    - Name your repository `my-webpage-v1-react` and click **"Create repository"**.
2. Push your project to the GitHub repository:
    ```bash
    git init
    git remote add origin https://github.com/your-username/my-webpage-v1-react.git
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git push -u origin main
    ```
3. Follow the steps in **Create a Netlify App** to deploy your site.

Your site will now be live on Netlify, and any changes pushed to the selected branch will automatically trigger a redeployment.

## Improvements
- Add more information
- Add a blog section

## Installed Libraries

The following libraries are used in this project:

### Dependencies

```json
{
  "name": "webbtemplate",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "font-awesome": "^4.7.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-helmet": "^6.1.0",
    "react-router-dom": "^7.5.0",
    "react-router-hash-link": "^2.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

  ```
## Problems with Deployment

## Bugs

### Known Issues
There are currently no known issues.

### Resolved Issues
There are no resolved issues at this time.
## Testing in React 

## Testing valditations 

### CSS Jigsaw Validation
Here is a screenshot of the CSS validation test using the Jigsaw validator:



### W3C Validator

The HTML of the website has been validated using the W3C Validator, ensuring that the code adheres to web standards and best practices.



### W3C Validator
The HTML of the website has been validated using the W3C Validator, ensuring that the code adheres to web standards and best practices.


### JSHint Validation
The JavaScript code has been checked using JSHint. There were 2 warnings, but no serious issues were found.




## Lighthouse Test


Here are all the Lighthouse results in Chrome.

## Credit
I have taken help from the following resources:

- [Google Fonts](https://fonts.google.com/selection)
- [CSS Scroll Behavior](https://www.w3schools.com/cssref/pr_scroll-behavior.php)
- [Font Awesome Python Icons](https://fontawesome.com/search?q=python&o=r&ic=free)
- [Intersection Observer API with ReactJS](https://blog.sachinchaurasiya.dev/simple-guide-to-using-intersection-observer-api-with-reactjs?utm_source=chatgpt.com)
