# get-odds-api-lambda

🚀🚀 This is a lambda function deployed to AWS that gets api data from [odds-api](https://the-odds-api.com) and store it in Amazon DynamoDB 📂📂.

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
