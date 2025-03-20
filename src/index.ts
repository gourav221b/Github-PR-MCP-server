import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { Octokit } from "@octokit/rest";
import { getAllPullRequestInfo } from "./helpers/github.js";

const GITHUB_API_BASE = "https://api.github.com";

// Create server instance
const server = new McpServer({
    name: "github",
    version: "1.0.0",
    description: "GitHub Pull Request Data Provider",
});

// Register GitHub PR data tool
server.tool(
    "get-pull-request-data",
    "Get detailed information about a GitHub Pull Request including files, diff, comments, and reviews",
    {
        owner: z.string().describe("GitHub repository owner"),
        repo: z.string().describe("GitHub repository name"),
        pullNumber: z.number().describe("Pull request number"),
        token: z.string().optional().describe("GitHub personal access token (optional)"),
    },
    async ({ owner, repo, pullNumber, token }) => {
        try {
            // Initialize Octokit with token if provided
            const octokit = new Octokit({
                auth: token,
                baseUrl: GITHUB_API_BASE,
            });

            // Get all PR information
            const prData = await getAllPullRequestInfo(octokit, owner, repo, pullNumber);

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(prData, null, 2)
                    }
                ]
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Error: ${error instanceof Error ? error.message : "An unknown error occurred"}`
                    }
                ],
                isError: true
            };
        }
    }
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
