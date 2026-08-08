/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack =[]
   
    for( let ast of asteroids){
        let alive = true;
        while(alive && ast<0 && stack.length>0 && stack[stack.length-1] >0){
            let top = stack[stack.length-1];

            if(top<-ast){
                stack.pop()
            }else if(top===-ast){
                stack.pop()
                alive = false;
            }else{
                alive = false
            }
        }
        if(alive){
            stack.push(ast);
        }
    }
    return stack;
};