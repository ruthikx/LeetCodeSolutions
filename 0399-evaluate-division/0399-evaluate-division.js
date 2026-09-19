/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = new Map();

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];

        if (!graph.has(a)) {
            graph.set(a, []);
        }

        if (!graph.has(b)) {
            graph.set(b, []);
        }

        graph.get(a).push([b, value]);

        graph.get(b).push([a, 1 / value]);
    }

    function dfs(current, target, visited) {
        if (!graph.has(current) || !graph.has(target)) {
            return -1;
        }

        if (current === target) {
            return 1;
        }

        visited.add(current);

        for (const [neighbor, weight] of graph.get(current)) {
            if (visited.has(neighbor)) {
                continue;
            }

            const result = dfs(neighbor, target, visited);

            if (result !== -1) {
                return weight * result;
            }
        }

        return -1;
    }

    const answer = [];

    for (const [a, b] of queries) {
        const visited = new Set();

        answer.push(dfs(a, b, visited));
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna