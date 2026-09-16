/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let province=0;
    let n=isConnected.length;
    let visited = new Array(n).fill(false)

    function dfs(city){
        visited[city]=true;

        for(let i=0;i<n;i++){
            if(isConnected[city][i]===1 && !visited[i]){
                dfs(i)
            }
        }
    }

    for(let city=0;city<n;city++){
        if(!visited[city]){
            province++
            dfs(city)
        }
    }
    return province

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna