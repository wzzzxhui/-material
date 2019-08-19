const Mock=require('mockjs');
Mock.mock('/api/data11',{
    'data|1-6':[{
    'title':'李晓强',
    'article':'测试111'
    }]
});

Mock.mock('/api/riqi1',{
    'data|1-6':[{
    '日期':'1/2',
    '访问用户':'1393',
    '下单用户':'2623',
    '下单率':'0.76',
    }]
});