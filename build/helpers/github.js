/**
 * Get detailed information about a Pull Request
 */
export async function getPullRequestDetails(octokit, owner, repo, pullNumber) {
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
export async function getPullRequestDiff(octokit, owner, repo, pullNumber) {
    const { data } = await octokit.pulls.get({
        owner,
        repo,
        pull_number: pullNumber,
        mediaType: {
            format: 'diff',
        },
    });
    return data;
}
/**
 * Get all comments on a Pull Request
 */
export async function getPullRequestComments(octokit, owner, repo, pullNumber) {
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
export async function getPullRequestReviews(octokit, owner, repo, pullNumber) {
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
export async function getAllPullRequestInfo(octokit, owner, repo, pullNumber) {
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
