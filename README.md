# FAQ Management API

## Installation

1. Clone the repository
2. Install dependencies: npm install
3. Configure environment variables in .env file
4. Run the server: npm start

## API Endpoints

### Create FAQ

*POST* /api/faqs

Request body:

```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine."
}
