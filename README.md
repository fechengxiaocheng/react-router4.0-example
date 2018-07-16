# react-router

[[译]简明React Router v4教程
](https://juejin.im/post/5a7e9ee7f265da4e7832949c)

4.0教程：http://reacttraining.cn/web/example/basic

4.0中使用history跳转https://github.com/brickspert/blog/issues/3

嵌套路由：https://juejin.im/post/5a641747518825732d7fb25f

## 跳转的方法

### 1、this.context.router.history
    
    import PropTypes from 'prop-types';
    
    clicktest = () => {
        this.context.router.history.push({
            pathname: '/xlj',
            search: '?id=1'
        })
    }
    
    purchasDetails.contextTypes = {
        router: PropTypes.object
    }
    
    
### 2、Link

    <Link to="">

### 3、this.props.history.poush()



## 自己实现一个react-router4.0的app

### 1、理解基本api

* BrouserRouter、HashRouter，
* Link、NavLink
* Switch、Route
* exact、strict
* path、hostory、match、location
* component、render、children


### 2、嵌套路由

![](media/15223759707494/15314710343844.jpg)



