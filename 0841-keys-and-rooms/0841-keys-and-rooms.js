/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if(!rooms || rooms.length <= 0)
        return false;
    const visited = [true];
    let visitedNum = 1;
    const dfs = (keys)=>{
        for(let i=0; i<keys.length; ++i){
            const roomKey = keys[i];
            if(!visited[roomKey]){
                visited[roomKey] = true;
                ++visitedNum;
                dfs(rooms[roomKey]);
            }
                
        }
    }
    dfs(rooms[0])
    
    return visitedNum === rooms.length;
};