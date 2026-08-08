/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let n= grid.length;
    let rowMap = new Map();

    for(let row of grid){
        let key = row.join(",");
        rowMap.set(key,(rowMap.get(key)||0)+1);

    }
    let count=0;
    for(let col=0;col<n;col++){
        column=[];
        for(let row=0;row<n;row++){
            column.push(grid[row][col])
        }

        let key = column.join(",")
        if(rowMap.has(key)){
            count+=rowMap.get(key)
        }
    }
    return count

    
};