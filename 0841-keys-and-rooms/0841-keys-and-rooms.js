/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = {0:true}
    const reserve = [0]
    let visitedNum = 1;
    while(reserve.length > 0){
        const curKey = reserve.pop();        // 얘는 pop 해도 상관 없을 듯?..
        for(let i=0; i<rooms[curKey].length; ++i){
            const newKey = rooms[curKey][i];
            
            if(!visited[newKey]){
                reserve.push(newKey)
                visited[newKey] = true;
                ++visitedNum;
            }
        }
        if(visitedNum === rooms.length)
            break;
        
    }
    return visitedNum === rooms.length;
}
/*
// dfs
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
};*/