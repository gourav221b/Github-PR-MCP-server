import { Octokit } from '@octokit/rest';

interface PullRequestDetails {
    title: string;
    body: string | null;
    state: string;
    number: number;
    created_at: string;
    updated_at: string;
    user: {
        login: string;
        avatar_url: string;
    };
    base: {
        ref: string;
        sha: string;
    };
    head: {
        ref: string;
        sha: string;
    };
}

interface PullRequestFile {
    filename: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
    contents_url: string;
}

/**
 * Get detailed information about a Pull Request
 */
export async function getPullRequestDetails(
    octokit: Octokit,
    owner: string,
    repo: string,
    pullNumber: number
): Promise<PullRequestDetails> {
    const { data } = await octokit.pulls.get({
        owner,
        repo,
        pull_number: pullNumber,
    });
    return data;
}

/**
 * Get the diff of a Pull Request
 */
export async function getPullRequestDiff(
    octokit: Octokit,
    owner: string,
    repo: string,
    pullNumber: number
): Promise<string> {
    const { data } = await octokit.pulls.get({
        owner,
        repo,
        pull_number: pullNumber,
        mediaType: {
            format: 'diff',
        },
    });
    return data as unknown as string;
}

/**
 * Get all comments on a Pull Request
 */
export async function getPullRequestComments(
    octokit: Octokit,
    owner: string,
    repo: string,
    pullNumber: number
): Promise<any[]> {
    const { data } = await octokit.pulls.listReviewComments({
        owner,
        repo,
        pull_number: pullNumber,
    });
    return data;
}

/**
 * Get all reviews on a Pull Request
 */
export async function getPullRequestReviews(
    octokit: Octokit,
    owner: string,
    repo: string,
    pullNumber: number
): Promise<any[]> {
    const { data } = await octokit.pulls.listReviews({
        owner,
        repo,
        pull_number: pullNumber,
    });
    return data;
}

/**
 * Get all information about a Pull Request including files, diff, comments, and reviews
 */
export async function getAllPullRequestInfo(
    octokit: Octokit,
    owner: string,
    repo: string,
    pullNumber: number
): Promise<{
    details: PullRequestDetails;
    diff: string;
    comments: any[];

}> {
    const [details, diff, comments,] = await Promise.all([
        getPullRequestDetails(octokit, owner, repo, pullNumber),

        getPullRequestDiff(octokit, owner, repo, pullNumber),
        getPullRequestComments(octokit, owner, repo, pullNumber),
        getPullRequestReviews(octokit, owner, repo, pullNumber),
    ]);

    return {
        details,
        diff,
        comments,

    };
}
