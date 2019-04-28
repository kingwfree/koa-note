//app中会有个对象，挂载着所有信息，信息包括request和response,全局对象

function pv(ctx) {
    console.log('pv ',ctx.path)
}

module.exports = function () {
    return async function(ctx,next){
        pv(ctx)
        await next()
    }
}