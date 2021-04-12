const Router = require('koa-router');
const testControllers = require('../controllers/index');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: ''
});

/**
 * 文章接口
 */
//创建文章
router.post('/article/create',ArtileController.create);

//获取文章详情
router.get('/article/:id',ArtileController.detail)

//测试地址
router.get('/index',testControllers.create)

module.exports = router