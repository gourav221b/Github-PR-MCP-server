# GitHub PR MCP Server

[![smithery badge](https://smithery.ai/badge/@gourav221b/Github-PR-MCP-server)](https://smithery.ai/server/@gourav221b/Github-PR-MCP-server)

<a href="https://glama.ai/mcp/servers/@gourav221b/Github-PR-MCP-server">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@gourav221b/Github-PR-MCP-server/badge" alt="GitHub PR Server MCP server" />
</a>

An MCP (Model-Controller-Presenter) server built with TypeScript for analyzing GitHub Pull Requests.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
### Installing via Smithery

To install GitHub PR MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@gourav221b/Github-PR-MCP-server):

```bash
npx -y @smithery/cli install @gourav221b/Github-PR-MCP-server --client claude
```

### Manual Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/gourav221b/Github-PR-MCP-server.git
   ```


2. **Navigate to the project directory:**

   ```bash
   cd Github-PR-MCP-server
   ```


3. **Install dependencies:**

   ```bash
   npm install
   ```


4. **Build the project:**

   ```bash
   npm run build
   ```


5. **Add the path to MCP Client Config:**

   ```bash
   command: node
   args: path/to/build/index.js
   ```


## Project Structure

- **`src/`**: Contains the TypeScript source code.
- **`build/`**: Holds the compiled JavaScript files.
- **`package.json`**: Lists project dependencies and scripts.
- **`tsconfig.json`**: TypeScript configuration file.

## Scripts

- **`npm run build`**: Compiles TypeScript files into JavaScript.
- **`npm start`**: Runs the compiled JavaScript server.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. 