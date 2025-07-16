# How to develop and deploy the project?

1. Create a new GitHub repository using the [Node.js Express API template](https://github.com/new?template_name=mits-nodejs-express-api-v1&template_owner=marketable-it-skills).
2. Place your solution code inside the `/src` folder.
3. Pushing to GitHub triggers GitHub Actions (see `.github/`) to:
   - Build a Docker image
   - Push it to GitHub Container Registry
4. In `docker-compose.yml`, update:
   `image: ghcr.io/<your-github-account>/<your-repo-name>:latest`
5. Run locally:
   ```bash
   docker compose up -d
   ```
6. Visit: [http://api.localhost/v1](http://api.localhost/v1)

## Development Setup

### Prerequisites

- Text editor or IDE (VS Code recommended)
- Node.js (version 18 or higher)
- npm or yarn package manager
- Basic understanding of REST APIs and Express.js
- API testing tool (Postman, Thunder Client, or similar)

### Getting Started

1. Navigate to the provided project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your API server structure in the `/src` folder
4. Review the provided API documentation in `/assets/API/`
5. Use the expected API specification in `/assets/API/expected-API.yaml`
6. Reference the unsecure API documentation in `/assets/API/provided-API.yaml`

### Development Guidelines

- Use Express.js framework for the REST API server
- Implement proper middleware for JSON parsing, CORS, and authentication
- Follow RESTful API design principles
- Use proper HTTP status codes and error handling
- Implement bearer token authentication
- Add comprehensive logging for all requests and errors
- Use environment variables for configuration
- Implement rate limiting and caching mechanisms

### Testing and Validation

- Test all API endpoints using Postman or similar tools
- Verify authentication and authorization mechanisms
- Test error handling and edge cases
- Validate API responses match the expected schema
- Test caching and rate limiting functionality
- Verify proper integration with unsecure services
- Check API documentation completeness