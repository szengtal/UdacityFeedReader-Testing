# 项目指南
进入页面，即可在底部进行功能测试和模块测试



# 摘要：各个模块功能说明


1. RSS Feeds用例
     *  "are defined"                                            测试 allFeeds 变量被定义了而且 不是空的
     *  "allFeeds children has  property url and url not blank"  测试 allFeeds 对象里面的所有的源来保证有链接字段且不为空的
     *  "allFeeds children has property name and name not blank" 测试 allFeeds 对象里面的所有的源来保证有名字字段且不为空的


2. The menu用例
     *  "The menu element is hidden by default"                  保证菜单元素默认是隐藏的
     *  "The menu  normal switch"                                测试菜单图标被点击的时候菜单会切换状态


3. Initial Entries用例
     *  "loadFeed execute success"       测试 loadFeed 函数被调用而且工作正常，在 .feed 容器元素里面至少有一个 .entry 的元素。


4. New Feed Selection用例
     *  "loadFeed content changed"                               测试 loadFeed 函数加载一个新源的时候内容会真的改变。


