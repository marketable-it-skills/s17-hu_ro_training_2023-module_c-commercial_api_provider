DineEase, a small startup based in Hungary, initially made waves in the restaurant industry with their innovative restaurant software. Now, they are expanding their horizons with a brand new service that aims to revolutionize how people discover, explore, and engage with restaurants. Introducing DineEase, the all-in-one portal and progressive web application designed to enhance the dining experience. Visitors can choose between restaurants, view the full menu of any restaurant, read reviews from previous guests about the restaurant service and food. They can also book a table at the restaurant of their choice and order and pay through the website or the app.

# Module C - Commercial API Provider

In this module, you will build a server-side component that provides secure and reliable commercial APIs. These APIs will act as wrappers over the existing, less-secure existing APIs. This will allow third-party applications to access the rich data offered by DineEase, enabling integration with other platforms and services within the culinary ecosystem.

## Task List:

### 1. Setup and Initialization

- Create a REST API server using the framework you selected.
- Initialize and configure middleware for parsing JSON, handling CORS, and other relevant settings.

### 2. Security Implementation

- Implement authentication and authorization mechanisms to secure the API endpoints.
- Authentication is managed using bearer tokens. When a request is received, the API Gateway validates the token by making a call to the authentication service's designated endpoint. Clients should include this bearer token in the Authorization header of their requests: `Bearer <token>`.
- Ensure data validation for incoming requests to prevent injections and other potential security vulnerabilities.

### 3. Data Integration

- Create endpoints that fetch data from the existing, less-secure APIs. You can find the Open API documentation of the existing API in assets/module-C/API/unsecure-API.yaml file.
- Store this fetched data temporarily for serving via the commercial APIs, if necessary.

### 4. Unsecure API Endpoints

- You can find an Open API documentation under the [assets/module-C/API/provided-API.yaml](./assets/module-C/API/provided-API.yaml) file.

### 5. Reliability Improvements

- Implement caching mechanisms to improve response times and reduce dependencies on the less-secure APIs.
- Implement rate limiting and other measures to prevent abuse of the commercial API.
- If one of the underlying services isn't available, the API Gateway should still provide a response using the available data. If the review or order service is offline, ensure the gateway offers a clear message to inform the user.
- Implement logging to improve the ability to trace out the errors of the applications. Loggin also provides valuable insights into the functioning and failure of your API.
  - You should also log every request, not just the errors.

### 6. Expected API Endpoints

- Develop an API Gateway that aggregates data from the unsecure services listed above. The gateway should handle user authentication, restaurant search, detailed restaurant views, order placements, and user reviews. Ensure the correct composition of responses from various services, as specified in the provided [OpenAPI YAML](./assets/module-C/API/expected-API.yaml).
- Your secured API's base URL should be `http://api.localhost/v1`
