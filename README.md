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


## Get FAQs with Language Support
GET to /api/faqs?lang=hi for Hindi translation.
The response will look like:

[
  {
    "question": "Node.js क्या है?",
    "answer": "Node.js एक जावास्क्रिप्ट रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर आधारित है।"
  }
]
