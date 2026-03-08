// 荣明达商行 商品信息总表
// 新增/修改/删除商品，仅需编辑下方数组，无需改动其他任何代码
const productList = [
    // 原有商品
    {
        id: 1,
        name: "春节拉串-6112",
        category: "拉条专区",
        retailPrice: 25.00,
        wholesalePrice: 18.00,
        imgUrl: "./images/春节拉串-6112.jpg"
    },
    {
        id: 2,
        name: "摆件马",
        category: "摆件专区",
        retailPrice: 88.00,
        wholesalePrice: 65.00,
        imgUrl: "./images/摆件马.jpg"
    },
    {
        id: 3,
        name: "红果盆景",
        category: "盆景专区",
        retailPrice: 68.00,
        wholesalePrice: 48.00,
        imgUrl: "./images/红果盆景.jpg"
    },
    {
        id: 4,
        name: "冰箱贴",
        category: "挂饰专区",
        retailPrice: 15.00,
        wholesalePrice: 10.00,
        imgUrl: "./images/冰箱贴.jpg"
    },
    {
        id: 5,
        name: "迷你小摆件",
        category: "摆件专区",
        retailPrice: 35.00,
        wholesalePrice: 22.00,
        imgUrl: "./images/迷你小摆件.jpg"
    },
    // 新增商品 - 婚庆专区
    {
        id: 6,
        name: "40#喜字挂件",
        category: "挂件专区",
        retailPrice: 12.00,
        wholesalePrice: 8.00,
        imgUrl: "./images/40公分喜字挂件.jpg"
    },
    {
        id: 7,
        name: "40#暖居如意挂件",
        category: "挂件专区",
        retailPrice: 12.00,
        wholesalePrice: 8.00,
        imgUrl: "./images/40公分暖居如意挂件.jpg"
    },
    {
        id: 8,
        name: "40#福字挂件",
        category: "挂件专区",
        retailPrice: 12.00,
        wholesalePrice: 8.00,
        imgUrl: "./images/40公分福字挂件.jpg"
    },
    {
        id: 9,
        name: "植绒酒红色喜字-2425",
        category: "婚庆专区",
        retailPrice: 8.00,
        wholesalePrice: 5.00,
        imgUrl: "./images/植绒酒红色喜字-2425.jpg"
    },
    {
        id: 10,
        name: "植绒酒红色喜字-2513",
        category: "婚庆专区",
        retailPrice: 8.00,
        wholesalePrice: 5.00,
        imgUrl: "./images/植绒酒红色喜字-2513.jpg"
    },
    {
        id: 11,
        name: "植绒酒红色喜字带胶-2519",
        category: "婚庆专区",
        retailPrice: 10.00,
        wholesalePrice: 6.00,
        imgUrl: "./images/植绒酒红色喜字带胶-2519.jpg"
    },
    {
        id: 12,
        name: "结婚车花一见钟情",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花一见钟情.jpg"
    },
    {
        id: 13,
        name: "结婚车花幸福相约",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花幸福相约.jpg"
    },
    {
        id: 14,
        name: "结婚车花星语心愿",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花星语心愿.jpg"
    },
    {
        id: 15,
        name: "结婚车花爱到永远",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花爱到永远.jpg"
    },
    {
        id: 16,
        name: "结婚车花爱的承诺",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花爱的承诺.jpg"
    },
    {
        id: 17,
        name: "结婚车花爱结同心",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花爱结同心.jpg"
    },
    {
        id: 18,
        name: "结婚车花玫瑰恋人",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花玫瑰恋人.jpg"
    },
    {
        id: 19,
        name: "结婚车花遇见爱情",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花遇见爱情.jpg"
    },
    {
        id: 20,
        name: "结婚车花魅力花韵",
        category: "婚庆专区",
        retailPrice: 128.00,
        wholesalePrice: 88.00,
        imgUrl: "./images/结婚车花魅力花韵.jpg"
    },
    // 新增商品 - 礼炮专区
    {
        id: 21,
        name: "吾家有喜礼炮",
        category: "礼炮专区",
        retailPrice: 25.00,
        wholesalePrice: 15.00,
        imgUrl: "./images/吾家有喜礼炮.jpg"
    },
    {
        id: 22,
        name: "开业大吉黄金亮片礼炮",
        category: "礼炮专区",
        retailPrice: 35.00,
        wholesalePrice: 22.00,
        imgUrl: "./images/开业大吉黄金亮片礼炮.jpg"
    },
    {
        id: 23,
        name: "开工大吉礼炮",
        category: "礼炮专区",
        retailPrice: 28.00,
        wholesalePrice: 18.00,
        imgUrl: "./images/开工大吉礼炮.jpg"
    },
    {
        id: 24,
        name: "金色喜庆礼炮",
        category: "礼炮专区",
        retailPrice: 30.00,
        wholesalePrice: 20.00,
        imgUrl: "./images/金色喜庆礼炮.jpg"
    },
    // 新增商品 - 圣诞专区
    {
        id: 25,
        name: "圣诞摆件",
        category: "圣诞专区",
        retailPrice: 45.00,
        wholesalePrice: 30.00,
        imgUrl: "./images/圣诞摆件.jpg"
    },
    {
        id: 26,
        name: "圣诞树",
        category: "圣诞专区",
        retailPrice: 168.00,
        wholesalePrice: 120.00,
        imgUrl: "./images/圣诞树.jpg"
    },
    {
        id: 27,
        name: "圣诞火车摆件",
        category: "圣诞专区",
        retailPrice: 58.00,
        wholesalePrice: 40.00,
        imgUrl: "./images/圣诞火车摆件.jpg"
    },
    {
        id: 28,
        name: "圣诞驯鹿小屋摆件",
        category: "圣诞专区",
        retailPrice: 68.00,
        wholesalePrice: 48.00,
        imgUrl: "./images/圣诞驯鹿小屋摆件.jpg"
    },
    // 新增商品 - 灯笼专区
    {
        id: 29,
        name: "年年有余灯笼",
        category: "灯笼专区",
        retailPrice: 38.00,
        wholesalePrice: 25.00,
        imgUrl: "./images/年年有余灯笼.jpg"
    },
    {
        id: 30,
        name: "网红喜字灯笼",
        category: "灯笼专区",
        retailPrice: 28.00,
        wholesalePrice: 18.00,
        imgUrl: "./images/网红喜字灯笼.jpg"
    },
    {
        id: 31,
        name: "金边k金富贵临门灯笼",
        category: "灯笼专区",
        retailPrice: 48.00,
        wholesalePrice: 32.00,
        imgUrl: "./images/金边k金富贵临门灯笼.jpg"
    },
    {
        id: 32,
        name: "金边k金福运到灯笼",
        category: "灯笼专区",
        retailPrice: 48.00,
        wholesalePrice: 32.00,
        imgUrl: "./images/金边k金福运到灯笼.jpg"
    },
    {
        id: 33,
        name: "金边好柿发生灯笼",
        category: "灯笼专区",
        retailPrice: 42.00,
        wholesalePrice: 28.00,
        imgUrl: "./images/金边好柿发生灯笼.jpg"
    },
    {
        id: 34,
        name: "金边烫金马上发财灯笼",
        category: "灯笼专区",
        retailPrice: 45.00,
        wholesalePrice: 30.00,
        imgUrl: "./images/金边烫金马上发财灯笼.jpg"
    },
    {
        id: 35,
        name: "金边财源滚滚灯笼",
        category: "灯笼专区",
        retailPrice: 45.00,
        wholesalePrice: 30.00,
        imgUrl: "./images/金边财源滚滚灯笼.jpg"
    },
    // 新增商品 - 其他专区
    {
        id: 36,
        name: "国旗",
        category: "节庆专区",
        retailPrice: 15.00,
        wholesalePrice: 8.00,
        imgUrl: "./images/国旗.jpg"
    },
    {
        id: 37,
        name: "欢度国庆摆件",
        category: "节庆专区",
        retailPrice: 35.00,
        wholesalePrice: 22.00,
        imgUrl: "./images/欢度国庆摆件.jpg"
    },
    {
        id: 38,
        name: "生肖马玩偶",
        category: "工艺品专区",
        retailPrice: 55.00,
        wholesalePrice: 38.00,
        imgUrl: "./images/生肖马玩偶.jpg"
    },
    {
        id: 39,
        name: "马年大吉拉条",
        category: "拉条专区",
        retailPrice: 22.00,
        wholesalePrice: 15.00,
        imgUrl: "./images/马年大吉拉条.jpg"
    }
];
