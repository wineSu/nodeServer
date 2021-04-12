//控制器的主要作用为功能的处理

class testControllers {
    static async create(ctx){
        //接收客服端
        let req = ctx.request.body;
		await ctx.render('index', {
		    titles: '111'
		})
    }
}

module.exports = testControllers;