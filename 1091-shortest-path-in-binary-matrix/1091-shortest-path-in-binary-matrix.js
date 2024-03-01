/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let shortestLen = -1;
    const row = grid.length;
    const col = grid[0].length;
    if(grid[0][0] === 1 || grid[row-1][col-1] === 1){
        console.log("is invalid grid.")
        return shortestLen;
    }
    const visited = Array.from({length:row}, ()=> Array.from({length:col}, ()=>false));
    visited[0][0] = true;
    const reserve = [[0, 0, 1]]
    
    const dx = [0, 0, -1, 1, 1, -1, -1, 1];
    const dy = [-1, 1, 0, 0, -1, 1, -1, 1]
    while(reserve.length > 0){
        const [cur_y, cur_x, cur_len] = reserve.shift();
        if(cur_x === col-1 && cur_y === row-1){
            shortestLen = cur_len;
            break;
        }
        for(let i=0; i<8; ++i){
            const next_x = cur_x + dx[i];
            const next_y = cur_y + dy[i];
            if(next_x >= 0 && next_x < col && next_y >= 0 && next_y < row){
                if(grid[next_y][next_x] === 0 && !visited[next_y][next_x]){
                    reserve.push([next_y, next_x, cur_len+1]);
                    visited[next_y][next_x] = true;
                }
            }
                
        }
        
    }
    return shortestLen;
};