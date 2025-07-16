# Test Project Outline – Module C – Commercial API Provider

## Competition time

4 hours

## Introduction

DineEase, a small startup based in Hungary, initially made waves in the restaurant industry with their innovative restaurant software. Now, they are expanding their horizons with a brand new service that aims to revolutionize how people discover, explore, and engage with restaurants. Introducing DineEase, the all-in-one portal and progressive web application designed to enhance the dining experience. Visitors can choose between restaurants, view the full menu of any restaurant, read reviews from previous guests about the restaurant service and food. They can also book a table at the restaurant of their choice and order and pay through the website or the app.

## General Description of Project and Tasks

In this module, you will build a server-side component that provides secure and reliable commercial APIs. These APIs will act as wrappers over the existing, less-secure existing APIs. This will allow third-party applications to access the rich data offered by DineEase, enabling integration with other platforms and services within the culinary ecosystem.

The functionality of the API will be to provide external access to restaurant data and services, which will be run as separate services. Those services expose a REST API themselves, which however should not be publicly accessible, as they do not have any level of security and reliability as the commercial API that you create. You are supposed to build code which wraps these APIs and exposes them through a single, secure API Gateway.

Your secured API's base URL should be `http://api.localhost/v1`.

## Requirements

You are asked to create a REST API that will be used commercially. The API must be built with features which allow it to be commercialized and made available publicly and openly. The functionality created by you in this module builds on top of the DineEase platform functionality.

The functionality of the API will be to provide external access to restaurant data and services, which will be run as separate services. Those services expose a REST API themselves, which however should not be publicly accessible, as they do not have any level of security and reliability as the commercial API that you create.

You are supposed to build code which wraps these APIs and exposes them through a single API Gateway. The API Gateway should handle user authentication, restaurant search, detailed restaurant views, order placements, and user reviews. Ensure the correct composition of responses from various services, as specified in the provided [OpenAPI YAML](./assets/API/expected-API.yaml).

### Setup and Initialization

- Create a REST API server using the framework you selected.
- Initialize and configure middleware for parsing JSON, handling CORS, and other relevant settings.

### Security Implementation

- Implement authentication and authorization mechanisms to secure the API endpoints.
- Authentication is managed using bearer tokens. When a request is received, the API Gateway validates the token by making a call to the authentication service's designated endpoint. Clients should include this bearer token in the Authorization header of their requests: `Bearer <token>`.
- Ensure data validation for incoming requests to prevent injections and other potential security vulnerabilities.

### Data Integration

- Create endpoints that fetch data from the existing, less-secure APIs. You can find the Open API documentation of the existing API in assets/API/provided-API.yaml file.
- Store this fetched data temporarily for serving via the commercial APIs, if necessary.

### Reliability Improvements

- Implement caching mechanisms to improve response times and reduce dependencies on the less-secure APIs.
- Implement rate limiting and other measures to prevent abuse of the commercial API.
- If one of the underlying services isn't available, the API Gateway should still provide a response using the available data. If the review or order service is offline, ensure the gateway offers a clear message to inform the user.
- Implement logging to improve the ability to trace out the errors of the applications. Logging also provides valuable insights into the functioning and failure of your API.
  - You should also log every request, not just the errors.

### Expected API Endpoints

- Develop an API Gateway that aggregates data from the unsecure services listed above. The gateway should handle user authentication, restaurant search, detailed restaurant views, order placements, and user reviews. Ensure the correct composition of responses from various services, as specified in the provided [OpenAPI YAML](./assets/API/expected-API.yaml).
- Your secured API's base URL should be `http://api.localhost/v1`

## Assessment

The project will be assessed based on the following criteria:

- **Functionality**: Does the API Gateway correctly implement all required endpoints and functionality?
- **Security**: Are authentication, authorization, and data validation properly implemented?
- **Reliability**: Are caching, rate limiting, and error handling mechanisms in place?
- **Code Quality**: Is the code well-structured, documented, and following best practices?
- **Integration**: Does the API correctly integrate with the provided unsecure services?
- **Documentation**: Are the API endpoints properly documented and easy to understand?

## Mark distribution

| WSOS SECTION | Description                            | Points |
|--------------|----------------------------------------|--------|
| 1            | Work organization and self-management  | 2      |
| 2            | Communication and interpersonal skills | 2      |
| 3            | Design Implementation                  | 4      |
| 4            | Front-End Development                  | 0      |
| 5            | Back-End Development                   | 12     |
| **Total**    |                                        | 20     |
