/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function () {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */
    describe('RSS Feeds', function () {
        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
        */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            // expect(allFeeds).toThrowError("song is already playing");
        });


        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
         */
        it('allFeeds children has  property url and url not blank', function () {
            expect(allFeeds.forEach((item) => {
                expect(item.hasOwnProperty('url')).toBeTruthy();
                expect(item["url"] != void 0 && item["url"].trim() != "").toBeTruthy();
            }));
        });


        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
         */
        it('allFeeds children has property name and name not blank', function () {
            expect(allFeeds.forEach((item) => {
                expect(item.hasOwnProperty('name')).toBeTruthy();
                expect(item["name"] != void 0 && item["name"].trim() != "").toBeTruthy();
            }));
        });

    });


    /* TODO: 写一个叫做 "The menu" 的测试用例 */

    describe('The menu', function () {

        /* TODO:
         * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
         * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
         */
        it('The menu element is hidden by default', function () {
            //缺省值body拥有值为menu-hidden的class
            expect(document.getElementsByTagName("body")[0].className).toEqual("menu-hidden");
        });

        /* TODO:
         * 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个
         * 测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，
         * 再次点击的时候是否隐藏。
         */
        it('The menu  normal switch', function () {
            var menuIcon = $('.menu-icon-link');
            //这里保证初始条件固定
            $('body').addClass('menu-hidden');
            /**第一次点击，判断类 */
            menuIcon.trigger('click');
            /**这个class属性即时生效 */
            expect(document.getElementsByTagName("body")[0].className).toEqual("");
            /**第二次点击，判断类 */
            menuIcon.trigger('click');
            /**这个class属性即时生效 */
            expect(document.getElementsByTagName("body")[0].className).toEqual("menu-hidden");

        });
    });

    /* TODO: 13. 写一个叫做 "Initial Entries" 的测试用例 */

    describe('Initial Entries', function () {

        //确认loadFeed执行完成
        beforeEach(function (done) {
            //这里loadFeed的参数id为1时候会报错。超过 jasmine.DEFAULT_TIMEOUT_INTERVAL.但不知道怎么处理下。
            loadFeed(2, done)
        });
        /* TODO:
         * 写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
         * 里面至少有一个 .entry 的元素。
         */
        it('loadFeed execute success', function () {
            debugger

            expect($('.feed .entry').length > 0).toBeTruthy();
            // done();
        });
    });

    /* TODO: 写一个叫做 "New Feed Selection" 的测试用例 */
    describe('New Feed Selection', function () {
        var _old, _new;
        //确保loadFeed进行了一个加载新源的操作
        // beforeEach(function (done) {
        //     _old = $('.feed .entry').length > 0 ? $('.feed .entry') : ["test"];
        //     loadFeed(3, done())
        // });

        beforeEach(function (done) {
            //这里先取到老的，保存起来
            _old = $('.feed .entry').length > 0 ? $('.feed .entry') : ["test"];
            //这里进行一个异步操作，这样保证了，在下面it里面测试的时候已经是刷新了新的页面
            loadFeed(3, done)
        });

        /* TODO:
         * 写一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
         * 记住，loadFeed() 函数是异步的。
         */
        it('loadFeed content changed', function () {
            _new = $('.feed .entry').length > 0 ? $('.feed .entry') : [""];
            //这里比较内容来判断是否一致 
            expect(_new[0].innerText || "").not.toEqual(_old[0].innerText || "");
        });

    });


}());
