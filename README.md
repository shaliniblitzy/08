# Node.js Express.js Server Tutorial

A comprehensive beginner-friendly tutorial demonstrating how to create a simple Node.js server using the Express.js framework. This tutorial covers fundamental concepts of server development, HTTP routing, and npm project management.

## 🎯 Learning Objectives

By completing this tutorial, you will learn:

- **Node.js Project Setup**: Initialize a new Node.js project with proper configuration
- **Package Management**: Use npm to manage dependencies and project scripts
- **Express.js Framework**: Integrate and configure the Express.js web framework
- **HTTP Routing**: Create multiple endpoints that handle GET requests
- **Server Development**: Understand the basics of web server architecture
- **Development Workflow**: Use modern JavaScript development tools and practices

## 📋 Prerequisites

Before starting this tutorial, ensure you have:

- **Node.js** (version 14.x or higher) installed on your system
- **npm** package manager (included with Node.js)
- Basic understanding of JavaScript
- A text editor or IDE for coding
- Terminal/command line access

To verify your Node.js installation:
```bash
node --version
npm --version
```

## 🚀 Quick Start

### 1. Installation

Install the project dependencies:

```bash
npm install
```

This command will install Express.js and other required packages as defined in `package.json`.

### 2. Running the Server

#### Option A: Standard Execution
```bash
npm start
```

#### Option B: Development Mode (with auto-restart)
```bash
npm run dev
```

The server will start on **http://localhost:3000**

### 3. Testing the Endpoints

Once the server is running, test the endpoints in your browser or with curl:

**Endpoint 1: Hello World**
- **URL**: http://localhost:3000/
- **Method**: GET
- **Response**: "Hello world"

**Endpoint 2: Good Evening**
- **URL**: http://localhost:3000/evening
- **Method**: GET
- **Response**: "Good evening"

## 📁 Project Structure

```
node-express-tutorial/
├── README.md          # This tutorial documentation
├── package.json       # Node.js project configuration
├── server.js          # Main Express.js server application
├── .gitignore         # Git ignore configuration
└── node_modules/      # Installed dependencies (created after npm install)
```

## 🔧 Configuration Details

### Package.json Configuration

The `package.json` file defines:

- **Project metadata**: Name, version, description
- **Entry point**: `server.js` as the main application file
- **Scripts**: Commands for running the server
- **Dependencies**: Express.js framework
- **Dev Dependencies**: Nodemon for development convenience

### Essential NPM Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `start` | `node server.js` | Start the server in production mode |
| `dev` | `nodemon server.js` | Start with auto-restart on file changes |

## 🌐 API Endpoints Reference

### Root Endpoint
- **Path**: `/`
- **Method**: GET
- **Description**: Returns a basic greeting message
- **Response**: `Hello world`
- **Status Code**: 200 OK
- **Usage Example**:
  ```bash
  curl http://localhost:3000/
  # Response: Hello world
  ```

### Evening Endpoint
- **Path**: `/evening`
- **Method**: GET
- **Description**: Returns an evening greeting message
- **Response**: `Good evening`
- **Status Code**: 200 OK
- **Usage Example**:
  ```bash
  curl http://localhost:3000/evening
  # Response: Good evening
  ```

## 🛠️ Development Workflow

### Step-by-Step Development Process

1. **Project Initialization**:
   ```bash
   npm init -y
   ```

2. **Install Express.js**:
   ```bash
   npm install express
   ```

3. **Install Development Tools** (optional):
   ```bash
   npm install --save-dev nodemon
   ```

4. **Create Server File**: Implement `server.js` with Express.js configuration

5. **Configure NPM Scripts**: Add start and dev scripts to `package.json`

6. **Test Implementation**: Verify both endpoints function correctly

### Development Best Practices

- **Code Comments**: All code includes educational comments explaining functionality
- **Error Handling**: Basic error handling for common server issues
- **Port Configuration**: Uses environment variable with fallback to port 3000
- **Clean Code**: Follows Node.js and Express.js conventions
- **Version Control**: Proper .gitignore configuration for Node.js projects

## 🔍 Troubleshooting

### Common Issues and Solutions

**Port Already in Use**:
```bash
Error: listen EADDRINUSE :::3000
```
- Solution: Stop other processes using port 3000 or change the port number

**Module Not Found**:
```bash
Error: Cannot find module 'express'
```
- Solution: Run `npm install` to install dependencies

**Server Won't Start**:
- Check Node.js version compatibility (minimum v14.x)
- Verify `server.js` file exists and has correct syntax
- Ensure all dependencies are installed

### Testing Your Implementation

1. **Browser Testing**: Navigate to both URLs in your web browser
2. **Command Line Testing**: Use curl commands shown above
3. **Network Tools**: Use tools like Postman for more detailed testing

## 📚 Educational Notes

### Key Concepts Demonstrated

**Node.js Runtime**: This tutorial demonstrates JavaScript execution outside the browser environment, showcasing Node.js as a server-side runtime.

**Express.js Framework**: Learn how Express.js simplifies HTTP server creation with routing, middleware, and request handling capabilities.

**HTTP Protocol**: Understand GET requests, response codes, and basic client-server communication patterns.

**Package Management**: Experience npm workflow for dependency installation, script configuration, and project structure management.

### Next Learning Steps

After completing this tutorial, consider exploring:

- **Middleware Functions**: Add logging, authentication, or CORS handling
- **Route Parameters**: Dynamic routes with URL parameters
- **Request Bodies**: Handle POST requests with JSON data
- **Template Engines**: Render HTML pages with Pug or EJS
- **Database Integration**: Connect to MongoDB or PostgreSQL
- **Error Handling**: Comprehensive error handling strategies
- **Testing**: Unit and integration testing with Jest or Mocha

## 🤝 Contributing

This tutorial is designed for educational purposes. If you find improvements or have suggestions:

1. Ensure changes maintain beginner-friendly approach
2. Include clear explanations for any new concepts
3. Test all code examples thoroughly
4. Update documentation accordingly

## 📄 License

This tutorial is provided for educational purposes. Feel free to use, modify, and distribute for learning and teaching Node.js development.

---

**Happy Learning! 🎉**

Start your Node.js development journey with this hands-on tutorial and build upon these foundational concepts to create more complex web applications.