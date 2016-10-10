
const baseUrl = 'http://192.168.12.47:1337';

export default config = {

    userUrl: 'http://192.168.12.47/user.json',
    hotContentUrl: 'http://192.168.12.47/content.json',

    productSearchUrl: baseUrl + '/product/',

    companySearchUrl: baseUrl + '/company/',

    hotSearchUrl: baseUrl + '/hot/',

    searchCompany: {
        year: [{
            id: 0,
            label: '不限'
        }, {
            id: 1,
            label: '一年内'
        }, {
            id: 2,
            label: '两年内'
        }, {
            id: 3,
            label: '三年内'
        }, {
            id: 4,
            label: '四年内'
        }, {
            id: 5,
            label: '五年内'
        }, {
            id: 6,
            label: '八年内'
        }, {
            id: 7,
            label: '十年内'
        }, {
            id: 8,
            label: '十五年内'
        }],
        money: [{
            id: 0,
            label: '不限'
        },{
            id: 1,
            label: '0-100万'
        },{
            id: 2,
            label: '101-200万'
        },{
            id: 3,
            label: '201-500万'
        },{
            id: 4,
            label: '501-1000万'
        },{
            id: 5,
            label: '1000万以上'
        }],
        status: [{
            id: 0,
            label: '不限'
        },{
            id: 1,
            label: '有效'
        },{
            id: 2,
            label: '无效'
        }],
        industry: [{
            id: 0,
            label: '不限'
        },{
            id: 1,
            label: '测试行业1'
        },{
            id: 2,
            label: '测试行业2'
        },{
            id: 3,
            label: '测试行业3'
        }],
        city: [{
            id: 0,
            label: '不限'
        }, {
            id: 1,
            label: '河南'
        }, {
            id: 2,
            label: '地区'
        }, {
            id: 3,
            label: '应该'
        }, {
            id: 4,
            label: '是二级'
        }, {
            id: 5,
            label: '联动的'
        }]
    }
}