/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from({ length: n }, () => []);

    for (const [a, b] of connections) {
        graph[a].push([b, 1]);
        graph[b].push([a, 0]);
    }

    const visited = new Array(n).fill(false);

    let answer = 0;

    function dfs(city) {

        visited[city] = true;

        for (const [nextCity, needsReverse] of graph[city]) {

            if (visited[nextCity]) {
                continue;
            }

            answer += needsReverse;

            dfs(nextCity);
        }
    }

    dfs(0);

    return answer;

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna