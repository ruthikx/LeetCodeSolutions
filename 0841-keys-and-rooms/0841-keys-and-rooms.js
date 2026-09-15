/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visitedRoom = new Set();
    let keyList = new Set();

    function dfs(currentRoom,currentKeys){
        if(visitedRoom.has(currentRoom))return;
        visitedRoom.add(currentRoom);

        for(let room of rooms[currentRoom]){
            currentKeys.add(room)
        }

        for(let key of currentKeys){
            dfs(key,currentKeys)
        }
    }

    dfs(0,keyList)

    return visitedRoom.size === rooms.length
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna