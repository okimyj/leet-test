/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
/*
var canVisitAllRooms = function(rooms) {
    const visited = new Set([0]);
    // const visited = {0:true}
    const reserve = [0]
    let visitedNum = 1;
    while(reserve.length > 0){
        const curKey = reserve.pop();        // 얘는 pop 해도 상관 없을 듯?..
        for(let i=0; i<rooms[curKey].length; ++i){
            const newKey = rooms[curKey][i];
            if(!visited.has(newKey)){
            // if(!visited[newKey]){
                reserve.push(newKey)
                // visited[newKey] = true;
                visited.add(newKey);
                ++visitedNum;
            }
        }
        if(visitedNum === rooms.length)
            break;
        
    }
    return visited.size === rooms.length;
}*/
//*
// dfs
var canVisitAllRooms = function(rooms) {
    if(!rooms || rooms.length <= 0)
        return false;
    const visited = new Set();
    const dfs = (curRoom)=>{
        visited.add(curRoom);
        for(let i=0; i<rooms[curRoom].length; ++i){
            const nextRoom = rooms[curRoom][i];
            if(!visited.has(nextRoom)){
                visited.add(nextRoom);
                dfs(nextRoom);
            }
                
        }
    }
    dfs(0)
    
    return visited.size === rooms.length;
};
//*/