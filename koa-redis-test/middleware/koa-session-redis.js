function sessionRedis(ctx){
    ctx.session.count++
}
module.exports = function () {
    return async function (ctx,next) {
        sessionRedis(ctx);
        await next()
    }
}