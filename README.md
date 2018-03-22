# wxa-plugin-canvas
小程序插件-点餐（菜单）插件

> 已经审核通过，APPID：wxbcc0394274804acb

## 代码片段链接

wechatide://minicode/WH8PB6mZ6JY0

## 插件效果

<img width="300" src="https://github.com/jasondu/wxa-plugin-menu/blob/master/demo.gif"></img>

- 通过简单的参数传入就可以生成分享海报，图片会根据设定的宽度和高度进行裁剪（不会压缩图片）

## 如何使用

1. 申请插件
在小程序管理后台-设置-第三方服务-添加插件，插件APPID：wxbcc0394274804acb，添加完请联系（微信：weizaidu）审核通过
2. 使用插件
在app.json中加上以下代码
```
  "plugins": {
    "myPlugin": {
      "version": "1.0.0",
      "provider": "wxbcc0394274804acb"
    }
  }
```
在需要使用插件的页面中的json文件添加以下代码
```
  "usingComponents": {
    "waimai": "components/waimai/waimai"
  }
```
在需要使用地方添加
```
<waimai store-id="5982722cac502e006915015b"></waimai>
```
## 插件参数解释

```
        storeId: {  // 在好食仔+小程序中的store_id，请联系weizaidu（微信）获取
            type: String,
            value: '',
        },
```