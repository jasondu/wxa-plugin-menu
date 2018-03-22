const AV = require('../../lib/av-weapp-min.js');
// 好食仔
AV.init({   // 由于保密问题不提供，只做代码展示
    appId: '',
    appKey: '',
});
Component({
    properties: {
        storeId: {  // 在好食仔中的store_id
            type: String,
            value: '',
        },
    },
    data: {
        scrollTop: 0,
        activeCate: 0,
        products: [],
    },
    created() {
    },
    attached() {
        this.storeId = this.data.storeId;
        this.query();
    },
    methods: {
        query() {
            new AV.Query('Cate')
                .descending('createdAt')
                .equalTo('store_id', this.storeId)
                .find()
                .then(cate => {
                    this.cate = cate;
                    return new AV.Query('Menu')
                        .include('cate')
                        .include('images_0')
                        .descending('createdAt')
                        .equalTo('store_id', this.storeId)
                        .find()
                })
                .then(menu => {
                    let con = [];
                    let height = 0;
                    this.cate.map((item) => {
                        let cateid = item.get('objectId');
                        let content = menu.filter((menuItem) => {
                            menuItem.set('num', 0);
                            return menuItem.get('cate').get('objectId') === cateid
                        });
                        con.push({
                            name: item.get('name'),
                            height,
                            content,
                        });
                        const sysInfo = wx.getSystemInfoSync();
                        height += (51 + content.length * 180) / sysInfo.pixelRatio;
                    });
                    this.setData({
                        products: con
                    })
                })
                .catch(console.error);
        },
        goCate: function (e) {
            var num = e.currentTarget.dataset.num;
            this.setData({
                activeCate: e.currentTarget.dataset.index,
                scrollTop: parseInt(num)
            });
        },
        see: function (e) {
            var url = e.currentTarget.dataset.src;
            wx.previewImage({
                current: url,   // 当前显示图片的http链接
                urls: [url]     // 需要预览的图片http链接列表
            })
        },
    }
})