# get-odds-api-lambda

🚀🚀 This is a lambda function deployed to AWS that gets api data from [odds-api](https://the-odds-api.com) and stores it in Amazon DynamoDB 📂📂.

## Overview

This lambda function when stored in AWS gets invoked at certain times of the day that will update Amazon DynamoDB with latest bet data. This is an essential service for [BeatingBookies](https://beatingbookies.netlify.app), so that user can get the latest bet data.

Function invocation has been limited to three times a day to not exceed the [odds-api](https://the-odds-api.com) monthly limit of 500 in the free tier. 

### Usage

1. Clone repository

    ```
    git clone https://github.com/nipeshkc7/get-odds-api-lambda
    ```

2. Install dependencies

    ```
    npm install
    ```

3. Run index.js

    ```
    node index.js
    ```

### Let's Connect

 [![Twitter Follow](https://img.shields.io/twitter/follow/nipeshkc7.svg?style=for-the-badge&logo=twitter)](https://twitter.com/Nipeshkc7)
  [![GitHub followers](https://img.shields.io/github/followers/nipeshkc7.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/nipeshkc7/) 
 [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@ArpanKC&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/arpan-kc7/)

