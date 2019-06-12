var level1 = [{"name": "222222", "value": "1"}, {"name": "饿的方式度过", "value": "2"}, {
    "name": "收到额外人",
    "value": "3"
}, {"name": "啦啦啦", "value": "4"}, {"name": "饿的方式度过", "value": "5"}, {"name": "收到额外人", "value": "6"}, {
    "name": "啦啦啦",
    "value": "1"
}, {"name": "饿的方式度过", "value": "2"}, {"name": "收到额外人", "value": "3"}, {"name": "啦啦啦", "value": "4"}, {
    "name": "饿的方式度过",
    "value": "5"
}, {"name": "收到额外人", "value": "6"}];
var level2 = [{"name": '啦啦啦', "value": '1'}, {"name": '饿的方式度过', "value": '2'}, {
    "name": '收到额外人',
    "value": '3'
}, {"name": '啦啦啦', "value": '4'}, {"name": '饿的方式度过', "value": '5'}, {"name": '收到额外人', "value": '6'}];
var level3 = [{
    "name": "111",
    "value": "1",
    "child": [{
        "name": "222",
        "value": "3",
        "child": [{"name": "fff", "value": "3"}, {"name": "ggg", "value": "4"}, {
            "name": "hhh",
            "value": "5"
        }, {"name": "yyy", "value": "6"}]
    }, {
        "name": "333",
        "value": "4",
        "child": [{"name": "222", "value": "3"}, {"name": "333", "value": "4"}, {
            "name": "4444",
            "value": "5"
        }, {"name": "555", "value": "6"}]
    }, {
        "name": "4444",
        "value": "5",
        "child": [{"name": "222", "value": "3"}, {"name": "333", "value": "4"}, {
            "name": "4444",
            "value": "5"
        }, {"name": "555", "value": "6"}]
    }, {
        "name": "555",
        "value": "6",
        "child": [{"name": "fff", "value": "3"}, {"name": "ggg", "value": "4"}, {
            "name": "hhh",
            "value": "5"
        }, {"name": "yyy", "value": "6"}]
    }, {
        "name": "4444",
        "value": "5",
        "child": [{"name": "fff", "value": "3"}, {"name": "ggg", "value": "4"}, {
            "name": "hhh",
            "value": "5"
        }, {"name": "yyy", "value": "6"}]
    }, {
        "name": "555",
        "value": "6",
        "child": [{"name": "fff", "value": "3"}, {"name": "ggg", "value": "4"}, {
            "name": "hhh",
            "value": "5"
        }, {"name": "yyy", "value": "6"}]
    }]
}, {
    "name": "ddd",
    "value": "2",
    "child": [{"name": "fff", "value": "3"}, {"name": "ggg", "value": "4"}, {
        "name": "hhh",
        "value": "5"
    }, {"name": "yyy", "value": "6"}]
}, {
    "name": "www",
    "value": "3",
    "child": [{"name": "收到额外人", "value": "3"}, {"name": "啦啦啦", "value": "4"}, {
        "name": "饿的方式度过",
        "value": "5"
    }, {"name": "收到额外人", "value": "6"}]
}, {
    "name": "rrr",
    "value": "4",
    "child": [{"name": "收到额外人", "value": "3"}, {"name": "啦啦啦", "value": "4"}, {
        "name": "饿的方式度过",
        "value": "5"
    }, {"name": "收到额外人", "value": "6"}]
}, {
    "name": "yyy",
    "value": "5",
    "child": [{"name": "收到额外人", "value": "3"}, {"name": "啦啦啦", "value": "4"}, {
        "name": "饿的方式度过",
        "value": "5"
    }, {"name": "收到额外人", "value": "6"}]
}, {
    "name": "uuu",
    "value": "6",
    "child": [{"name": "收到额外人", "value": "3"}, {"name": "啦啦啦", "value": "4"}, {
        "name": "饿的方式度过",
        "value": "5"
    }, {"name": "收到额外人", "value": "6"}]
}];
var cityData = [{"id": "110000", "name": "北京市", "shortName": "北京", "parentId": "100000", "level": "1"}, {
    "id": "110100",
    "name": "北京市",
    "shortName": "北京",
    "parentId": "110000",
    "level": "2"
}, {"id": "120000", "name": "天津市", "shortName": "天津", "parentId": "100000", "level": "1"}, {
    "id": "120100",
    "name": "天津市",
    "shortName": "天津",
    "parentId": "120000",
    "level": "2"
}, {"id": "130000", "name": "河北省", "shortName": "河北", "parentId": "100000", "level": "1"}, {
    "id": "130100",
    "name": "石家庄市",
    "shortName": "石家庄",
    "parentId": "130000",
    "level": "2"
}, {"id": "130200", "name": "唐山市", "shortName": "唐山", "parentId": "130000", "level": "2"}, {
    "id": "130300",
    "name": "秦皇岛市",
    "shortName": "秦皇岛",
    "parentId": "130000",
    "level": "2"
}, {"id": "130400", "name": "邯郸市", "shortName": "邯郸", "parentId": "130000", "level": "2"}, {
    "id": "130500",
    "name": "邢台市",
    "shortName": "邢台",
    "parentId": "130000",
    "level": "2"
}, {"id": "130600", "name": "保定市", "shortName": "保定", "parentId": "130000", "level": "2"}, {
    "id": "130700",
    "name": "张家口市",
    "shortName": "张家口",
    "parentId": "130000",
    "level": "2"
}, {"id": "130800", "name": "承德市", "shortName": "承德", "parentId": "130000", "level": "2"}, {
    "id": "130900",
    "name": "沧州市",
    "shortName": "沧州",
    "parentId": "130000",
    "level": "2"
}, {"id": "131000", "name": "廊坊市", "shortName": "廊坊", "parentId": "130000", "level": "2"}, {
    "id": "131100",
    "name": "衡水市",
    "shortName": "衡水",
    "parentId": "130000",
    "level": "2"
}, {"id": "140000", "name": "山西省", "shortName": "山西", "parentId": "100000", "level": "1"}, {
    "id": "140100",
    "name": "太原市",
    "shortName": "太原",
    "parentId": "140000",
    "level": "2"
}, {"id": "140200", "name": "大同市", "shortName": "大同", "parentId": "140000", "level": "2"}, {
    "id": "140300",
    "name": "阳泉市",
    "shortName": "阳泉",
    "parentId": "140000",
    "level": "2"
}, {"id": "140400", "name": "长治市", "shortName": "长治", "parentId": "140000", "level": "2"}, {
    "id": "140500",
    "name": "晋城市",
    "shortName": "晋城",
    "parentId": "140000",
    "level": "2"
}, {"id": "140600", "name": "朔州市", "shortName": "朔州", "parentId": "140000", "level": "2"}, {
    "id": "140700",
    "name": "晋中市",
    "shortName": "晋中",
    "parentId": "140000",
    "level": "2"
}, {"id": "140800", "name": "运城市", "shortName": "运城", "parentId": "140000", "level": "2"}, {
    "id": "140900",
    "name": "忻州市",
    "shortName": "忻州",
    "parentId": "140000",
    "level": "2"
}, {"id": "141000", "name": "临汾市", "shortName": "临汾", "parentId": "140000", "level": "2"}, {
    "id": "141100",
    "name": "吕梁市",
    "shortName": "吕梁",
    "parentId": "140000",
    "level": "2"
}, {"id": "150000", "name": "内蒙古自治区", "shortName": "内蒙古", "parentId": "100000", "level": "1"}, {
    "id": "150100",
    "name": "呼和浩特市",
    "shortName": "呼和浩特",
    "parentId": "150000",
    "level": "2"
}, {"id": "150200", "name": "包头市", "shortName": "包头", "parentId": "150000", "level": "2"}, {
    "id": "150300",
    "name": "乌海市",
    "shortName": "乌海",
    "parentId": "150000",
    "level": "2"
}, {"id": "150400", "name": "赤峰市", "shortName": "赤峰", "parentId": "150000", "level": "2"}, {
    "id": "150500",
    "name": "通辽市",
    "shortName": "通辽",
    "parentId": "150000",
    "level": "2"
}, {"id": "150600", "name": "鄂尔多斯市", "shortName": "鄂尔多斯", "parentId": "150000", "level": "2"}, {
    "id": "150700",
    "name": "呼伦贝尔市",
    "shortName": "呼伦贝尔",
    "parentId": "150000",
    "level": "2"
}, {"id": "150800", "name": "巴彦淖尔市", "shortName": "巴彦淖尔", "parentId": "150000", "level": "2"}, {
    "id": "150900",
    "name": "乌兰察布市",
    "shortName": "乌兰察布",
    "parentId": "150000",
    "level": "2"
}, {"id": "152200", "name": "兴安盟", "shortName": "兴安盟", "parentId": "150000", "level": "2"}, {
    "id": "152500",
    "name": "锡林郭勒盟",
    "shortName": "锡林郭勒盟",
    "parentId": "150000",
    "level": "2"
}, {"id": "152900", "name": "阿拉善盟", "shortName": "阿拉善盟", "parentId": "150000", "level": "2"}, {
    "id": "210000",
    "name": "辽宁省",
    "shortName": "辽宁",
    "parentId": "100000",
    "level": "1"
}, {"id": "210100", "name": "沈阳市", "shortName": "沈阳", "parentId": "210000", "level": "2"}, {
    "id": "210200",
    "name": "大连市",
    "shortName": "大连",
    "parentId": "210000",
    "level": "2"
}, {"id": "210300", "name": "鞍山市", "shortName": "鞍山", "parentId": "210000", "level": "2"}, {
    "id": "210400",
    "name": "抚顺市",
    "shortName": "抚顺",
    "parentId": "210000",
    "level": "2"
}, {"id": "210500", "name": "本溪市", "shortName": "本溪", "parentId": "210000", "level": "2"}, {
    "id": "210600",
    "name": "丹东市",
    "shortName": "丹东",
    "parentId": "210000",
    "level": "2"
}, {"id": "210700", "name": "锦州市", "shortName": "锦州", "parentId": "210000", "level": "2"}, {
    "id": "210800",
    "name": "营口市",
    "shortName": "营口",
    "parentId": "210000",
    "level": "2"
}, {"id": "210900", "name": "阜新市", "shortName": "阜新", "parentId": "210000", "level": "2"}, {
    "id": "211000",
    "name": "辽阳市",
    "shortName": "辽阳",
    "parentId": "210000",
    "level": "2"
}, {"id": "211100", "name": "盘锦市", "shortName": "盘锦", "parentId": "210000", "level": "2"}, {
    "id": "211200",
    "name": "铁岭市",
    "shortName": "铁岭",
    "parentId": "210000",
    "level": "2"
}, {"id": "211300", "name": "朝阳市", "shortName": "朝阳", "parentId": "210000", "level": "2"}, {
    "id": "211400",
    "name": "葫芦岛市",
    "shortName": "葫芦岛",
    "parentId": "210000",
    "level": "2"
}, {"id": "211500", "name": "金普新区", "shortName": "金普新区", "parentId": "210000", "level": "2"}, {
    "id": "220000",
    "name": "吉林省",
    "shortName": "吉林",
    "parentId": "100000",
    "level": "1"
}, {"id": "220100", "name": "长春市", "shortName": "长春", "parentId": "220000", "level": "2"}, {
    "id": "220200",
    "name": "吉林市",
    "shortName": "吉林",
    "parentId": "220000",
    "level": "2"
}, {"id": "220300", "name": "四平市", "shortName": "四平", "parentId": "220000", "level": "2"}, {
    "id": "220400",
    "name": "辽源市",
    "shortName": "辽源",
    "parentId": "220000",
    "level": "2"
}, {"id": "220500", "name": "通化市", "shortName": "通化", "parentId": "220000", "level": "2"}, {
    "id": "220600",
    "name": "白山市",
    "shortName": "白山",
    "parentId": "220000",
    "level": "2"
}, {"id": "220700", "name": "松原市", "shortName": "松原", "parentId": "220000", "level": "2"}, {
    "id": "220800",
    "name": "白城市",
    "shortName": "白城",
    "parentId": "220000",
    "level": "2"
}, {"id": "222400", "name": "延边朝鲜族自治州", "shortName": "延边", "parentId": "220000", "level": "2"}, {
    "id": "230000",
    "name": "黑龙江省",
    "shortName": "黑龙江",
    "parentId": "100000",
    "level": "1"
}, {"id": "230100", "name": "哈尔滨市", "shortName": "哈尔滨", "parentId": "230000", "level": "2"}, {
    "id": "230200",
    "name": "齐齐哈尔市",
    "shortName": "齐齐哈尔",
    "parentId": "230000",
    "level": "2"
}, {"id": "230300", "name": "鸡西市", "shortName": "鸡西", "parentId": "230000", "level": "2"}, {
    "id": "230400",
    "name": "鹤岗市",
    "shortName": "鹤岗",
    "parentId": "230000",
    "level": "2"
}, {"id": "230500", "name": "双鸭山市", "shortName": "双鸭山", "parentId": "230000", "level": "2"}, {
    "id": "230600",
    "name": "大庆市",
    "shortName": "大庆",
    "parentId": "230000",
    "level": "2"
}, {"id": "230700", "name": "伊春市", "shortName": "伊春", "parentId": "230000", "level": "2"}, {
    "id": "230800",
    "name": "佳木斯市",
    "shortName": "佳木斯",
    "parentId": "230000",
    "level": "2"
}, {"id": "230900", "name": "七台河市", "shortName": "七台河", "parentId": "230000", "level": "2"}, {
    "id": "231000",
    "name": "牡丹江市",
    "shortName": "牡丹江",
    "parentId": "230000",
    "level": "2"
}, {"id": "231100", "name": "黑河市", "shortName": "黑河", "parentId": "230000", "level": "2"}, {
    "id": "231200",
    "name": "绥化市",
    "shortName": "绥化",
    "parentId": "230000",
    "level": "2"
}, {"id": "232700", "name": "大兴安岭地区", "shortName": "大兴安岭", "parentId": "230000", "level": "2"}, {
    "id": "310000",
    "name": "上海市",
    "shortName": "上海",
    "parentId": "100000",
    "level": "1"
}, {"id": "310100", "name": "上海市", "shortName": "上海", "parentId": "310000", "level": "2"}, {
    "id": "320000",
    "name": "江苏省",
    "shortName": "江苏",
    "parentId": "100000",
    "level": "1"
}, {"id": "320100", "name": "南京市", "shortName": "南京", "parentId": "320000", "level": "2"}, {
    "id": "320200",
    "name": "无锡市",
    "shortName": "无锡",
    "parentId": "320000",
    "level": "2"
}, {"id": "320300", "name": "徐州市", "shortName": "徐州", "parentId": "320000", "level": "2"}, {
    "id": "320400",
    "name": "常州市",
    "shortName": "常州",
    "parentId": "320000",
    "level": "2"
}, {"id": "320500", "name": "苏州市", "shortName": "苏州", "parentId": "320000", "level": "2"}, {
    "id": "320600",
    "name": "南通市",
    "shortName": "南通",
    "parentId": "320000",
    "level": "2"
}, {"id": "320700", "name": "连云港市", "shortName": "连云港", "parentId": "320000", "level": "2"}, {
    "id": "320800",
    "name": "淮安市",
    "shortName": "淮安",
    "parentId": "320000",
    "level": "2"
}, {"id": "320900", "name": "盐城市", "shortName": "盐城", "parentId": "320000", "level": "2"}, {
    "id": "321000",
    "name": "扬州市",
    "shortName": "扬州",
    "parentId": "320000",
    "level": "2"
}, {"id": "321100", "name": "镇江市", "shortName": "镇江", "parentId": "320000", "level": "2"}, {
    "id": "321200",
    "name": "泰州市",
    "shortName": "泰州",
    "parentId": "320000",
    "level": "2"
}, {"id": "321300", "name": "宿迁市", "shortName": "宿迁", "parentId": "320000", "level": "2"}, {
    "id": "330000",
    "name": "浙江省",
    "shortName": "浙江",
    "parentId": "100000",
    "level": "1"
}, {"id": "330100", "name": "杭州市", "shortName": "杭州", "parentId": "330000", "level": "2"}, {
    "id": "330200",
    "name": "宁波市",
    "shortName": "宁波",
    "parentId": "330000",
    "level": "2"
}, {"id": "330300", "name": "温州市", "shortName": "温州", "parentId": "330000", "level": "2"}, {
    "id": "330400",
    "name": "嘉兴市",
    "shortName": "嘉兴",
    "parentId": "330000",
    "level": "2"
}, {"id": "330500", "name": "湖州市", "shortName": "湖州", "parentId": "330000", "level": "2"}, {
    "id": "330600",
    "name": "绍兴市",
    "shortName": "绍兴",
    "parentId": "330000",
    "level": "2"
}, {"id": "330700", "name": "金华市", "shortName": "金华", "parentId": "330000", "level": "2"}, {
    "id": "330800",
    "name": "衢州市",
    "shortName": "衢州",
    "parentId": "330000",
    "level": "2"
}, {"id": "330900", "name": "舟山市", "shortName": "舟山", "parentId": "330000", "level": "2"}, {
    "id": "331000",
    "name": "台州市",
    "shortName": "台州",
    "parentId": "330000",
    "level": "2"
}, {"id": "331100", "name": "丽水市", "shortName": "丽水", "parentId": "330000", "level": "2"}, {
    "id": "331200",
    "name": "舟山群岛新区",
    "shortName": "舟山新区",
    "parentId": "330000",
    "level": "2"
}, {"id": "340000", "name": "安徽省", "shortName": "安徽", "parentId": "100000", "level": "1"}, {
    "id": "340100",
    "name": "合肥市",
    "shortName": "合肥",
    "parentId": "340000",
    "level": "2"
}, {"id": "340200", "name": "芜湖市", "shortName": "芜湖", "parentId": "340000", "level": "2"}, {
    "id": "340300",
    "name": "蚌埠市",
    "shortName": "蚌埠",
    "parentId": "340000",
    "level": "2"
}, {"id": "340400", "name": "淮南市", "shortName": "淮南", "parentId": "340000", "level": "2"}, {
    "id": "340500",
    "name": "马鞍山市",
    "shortName": "马鞍山",
    "parentId": "340000",
    "level": "2"
}, {"id": "340600", "name": "淮北市", "shortName": "淮北", "parentId": "340000", "level": "2"}, {
    "id": "340700",
    "name": "铜陵市",
    "shortName": "铜陵",
    "parentId": "340000",
    "level": "2"
}, {"id": "340800", "name": "安庆市", "shortName": "安庆", "parentId": "340000", "level": "2"}, {
    "id": "341000",
    "name": "黄山市",
    "shortName": "黄山",
    "parentId": "340000",
    "level": "2"
}, {"id": "341100", "name": "滁州市", "shortName": "滁州", "parentId": "340000", "level": "2"}, {
    "id": "341200",
    "name": "阜阳市",
    "shortName": "阜阳",
    "parentId": "340000",
    "level": "2"
}, {"id": "341300", "name": "宿州市", "shortName": "宿州", "parentId": "340000", "level": "2"}, {
    "id": "341500",
    "name": "六安市",
    "shortName": "六安",
    "parentId": "340000",
    "level": "2"
}, {"id": "341600", "name": "亳州市", "shortName": "亳州", "parentId": "340000", "level": "2"}, {
    "id": "341700",
    "name": "池州市",
    "shortName": "池州",
    "parentId": "340000",
    "level": "2"
}, {"id": "341800", "name": "宣城市", "shortName": "宣城", "parentId": "340000", "level": "2"}, {
    "id": "350000",
    "name": "福建省",
    "shortName": "福建",
    "parentId": "100000",
    "level": "1"
}, {"id": "350100", "name": "福州市", "shortName": "福州", "parentId": "350000", "level": "2"}, {
    "id": "350200",
    "name": "厦门市",
    "shortName": "厦门",
    "parentId": "350000",
    "level": "2"
}, {"id": "350300", "name": "莆田市", "shortName": "莆田", "parentId": "350000", "level": "2"}, {
    "id": "350400",
    "name": "三明市",
    "shortName": "三明",
    "parentId": "350000",
    "level": "2"
}, {"id": "350500", "name": "泉州市", "shortName": "泉州", "parentId": "350000", "level": "2"}, {
    "id": "350600",
    "name": "漳州市",
    "shortName": "漳州",
    "parentId": "350000",
    "level": "2"
}, {"id": "350700", "name": "南平市", "shortName": "南平", "parentId": "350000", "level": "2"}, {
    "id": "350800",
    "name": "龙岩市",
    "shortName": "龙岩",
    "parentId": "350000",
    "level": "2"
}, {"id": "350900", "name": "宁德市", "shortName": "宁德", "parentId": "350000", "level": "2"}, {
    "id": "360000",
    "name": "江西省",
    "shortName": "江西",
    "parentId": "100000",
    "level": "1"
}, {"id": "360100", "name": "南昌市", "shortName": "南昌", "parentId": "360000", "level": "2"}, {
    "id": "360200",
    "name": "景德镇市",
    "shortName": "景德镇",
    "parentId": "360000",
    "level": "2"
}, {"id": "360300", "name": "萍乡市", "shortName": "萍乡", "parentId": "360000", "level": "2"}, {
    "id": "360400",
    "name": "九江市",
    "shortName": "九江",
    "parentId": "360000",
    "level": "2"
}, {"id": "360500", "name": "新余市", "shortName": "新余", "parentId": "360000", "level": "2"}, {
    "id": "360600",
    "name": "鹰潭市",
    "shortName": "鹰潭",
    "parentId": "360000",
    "level": "2"
}, {"id": "360700", "name": "赣州市", "shortName": "赣州", "parentId": "360000", "level": "2"}, {
    "id": "360800",
    "name": "吉安市",
    "shortName": "吉安",
    "parentId": "360000",
    "level": "2"
}, {"id": "360900", "name": "宜春市", "shortName": "宜春", "parentId": "360000", "level": "2"}, {
    "id": "361000",
    "name": "抚州市",
    "shortName": "抚州",
    "parentId": "360000",
    "level": "2"
}, {"id": "361100", "name": "上饶市", "shortName": "上饶", "parentId": "360000", "level": "2"}, {
    "id": "370000",
    "name": "山东省",
    "shortName": "山东",
    "parentId": "100000",
    "level": "1"
}, {"id": "370100", "name": "济南市", "shortName": "济南", "parentId": "370000", "level": "2"}, {
    "id": "370200",
    "name": "青岛市",
    "shortName": "青岛",
    "parentId": "370000",
    "level": "2"
}, {"id": "370300", "name": "淄博市", "shortName": "淄博", "parentId": "370000", "level": "2"}, {
    "id": "370400",
    "name": "枣庄市",
    "shortName": "枣庄",
    "parentId": "370000",
    "level": "2"
}, {"id": "370500", "name": "东营市", "shortName": "东营", "parentId": "370000", "level": "2"}, {
    "id": "370600",
    "name": "烟台市",
    "shortName": "烟台",
    "parentId": "370000",
    "level": "2"
}, {"id": "370700", "name": "潍坊市", "shortName": "潍坊", "parentId": "370000", "level": "2"}, {
    "id": "370800",
    "name": "济宁市",
    "shortName": "济宁",
    "parentId": "370000",
    "level": "2"
}, {"id": "370900", "name": "泰安市", "shortName": "泰安", "parentId": "370000", "level": "2"}, {
    "id": "371000",
    "name": "威海市",
    "shortName": "威海",
    "parentId": "370000",
    "level": "2"
}, {"id": "371100", "name": "日照市", "shortName": "日照", "parentId": "370000", "level": "2"}, {
    "id": "371200",
    "name": "莱芜市",
    "shortName": "莱芜",
    "parentId": "370000",
    "level": "2"
}, {"id": "371300", "name": "临沂市", "shortName": "临沂", "parentId": "370000", "level": "2"}, {
    "id": "371400",
    "name": "德州市",
    "shortName": "德州",
    "parentId": "370000",
    "level": "2"
}, {"id": "371500", "name": "聊城市", "shortName": "聊城", "parentId": "370000", "level": "2"}, {
    "id": "371600",
    "name": "滨州市",
    "shortName": "滨州",
    "parentId": "370000",
    "level": "2"
}, {"id": "371700", "name": "菏泽市", "shortName": "菏泽", "parentId": "370000", "level": "2"}, {
    "id": "410000",
    "name": "河南省",
    "shortName": "河南",
    "parentId": "100000",
    "level": "1"
}, {"id": "410100", "name": "郑州市", "shortName": "郑州", "parentId": "410000", "level": "2"}, {
    "id": "410200",
    "name": "开封市",
    "shortName": "开封",
    "parentId": "410000",
    "level": "2"
}, {"id": "410300", "name": "洛阳市", "shortName": "洛阳", "parentId": "410000", "level": "2"}, {
    "id": "410400",
    "name": "平顶山市",
    "shortName": "平顶山",
    "parentId": "410000",
    "level": "2"
}, {"id": "410500", "name": "安阳市", "shortName": "安阳", "parentId": "410000", "level": "2"}, {
    "id": "410600",
    "name": "鹤壁市",
    "shortName": "鹤壁",
    "parentId": "410000",
    "level": "2"
}, {"id": "410700", "name": "新乡市", "shortName": "新乡", "parentId": "410000", "level": "2"}, {
    "id": "410800",
    "name": "焦作市",
    "shortName": "焦作",
    "parentId": "410000",
    "level": "2"
}, {"id": "410900", "name": "濮阳市", "shortName": "濮阳", "parentId": "410000", "level": "2"}, {
    "id": "411000",
    "name": "许昌市",
    "shortName": "许昌",
    "parentId": "410000",
    "level": "2"
}, {"id": "411100", "name": "漯河市", "shortName": "漯河", "parentId": "410000", "level": "2"}, {
    "id": "411200",
    "name": "三门峡市",
    "shortName": "三门峡",
    "parentId": "410000",
    "level": "2"
}, {"id": "411300", "name": "南阳市", "shortName": "南阳", "parentId": "410000", "level": "2"}, {
    "id": "411400",
    "name": "商丘市",
    "shortName": "商丘",
    "parentId": "410000",
    "level": "2"
}, {"id": "411500", "name": "信阳市", "shortName": "信阳", "parentId": "410000", "level": "2"}, {
    "id": "411600",
    "name": "周口市",
    "shortName": "周口",
    "parentId": "410000",
    "level": "2"
}, {"id": "411700", "name": "驻马店市", "shortName": "驻马店", "parentId": "410000", "level": "2"}, {
    "id": "419000",
    "name": "直辖县级",
    "shortName": "直辖县",
    "parentId": "410000",
    "level": "2"
}, {"id": "420000", "name": "湖北省", "shortName": "湖北", "parentId": "100000", "level": "1"}, {
    "id": "420100",
    "name": "武汉市",
    "shortName": "武汉",
    "parentId": "420000",
    "level": "2"
}, {"id": "420200", "name": "黄石市", "shortName": "黄石", "parentId": "420000", "level": "2"}, {
    "id": "420300",
    "name": "十堰市",
    "shortName": "十堰",
    "parentId": "420000",
    "level": "2"
}, {"id": "420500", "name": "宜昌市", "shortName": "宜昌", "parentId": "420000", "level": "2"}, {
    "id": "420600",
    "name": "襄阳市",
    "shortName": "襄阳",
    "parentId": "420000",
    "level": "2"
}, {"id": "420700", "name": "鄂州市", "shortName": "鄂州", "parentId": "420000", "level": "2"}, {
    "id": "420800",
    "name": "荆门市",
    "shortName": "荆门",
    "parentId": "420000",
    "level": "2"
}, {"id": "420900", "name": "孝感市", "shortName": "孝感", "parentId": "420000", "level": "2"}, {
    "id": "421000",
    "name": "荆州市",
    "shortName": "荆州",
    "parentId": "420000",
    "level": "2"
}, {"id": "421100", "name": "黄冈市", "shortName": "黄冈", "parentId": "420000", "level": "2"}, {
    "id": "421200",
    "name": "咸宁市",
    "shortName": "咸宁",
    "parentId": "420000",
    "level": "2"
}, {"id": "421300", "name": "随州市", "shortName": "随州", "parentId": "420000", "level": "2"}, {
    "id": "422800",
    "name": "恩施土家族苗族自治州",
    "shortName": "恩施",
    "parentId": "420000",
    "level": "2"
}, {"id": "429000", "name": "直辖县级", "shortName": "直辖县", "parentId": "420000", "level": "2"}, {
    "id": "430000",
    "name": "湖南省",
    "shortName": "湖南",
    "parentId": "100000",
    "level": "1"
}, {"id": "430100", "name": "长沙市", "shortName": "长沙", "parentId": "430000", "level": "2"}, {
    "id": "430200",
    "name": "株洲市",
    "shortName": "株洲",
    "parentId": "430000",
    "level": "2"
}, {"id": "430300", "name": "湘潭市", "shortName": "湘潭", "parentId": "430000", "level": "2"}, {
    "id": "430400",
    "name": "衡阳市",
    "shortName": "衡阳",
    "parentId": "430000",
    "level": "2"
}, {"id": "430500", "name": "邵阳市", "shortName": "邵阳", "parentId": "430000", "level": "2"}, {
    "id": "430600",
    "name": "岳阳市",
    "shortName": "岳阳",
    "parentId": "430000",
    "level": "2"
}, {"id": "430700", "name": "常德市", "shortName": "常德", "parentId": "430000", "level": "2"}, {
    "id": "430800",
    "name": "张家界市",
    "shortName": "张家界",
    "parentId": "430000",
    "level": "2"
}, {"id": "430900", "name": "益阳市", "shortName": "益阳", "parentId": "430000", "level": "2"}, {
    "id": "431000",
    "name": "郴州市",
    "shortName": "郴州",
    "parentId": "430000",
    "level": "2"
}, {"id": "431100", "name": "永州市", "shortName": "永州", "parentId": "430000", "level": "2"}, {
    "id": "431200",
    "name": "怀化市",
    "shortName": "怀化",
    "parentId": "430000",
    "level": "2"
}, {"id": "431300", "name": "娄底市", "shortName": "娄底", "parentId": "430000", "level": "2"}, {
    "id": "433100",
    "name": "湘西土家族苗族自治州",
    "shortName": "湘西",
    "parentId": "430000",
    "level": "2"
}, {"id": "440000", "name": "广东省", "shortName": "广东", "parentId": "100000", "level": "1"}, {
    "id": "440100",
    "name": "广州市",
    "shortName": "广州",
    "parentId": "440000",
    "level": "2"
}, {"id": "440200", "name": "韶关市", "shortName": "韶关", "parentId": "440000", "level": "2"}, {
    "id": "440300",
    "name": "深圳市",
    "shortName": "深圳",
    "parentId": "440000",
    "level": "2"
}, {"id": "440400", "name": "珠海市", "shortName": "珠海", "parentId": "440000", "level": "2"}, {
    "id": "440500",
    "name": "汕头市",
    "shortName": "汕头",
    "parentId": "440000",
    "level": "2"
}, {"id": "440600", "name": "佛山市", "shortName": "佛山", "parentId": "440000", "level": "2"}, {
    "id": "440700",
    "name": "江门市",
    "shortName": "江门",
    "parentId": "440000",
    "level": "2"
}, {"id": "440800", "name": "湛江市", "shortName": "湛江", "parentId": "440000", "level": "2"}, {
    "id": "440900",
    "name": "茂名市",
    "shortName": "茂名",
    "parentId": "440000",
    "level": "2"
}, {"id": "441200", "name": "肇庆市", "shortName": "肇庆", "parentId": "440000", "level": "2"}, {
    "id": "441300",
    "name": "惠州市",
    "shortName": "惠州",
    "parentId": "440000",
    "level": "2"
}, {"id": "441400", "name": "梅州市", "shortName": "梅州", "parentId": "440000", "level": "2"}, {
    "id": "441500",
    "name": "汕尾市",
    "shortName": "汕尾",
    "parentId": "440000",
    "level": "2"
}, {"id": "441600", "name": "河源市", "shortName": "河源", "parentId": "440000", "level": "2"}, {
    "id": "441700",
    "name": "阳江市",
    "shortName": "阳江",
    "parentId": "440000",
    "level": "2"
}, {"id": "441800", "name": "清远市", "shortName": "清远", "parentId": "440000", "level": "2"}, {
    "id": "441900",
    "name": "东莞市",
    "shortName": "东莞",
    "parentId": "440000",
    "level": "2"
}, {"id": "442000", "name": "中山市", "shortName": "中山", "parentId": "440000", "level": "2"}, {
    "id": "445100",
    "name": "潮州市",
    "shortName": "潮州",
    "parentId": "440000",
    "level": "2"
}, {"id": "445200", "name": "揭阳市", "shortName": "揭阳", "parentId": "440000", "level": "2"}, {
    "id": "445300",
    "name": "云浮市",
    "shortName": "云浮",
    "parentId": "440000",
    "level": "2"
}, {"id": "450000", "name": "广西壮族自治区", "shortName": "广西", "parentId": "100000", "level": "1"}, {
    "id": "450100",
    "name": "南宁市",
    "shortName": "南宁",
    "parentId": "450000",
    "level": "2"
}, {"id": "450200", "name": "柳州市", "shortName": "柳州", "parentId": "450000", "level": "2"}, {
    "id": "450300",
    "name": "桂林市",
    "shortName": "桂林",
    "parentId": "450000",
    "level": "2"
}, {"id": "450400", "name": "梧州市", "shortName": "梧州", "parentId": "450000", "level": "2"}, {
    "id": "450500",
    "name": "北海市",
    "shortName": "北海",
    "parentId": "450000",
    "level": "2"
}, {"id": "450600", "name": "防城港市", "shortName": "防城港", "parentId": "450000", "level": "2"}, {
    "id": "450700",
    "name": "钦州市",
    "shortName": "钦州",
    "parentId": "450000",
    "level": "2"
}, {"id": "450800", "name": "贵港市", "shortName": "贵港", "parentId": "450000", "level": "2"}, {
    "id": "450900",
    "name": "玉林市",
    "shortName": "玉林",
    "parentId": "450000",
    "level": "2"
}, {"id": "451000", "name": "百色市", "shortName": "百色", "parentId": "450000", "level": "2"}, {
    "id": "451100",
    "name": "贺州市",
    "shortName": "贺州",
    "parentId": "450000",
    "level": "2"
}, {"id": "451200", "name": "河池市", "shortName": "河池", "parentId": "450000", "level": "2"}, {
    "id": "451300",
    "name": "来宾市",
    "shortName": "来宾",
    "parentId": "450000",
    "level": "2"
}, {"id": "451400", "name": "崇左市", "shortName": "崇左", "parentId": "450000", "level": "2"}, {
    "id": "460000",
    "name": "海南省",
    "shortName": "海南",
    "parentId": "100000",
    "level": "1"
}, {"id": "460100", "name": "海口市", "shortName": "海口", "parentId": "460000", "level": "2"}, {
    "id": "460200",
    "name": "三亚市",
    "shortName": "三亚",
    "parentId": "460000",
    "level": "2"
}, {"id": "460300", "name": "三沙市", "shortName": "三沙", "parentId": "460000", "level": "2"}, {
    "id": "469000",
    "name": "直辖县级",
    "shortName": "直辖县",
    "parentId": "460000",
    "level": "2"
}, {"id": "500000", "name": "重庆市", "shortName": "重庆", "parentId": "100000", "level": "1"}, {
    "id": "500100",
    "name": "重庆市",
    "shortName": "重庆",
    "parentId": "500000",
    "level": "2"
}, {"id": "500300", "name": "两江新区", "shortName": "两江新区", "parentId": "500000", "level": "2"}, {
    "id": "510000",
    "name": "四川省",
    "shortName": "四川",
    "parentId": "100000",
    "level": "1"
}, {"id": "510100", "name": "成都市", "shortName": "成都", "parentId": "510000", "level": "2"}, {
    "id": "510300",
    "name": "自贡市",
    "shortName": "自贡",
    "parentId": "510000",
    "level": "2"
}, {"id": "510400", "name": "攀枝花市", "shortName": "攀枝花", "parentId": "510000", "level": "2"}, {
    "id": "510500",
    "name": "泸州市",
    "shortName": "泸州",
    "parentId": "510000",
    "level": "2"
}, {"id": "510600", "name": "德阳市", "shortName": "德阳", "parentId": "510000", "level": "2"}, {
    "id": "510700",
    "name": "绵阳市",
    "shortName": "绵阳",
    "parentId": "510000",
    "level": "2"
}, {"id": "510800", "name": "广元市", "shortName": "广元", "parentId": "510000", "level": "2"}, {
    "id": "510900",
    "name": "遂宁市",
    "shortName": "遂宁",
    "parentId": "510000",
    "level": "2"
}, {"id": "511000", "name": "内江市", "shortName": "内江", "parentId": "510000", "level": "2"}, {
    "id": "511100",
    "name": "乐山市",
    "shortName": "乐山",
    "parentId": "510000",
    "level": "2"
}, {"id": "511300", "name": "南充市", "shortName": "南充", "parentId": "510000", "level": "2"}, {
    "id": "511400",
    "name": "眉山市",
    "shortName": "眉山",
    "parentId": "510000",
    "level": "2"
}, {"id": "511500", "name": "宜宾市", "shortName": "宜宾", "parentId": "510000", "level": "2"}, {
    "id": "511600",
    "name": "广安市",
    "shortName": "广安",
    "parentId": "510000",
    "level": "2"
}, {"id": "511700", "name": "达州市", "shortName": "达州", "parentId": "510000", "level": "2"}, {
    "id": "511800",
    "name": "雅安市",
    "shortName": "雅安",
    "parentId": "510000",
    "level": "2"
}, {"id": "511900", "name": "巴中市", "shortName": "巴中", "parentId": "510000", "level": "2"}, {
    "id": "512000",
    "name": "资阳市",
    "shortName": "资阳",
    "parentId": "510000",
    "level": "2"
}, {"id": "513200", "name": "阿坝藏族羌族自治州", "shortName": "阿坝", "parentId": "510000", "level": "2"}, {
    "id": "513300",
    "name": "甘孜藏族自治州",
    "shortName": "甘孜",
    "parentId": "510000",
    "level": "2"
}, {"id": "513400", "name": "凉山彝族自治州", "shortName": "凉山", "parentId": "510000", "level": "2"}, {
    "id": "520000",
    "name": "贵州省",
    "shortName": "贵州",
    "parentId": "100000",
    "level": "1"
}, {"id": "520100", "name": "贵阳市", "shortName": "贵阳", "parentId": "520000", "level": "2"}, {
    "id": "520200",
    "name": "六盘水市",
    "shortName": "六盘水",
    "parentId": "520000",
    "level": "2"
}, {"id": "520300", "name": "遵义市", "shortName": "遵义", "parentId": "520000", "level": "2"}, {
    "id": "520400",
    "name": "安顺市",
    "shortName": "安顺",
    "parentId": "520000",
    "level": "2"
}, {"id": "520500", "name": "毕节市", "shortName": "毕节", "parentId": "520000", "level": "2"}, {
    "id": "520600",
    "name": "铜仁市",
    "shortName": "铜仁",
    "parentId": "520000",
    "level": "2"
}, {"id": "522300", "name": "黔西南布依族苗族自治州", "shortName": "黔西南", "parentId": "520000", "level": "2"}, {
    "id": "522600",
    "name": "黔东南苗族侗族自治州",
    "shortName": "黔东南",
    "parentId": "520000",
    "level": "2"
}, {"id": "522700", "name": "黔南布依族苗族自治州", "shortName": "黔南", "parentId": "520000", "level": "2"}, {
    "id": "530000",
    "name": "云南省",
    "shortName": "云南",
    "parentId": "100000",
    "level": "1"
}, {"id": "530100", "name": "昆明市", "shortName": "昆明", "parentId": "530000", "level": "2"}, {
    "id": "530300",
    "name": "曲靖市",
    "shortName": "曲靖",
    "parentId": "530000",
    "level": "2"
}, {"id": "530400", "name": "玉溪市", "shortName": "玉溪", "parentId": "530000", "level": "2"}, {
    "id": "530500",
    "name": "保山市",
    "shortName": "保山",
    "parentId": "530000",
    "level": "2"
}, {"id": "530600", "name": "昭通市", "shortName": "昭通", "parentId": "530000", "level": "2"}, {
    "id": "530700",
    "name": "丽江市",
    "shortName": "丽江",
    "parentId": "530000",
    "level": "2"
}, {"id": "530800", "name": "普洱市", "shortName": "普洱", "parentId": "530000", "level": "2"}, {
    "id": "530900",
    "name": "临沧市",
    "shortName": "临沧",
    "parentId": "530000",
    "level": "2"
}, {"id": "532300", "name": "楚雄彝族自治州", "shortName": "楚雄", "parentId": "530000", "level": "2"}, {
    "id": "532500",
    "name": "红河哈尼族彝族自治州",
    "shortName": "红河",
    "parentId": "530000",
    "level": "2"
}, {"id": "532600", "name": "文山壮族苗族自治州", "shortName": "文山", "parentId": "530000", "level": "2"}, {
    "id": "532800",
    "name": "西双版纳傣族自治州",
    "shortName": "西双版纳",
    "parentId": "530000",
    "level": "2"
}, {"id": "532900", "name": "大理白族自治州", "shortName": "大理", "parentId": "530000", "level": "2"}, {
    "id": "533100",
    "name": "德宏傣族景颇族自治州",
    "shortName": "德宏",
    "parentId": "530000",
    "level": "2"
}, {"id": "533300", "name": "怒江傈僳族自治州", "shortName": "怒江", "parentId": "530000", "level": "2"}, {
    "id": "533400",
    "name": "迪庆藏族自治州",
    "shortName": "迪庆",
    "parentId": "530000",
    "level": "2"
}, {"id": "540000", "name": "西藏自治区", "shortName": "西藏", "parentId": "100000", "level": "1"}, {
    "id": "540100",
    "name": "拉萨市",
    "shortName": "拉萨",
    "parentId": "540000",
    "level": "2"
}, {"id": "540200", "name": "日喀则市", "shortName": "日喀则", "parentId": "540000", "level": "2"}, {
    "id": "540300",
    "name": "昌都市",
    "shortName": "昌都",
    "parentId": "540000",
    "level": "2"
}, {"id": "542200", "name": "山南地区", "shortName": "山南", "parentId": "540000", "level": "2"}, {
    "id": "542400",
    "name": "那曲地区",
    "shortName": "那曲",
    "parentId": "540000",
    "level": "2"
}, {"id": "542500", "name": "阿里地区", "shortName": "阿里", "parentId": "540000", "level": "2"}, {
    "id": "542600",
    "name": "林芝地区",
    "shortName": "林芝",
    "parentId": "540000",
    "level": "2"
}, {"id": "610000", "name": "陕西省", "shortName": "陕西", "parentId": "100000", "level": "1"}, {
    "id": "610100",
    "name": "西安市",
    "shortName": "西安",
    "parentId": "610000",
    "level": "2"
}, {"id": "610200", "name": "铜川市", "shortName": "铜川", "parentId": "610000", "level": "2"}, {
    "id": "610300",
    "name": "宝鸡市",
    "shortName": "宝鸡",
    "parentId": "610000",
    "level": "2"
}, {"id": "610400", "name": "咸阳市", "shortName": "咸阳", "parentId": "610000", "level": "2"}, {
    "id": "610500",
    "name": "渭南市",
    "shortName": "渭南",
    "parentId": "610000",
    "level": "2"
}, {"id": "610600", "name": "延安市", "shortName": "延安", "parentId": "610000", "level": "2"}, {
    "id": "610700",
    "name": "汉中市",
    "shortName": "汉中",
    "parentId": "610000",
    "level": "2"
}, {"id": "610800", "name": "榆林市", "shortName": "榆林", "parentId": "610000", "level": "2"}, {
    "id": "610900",
    "name": "安康市",
    "shortName": "安康",
    "parentId": "610000",
    "level": "2"
}, {"id": "611000", "name": "商洛市", "shortName": "商洛", "parentId": "610000", "level": "2"}, {
    "id": "611100",
    "name": "西咸新区",
    "shortName": "西咸",
    "parentId": "610000",
    "level": "2"
}, {"id": "620000", "name": "甘肃省", "shortName": "甘肃", "parentId": "100000", "level": "1"}, {
    "id": "620100",
    "name": "兰州市",
    "shortName": "兰州",
    "parentId": "620000",
    "level": "2"
}, {"id": "620200", "name": "嘉峪关市", "shortName": "嘉峪关", "parentId": "620000", "level": "2"}, {
    "id": "620300",
    "name": "金昌市",
    "shortName": "金昌",
    "parentId": "620000",
    "level": "2"
}, {"id": "620400", "name": "白银市", "shortName": "白银", "parentId": "620000", "level": "2"}, {
    "id": "620500",
    "name": "天水市",
    "shortName": "天水",
    "parentId": "620000",
    "level": "2"
}, {"id": "620600", "name": "武威市", "shortName": "武威", "parentId": "620000", "level": "2"}, {
    "id": "620700",
    "name": "张掖市",
    "shortName": "张掖",
    "parentId": "620000",
    "level": "2"
}, {"id": "620800", "name": "平凉市", "shortName": "平凉", "parentId": "620000", "level": "2"}, {
    "id": "620900",
    "name": "酒泉市",
    "shortName": "酒泉",
    "parentId": "620000",
    "level": "2"
}, {"id": "621000", "name": "庆阳市", "shortName": "庆阳", "parentId": "620000", "level": "2"}, {
    "id": "621100",
    "name": "定西市",
    "shortName": "定西",
    "parentId": "620000",
    "level": "2"
}, {"id": "621200", "name": "陇南市", "shortName": "陇南", "parentId": "620000", "level": "2"}, {
    "id": "622900",
    "name": "临夏回族自治州",
    "shortName": "临夏",
    "parentId": "620000",
    "level": "2"
}, {"id": "623000", "name": "甘南藏族自治州", "shortName": "甘南", "parentId": "620000", "level": "2"}, {
    "id": "630000",
    "name": "青海省",
    "shortName": "青海",
    "parentId": "100000",
    "level": "1"
}, {"id": "630100", "name": "西宁市", "shortName": "西宁", "parentId": "630000", "level": "2"}, {
    "id": "630200",
    "name": "海东市",
    "shortName": "海东",
    "parentId": "630000",
    "level": "2"
}, {"id": "632200", "name": "海北藏族自治州", "shortName": "海北", "parentId": "630000", "level": "2"}, {
    "id": "632300",
    "name": "黄南藏族自治州",
    "shortName": "黄南",
    "parentId": "630000",
    "level": "2"
}, {"id": "632500", "name": "海南藏族自治州", "shortName": "海南", "parentId": "630000", "level": "2"}, {
    "id": "632600",
    "name": "果洛藏族自治州",
    "shortName": "果洛",
    "parentId": "630000",
    "level": "2"
}, {"id": "632700", "name": "玉树藏族自治州", "shortName": "玉树", "parentId": "630000", "level": "2"}, {
    "id": "632800",
    "name": "海西蒙古族藏族自治州",
    "shortName": "海西",
    "parentId": "630000",
    "level": "2"
}, {"id": "640000", "name": "宁夏回族自治区", "shortName": "宁夏", "parentId": "100000", "level": "1"}, {
    "id": "640100",
    "name": "银川市",
    "shortName": "银川",
    "parentId": "640000",
    "level": "2"
}, {"id": "640200", "name": "石嘴山市", "shortName": "石嘴山", "parentId": "640000", "level": "2"}, {
    "id": "640300",
    "name": "吴忠市",
    "shortName": "吴忠",
    "parentId": "640000",
    "level": "2"
}, {"id": "640400", "name": "固原市", "shortName": "固原", "parentId": "640000", "level": "2"}, {
    "id": "640500",
    "name": "中卫市",
    "shortName": "中卫",
    "parentId": "640000",
    "level": "2"
}, {"id": "650000", "name": "新疆维吾尔自治区", "shortName": "新疆", "parentId": "100000", "level": "1"}, {
    "id": "650100",
    "name": "乌鲁木齐市",
    "shortName": "乌鲁木齐",
    "parentId": "650000",
    "level": "2"
}, {"id": "650200", "name": "克拉玛依市", "shortName": "克拉玛依", "parentId": "650000", "level": "2"}, {
    "id": "652100",
    "name": "吐鲁番地区",
    "shortName": "吐鲁番",
    "parentId": "650000",
    "level": "2"
}, {"id": "652200", "name": "哈密地区", "shortName": "哈密", "parentId": "650000", "level": "2"}, {
    "id": "652300",
    "name": "昌吉回族自治州",
    "shortName": "昌吉",
    "parentId": "650000",
    "level": "2"
}, {"id": "652700", "name": "博尔塔拉蒙古自治州", "shortName": "博尔塔拉", "parentId": "650000", "level": "2"}, {
    "id": "652800",
    "name": "巴音郭楞蒙古自治州",
    "shortName": "巴音郭楞",
    "parentId": "650000",
    "level": "2"
}, {"id": "652900", "name": "阿克苏地区", "shortName": "阿克苏", "parentId": "650000", "level": "2"}, {
    "id": "653000",
    "name": "克孜勒苏柯尔克孜自治州",
    "shortName": "克孜勒苏",
    "parentId": "650000",
    "level": "2"
}, {"id": "653100", "name": "喀什地区", "shortName": "喀什", "parentId": "650000", "level": "2"}, {
    "id": "653200",
    "name": "和田地区",
    "shortName": "和田",
    "parentId": "650000",
    "level": "2"
}, {"id": "654000", "name": "伊犁哈萨克自治州", "shortName": "伊犁", "parentId": "650000", "level": "2"}, {
    "id": "654200",
    "name": "塔城地区",
    "shortName": "塔城",
    "parentId": "650000",
    "level": "2"
}, {"id": "654300", "name": "阿勒泰地区", "shortName": "阿勒泰", "parentId": "650000", "level": "2"}, {
    "id": "659000",
    "name": "直辖县级",
    "shortName": "直辖县",
    "parentId": "650000",
    "level": "2"
}, {"id": "710000", "name": "台湾省", "shortName": "台湾", "parentId": "100000", "level": "1"}, {
    "id": "710100",
    "name": "台北市",
    "shortName": "台北",
    "parentId": "710000",
    "level": "2"
}, {"id": "710200", "name": "高雄市", "shortName": "高雄", "parentId": "710000", "level": "2"}, {
    "id": "710300",
    "name": "基隆市",
    "shortName": "基隆",
    "parentId": "710000",
    "level": "2"
}, {"id": "710400", "name": "台中市", "shortName": "台中", "parentId": "710000", "level": "2"}, {
    "id": "710500",
    "name": "台南市",
    "shortName": "台南",
    "parentId": "710000",
    "level": "2"
}, {"id": "710600", "name": "新竹市", "shortName": "新竹", "parentId": "710000", "level": "2"}, {
    "id": "710700",
    "name": "嘉义市",
    "shortName": "嘉义",
    "parentId": "710000",
    "level": "2"
}, {"id": "710800", "name": "新北市", "shortName": "新北", "parentId": "710000", "level": "2"}, {
    "id": "712200",
    "name": "宜兰县",
    "shortName": "宜兰",
    "parentId": "710000",
    "level": "2"
}, {"id": "712300", "name": "桃园县", "shortName": "桃园", "parentId": "710000", "level": "2"}, {
    "id": "712400",
    "name": "新竹县",
    "shortName": "新竹",
    "parentId": "710000",
    "level": "2"
}, {"id": "712500", "name": "苗栗县", "shortName": "苗栗", "parentId": "710000", "level": "2"}, {
    "id": "712700",
    "name": "彰化县",
    "shortName": "彰化",
    "parentId": "710000",
    "level": "2"
}, {"id": "712800", "name": "南投县", "shortName": "南投", "parentId": "710000", "level": "2"}, {
    "id": "712900",
    "name": "云林县",
    "shortName": "云林",
    "parentId": "710000",
    "level": "2"
}, {"id": "713000", "name": "嘉义县", "shortName": "嘉义", "parentId": "710000", "level": "2"}, {
    "id": "713300",
    "name": "屏东县",
    "shortName": "屏东",
    "parentId": "710000",
    "level": "2"
}, {"id": "713400", "name": "台东县", "shortName": "台东", "parentId": "710000", "level": "2"}, {
    "id": "713500",
    "name": "花莲县",
    "shortName": "花莲",
    "parentId": "710000",
    "level": "2"
}, {"id": "713600", "name": "澎湖县", "shortName": "澎湖", "parentId": "710000", "level": "2"}, {
    "id": "713700",
    "name": "金门县",
    "shortName": "金门",
    "parentId": "710000",
    "level": "2"
}, {"id": "713800", "name": "连江县", "shortName": "连江", "parentId": "710000", "level": "2"}, {
    "id": "810000",
    "name": "香港特别行政区",
    "shortName": "香港",
    "parentId": "100000",
    "level": "1"
}, {"id": "810100", "name": "香港岛", "shortName": "香港岛", "parentId": "810000", "level": "2"}, {
    "id": "810200",
    "name": "九龙",
    "shortName": "九龙",
    "parentId": "810000",
    "level": "2"
}, {"id": "810300", "name": "新界", "shortName": "新界", "parentId": "810000", "level": "2"}, {
    "id": "820000",
    "name": "澳门特别行政区",
    "shortName": "澳门",
    "parentId": "100000",
    "level": "1"
}, {"id": "820100", "name": "澳门半岛", "shortName": "澳门半岛", "parentId": "820000", "level": "2"}, {
    "id": "820200",
    "name": "氹仔岛",
    "shortName": "氹仔岛",
    "parentId": "820000",
    "level": "2"
}, {"id": "820300", "name": "路环岛", "shortName": "路环岛", "parentId": "820000", "level": "2"}];


var city3 = [{
    "name": "北京市",
    "child": [{
        "name": "北京市",
        "child": [{"name": "东城区"}, {"name": "西城区"}, {"name": "崇文区"}, {"name": "宣武区"}, {"name": "朝阳区"}, {"name": "丰台区"}, {"name": "石景山区"}, {"name": "海淀区"}, {"name": "门头沟区"}, {"name": "房山区"}, {"name": "通州区"}, {"name": "顺义区"}, {"name": "昌平区"}, {"name": "大兴区"}, {"name": "怀柔区"}, {"name": "平谷区"}, {"name": "密云县"}, {"name": "延庆县"}],
        "city_id": [0, 0]
    }],
    "id": 0
}, {
    "name": "天津市",
    "child": [{
        "name": "天津市",
        "child": [{"name": "和平区"}, {"name": "河东区"}, {"name": "河西区"}, {"name": "南开区"}, {"name": "河北区"}, {"name": "红桥区"}, {"name": "塘沽区"}, {"name": "汉沽区"}, {"name": "大港区"}, {"name": "东丽区"}, {"name": "西青区"}, {"name": "津南区"}, {"name": "北辰区"}, {"name": "武清区"}, {"name": "宝坻区"}, {"name": "宁河县"}, {"name": "静海县"}, {"name": "蓟县"}],
        "city_id": [1, 0]
    }],
    "id": 1
}, {
    "name": "河北省",
    "child": [{
        "name": "石家庄市",
        "child": [{"name": "井陉县"}, {"name": "井陉矿区"}, {"name": "元氏县"}, {"name": "平山县"}, {"name": "新乐市"}, {"name": "新华区"}, {"name": "无极县"}, {"name": "晋州市"}, {"name": "栾城县"}, {"name": "桥东区"}, {"name": "桥西区"}, {"name": "正定县"}, {"name": "深泽县"}, {"name": "灵寿县"}, {"name": "藁城市"}, {"name": "行唐县"}, {"name": "裕华区"}, {"name": "赞皇县"}, {"name": "赵县"}, {"name": "辛集市"}, {"name": "长安区"}, {"name": "高邑县"}, {"name": "鹿泉市"}],
        "city_id": [2, 0]
    }, {
        "name": "唐山市",
        "child": [{"name": "丰南区"}, {"name": "丰润区"}, {"name": "乐亭县"}, {"name": "古冶区"}, {"name": "唐海县"}, {"name": "开平区"}, {"name": "滦南县"}, {"name": "滦县"}, {"name": "玉田县"}, {"name": "路北区"}, {"name": "路南区"}, {"name": "迁安市"}, {"name": "迁西县"}, {"name": "遵化市"}],
        "city_id": [2, 1]
    }, {
        "name": "秦皇岛市",
        "child": [{"name": "北戴河区"}, {"name": "卢龙县"}, {"name": "山海关区"}, {"name": "抚宁县"}, {"name": "昌黎县"}, {"name": "海港区"}, {"name": "青龙满族自治县"}],
        "city_id": [2, 2]
    }, {
        "name": "邯郸市",
        "child": [{"name": "丛台区"}, {"name": "临漳县"}, {"name": "复兴区"}, {"name": "大名县"}, {"name": "峰峰矿区"}, {"name": "广平县"}, {"name": "成安县"}, {"name": "曲周县"}, {"name": "武安市"}, {"name": "永年县"}, {"name": "涉县"}, {"name": "磁县"}, {"name": "肥乡县"}, {"name": "邯山区"}, {"name": "邯郸县"}, {"name": "邱县"}, {"name": "馆陶县"}, {"name": "魏县"}, {"name": "鸡泽县"}],
        "city_id": [2, 3]
    }, {
        "name": "邢台市",
        "child": [{"name": "临城县"}, {"name": "临西县"}, {"name": "任县"}, {"name": "内丘县"}, {"name": "南和县"}, {"name": "南宫市"}, {"name": "威县"}, {"name": "宁晋县"}, {"name": "巨鹿县"}, {"name": "平乡县"}, {"name": "广宗县"}, {"name": "新河县"}, {"name": "柏乡县"}, {"name": "桥东区"}, {"name": "桥西区"}, {"name": "沙河市"}, {"name": "清河县"}, {"name": "邢台县"}, {"name": "隆尧县"}],
        "city_id": [2, 4]
    }, {
        "name": "保定市",
        "child": [{"name": "北市区"}, {"name": "南市区"}, {"name": "博野县"}, {"name": "唐县"}, {"name": "安国市"}, {"name": "安新县"}, {"name": "定兴县"}, {"name": "定州市"}, {"name": "容城县"}, {"name": "徐水县"}, {"name": "新市区"}, {"name": "易县"}, {"name": "曲阳县"}, {"name": "望都县"}, {"name": "涞水县"}, {"name": "涞源县"}, {"name": "涿州市"}, {"name": "清苑县"}, {"name": "满城县"}, {"name": "蠡县"}, {"name": "阜平县"}, {"name": "雄县"}, {"name": "顺平县"}, {"name": "高碑店市"}, {"name": "高阳县"}],
        "city_id": [2, 5]
    }, {
        "name": "张家口市",
        "child": [{"name": "万全县"}, {"name": "下花园区"}, {"name": "宣化区"}, {"name": "宣化县"}, {"name": "尚义县"}, {"name": "崇礼县"}, {"name": "康保县"}, {"name": "张北县"}, {"name": "怀安县"}, {"name": "怀来县"}, {"name": "桥东区"}, {"name": "桥西区"}, {"name": "沽源县"}, {"name": "涿鹿县"}, {"name": "蔚县"}, {"name": "赤城县"}, {"name": "阳原县"}],
        "city_id": [2, 6]
    }, {
        "name": "承德市",
        "child": [{"name": "丰宁满族自治县"}, {"name": "兴隆县"}, {"name": "双桥区"}, {"name": "双滦区"}, {"name": "围场满族蒙古族自治县"}, {"name": "宽城满族自治县"}, {"name": "平泉县"}, {"name": "承德县"}, {"name": "滦平县"}, {"name": "隆化县"}, {"name": "鹰手营子矿区"}],
        "city_id": [2, 7]
    }, {
        "name": "衡水市",
        "child": [{"name": "冀州市"}, {"name": "安平县"}, {"name": "故城县"}, {"name": "景县"}, {"name": "枣强县"}, {"name": "桃城区"}, {"name": "武强县"}, {"name": "武邑县"}, {"name": "深州市"}, {"name": "阜城县"}, {"name": "饶阳县"}],
        "city_id": [2, 8]
    }, {
        "name": "廊坊市",
        "child": [{"name": "三河市"}, {"name": "固安县"}, {"name": "大厂回族自治县"}, {"name": "大城县"}, {"name": "安次区"}, {"name": "广阳区"}, {"name": "文安县"}, {"name": "永清县"}, {"name": "霸州市"}, {"name": "香河县"}],
        "city_id": [2, 9]
    }, {
        "name": "沧州市",
        "child": [{"name": "东光县"}, {"name": "任丘市"}, {"name": "南皮县"}, {"name": "吴桥县"}, {"name": "孟村回族自治县"}, {"name": "新华区"}, {"name": "沧县"}, {"name": "河间市"}, {"name": "泊头市"}, {"name": "海兴县"}, {"name": "献县"}, {"name": "盐山县"}, {"name": "肃宁县"}, {"name": "运河区"}, {"name": "青县"}, {"name": "黄骅市"}],
        "city_id": [2, 10]
    }],
    "id": 2
}, {
    "name": "山西省",
    "child": [{
        "name": "太原市",
        "child": [{"name": "万柏林区"}, {"name": "古交市"}, {"name": "娄烦县"}, {"name": "小店区"}, {"name": "尖草坪区"}, {"name": "晋源区"}, {"name": "杏花岭区"}, {"name": "清徐县"}, {"name": "迎泽区"}, {"name": "阳曲县"}],
        "city_id": [3, 0]
    }, {
        "name": "大同市",
        "child": [{"name": "南郊区"}, {"name": "城区"}, {"name": "大同县"}, {"name": "天镇县"}, {"name": "左云县"}, {"name": "广灵县"}, {"name": "新荣区"}, {"name": "浑源县"}, {"name": "灵丘县"}, {"name": "矿区"}, {"name": "阳高县"}],
        "city_id": [3, 1]
    }, {
        "name": "阳泉市",
        "child": [{"name": "城区"}, {"name": "平定县"}, {"name": "盂县"}, {"name": "矿区"}, {"name": "郊区"}],
        "city_id": [3, 2]
    }, {
        "name": "长治市",
        "child": [{"name": "城区"}, {"name": "壶关县"}, {"name": "屯留县"}, {"name": "平顺县"}, {"name": "武乡县"}, {"name": "沁县"}, {"name": "沁源县"}, {"name": "潞城市"}, {"name": "襄垣县"}, {"name": "郊区"}, {"name": "长子县"}, {"name": "长治县"}, {"name": "黎城县"}],
        "city_id": [3, 3]
    }, {
        "name": "晋城市",
        "child": [{"name": "城区"}, {"name": "沁水县"}, {"name": "泽州县"}, {"name": "阳城县"}, {"name": "陵川县"}, {"name": "高平市"}],
        "city_id": [3, 4]
    }, {
        "name": "朔州市",
        "child": [{"name": "右玉县"}, {"name": "山阴县"}, {"name": "平鲁区"}, {"name": "应县"}, {"name": "怀仁县"}, {"name": "朔城区"}],
        "city_id": [3, 5]
    }, {
        "name": "晋中市",
        "child": [{"name": "介休市"}, {"name": "和顺县"}, {"name": "太谷县"}, {"name": "寿阳县"}, {"name": "左权县"}, {"name": "平遥县"}, {"name": "昔阳县"}, {"name": "榆次区"}, {"name": "榆社县"}, {"name": "灵石县"}, {"name": "祁县"}],
        "city_id": [3, 6]
    }, {
        "name": "运城市",
        "child": [{"name": "万荣县"}, {"name": "临猗县"}, {"name": "垣曲县"}, {"name": "夏县"}, {"name": "平陆县"}, {"name": "新绛县"}, {"name": "永济市"}, {"name": "河津市"}, {"name": "盐湖区"}, {"name": "稷山县"}, {"name": "绛县"}, {"name": "芮城县"}, {"name": "闻喜县"}],
        "city_id": [3, 7]
    }, {
        "name": "忻州市",
        "child": [{"name": "五台县"}, {"name": "五寨县"}, {"name": "代县"}, {"name": "保德县"}, {"name": "偏关县"}, {"name": "原平市"}, {"name": "宁武县"}, {"name": "定襄县"}, {"name": "岢岚县"}, {"name": "忻府区"}, {"name": "河曲县"}, {"name": "神池县"}, {"name": "繁峙县"}, {"name": "静乐县"}],
        "city_id": [3, 8]
    }, {
        "name": "临汾市",
        "child": [{"name": "乡宁县"}, {"name": "侯马市"}, {"name": "古县"}, {"name": "吉县"}, {"name": "大宁县"}, {"name": "安泽县"}, {"name": "尧都区"}, {"name": "曲沃县"}, {"name": "永和县"}, {"name": "汾西县"}, {"name": "洪洞县"}, {"name": "浮山县"}, {"name": "翼城县"}, {"name": "蒲县"}, {"name": "襄汾县"}, {"name": "隰县"}, {"name": "霍州市"}],
        "city_id": [3, 9]
    }, {
        "name": "吕梁市",
        "child": [{"name": "中阳县"}, {"name": "临县"}, {"name": "交口县"}, {"name": "交城县"}, {"name": "兴县"}, {"name": "孝义市"}, {"name": "岚县"}, {"name": "文水县"}, {"name": "方山县"}, {"name": "柳林县"}, {"name": "汾阳市"}, {"name": "石楼县"}, {"name": "离石区"}],
        "city_id": [3, 10]
    }],
    "id": 3
}, {
    "name": "内蒙古自治区",
    "child": [{
        "name": "呼和浩特市",
        "child": [{"name": "和林格尔县"}, {"name": "回民区"}, {"name": "土默特左旗"}, {"name": "托克托县"}, {"name": "新城区"}, {"name": "武川县"}, {"name": "清水河县"}, {"name": "玉泉区"}, {"name": "赛罕区"}],
        "city_id": [4, 0]
    }, {
        "name": "包头市",
        "child": [{"name": "东河区"}, {"name": "九原区"}, {"name": "固阳县"}, {"name": "土默特右旗"}, {"name": "昆都仑区"}, {"name": "白云矿区"}, {"name": "石拐区"}, {"name": "达尔罕茂明安联合旗"}, {"name": "青山区"}],
        "city_id": [4, 1]
    }, {
        "name": "乌海市",
        "child": [{"name": "乌达区"}, {"name": "海勃湾区"}, {"name": "海南区"}],
        "city_id": [4, 2]
    }, {
        "name": "赤峰市",
        "child": [{"name": "元宝山区"}, {"name": "克什克腾旗"}, {"name": "喀喇沁旗"}, {"name": "宁城县"}, {"name": "巴林右旗"}, {"name": "巴林左旗"}, {"name": "敖汉旗"}, {"name": "松山区"}, {"name": "林西县"}, {"name": "红山区"}, {"name": "翁牛特旗"}, {"name": "阿鲁科尔沁旗"}],
        "city_id": [4, 3]
    }, {
        "name": "通辽市",
        "child": [{"name": "奈曼旗"}, {"name": "库伦旗"}, {"name": "开鲁县"}, {"name": "扎鲁特旗"}, {"name": "科尔沁区"}, {"name": "科尔沁左翼中旗"}, {"name": "科尔沁左翼后旗"}, {"name": "霍林郭勒市"}],
        "city_id": [4, 4]
    }, {
        "name": "鄂尔多斯市",
        "child": [{"name": "东胜区"}, {"name": "乌审旗"}, {"name": "伊金霍洛旗"}, {"name": "准格尔旗"}, {"name": "杭锦旗"}, {"name": "达拉特旗"}, {"name": "鄂东胜区"}, {"name": "鄂托克前旗"}, {"name": "鄂托克旗"}],
        "city_id": [4, 5]
    }, {
        "name": "呼伦贝尔市",
        "child": [{"name": "扎兰屯市"}, {"name": "新巴尔虎右旗"}, {"name": "新巴尔虎左旗"}, {"name": "根河市"}, {"name": "海拉尔区"}, {"name": "满洲里市"}, {"name": "牙克石市"}, {"name": "莫力达瓦达斡尔族自治旗"}, {"name": "鄂伦春自治旗"}, {"name": "鄂温克族自治旗"}, {"name": "阿荣旗"}, {"name": "陈巴尔虎旗"}, {"name": "额尔古纳市"}],
        "city_id": [4, 6]
    }, {
        "name": "巴彦淖尔市",
        "child": [{"name": "临河区"}, {"name": "乌拉特中旗"}, {"name": "乌拉特前旗"}, {"name": "乌拉特后旗"}, {"name": "五原县"}, {"name": "杭锦后旗"}, {"name": "磴口县"}],
        "city_id": [4, 7]
    }, {
        "name": "乌兰察布市",
        "child": [{"name": "丰镇市"}, {"name": "兴和县"}, {"name": "凉城县"}, {"name": "化德县"}, {"name": "卓资县"}, {"name": "商都县"}, {"name": "四子王旗"}, {"name": "察哈尔右翼中旗"}, {"name": "察哈尔右翼前旗"}, {"name": "察哈尔右翼后旗"}, {"name": "集宁区"}],
        "city_id": [4, 8]
    }, {
        "name": "兴安盟",
        "child": [{"name": "乌兰浩特市"}, {"name": "扎赉特旗"}, {"name": "科尔沁右翼中旗"}, {"name": "科尔沁右翼前旗"}, {"name": "突泉县"}, {"name": "阿尔山市"}],
        "city_id": [4, 9]
    }, {
        "name": "锡林郭勒盟",
        "child": [{"name": "东乌珠穆沁旗"}, {"name": "二连浩特市"}, {"name": "多伦县"}, {"name": "太仆寺旗"}, {"name": "正蓝旗"}, {"name": "正镶白旗"}, {"name": "苏尼特右旗"}, {"name": "苏尼特左旗"}, {"name": "西乌珠穆沁旗"}, {"name": "锡林浩特市"}, {"name": "镶黄旗"}, {"name": "阿巴嘎旗"}],
        "city_id": [4, 10]
    }, {"name": "阿拉善盟", "child": [{"name": "阿拉善右旗"}, {"name": "阿拉善左旗"}, {"name": "额济纳旗"}], "city_id": [4, 11]}],
    "id": 4
}, {
    "name": "辽宁省",
    "child": [{
        "name": "沈阳市",
        "child": [{"name": "东陵区"}, {"name": "于洪区"}, {"name": "和平区"}, {"name": "大东区"}, {"name": "康平县"}, {"name": "新民市"}, {"name": "沈北新区"}, {"name": "沈河区"}, {"name": "法库县"}, {"name": "皇姑区"}, {"name": "苏家屯区"}, {"name": "辽中县"}, {"name": "铁西区"}],
        "city_id": [5, 0]
    }, {
        "name": "大连市",
        "child": [{"name": "中山区"}, {"name": "庄河市"}, {"name": "旅顺口区"}, {"name": "普兰店市"}, {"name": "沙河口区"}, {"name": "瓦房店市"}, {"name": "甘井子区"}, {"name": "西岗区"}, {"name": "金州区"}, {"name": "长海县"}],
        "city_id": [5, 1]
    }, {
        "name": "鞍山市",
        "child": [{"name": "千山区"}, {"name": "台安县"}, {"name": "岫岩满族自治县"}, {"name": "海城市"}, {"name": "立山区"}, {"name": "铁东区"}, {"name": "铁西区"}],
        "city_id": [5, 2]
    }, {
        "name": "抚顺市",
        "child": [{"name": "东洲区"}, {"name": "抚顺县"}, {"name": "新宾满族自治县"}, {"name": "新抚区"}, {"name": "望花区"}, {"name": "清原满族自治县"}, {"name": "顺城区"}],
        "city_id": [5, 3]
    }, {
        "name": "本溪市",
        "child": [{"name": "南芬区"}, {"name": "平山区"}, {"name": "明山区"}, {"name": "本溪满族自治县"}, {"name": "桓仁满族自治县"}, {"name": "溪湖区"}],
        "city_id": [5, 4]
    }, {
        "name": "丹东市",
        "child": [{"name": "东港市"}, {"name": "元宝区"}, {"name": "凤城市"}, {"name": "宽甸满族自治县"}, {"name": "振兴区"}, {"name": "振安区"}],
        "city_id": [5, 5]
    }, {
        "name": "锦州市",
        "child": [{"name": "义县"}, {"name": "凌河区"}, {"name": "凌海市"}, {"name": "北镇市"}, {"name": "古塔区"}, {"name": "太和区"}, {"name": "黑山县"}],
        "city_id": [5, 6]
    }, {
        "name": "营口市",
        "child": [{"name": "大石桥市"}, {"name": "盖州市"}, {"name": "站前区"}, {"name": "老边区"}, {"name": "西市区"}, {"name": "鲅鱼圈区"}],
        "city_id": [5, 7]
    }, {
        "name": "阜新市",
        "child": [{"name": "太平区"}, {"name": "彰武县"}, {"name": "新邱区"}, {"name": "海州区"}, {"name": "清河门区"}, {"name": "细河区"}, {"name": "蒙古族自治县"}],
        "city_id": [5, 8]
    }, {
        "name": "辽阳市",
        "child": [{"name": "太子河区"}, {"name": "宏伟区"}, {"name": "弓长岭区"}, {"name": "文圣区"}, {"name": "灯塔市"}, {"name": "白塔区"}, {"name": "辽阳县"}],
        "city_id": [5, 9]
    }, {
        "name": "盘锦市",
        "child": [{"name": "兴隆台区"}, {"name": "双台子区"}, {"name": "大洼县"}, {"name": "盘山县"}],
        "city_id": [5, 10]
    }, {
        "name": "铁岭市",
        "child": [{"name": "开原市"}, {"name": "昌图县"}, {"name": "清河区"}, {"name": "西丰县"}, {"name": "调兵山市"}, {"name": "铁岭县"}, {"name": "银州区"}],
        "city_id": [5, 11]
    }, {
        "name": "朝阳市",
        "child": [{"name": "凌源市"}, {"name": "北票市"}, {"name": "双塔区"}, {"name": "喀喇沁左翼蒙古族自治县"}, {"name": "建平县"}, {"name": "朝阳县"}, {"name": "龙城区"}],
        "city_id": [5, 12]
    }, {
        "name": "葫芦岛市",
        "child": [{"name": "兴城市"}, {"name": "南票区"}, {"name": "建昌县"}, {"name": "绥中县"}, {"name": "连山区"}, {"name": "龙港区"}],
        "city_id": [5, 13]
    }],
    "id": 5
}, {
    "name": "吉林省",
    "child": [{
        "name": "长春市",
        "child": [{"name": "九台市"}, {"name": "二道区"}, {"name": "农安县"}, {"name": "南关区"}, {"name": "双阳区"}, {"name": "宽城区"}, {"name": "德惠市"}, {"name": "朝阳区"}, {"name": "榆树市"}, {"name": "绿园区"}],
        "city_id": [6, 0]
    }, {
        "name": "吉林市",
        "child": [{"name": "丰满区"}, {"name": "昌邑区"}, {"name": "桦甸市"}, {"name": "永吉县"}, {"name": "磐石市"}, {"name": "舒兰市"}, {"name": "船营区"}, {"name": "蛟河市"}, {"name": "龙潭区"}],
        "city_id": [6, 1]
    }, {
        "name": "四平市",
        "child": [{"name": "伊通满族自治县"}, {"name": "公主岭市"}, {"name": "双辽市"}, {"name": "梨树县"}, {"name": "铁东区"}, {"name": "铁西区"}],
        "city_id": [6, 2]
    }, {
        "name": "辽源市",
        "child": [{"name": "东丰县"}, {"name": "东辽县"}, {"name": "西安区"}, {"name": "龙山区"}],
        "city_id": [6, 3]
    }, {
        "name": "通化市",
        "child": [{"name": "东昌区"}, {"name": "二道江区"}, {"name": "柳河县"}, {"name": "梅河口市"}, {"name": "辉南县"}, {"name": "通化县"}, {"name": "集安市"}],
        "city_id": [6, 4]
    }, {
        "name": "白山市",
        "child": [{"name": "临江市"}, {"name": "八道江区"}, {"name": "抚松县"}, {"name": "江源区"}, {"name": "长白朝鲜族自治县"}, {"name": "靖宇县"}],
        "city_id": [6, 5]
    }, {
        "name": "松原市",
        "child": [{"name": "干安县"}, {"name": "前郭尔罗斯蒙古族自治县"}, {"name": "宁江区"}, {"name": "扶余县"}, {"name": "长岭县"}],
        "city_id": [6, 6]
    }, {
        "name": "白城市",
        "child": [{"name": "大安市"}, {"name": "洮北区"}, {"name": "洮南市"}, {"name": "通榆县"}, {"name": "镇赉县"}],
        "city_id": [6, 7]
    }, {
        "name": "延边朝鲜族自治州",
        "child": [{"name": "和龙市"}, {"name": "图们市"}, {"name": "安图县"}, {"name": "延吉市"}, {"name": "敦化市"}, {"name": "汪清县"}, {"name": "珲春市"}, {"name": "龙井市"}],
        "city_id": [6, 8]
    }],
    "id": 6
}, {
    "name": "黑龙江省",
    "child": [{
        "name": "哈尔滨市",
        "child": [{"name": "五常市"}, {"name": "依兰县"}, {"name": "南岗区"}, {"name": "双城市"}, {"name": "呼兰区"}, {"name": "哈尔滨市道里区"}, {"name": "宾县"}, {"name": "尚志市"}, {"name": "巴彦县"}, {"name": "平房区"}, {"name": "延寿县"}, {"name": "方正县"}, {"name": "木兰县"}, {"name": "松北区"}, {"name": "通河县"}, {"name": "道外区"}, {"name": "阿城区"}, {"name": "香坊区"}],
        "city_id": [7, 0]
    }, {
        "name": "齐齐哈尔市",
        "child": [{"name": "依安县"}, {"name": "克东县"}, {"name": "克山县"}, {"name": "富拉尔基区"}, {"name": "富裕县"}, {"name": "建华区"}, {"name": "拜泉县"}, {"name": "昂昂溪区"}, {"name": "梅里斯达斡尔族区"}, {"name": "泰来县"}, {"name": "甘南县"}, {"name": "碾子山区"}, {"name": "讷河市"}, {"name": "铁锋区"}, {"name": "龙江县"}, {"name": "龙沙区"}],
        "city_id": [7, 1]
    }, {
        "name": "鸡西市",
        "child": [{"name": "城子河区"}, {"name": "密山市"}, {"name": "恒山区"}, {"name": "梨树区"}, {"name": "滴道区"}, {"name": "虎林市"}, {"name": "鸡东县"}, {"name": "鸡冠区"}, {"name": "麻山区"}],
        "city_id": [7, 2]
    }, {
        "name": "鹤岗市",
        "child": [{"name": "东山区"}, {"name": "兴安区"}, {"name": "兴山区"}, {"name": "南山区"}, {"name": "向阳区"}, {"name": "工农区"}, {"name": "绥滨县"}, {"name": "萝北县"}],
        "city_id": [7, 3]
    }, {
        "name": "双鸭山市",
        "child": [{"name": "友谊县"}, {"name": "四方台区"}, {"name": "宝山区"}, {"name": "宝清县"}, {"name": "尖山区"}, {"name": "岭东区"}, {"name": "集贤县"}, {"name": "饶河县"}],
        "city_id": [7, 4]
    }, {
        "name": "大庆市",
        "child": [{"name": "大同区"}, {"name": "杜尔伯特蒙古族自治县"}, {"name": "林甸县"}, {"name": "红岗区"}, {"name": "肇州县"}, {"name": "肇源县"}, {"name": "胡路区"}, {"name": "萨尔图区"}, {"name": "龙凤区"}],
        "city_id": [7, 5]
    }, {
        "name": "伊春市",
        "child": [{"name": "上甘岭区"}, {"name": "乌伊岭区"}, {"name": "乌马河区"}, {"name": "五营区"}, {"name": "伊春区"}, {"name": "南岔区"}, {"name": "友好区"}, {"name": "嘉荫县"}, {"name": "带岭区"}, {"name": "新青区"}, {"name": "汤旺河区"}, {"name": "红星区"}, {"name": "美溪区"}, {"name": "翠峦区"}, {"name": "西林区"}, {"name": "金山屯区"}, {"name": "铁力市"}],
        "city_id": [7, 6]
    }, {
        "name": "佳木斯市",
        "child": [{"name": "东风区"}, {"name": "前进区"}, {"name": "同江市"}, {"name": "向阳区"}, {"name": "富锦市"}, {"name": "抚远县"}, {"name": "桦南县"}, {"name": "桦川县"}, {"name": "汤原县"}, {"name": "郊区"}],
        "city_id": [7, 7]
    }, {
        "name": "七台河市",
        "child": [{"name": "勃利县"}, {"name": "新兴区"}, {"name": "桃山区"}, {"name": "茄子河区"}],
        "city_id": [7, 8]
    }, {
        "name": "牡丹江市",
        "child": [{"name": "东宁县"}, {"name": "东安区"}, {"name": "宁安市"}, {"name": "林口县"}, {"name": "海林市"}, {"name": "爱民区"}, {"name": "穆棱市"}, {"name": "绥芬河市"}, {"name": "西安区"}, {"name": "阳明区"}],
        "city_id": [7, 9]
    }, {
        "name": "黑河市",
        "child": [{"name": "五大连池市"}, {"name": "北安市"}, {"name": "嫩江县"}, {"name": "孙吴县"}, {"name": "爱辉区"}, {"name": "车逊克县"}, {"name": "逊克县"}],
        "city_id": [7, 10]
    }, {
        "name": "绥化市",
        "child": [{"name": "兰西县"}, {"name": "安达市"}, {"name": "庆安县"}, {"name": "明水县"}, {"name": "望奎县"}, {"name": "海伦市"}, {"name": "绥化市北林区"}, {"name": "绥棱县"}, {"name": "肇东市"}, {"name": "青冈县"}],
        "city_id": [7, 11]
    }, {
        "name": "大兴安岭地区",
        "child": [{"name": "呼玛县"}, {"name": "塔河县"}, {"name": "大兴安岭地区加格达奇区"}, {"name": "大兴安岭地区呼中区"}, {"name": "大兴安岭地区新林区"}, {"name": "大兴安岭地区松岭区"}, {"name": "漠河县"}],
        "city_id": [7, 12]
    }],
    "id": 7
}, {
    "name": "上海市",
    "child": [{
        "name": "上海市",
        "child": [{"name": "黄浦区"}, {"name": "卢湾区"}, {"name": "徐汇区"}, {"name": "长宁区"}, {"name": "静安区"}, {"name": "普陀区"}, {"name": "闸北区"}, {"name": "虹口区"}, {"name": "杨浦区"}, {"name": "闵行区"}, {"name": "宝山区"}, {"name": "嘉定区"}, {"name": "浦东新区"}, {"name": "金山区"}, {"name": "松江区"}, {"name": "青浦区"}, {"name": "南汇区"}, {"name": "奉贤区"}, {"name": "崇明县"}],
        "city_id": [8, 0]
    }],
    "id": 8
}, {
    "name": "江苏省",
    "child": [{
        "name": "南京市",
        "child": [{"name": "下关区"}, {"name": "六合区"}, {"name": "建邺区"}, {"name": "栖霞区"}, {"name": "江宁区"}, {"name": "浦口区"}, {"name": "溧水县"}, {"name": "玄武区"}, {"name": "白下区"}, {"name": "秦淮区"}, {"name": "雨花台区"}, {"name": "高淳县"}, {"name": "鼓楼区"}],
        "city_id": [9, 0]
    }, {
        "name": "无锡市",
        "child": [{"name": "北塘区"}, {"name": "南长区"}, {"name": "宜兴市"}, {"name": "崇安区"}, {"name": "惠山区"}, {"name": "江阴市"}, {"name": "滨湖区"}, {"name": "锡山区"}],
        "city_id": [9, 1]
    }, {
        "name": "徐州市",
        "child": [{"name": "丰县"}, {"name": "九里区"}, {"name": "云龙区"}, {"name": "新沂市"}, {"name": "沛县"}, {"name": "泉山区"}, {"name": "睢宁县"}, {"name": "贾汪区"}, {"name": "邳州市"}, {"name": "铜山县"}, {"name": "鼓楼区"}],
        "city_id": [9, 2]
    }, {
        "name": "常州市",
        "child": [{"name": "天宁区"}, {"name": "戚墅堰区"}, {"name": "新北区"}, {"name": "武进区"}, {"name": "溧阳市"}, {"name": "金坛市"}, {"name": "钟楼区"}],
        "city_id": [9, 3]
    }, {
        "name": "苏州市",
        "child": [{"name": "吴中区"}, {"name": "吴江市"}, {"name": "太仓市"}, {"name": "常熟市"}, {"name": "平江区"}, {"name": "张家港市"}, {"name": "昆山市"}, {"name": "沧浪区"}, {"name": "相城区"}, {"name": "苏州工业园区"}, {"name": "虎丘区"}, {"name": "金阊区"}],
        "city_id": [9, 4]
    }, {
        "name": "南通市",
        "child": [{"name": "启东市"}, {"name": "如东县"}, {"name": "如皋市"}, {"name": "崇川区"}, {"name": "海安县"}, {"name": "海门市"}, {"name": "港闸区"}, {"name": "通州市"}],
        "city_id": [9, 5]
    }, {
        "name": "连云港市",
        "child": [{"name": "东海县"}, {"name": "新浦区"}, {"name": "海州区"}, {"name": "灌云县"}, {"name": "灌南县"}, {"name": "赣榆县"}, {"name": "连云区"}],
        "city_id": [9, 6]
    }, {
        "name": "淮安市",
        "child": [{"name": "楚州区"}, {"name": "洪泽县"}, {"name": "涟水县"}, {"name": "淮阴区"}, {"name": "清河区"}, {"name": "清浦区"}, {"name": "盱眙县"}, {"name": "金湖县"}],
        "city_id": [9, 7]
    }, {
        "name": "盐城市",
        "child": [{"name": "东台市"}, {"name": "亭湖区"}, {"name": "响水县"}, {"name": "大丰市"}, {"name": "射阳县"}, {"name": "建湖县"}, {"name": "滨海县"}, {"name": "盐都区"}, {"name": "阜宁县"}],
        "city_id": [9, 8]
    }, {
        "name": "扬州市",
        "child": [{"name": "仪征市"}, {"name": "宝应县"}, {"name": "广陵区"}, {"name": "江都市"}, {"name": "维扬区"}, {"name": "邗江区"}, {"name": "高邮市"}],
        "city_id": [9, 9]
    }, {
        "name": "镇江市",
        "child": [{"name": "丹徒区"}, {"name": "丹阳市"}, {"name": "京口区"}, {"name": "句容市"}, {"name": "扬中市"}, {"name": "润州区"}],
        "city_id": [9, 10]
    }, {
        "name": "泰州市",
        "child": [{"name": "兴化市"}, {"name": "姜堰市"}, {"name": "泰兴市"}, {"name": "海陵区"}, {"name": "靖江市"}, {"name": "高港区"}],
        "city_id": [9, 11]
    }, {
        "name": "宿迁市",
        "child": [{"name": "宿城区"}, {"name": "宿豫区"}, {"name": "沭阳县"}, {"name": "泗洪县"}, {"name": "泗阳县"}],
        "city_id": [9, 12]
    }],
    "id": 9
}, {
    "name": "浙江省",
    "child": [{
        "name": "杭州市",
        "child": [{"name": "上城区"}, {"name": "下城区"}, {"name": "临安市"}, {"name": "余杭区"}, {"name": "富阳市"}, {"name": "建德市"}, {"name": "拱墅区"}, {"name": "桐庐县"}, {"name": "江干区"}, {"name": "淳安县"}, {"name": "滨江区"}, {"name": "萧山区"}, {"name": "西湖区"}],
        "city_id": [10, 0]
    }, {
        "name": "宁波市",
        "child": [{"name": "余姚市"}, {"name": "北仑区"}, {"name": "奉化市"}, {"name": "宁海县"}, {"name": "慈溪市"}, {"name": "江东区"}, {"name": "江北区"}, {"name": "海曙区"}, {"name": "象山县"}, {"name": "鄞州区"}, {"name": "镇海区"}],
        "city_id": [10, 1]
    }, {
        "name": "温州市",
        "child": [{"name": "乐清市"}, {"name": "平阳县"}, {"name": "文成县"}, {"name": "永嘉县"}, {"name": "泰顺县"}, {"name": "洞头县"}, {"name": "瑞安市"}, {"name": "瓯海区"}, {"name": "苍南县"}, {"name": "鹿城区"}, {"name": "龙湾区"}],
        "city_id": [10, 2]
    }, {
        "name": "嘉兴市",
        "child": [{"name": "南湖区"}, {"name": "嘉善县"}, {"name": "平湖市"}, {"name": "桐乡市"}, {"name": "海宁市"}, {"name": "海盐县"}, {"name": "秀洲区"}],
        "city_id": [10, 3]
    }, {
        "name": "湖州市",
        "child": [{"name": "南浔区"}, {"name": "吴兴区"}, {"name": "安吉县"}, {"name": "德清县"}, {"name": "长兴县"}],
        "city_id": [10, 4]
    }, {
        "name": "绍兴市",
        "child": [{"name": "上虞市"}, {"name": "嵊州市"}, {"name": "新昌县"}, {"name": "绍兴县"}, {"name": "诸暨市"}, {"name": "越城区"}],
        "city_id": [10, 5]
    }, {
        "name": "舟山市",
        "child": [{"name": "定海区"}, {"name": "岱山县"}, {"name": "嵊泗县"}, {"name": "普陀区"}],
        "city_id": [10, 6]
    }, {
        "name": "衢州市",
        "child": [{"name": "常山县"}, {"name": "开化县"}, {"name": "柯城区"}, {"name": "江山市"}, {"name": "衢江区"}, {"name": "龙游县"}],
        "city_id": [10, 7]
    }, {
        "name": "金华市",
        "child": [{"name": "东阳市"}, {"name": "义乌市"}, {"name": "兰溪市"}, {"name": "婺城区"}, {"name": "武义县"}, {"name": "永康市"}, {"name": "浦江县"}, {"name": "磐安县"}, {"name": "金东区"}],
        "city_id": [10, 8]
    }, {
        "name": "台州市",
        "child": [{"name": "三门县"}, {"name": "临海市"}, {"name": "仙居县"}, {"name": "天台县"}, {"name": "椒江区"}, {"name": "温岭市"}, {"name": "玉环县"}, {"name": "路桥区"}, {"name": "黄岩区"}],
        "city_id": [10, 9]
    }, {
        "name": "丽水市",
        "child": [{"name": "云和县"}, {"name": "庆元县"}, {"name": "景宁畲族自治县"}, {"name": "松阳县"}, {"name": "缙云县"}, {"name": "莲都区"}, {"name": "遂昌县"}, {"name": "青田县"}, {"name": "龙泉市"}],
        "city_id": [10, 10]
    }],
    "id": 10
}, {
    "name": "安徽省",
    "child": [{
        "name": "合肥市",
        "child": [{"name": "包河区"}, {"name": "庐阳区"}, {"name": "瑶海区"}, {"name": "肥东县"}, {"name": "肥西县"}, {"name": "蜀山区"}, {"name": "长丰县"}],
        "city_id": [11, 0]
    }, {
        "name": "芜湖市",
        "child": [{"name": "三山区"}, {"name": "南陵县"}, {"name": "弋江区"}, {"name": "繁昌县"}, {"name": "芜湖县"}, {"name": "镜湖区"}, {"name": "鸠江区"}],
        "city_id": [11, 1]
    }, {
        "name": "蚌埠市",
        "child": [{"name": "五河县"}, {"name": "固镇县"}, {"name": "怀远县"}, {"name": "淮上区"}, {"name": "禹会区"}, {"name": "蚌山区"}, {"name": "龙子湖区"}],
        "city_id": [11, 2]
    }, {
        "name": "淮南市",
        "child": [{"name": "八公山区"}, {"name": "凤台县"}, {"name": "大通区"}, {"name": "潘集区"}, {"name": "田家庵区"}, {"name": "谢家集区"}],
        "city_id": [11, 3]
    }, {
        "name": "马鞍山市",
        "child": [{"name": "当涂县"}, {"name": "花山区"}, {"name": "金家庄区"}, {"name": "雨山区"}],
        "city_id": [11, 4]
    }, {
        "name": "淮北市",
        "child": [{"name": "杜集区"}, {"name": "濉溪县"}, {"name": "烈山区"}, {"name": "相山区"}],
        "city_id": [11, 5]
    }, {
        "name": "铜陵市",
        "child": [{"name": "狮子山区"}, {"name": "郊区"}, {"name": "铜官山区"}, {"name": "铜陵县"}],
        "city_id": [11, 6]
    }, {
        "name": "安庆市",
        "child": [{"name": "大观区"}, {"name": "太湖县"}, {"name": "宜秀区"}, {"name": "宿松县"}, {"name": "岳西县"}, {"name": "怀宁县"}, {"name": "望江县"}, {"name": "枞阳县"}, {"name": "桐城市"}, {"name": "潜山县"}, {"name": "迎江区"}],
        "city_id": [11, 7]
    }, {
        "name": "黄山市",
        "child": [{"name": "休宁县"}, {"name": "屯溪区"}, {"name": "徽州区"}, {"name": "歙县"}, {"name": "祁门县"}, {"name": "黄山区"}, {"name": "黟县"}],
        "city_id": [11, 8]
    }, {
        "name": "滁州市",
        "child": [{"name": "全椒县"}, {"name": "凤阳县"}, {"name": "南谯区"}, {"name": "天长市"}, {"name": "定远县"}, {"name": "明光市"}, {"name": "来安县"}, {"name": "琅玡区"}],
        "city_id": [11, 9]
    }, {
        "name": "阜阳市",
        "child": [{"name": "临泉县"}, {"name": "太和县"}, {"name": "界首市"}, {"name": "阜南县"}, {"name": "颍东区"}, {"name": "颍州区"}, {"name": "颍泉区"}, {"name": "颖上县"}],
        "city_id": [11, 10]
    }, {
        "name": "宿州市",
        "child": [{"name": "埇桥区"}, {"name": "泗县辖"}, {"name": "灵璧县"}, {"name": "砀山县"}, {"name": "萧县"}],
        "city_id": [11, 11]
    }, {
        "name": "巢湖市",
        "child": [{"name": "含山县"}, {"name": "和县"}, {"name": "居巢区"}, {"name": "庐江县"}, {"name": "无为县"}],
        "city_id": [11, 12]
    }, {
        "name": "六安市",
        "child": [{"name": "寿县"}, {"name": "舒城县"}, {"name": "裕安区"}, {"name": "金安区"}, {"name": "金寨县"}, {"name": "霍山县"}, {"name": "霍邱县"}],
        "city_id": [11, 13]
    }, {
        "name": "亳州市",
        "child": [{"name": "利辛县"}, {"name": "涡阳县"}, {"name": "蒙城县"}, {"name": "谯城区"}],
        "city_id": [11, 14]
    }, {
        "name": "池州市",
        "child": [{"name": "东至县"}, {"name": "石台县"}, {"name": "贵池区"}, {"name": "青阳县"}],
        "city_id": [11, 15]
    }, {
        "name": "宣城市",
        "child": [{"name": "宁国市"}, {"name": "宣州区"}, {"name": "广德县"}, {"name": "旌德县"}, {"name": "泾县"}, {"name": "绩溪县"}, {"name": "郎溪县"}],
        "city_id": [11, 16]
    }],
    "id": 11
}, {
    "name": "福建省",
    "child": [{
        "name": "福州市",
        "child": [{"name": "仓山区"}, {"name": "台江区"}, {"name": "平潭县"}, {"name": "晋安区"}, {"name": "永泰县"}, {"name": "福清市"}, {"name": "罗源县"}, {"name": "连江县"}, {"name": "长乐市"}, {"name": "闽侯县"}, {"name": "闽清县"}, {"name": "马尾区"}, {"name": "鼓楼区"}],
        "city_id": [12, 0]
    }, {
        "name": "厦门市",
        "child": [{"name": "同安区"}, {"name": "思明区"}, {"name": "海沧区"}, {"name": "湖里区"}, {"name": "翔安区"}, {"name": "集美区"}],
        "city_id": [12, 1]
    }, {
        "name": "莆田市",
        "child": [{"name": "仙游县"}, {"name": "城厢区"}, {"name": "涵江区"}, {"name": "秀屿区"}, {"name": "荔城区"}],
        "city_id": [12, 2]
    }, {
        "name": "三明市",
        "child": [{"name": "三元区"}, {"name": "大田县"}, {"name": "宁化县"}, {"name": "将乐县"}, {"name": "尤溪县"}, {"name": "建宁县"}, {"name": "明溪县"}, {"name": "梅列区"}, {"name": "永安市"}, {"name": "沙县"}, {"name": "泰宁县"}, {"name": "清流县"}],
        "city_id": [12, 3]
    }, {
        "name": "泉州市",
        "child": [{"name": "丰泽区"}, {"name": "南安市"}, {"name": "安溪县"}, {"name": "德化县"}, {"name": "惠安县"}, {"name": "晋江市"}, {"name": "永春县"}, {"name": "泉港区"}, {"name": "洛江区"}, {"name": "石狮市"}, {"name": "金门县"}, {"name": "鲤城区"}],
        "city_id": [12, 4]
    }, {
        "name": "漳州市",
        "child": [{"name": "东山县"}, {"name": "云霄县"}, {"name": "华安县"}, {"name": "南靖县"}, {"name": "平和县"}, {"name": "漳浦县"}, {"name": "芗城区"}, {"name": "诏安县"}, {"name": "长泰县"}, {"name": "龙文区"}, {"name": "龙海市"}],
        "city_id": [12, 5]
    }, {
        "name": "南平市",
        "child": [{"name": "光泽县"}, {"name": "延平区"}, {"name": "建瓯市"}, {"name": "建阳市"}, {"name": "政和县"}, {"name": "松溪县"}, {"name": "武夷山市"}, {"name": "浦城县"}, {"name": "邵武市"}, {"name": "顺昌县"}],
        "city_id": [12, 6]
    }, {
        "name": "龙岩市",
        "child": [{"name": "上杭县"}, {"name": "新罗区"}, {"name": "武平县"}, {"name": "永定县"}, {"name": "漳平市"}, {"name": "连城县"}, {"name": "长汀县"}],
        "city_id": [12, 7]
    }, {
        "name": "宁德市",
        "child": [{"name": "古田县"}, {"name": "周宁县"}, {"name": "寿宁县"}, {"name": "屏南县"}, {"name": "柘荣县"}, {"name": "福安市"}, {"name": "福鼎市"}, {"name": "蕉城区"}, {"name": "霞浦县"}],
        "city_id": [12, 8]
    }],
    "id": 12
}, {
    "name": "江西省",
    "child": [{
        "name": "南昌市",
        "child": [{"name": "东湖区"}, {"name": "南昌县"}, {"name": "安义县"}, {"name": "新建县"}, {"name": "湾里区"}, {"name": "西湖区"}, {"name": "进贤县"}, {"name": "青云谱区"}, {"name": "青山湖区"}],
        "city_id": [13, 0]
    }, {
        "name": "景德镇市",
        "child": [{"name": "乐平市"}, {"name": "昌江区"}, {"name": "浮梁县"}, {"name": "珠山区"}],
        "city_id": [13, 1]
    }, {
        "name": "萍乡市",
        "child": [{"name": "上栗县"}, {"name": "安源区"}, {"name": "湘东区"}, {"name": "芦溪县"}, {"name": "莲花县"}],
        "city_id": [13, 2]
    }, {
        "name": "九江市",
        "child": [{"name": "九江县"}, {"name": "修水县"}, {"name": "庐山区"}, {"name": "彭泽县"}, {"name": "德安县"}, {"name": "星子县"}, {"name": "武宁县"}, {"name": "永修县"}, {"name": "浔阳区"}, {"name": "湖口县"}, {"name": "瑞昌市"}, {"name": "都昌县"}],
        "city_id": [13, 3]
    }, {"name": "新余市", "child": [{"name": "分宜县"}, {"name": "渝水区"}], "city_id": [13, 4]}, {
        "name": "鹰潭市",
        "child": [{"name": "余江县"}, {"name": "月湖区"}, {"name": "贵溪市"}],
        "city_id": [13, 5]
    }, {
        "name": "赣州市",
        "child": [{"name": "上犹县"}, {"name": "于都县"}, {"name": "会昌县"}, {"name": "信丰县"}, {"name": "全南县"}, {"name": "兴国县"}, {"name": "南康市"}, {"name": "大余县"}, {"name": "宁都县"}, {"name": "安远县"}, {"name": "定南县"}, {"name": "寻乌县"}, {"name": "崇义县"}, {"name": "瑞金市"}, {"name": "石城县"}, {"name": "章贡区"}, {"name": "赣县"}, {"name": "龙南县"}],
        "city_id": [13, 6]
    }, {
        "name": "吉安市",
        "child": [{"name": "万安县"}, {"name": "井冈山市"}, {"name": "吉安县"}, {"name": "吉州区"}, {"name": "吉水县"}, {"name": "安福县"}, {"name": "峡江县"}, {"name": "新干县"}, {"name": "永丰县"}, {"name": "永新县"}, {"name": "泰和县"}, {"name": "遂川县"}, {"name": "青原区"}],
        "city_id": [13, 7]
    }, {
        "name": "宜春市",
        "child": [{"name": "万载县"}, {"name": "上高县"}, {"name": "丰城市"}, {"name": "奉新县"}, {"name": "宜丰县"}, {"name": "樟树市"}, {"name": "袁州区"}, {"name": "铜鼓县"}, {"name": "靖安县"}, {"name": "高安市"}],
        "city_id": [13, 8]
    }, {
        "name": "抚州市",
        "child": [{"name": "东乡县"}, {"name": "临川区"}, {"name": "乐安县"}, {"name": "南丰县"}, {"name": "南城县"}, {"name": "宜黄县"}, {"name": "崇仁县"}, {"name": "广昌县"}, {"name": "资溪县"}, {"name": "金溪县"}, {"name": "黎川县"}],
        "city_id": [13, 9]
    }, {
        "name": "上饶市",
        "child": [{"name": "万年县"}, {"name": "上饶县"}, {"name": "余干县"}, {"name": "信州区"}, {"name": "婺源县"}, {"name": "广丰县"}, {"name": "弋阳县"}, {"name": "德兴市"}, {"name": "横峰县"}, {"name": "玉山县"}, {"name": "鄱阳县"}, {"name": "铅山县"}],
        "city_id": [13, 10]
    }],
    "id": 13
}, {
    "name": "山东省",
    "child": [{
        "name": "济南市",
        "child": [{"name": "历下区"}, {"name": "历城区"}, {"name": "商河县"}, {"name": "天桥区"}, {"name": "市中区"}, {"name": "平阴县"}, {"name": "槐荫区"}, {"name": "济阳县"}, {"name": "章丘市"}, {"name": "长清区"}],
        "city_id": [14, 0]
    }, {
        "name": "青岛市",
        "child": [{"name": "即墨市"}, {"name": "四方区"}, {"name": "城阳区"}, {"name": "崂山区"}, {"name": "市北区"}, {"name": "市南区"}, {"name": "平度市"}, {"name": "李沧区"}, {"name": "胶南市"}, {"name": "胶州市"}, {"name": "莱西市"}, {"name": "黄岛区"}],
        "city_id": [14, 1]
    }, {
        "name": "淄博市",
        "child": [{"name": "临淄区"}, {"name": "博山区"}, {"name": "周村区"}, {"name": "张店区"}, {"name": "桓台县"}, {"name": "沂源县"}, {"name": "淄川区"}, {"name": "高青县"}],
        "city_id": [14, 2]
    }, {
        "name": "枣庄市",
        "child": [{"name": "台儿庄区"}, {"name": "山亭区"}, {"name": "峄城区"}, {"name": "市中区"}, {"name": "滕州市"}, {"name": "薛城区"}],
        "city_id": [14, 3]
    }, {
        "name": "东营市",
        "child": [{"name": "东营区"}, {"name": "利津县"}, {"name": "垦利县"}, {"name": "广饶县"}, {"name": "河口区"}],
        "city_id": [14, 4]
    }, {
        "name": "烟台市",
        "child": [{"name": "招远市"}, {"name": "栖霞市"}, {"name": "海阳市"}, {"name": "牟平区"}, {"name": "福山区"}, {"name": "芝罘区"}, {"name": "莱山区"}, {"name": "莱州市"}, {"name": "莱阳市"}, {"name": "蓬莱市"}, {"name": "长岛县"}, {"name": "龙口市"}],
        "city_id": [14, 5]
    }, {
        "name": "潍坊市",
        "child": [{"name": "临朐县"}, {"name": "坊子区"}, {"name": "奎文区"}, {"name": "安丘市"}, {"name": "寒亭区"}, {"name": "寿光市"}, {"name": "昌乐县"}, {"name": "昌邑市"}, {"name": "潍城区"}, {"name": "诸城市"}, {"name": "青州市"}, {"name": "高密市"}],
        "city_id": [14, 6]
    }, {
        "name": "济宁市",
        "child": [{"name": "任城区"}, {"name": "兖州市"}, {"name": "嘉祥县"}, {"name": "市中区"}, {"name": "微山县"}, {"name": "曲阜市"}, {"name": "梁山县"}, {"name": "汶上县"}, {"name": "泗水县"}, {"name": "邹城市"}, {"name": "金乡县"}, {"name": "鱼台县"}],
        "city_id": [14, 7]
    }, {
        "name": "泰安市",
        "child": [{"name": "东平县"}, {"name": "宁阳县"}, {"name": "岱岳区"}, {"name": "新泰市"}, {"name": "泰山区"}, {"name": "肥城市"}],
        "city_id": [14, 8]
    }, {
        "name": "威海市",
        "child": [{"name": "乳山市"}, {"name": "文登市"}, {"name": "环翠区"}, {"name": "荣成市"}],
        "city_id": [14, 9]
    }, {
        "name": "日照市",
        "child": [{"name": "东港区"}, {"name": "五莲县"}, {"name": "岚山区"}, {"name": "莒县"}],
        "city_id": [14, 10]
    }, {"name": "莱芜市", "child": [{"name": "莱城区"}, {"name": "钢城区"}], "city_id": [14, 11]}, {
        "name": "临沂市",
        "child": [{"name": "临沭县"}, {"name": "兰山区"}, {"name": "平邑县"}, {"name": "沂南县"}, {"name": "沂水县"}, {"name": "河东区"}, {"name": "罗庄区"}, {"name": "苍山县"}, {"name": "莒南县"}, {"name": "蒙阴县"}, {"name": "费县"}, {"name": "郯城县"}],
        "city_id": [14, 12]
    }, {
        "name": "德州市",
        "child": [{"name": "临邑县"}, {"name": "乐陵市"}, {"name": "夏津县"}, {"name": "宁津县"}, {"name": "平原县"}, {"name": "庆云县"}, {"name": "德城区"}, {"name": "武城县"}, {"name": "禹城市"}, {"name": "陵县"}, {"name": "齐河县"}],
        "city_id": [14, 13]
    }, {
        "name": "聊城市",
        "child": [{"name": "东昌府区"}, {"name": "东阿县"}, {"name": "临清市"}, {"name": "冠县"}, {"name": "茌平县"}, {"name": "莘县"}, {"name": "阳谷县"}, {"name": "高唐县"}],
        "city_id": [14, 14]
    }, {
        "name": "滨州市",
        "child": [{"name": "博兴县"}, {"name": "惠民县"}, {"name": "无棣县"}, {"name": "沾化县"}, {"name": "滨城区"}, {"name": "邹平县"}, {"name": "阳信县"}],
        "city_id": [14, 15]
    }, {
        "name": "菏泽市",
        "child": [{"name": "东明县"}, {"name": "单县"}, {"name": "定陶县"}, {"name": "巨野县"}, {"name": "成武县"}, {"name": "曹县"}, {"name": "牡丹区"}, {"name": "郓城县"}, {"name": "鄄城县"}],
        "city_id": [14, 16]
    }],
    "id": 14
}, {
    "name": "河南省",
    "child": [{
        "name": "郑州市",
        "child": [{"name": "上街区"}, {"name": "中原区"}, {"name": "中牟县"}, {"name": "二七区"}, {"name": "巩义市"}, {"name": "惠济区"}, {"name": "新密市"}, {"name": "新郑市"}, {"name": "登封市"}, {"name": "管城回族区"}, {"name": "荥阳市"}, {"name": "金水区"}],
        "city_id": [15, 0]
    }, {
        "name": "开封市",
        "child": [{"name": "兰考县"}, {"name": "尉氏县"}, {"name": "开封县"}, {"name": "杞县"}, {"name": "禹王台区"}, {"name": "通许县"}, {"name": "金明区"}, {"name": "顺河回族区"}, {"name": "鼓楼区"}, {"name": "龙亭区"}],
        "city_id": [15, 1]
    }, {
        "name": "洛阳市",
        "child": [{"name": "伊川县"}, {"name": "偃师市"}, {"name": "吉利区"}, {"name": "孟津县"}, {"name": "宜阳县"}, {"name": "嵩县"}, {"name": "新安县"}, {"name": "栾川县"}, {"name": "汝阳县"}, {"name": "洛宁县"}, {"name": "洛龙区"}, {"name": "涧西区"}, {"name": "瀍河回族区"}, {"name": "老城区"}, {"name": "西工区"}],
        "city_id": [15, 2]
    }, {
        "name": "平顶山市",
        "child": [{"name": "卫东区"}, {"name": "叶县"}, {"name": "宝丰县"}, {"name": "新华区"}, {"name": "汝州市"}, {"name": "湛河区"}, {"name": "石龙区"}, {"name": "舞钢市"}, {"name": "郏县"}, {"name": "鲁山县"}],
        "city_id": [15, 3]
    }, {
        "name": "安阳市",
        "child": [{"name": "内黄县"}, {"name": "北关区"}, {"name": "安阳县"}, {"name": "文峰区"}, {"name": "林州市"}, {"name": "殷都区"}, {"name": "汤阴县"}, {"name": "滑县"}, {"name": "龙安区"}],
        "city_id": [15, 4]
    }, {
        "name": "鹤壁市",
        "child": [{"name": "山城区"}, {"name": "浚县"}, {"name": "淇县"}, {"name": "淇滨区"}, {"name": "鹤山区"}],
        "city_id": [15, 5]
    }, {
        "name": "新乡市",
        "child": [{"name": "凤泉区"}, {"name": "卫滨区"}, {"name": "卫辉市"}, {"name": "原阳县"}, {"name": "封丘县"}, {"name": "延津县"}, {"name": "新乡县"}, {"name": "牧野区"}, {"name": "红旗区"}, {"name": "获嘉县"}, {"name": "辉县市"}, {"name": "长垣县"}],
        "city_id": [15, 6]
    }, {
        "name": "焦作市",
        "child": [{"name": "中站区"}, {"name": "修武县"}, {"name": "博爱县"}, {"name": "孟州市"}, {"name": "山阳区"}, {"name": "武陟县"}, {"name": "沁阳市"}, {"name": "温县"}, {"name": "解放区"}, {"name": "马村区"}],
        "city_id": [15, 7]
    }, {
        "name": "濮阳市",
        "child": [{"name": "华龙区"}, {"name": "南乐县"}, {"name": "台前县"}, {"name": "清丰县"}, {"name": "濮阳县"}, {"name": "范县"}],
        "city_id": [15, 8]
    }, {
        "name": "许昌市",
        "child": [{"name": "禹州市"}, {"name": "襄城县"}, {"name": "许昌县"}, {"name": "鄢陵县"}, {"name": "长葛市"}, {"name": "魏都区"}],
        "city_id": [15, 9]
    }, {
        "name": "漯河市",
        "child": [{"name": "临颍县"}, {"name": "召陵区"}, {"name": "源汇区"}, {"name": "舞阳县"}, {"name": "郾城区"}],
        "city_id": [15, 10]
    }, {
        "name": "三门峡市",
        "child": [{"name": "义马市"}, {"name": "卢氏县"}, {"name": "渑池县"}, {"name": "湖滨区"}, {"name": "灵宝市"}, {"name": "陕县"}],
        "city_id": [15, 11]
    }, {
        "name": "南阳市",
        "child": [{"name": "内乡县"}, {"name": "南召县"}, {"name": "卧龙区"}, {"name": "唐河县"}, {"name": "宛城区"}, {"name": "新野县"}, {"name": "方城县"}, {"name": "桐柏县"}, {"name": "淅川县"}, {"name": "社旗县"}, {"name": "西峡县"}, {"name": "邓州市"}, {"name": "镇平县"}],
        "city_id": [15, 12]
    }, {
        "name": "商丘市",
        "child": [{"name": "夏邑县"}, {"name": "宁陵县"}, {"name": "柘城县"}, {"name": "民权县"}, {"name": "永城市"}, {"name": "睢县"}, {"name": "睢阳区"}, {"name": "粱园区"}, {"name": "虞城县"}],
        "city_id": [15, 13]
    }, {
        "name": "信阳市",
        "child": [{"name": "光山县"}, {"name": "商城县"}, {"name": "固始县"}, {"name": "平桥区"}, {"name": "息县"}, {"name": "新县"}, {"name": "浉河区"}, {"name": "淮滨县"}, {"name": "潢川县"}, {"name": "罗山县"}],
        "city_id": [15, 14]
    }, {
        "name": "周口市",
        "child": [{"name": "商水县"}, {"name": "太康县"}, {"name": "川汇区"}, {"name": "扶沟县"}, {"name": "沈丘县"}, {"name": "淮阳县"}, {"name": "西华县"}, {"name": "郸城县"}, {"name": "项城市"}, {"name": "鹿邑县"}],
        "city_id": [15, 15]
    }, {
        "name": "驻马店市",
        "child": [{"name": "上蔡县"}, {"name": "平舆县"}, {"name": "新蔡县"}, {"name": "正阳县"}, {"name": "汝南县"}, {"name": "泌阳县"}, {"name": "确山县"}, {"name": "西平县"}, {"name": "遂平县"}, {"name": "驿城区"}],
        "city_id": [15, 16]
    }, {"name": "济源市", "child": [{"name": "济源市"}], "city_id": [15, 17]}],
    "id": 15
}, {
    "name": "湖北省",
    "child": [{
        "name": "武汉市",
        "child": [{"name": "东西湖区"}, {"name": "新洲区"}, {"name": "武昌区"}, {"name": "汉南区"}, {"name": "汉阳区"}, {"name": "江夏区"}, {"name": "江岸区"}, {"name": "江汉区"}, {"name": "洪山区"}, {"name": "硚口区"}, {"name": "蔡甸区"}, {"name": "青山区"}, {"name": "黄陂区"}],
        "city_id": [16, 0]
    }, {
        "name": "黄石市",
        "child": [{"name": "下陆区"}, {"name": "大冶市"}, {"name": "西塞山区"}, {"name": "铁山区"}, {"name": "阳新县"}, {"name": "黄石港区"}],
        "city_id": [16, 1]
    }, {
        "name": "十堰市",
        "child": [{"name": "丹江口市"}, {"name": "张湾区"}, {"name": "房县"}, {"name": "竹山县"}, {"name": "竹溪县"}, {"name": "茅箭区"}, {"name": "郧县"}, {"name": "郧西县"}],
        "city_id": [16, 2]
    }, {
        "name": "宜昌市",
        "child": [{"name": "五峰土家族自治县"}, {"name": "伍家岗区"}, {"name": "兴山县"}, {"name": "夷陵区"}, {"name": "宜都市"}, {"name": "当阳市"}, {"name": "枝江市"}, {"name": "点军区"}, {"name": "秭归县"}, {"name": "虢亭区"}, {"name": "西陵区"}, {"name": "远安县"}, {"name": "长阳土家族自治县"}],
        "city_id": [16, 3]
    }, {
        "name": "襄樊市",
        "child": [{"name": "保康县"}, {"name": "南漳县"}, {"name": "宜城市"}, {"name": "枣阳市"}, {"name": "樊城区"}, {"name": "老河口市"}, {"name": "襄城区"}, {"name": "襄阳区"}, {"name": "谷城县"}],
        "city_id": [16, 4]
    }, {
        "name": "鄂州市",
        "child": [{"name": "华容区"}, {"name": "粱子湖"}, {"name": "鄂城区"}],
        "city_id": [16, 5]
    }, {
        "name": "荆门市",
        "child": [{"name": "东宝区"}, {"name": "京山县"}, {"name": "掇刀区"}, {"name": "沙洋县"}, {"name": "钟祥市"}],
        "city_id": [16, 6]
    }, {
        "name": "孝感市",
        "child": [{"name": "云梦县"}, {"name": "大悟县"}, {"name": "孝南区"}, {"name": "孝昌县"}, {"name": "安陆市"}, {"name": "应城市"}, {"name": "汉川市"}],
        "city_id": [16, 7]
    }, {
        "name": "荆州市",
        "child": [{"name": "公安县"}, {"name": "松滋市"}, {"name": "江陵县"}, {"name": "沙市区"}, {"name": "洪湖市"}, {"name": "监利县"}, {"name": "石首市"}, {"name": "荆州区"}],
        "city_id": [16, 8]
    }, {
        "name": "黄冈市",
        "child": [{"name": "团风县"}, {"name": "武穴市"}, {"name": "浠水县"}, {"name": "红安县"}, {"name": "罗田县"}, {"name": "英山县"}, {"name": "蕲春县"}, {"name": "麻城市"}, {"name": "黄州区"}, {"name": "黄梅县"}],
        "city_id": [16, 9]
    }, {
        "name": "咸宁市",
        "child": [{"name": "咸安区"}, {"name": "嘉鱼县"}, {"name": "崇阳县"}, {"name": "赤壁市"}, {"name": "通城县"}, {"name": "通山县"}],
        "city_id": [16, 10]
    }, {"name": "随州市", "child": [{"name": "广水市"}, {"name": "曾都区"}], "city_id": [16, 11]}, {
        "name": "恩施土家族苗族自治州",
        "child": [{"name": "利川市"}, {"name": "咸丰县"}, {"name": "宣恩县"}, {"name": "巴东县"}, {"name": "建始县"}, {"name": "恩施市"}, {"name": "来凤县"}, {"name": "鹤峰县"}],
        "city_id": [16, 12]
    }, {"name": "仙桃市", "child": [{"name": "仙桃市"}], "city_id": [16, 13]}, {
        "name": "潜江市",
        "child": [{"name": "潜江市"}],
        "city_id": [16, 14]
    }, {"name": "天门市", "child": [{"name": "天门市"}], "city_id": [16, 15]}, {
        "name": "神农架林区",
        "child": [{"name": "神农架林区"}],
        "city_id": [16, 16]
    }],
    "id": 16
}, {
    "name": "湖南省",
    "child": [{
        "name": "长沙市",
        "child": [{"name": "天心区"}, {"name": "宁乡县"}, {"name": "岳麓区"}, {"name": "开福区"}, {"name": "望城县"}, {"name": "浏阳市"}, {"name": "芙蓉区"}, {"name": "长沙县"}, {"name": "雨花区"}],
        "city_id": [17, 0]
    }, {
        "name": "株洲市",
        "child": [{"name": "天元区"}, {"name": "攸县"}, {"name": "株洲县"}, {"name": "炎陵县"}, {"name": "石峰区"}, {"name": "芦淞区"}, {"name": "茶陵县"}, {"name": "荷塘区"}, {"name": "醴陵市"}],
        "city_id": [17, 1]
    }, {
        "name": "湘潭市",
        "child": [{"name": "岳塘区"}, {"name": "湘乡市"}, {"name": "湘潭县"}, {"name": "雨湖区"}, {"name": "韶山市"}],
        "city_id": [17, 2]
    }, {
        "name": "衡阳市",
        "child": [{"name": "南岳区"}, {"name": "常宁市"}, {"name": "珠晖区"}, {"name": "石鼓区"}, {"name": "祁东县"}, {"name": "耒阳市"}, {"name": "蒸湘区"}, {"name": "衡东县"}, {"name": "衡南县"}, {"name": "衡山县"}, {"name": "衡阳县"}, {"name": "雁峰区"}],
        "city_id": [17, 3]
    }, {
        "name": "邵阳市",
        "child": [{"name": "北塔区"}, {"name": "双清区"}, {"name": "城步苗族自治县"}, {"name": "大祥区"}, {"name": "新宁县"}, {"name": "新邵县"}, {"name": "武冈市"}, {"name": "洞口县"}, {"name": "绥宁县"}, {"name": "邵东县"}, {"name": "邵阳县"}, {"name": "隆回县"}],
        "city_id": [17, 4]
    }, {
        "name": "岳阳市",
        "child": [{"name": "临湘市"}, {"name": "云溪区"}, {"name": "华容县"}, {"name": "君山区"}, {"name": "岳阳县"}, {"name": "岳阳楼区"}, {"name": "平江县"}, {"name": "汨罗市"}, {"name": "湘阴县"}],
        "city_id": [17, 5]
    }, {
        "name": "常德市",
        "child": [{"name": "临澧县"}, {"name": "安乡县"}, {"name": "桃源县"}, {"name": "武陵区"}, {"name": "汉寿县"}, {"name": "津市市"}, {"name": "澧县"}, {"name": "石门县"}, {"name": "鼎城区"}],
        "city_id": [17, 6]
    }, {
        "name": "张家界市",
        "child": [{"name": "慈利县"}, {"name": "桑植县"}, {"name": "武陵源区"}, {"name": "永定区"}],
        "city_id": [17, 7]
    }, {
        "name": "益阳市",
        "child": [{"name": "南县"}, {"name": "安化县"}, {"name": "桃江县"}, {"name": "沅江市"}, {"name": "资阳区"}, {"name": "赫山区"}],
        "city_id": [17, 8]
    }, {
        "name": "郴州市",
        "child": [{"name": "临武县"}, {"name": "北湖区"}, {"name": "嘉禾县"}, {"name": "安仁县"}, {"name": "宜章县"}, {"name": "桂东县"}, {"name": "桂阳县"}, {"name": "永兴县"}, {"name": "汝城县"}, {"name": "苏仙区"}, {"name": "资兴市"}],
        "city_id": [17, 9]
    }, {
        "name": "永州市",
        "child": [{"name": "东安县"}, {"name": "冷水滩区"}, {"name": "双牌县"}, {"name": "宁远县"}, {"name": "新田县"}, {"name": "江华瑶族自治县"}, {"name": "江永县"}, {"name": "祁阳县"}, {"name": "蓝山县"}, {"name": "道县"}, {"name": "零陵区"}],
        "city_id": [17, 10]
    }, {
        "name": "怀化市",
        "child": [{"name": "中方县"}, {"name": "会同县"}, {"name": "新晃侗族自治县"}, {"name": "沅陵县"}, {"name": "洪江市/洪江区"}, {"name": "溆浦县"}, {"name": "芷江侗族自治县"}, {"name": "辰溪县"}, {"name": "通道侗族自治县"}, {"name": "靖州苗族侗族自治县"}, {"name": "鹤城区"}, {"name": "麻阳苗族自治县"}],
        "city_id": [17, 11]
    }, {
        "name": "娄底市",
        "child": [{"name": "冷水江市"}, {"name": "双峰县"}, {"name": "娄星区"}, {"name": "新化县"}, {"name": "涟源市"}],
        "city_id": [17, 12]
    }, {
        "name": "湘西土家族苗族自治州",
        "child": [{"name": "保靖县"}, {"name": "凤凰县"}, {"name": "古丈县"}, {"name": "吉首市"}, {"name": "永顺县"}, {"name": "泸溪县"}, {"name": "花垣县"}, {"name": "龙山县"}],
        "city_id": [17, 13]
    }],
    "id": 17
}, {
    "name": "广东省",
    "child": [{
        "name": "广州市",
        "child": [{"name": "萝岗区"}, {"name": "南沙区"}, {"name": "从化市"}, {"name": "增城市"}, {"name": "天河区"}, {"name": "海珠区"}, {"name": "番禺区"}, {"name": "白云区"}, {"name": "花都区"}, {"name": "荔湾区"}, {"name": "越秀区"}, {"name": "黄埔区"}],
        "city_id": [18, 0]
    }, {
        "name": "韶关市",
        "child": [{"name": "乐昌市"}, {"name": "乳源瑶族自治县"}, {"name": "仁化县"}, {"name": "南雄市"}, {"name": "始兴县"}, {"name": "新丰县"}, {"name": "曲江区"}, {"name": "武江区"}, {"name": "浈江区"}, {"name": "翁源县"}],
        "city_id": [18, 1]
    }, {
        "name": "深圳市",
        "child": [{"name": "南山区"}, {"name": "宝安区"}, {"name": "盐田区"}, {"name": "福田区"}, {"name": "罗湖区"}, {"name": "龙岗区"}],
        "city_id": [18, 2]
    }, {
        "name": "珠海市",
        "child": [{"name": "斗门区"}, {"name": "金湾区"}, {"name": "香洲区"}],
        "city_id": [18, 3]
    }, {
        "name": "汕头市",
        "child": [{"name": "南澳县"}, {"name": "潮南区"}, {"name": "潮阳区"}, {"name": "澄海区"}, {"name": "濠江区"}, {"name": "金平区"}, {"name": "龙湖区"}],
        "city_id": [18, 4]
    }, {
        "name": "佛山市",
        "child": [{"name": "三水区"}, {"name": "南海区"}, {"name": "禅城区"}, {"name": "顺德区"}, {"name": "高明区"}],
        "city_id": [18, 5]
    }, {
        "name": "江门市",
        "child": [{"name": "台山市"}, {"name": "开平市"}, {"name": "恩平市"}, {"name": "新会区"}, {"name": "江海区"}, {"name": "蓬江区"}, {"name": "鹤山市"}],
        "city_id": [18, 6]
    }, {
        "name": "湛江市",
        "child": [{"name": "吴川市"}, {"name": "坡头区"}, {"name": "廉江市"}, {"name": "徐闻县"}, {"name": "赤坎区"}, {"name": "遂溪县"}, {"name": "雷州市"}, {"name": "霞山区"}, {"name": "麻章区"}],
        "city_id": [18, 7]
    }, {
        "name": "茂名市",
        "child": [{"name": "信宜市"}, {"name": "化州市"}, {"name": "电白县"}, {"name": "茂南区"}, {"name": "茂港区"}, {"name": "高州市"}],
        "city_id": [18, 8]
    }, {
        "name": "肇庆市",
        "child": [{"name": "四会市"}, {"name": "封开县"}, {"name": "广宁县"}, {"name": "德庆县"}, {"name": "怀集县"}, {"name": "端州区"}, {"name": "高要市"}, {"name": "鼎湖区"}],
        "city_id": [18, 9]
    }, {
        "name": "惠州市",
        "child": [{"name": "博罗县"}, {"name": "惠东县"}, {"name": "惠城区"}, {"name": "惠阳区"}, {"name": "龙门县"}],
        "city_id": [18, 10]
    }, {
        "name": "梅州市",
        "child": [{"name": "丰顺县"}, {"name": "五华县"}, {"name": "兴宁市"}, {"name": "大埔县"}, {"name": "平远县"}, {"name": "梅县"}, {"name": "梅江区"}, {"name": "蕉岭县"}],
        "city_id": [18, 11]
    }, {
        "name": "汕尾市",
        "child": [{"name": "城区"}, {"name": "海丰县"}, {"name": "陆丰市"}, {"name": "陆河县"}],
        "city_id": [18, 12]
    }, {
        "name": "河源市",
        "child": [{"name": "东源县"}, {"name": "和平县"}, {"name": "源城区"}, {"name": "紫金县"}, {"name": "连平县"}, {"name": "龙川县"}],
        "city_id": [18, 13]
    }, {
        "name": "阳江市",
        "child": [{"name": "江城区"}, {"name": "阳东县"}, {"name": "阳春市"}, {"name": "阳西县"}],
        "city_id": [18, 14]
    }, {
        "name": "清远市",
        "child": [{"name": "佛冈县"}, {"name": "清城区"}, {"name": "清新县"}, {"name": "英德市"}, {"name": "连南瑶族自治县"}, {"name": "连山壮族瑶族自治县"}, {"name": "连州市"}, {"name": "阳山县"}],
        "city_id": [18, 15]
    }, {
        "name": "东莞市",
        "child": [{"name": "万江区"}, {"name": "东城区"}, {"name": "南城区"}, {"name": "市区"}, {"name": "其他"}],
        "city_id": [18, 16]
    }, {"name": "中山市", "child": [{"name": "中山市"}], "city_id": [18, 17]}, {
        "name": "潮州市",
        "child": [{"name": "湘桥区"}, {"name": "潮安县"}, {"name": "饶平县"}],
        "city_id": [18, 18]
    }, {
        "name": "揭阳市",
        "child": [{"name": "惠来县"}, {"name": "揭东县"}, {"name": "揭西县"}, {"name": "普宁市"}, {"name": "榕城区"}],
        "city_id": [18, 19]
    }, {
        "name": "云浮市",
        "child": [{"name": "云城区"}, {"name": "云安县"}, {"name": "新兴县"}, {"name": "罗定市"}, {"name": "郁南县"}],
        "city_id": [18, 20]
    }],
    "id": 18
}, {
    "name": "广西壮族自治区",
    "child": [{
        "name": "南宁市",
        "child": [{"name": "上林县"}, {"name": "兴宁区"}, {"name": "宾阳县"}, {"name": "横县"}, {"name": "武鸣县"}, {"name": "江南区"}, {"name": "良庆区"}, {"name": "西乡塘区"}, {"name": "邕宁区"}, {"name": "隆安县"}, {"name": "青秀区"}, {"name": "马山县"}],
        "city_id": [19, 0]
    }, {
        "name": "柳州市",
        "child": [{"name": "三江侗族自治县"}, {"name": "城中区"}, {"name": "柳北区"}, {"name": "柳南区"}, {"name": "柳城县"}, {"name": "柳江县"}, {"name": "融安县"}, {"name": "融水苗族自治县"}, {"name": "鱼峰区"}, {"name": "鹿寨县"}],
        "city_id": [19, 1]
    }, {
        "name": "桂林市",
        "child": [{"name": "七星区"}, {"name": "临桂县"}, {"name": "全州县"}, {"name": "兴安县"}, {"name": "叠彩区"}, {"name": "平乐县"}, {"name": "恭城瑶族自治县"}, {"name": "永福县"}, {"name": "灌阳县"}, {"name": "灵川县"}, {"name": "秀峰区"}, {"name": "荔浦县"}, {"name": "象山区"}, {"name": "资源县"}, {"name": "阳朔县"}, {"name": "雁山区"}, {"name": "龙胜各族自治县"}],
        "city_id": [19, 2]
    }, {
        "name": "梧州市",
        "child": [{"name": "万秀区"}, {"name": "岑溪市"}, {"name": "苍梧县"}, {"name": "蒙山县"}, {"name": "藤县"}, {"name": "蝶山区"}, {"name": "长洲区"}],
        "city_id": [19, 3]
    }, {
        "name": "北海市",
        "child": [{"name": "合浦县"}, {"name": "海城区"}, {"name": "铁山港区"}, {"name": "银海区"}],
        "city_id": [19, 4]
    }, {
        "name": "防城港市",
        "child": [{"name": "上思县"}, {"name": "东兴市"}, {"name": "港口区"}, {"name": "防城区"}],
        "city_id": [19, 5]
    }, {
        "name": "钦州市",
        "child": [{"name": "浦北县"}, {"name": "灵山县"}, {"name": "钦北区"}, {"name": "钦南区"}],
        "city_id": [19, 6]
    }, {
        "name": "贵港市",
        "child": [{"name": "平南县"}, {"name": "桂平市"}, {"name": "港北区"}, {"name": "港南区"}, {"name": "覃塘区"}],
        "city_id": [19, 7]
    }, {
        "name": "玉林市",
        "child": [{"name": "兴业县"}, {"name": "北流市"}, {"name": "博白县"}, {"name": "容县"}, {"name": "玉州区"}, {"name": "陆川县"}],
        "city_id": [19, 8]
    }, {
        "name": "百色市",
        "child": [{"name": "乐业县"}, {"name": "凌云县"}, {"name": "右江区"}, {"name": "平果县"}, {"name": "德保县"}, {"name": "田东县"}, {"name": "田林县"}, {"name": "田阳县"}, {"name": "西林县"}, {"name": "那坡县"}, {"name": "隆林各族自治县"}, {"name": "靖西县"}],
        "city_id": [19, 9]
    }, {
        "name": "贺州市",
        "child": [{"name": "八步区"}, {"name": "富川瑶族自治县"}, {"name": "昭平县"}, {"name": "钟山县"}],
        "city_id": [19, 10]
    }, {
        "name": "河池市",
        "child": [{"name": "东兰县"}, {"name": "凤山县"}, {"name": "南丹县"}, {"name": "大化瑶族自治县"}, {"name": "天峨县"}, {"name": "宜州市"}, {"name": "巴马瑶族自治县"}, {"name": "环江毛南族自治县"}, {"name": "罗城仫佬族自治县"}, {"name": "都安瑶族自治县"}, {"name": "金城江区"}],
        "city_id": [19, 11]
    }, {
        "name": "来宾市",
        "child": [{"name": "兴宾区"}, {"name": "合山市"}, {"name": "忻城县"}, {"name": "武宣县"}, {"name": "象州县"}, {"name": "金秀瑶族自治县"}],
        "city_id": [19, 12]
    }, {
        "name": "崇左市",
        "child": [{"name": "凭祥市"}, {"name": "大新县"}, {"name": "天等县"}, {"name": "宁明县"}, {"name": "扶绥县"}, {"name": "江州区"}, {"name": "龙州县"}],
        "city_id": [19, 13]
    }],
    "id": 19
}, {
    "name": "海南省",
    "child": [{
        "name": "海口市",
        "child": [{"name": "琼山区"}, {"name": "秀英区"}, {"name": "美兰区"}, {"name": "龙华区"}],
        "city_id": [20, 0]
    }, {"name": "三亚市", "child": [{"name": "三亚市"}], "city_id": [20, 1]}, {
        "name": "五指山市",
        "child": [{"name": "五指山市"}],
        "city_id": [20, 2]
    }, {"name": "琼海市", "child": [{"name": "琼海市"}], "city_id": [20, 3]}, {
        "name": "儋州市",
        "child": [{"name": "儋州市"}],
        "city_id": [20, 4]
    }, {"name": "文昌市", "child": [{"name": "文昌市"}], "city_id": [20, 5]}, {
        "name": "万宁市",
        "child": [{"name": "万宁市"}],
        "city_id": [20, 6]
    }, {"name": "东方市", "child": [{"name": "东方市"}], "city_id": [20, 7]}, {
        "name": "定安县",
        "child": [{"name": "定安县"}],
        "city_id": [20, 8]
    }, {"name": "屯昌县", "child": [{"name": "屯昌县"}], "city_id": [20, 9]}, {
        "name": "澄迈县",
        "child": [{"name": "澄迈县"}],
        "city_id": [20, 10]
    }, {"name": "临高县", "child": [{"name": "临高县"}], "city_id": [20, 11]}, {
        "name": "白沙黎族自治县",
        "child": [{"name": "白沙黎族自治县"}],
        "city_id": [20, 12]
    }, {"name": "昌江黎族自治县", "child": [{"name": "昌江黎族自治县"}], "city_id": [20, 13]}, {
        "name": "乐东黎族自治县",
        "child": [{"name": "乐东黎族自治县"}],
        "city_id": [20, 14]
    }, {"name": "陵水黎族自治县", "child": [{"name": "陵水黎族自治县"}], "city_id": [20, 15]}, {
        "name": "保亭黎族苗族自治县",
        "child": [{"name": "保亭黎族苗族自治县"}],
        "city_id": [20, 16]
    }, {
        "name": "琼中黎族苗族自治县",
        "child": [{"name": "琼中黎族苗族自治县"}],
        "city_id": [20, 17]
    }, {"name": "西沙群岛"}, {"name": "南沙群岛"}, {"name": "中沙群岛的岛礁及其海域"}],
    "id": 20
}, {
    "name": "重庆市",
    "child": [{
        "name": "重庆市",
        "child": [{"name": "万州区"}, {"name": "涪陵区"}, {"name": "渝中区"}, {"name": "大渡口区"}, {"name": "江北区"}, {"name": "沙坪坝区"}, {"name": "九龙坡区"}, {"name": "南岸区"}, {"name": "北碚区"}, {"name": "双桥区"}, {"name": "万盛区"}, {"name": "渝北区"}, {"name": "巴南区"}, {"name": "黔江区"}, {"name": "长寿区"}, {"name": "綦江县"}, {"name": "潼南县"}, {"name": "铜梁县"}, {"name": "大足县"}, {"name": "荣昌县"}, {"name": "璧山县"}, {"name": "梁平县"}, {"name": "城口县"}, {"name": "丰都县"}, {"name": "垫江县"}, {"name": "武隆县"}, {"name": "忠县"}, {"name": "开县"}, {"name": "云阳县"}, {"name": "奉节县"}, {"name": "巫山县"}, {"name": "巫溪县"}, {"name": "石柱土家族自治县"}, {"name": "秀山土家族苗族自治县"}, {"name": "酉阳土家族苗族自治县"}, {"name": "彭水苗族土家族自治县"}, {"name": "江津市"}, {"name": "合川市"}, {"name": "永川市"}, {"name": "南川市"}],
        "city_id": [21, 0]
    }],
    "id": 21
}, {
    "name": "四川省",
    "child": [{
        "name": "成都市",
        "child": [{"name": "双流县"}, {"name": "大邑县"}, {"name": "崇州市"}, {"name": "彭州市"}, {"name": "成华区"}, {"name": "新津县"}, {"name": "新都区"}, {"name": "武侯区"}, {"name": "温江区"}, {"name": "蒲江县"}, {"name": "邛崃市"}, {"name": "郫县"}, {"name": "都江堰市"}, {"name": "金堂县"}, {"name": "金牛区"}, {"name": "锦江区"}, {"name": "青白江区"}, {"name": "青羊区"}, {"name": "龙泉驿区"}],
        "city_id": [22, 0]
    }, {
        "name": "自贡市",
        "child": [{"name": "大安区"}, {"name": "富顺县"}, {"name": "沿滩区"}, {"name": "自流井区"}, {"name": "荣县"}, {"name": "贡井区"}],
        "city_id": [22, 1]
    }, {
        "name": "攀枝花市",
        "child": [{"name": "东区"}, {"name": "仁和区"}, {"name": "盐边县"}, {"name": "米易县"}, {"name": "西区"}],
        "city_id": [22, 2]
    }, {
        "name": "泸州市",
        "child": [{"name": "叙永县"}, {"name": "古蔺县"}, {"name": "合江县"}, {"name": "江阳区"}, {"name": "泸县"}, {"name": "纳溪区"}, {"name": "龙马潭区"}],
        "city_id": [22, 3]
    }, {
        "name": "德阳市",
        "child": [{"name": "中江县"}, {"name": "什邡市"}, {"name": "广汉市"}, {"name": "旌阳区"}, {"name": "绵竹市"}, {"name": "罗江县"}],
        "city_id": [22, 4]
    }, {
        "name": "绵阳市",
        "child": [{"name": "三台县"}, {"name": "北川羌族自治县"}, {"name": "安县"}, {"name": "平武县"}, {"name": "梓潼县"}, {"name": "江油市"}, {"name": "涪城区"}, {"name": "游仙区"}, {"name": "盐亭县"}],
        "city_id": [22, 5]
    }, {
        "name": "广元市",
        "child": [{"name": "元坝区"}, {"name": "利州区"}, {"name": "剑阁县"}, {"name": "旺苍县"}, {"name": "朝天区"}, {"name": "苍溪县"}, {"name": "青川县"}],
        "city_id": [22, 6]
    }, {
        "name": "遂宁市",
        "child": [{"name": "大英县"}, {"name": "安居区"}, {"name": "射洪县"}, {"name": "船山区"}, {"name": "蓬溪县"}],
        "city_id": [22, 7]
    }, {
        "name": "内江市",
        "child": [{"name": "东兴区"}, {"name": "威远县"}, {"name": "市中区"}, {"name": "资中县"}, {"name": "隆昌县"}],
        "city_id": [22, 8]
    }, {
        "name": "乐山市",
        "child": [{"name": "五通桥区"}, {"name": "井研县"}, {"name": "夹江县"}, {"name": "峨眉山市"}, {"name": "峨边彝族自治县"}, {"name": "市中区"}, {"name": "沐川县"}, {"name": "沙湾区"}, {"name": "犍为县"}, {"name": "金口河区"}, {"name": "马边彝族自治县"}],
        "city_id": [22, 9]
    }, {
        "name": "南充市",
        "child": [{"name": "仪陇县"}, {"name": "南充市嘉陵区"}, {"name": "南部县"}, {"name": "嘉陵区"}, {"name": "营山县"}, {"name": "蓬安县"}, {"name": "西充县"}, {"name": "阆中市"}, {"name": "顺庆区"}, {"name": "高坪区"}],
        "city_id": [22, 10]
    }, {
        "name": "眉山市",
        "child": [{"name": "东坡区"}, {"name": "丹棱县"}, {"name": "仁寿县"}, {"name": "彭山县"}, {"name": "洪雅县"}, {"name": "青神县"}],
        "city_id": [22, 11]
    }, {
        "name": "宜宾市",
        "child": [{"name": "兴文县"}, {"name": "南溪县"}, {"name": "宜宾县"}, {"name": "屏山县"}, {"name": "江安县"}, {"name": "珙县"}, {"name": "筠连县"}, {"name": "翠屏区"}, {"name": "长宁县"}, {"name": "高县"}],
        "city_id": [22, 12]
    }, {
        "name": "广安市",
        "child": [{"name": "华蓥市"}, {"name": "岳池县"}, {"name": "广安区"}, {"name": "武胜县"}, {"name": "邻水县"}],
        "city_id": [22, 13]
    }, {
        "name": "达州市",
        "child": [{"name": "万源市"}, {"name": "大竹县"}, {"name": "宣汉县"}, {"name": "开江县"}, {"name": "渠县"}, {"name": "达县"}, {"name": "通川区"}],
        "city_id": [22, 14]
    }, {
        "name": "雅安市",
        "child": [{"name": "名山县"}, {"name": "天全县"}, {"name": "宝兴县"}, {"name": "汉源县"}, {"name": "石棉县"}, {"name": "芦山县"}, {"name": "荥经县"}, {"name": "雨城区"}],
        "city_id": [22, 15]
    }, {
        "name": "巴中市",
        "child": [{"name": "南江县"}, {"name": "巴州区"}, {"name": "平昌县"}, {"name": "通江县"}],
        "city_id": [22, 16]
    }, {
        "name": "资阳市",
        "child": [{"name": "乐至县"}, {"name": "安岳县"}, {"name": "简阳市"}, {"name": "雁江区"}],
        "city_id": [22, 17]
    }, {
        "name": "阿坝藏族羌族自治州",
        "child": [{"name": "九寨沟县"}, {"name": "壤塘县"}, {"name": "小金县"}, {"name": "松潘县"}, {"name": "汶川县"}, {"name": "理县"}, {"name": "红原县"}, {"name": "若尔盖县"}, {"name": "茂县"}, {"name": "金川县"}, {"name": "阿坝县"}, {"name": "马尔康县"}, {"name": "黑水县"}],
        "city_id": [22, 18]
    }, {
        "name": "甘孜藏族自治州",
        "child": [{"name": "丹巴县"}, {"name": "乡城县"}, {"name": "巴塘县"}, {"name": "康定县"}, {"name": "得荣县"}, {"name": "德格县"}, {"name": "新龙县"}, {"name": "泸定县"}, {"name": "炉霍县"}, {"name": "理塘县"}, {"name": "甘孜县"}, {"name": "白玉县"}, {"name": "石渠县"}, {"name": "稻城县"}, {"name": "色达县"}, {"name": "道孚县"}, {"name": "雅江县"}],
        "city_id": [22, 19]
    }, {
        "name": "凉山彝族自治州",
        "child": [{"name": "会东县"}, {"name": "会理县"}, {"name": "冕宁县"}, {"name": "喜德县"}, {"name": "宁南县"}, {"name": "布拖县"}, {"name": "德昌县"}, {"name": "昭觉县"}, {"name": "普格县"}, {"name": "木里藏族自治县"}, {"name": "甘洛县"}, {"name": "盐源县"}, {"name": "美姑县"}, {"name": "西昌"}, {"name": "越西县"}, {"name": "金阳县"}, {"name": "雷波县"}],
        "city_id": [22, 20]
    }],
    "id": 22
}, {
    "name": "贵州省",
    "child": [{
        "name": "贵阳市",
        "child": [{"name": "乌当区"}, {"name": "云岩区"}, {"name": "修文县"}, {"name": "南明区"}, {"name": "小河区"}, {"name": "开阳县"}, {"name": "息烽县"}, {"name": "清镇市"}, {"name": "白云区"}, {"name": "花溪区"}],
        "city_id": [23, 0]
    }, {
        "name": "六盘水市",
        "child": [{"name": "六枝特区"}, {"name": "水城县"}, {"name": "盘县"}, {"name": "钟山区"}],
        "city_id": [23, 1]
    }, {
        "name": "遵义市",
        "child": [{"name": "习水县"}, {"name": "仁怀市"}, {"name": "余庆县"}, {"name": "凤冈县"}, {"name": "务川仡佬族苗族自治县"}, {"name": "桐梓县"}, {"name": "正安县"}, {"name": "汇川区"}, {"name": "湄潭县"}, {"name": "红花岗区"}, {"name": "绥阳县"}, {"name": "赤水市"}, {"name": "道真仡佬族苗族自治县"}, {"name": "遵义县"}],
        "city_id": [23, 2]
    }, {
        "name": "安顺市",
        "child": [{"name": "关岭布依族苗族自治县"}, {"name": "平坝县"}, {"name": "普定县"}, {"name": "紫云苗族布依族自治县"}, {"name": "西秀区"}, {"name": "镇宁布依族苗族自治县"}],
        "city_id": [23, 3]
    }, {
        "name": "铜仁地区",
        "child": [{"name": "万山特区"}, {"name": "印江土家族苗族自治县"}, {"name": "德江县"}, {"name": "思南县"}, {"name": "松桃苗族自治县"}, {"name": "江口县"}, {"name": "沿河土家族自治县"}, {"name": "玉屏侗族自治县"}, {"name": "石阡县"}, {"name": "铜仁市"}],
        "city_id": [23, 4]
    }, {
        "name": "黔西南布依族苗族自治州",
        "child": [{"name": "兴义市"}, {"name": "兴仁县"}, {"name": "册亨县"}, {"name": "安龙县"}, {"name": "普安县"}, {"name": "晴隆县"}, {"name": "望谟县"}, {"name": "贞丰县"}],
        "city_id": [23, 5]
    }, {
        "name": "毕节地区",
        "child": [{"name": "大方县"}, {"name": "威宁彝族回族苗族自治县"}, {"name": "毕节市"}, {"name": "纳雍县"}, {"name": "织金县"}, {"name": "赫章县"}, {"name": "金沙县"}, {"name": "黔西县"}],
        "city_id": [23, 6]
    }, {
        "name": "黔东南苗族侗族自治州",
        "child": [{"name": "三穗县"}, {"name": "丹寨县"}, {"name": "从江县"}, {"name": "凯里市"}, {"name": "剑河县"}, {"name": "台江县"}, {"name": "天柱县"}, {"name": "岑巩县"}, {"name": "施秉县"}, {"name": "榕江县"}, {"name": "锦屏县"}, {"name": "镇远县"}, {"name": "雷山县"}, {"name": "麻江县"}, {"name": "黄平县"}, {"name": "黎平县"}],
        "city_id": [23, 7]
    }, {
        "name": "黔南布依族苗族自治州",
        "child": [{"name": "三都水族自治县"}, {"name": "平塘县"}, {"name": "惠水县"}, {"name": "独山县"}, {"name": "瓮安县"}, {"name": "福泉市"}, {"name": "罗甸县"}, {"name": "荔波县"}, {"name": "贵定县"}, {"name": "都匀市"}, {"name": "长顺县"}, {"name": "龙里县"}],
        "city_id": [23, 8]
    }],
    "id": 23
}, {
    "name": "云南省",
    "child": [{
        "name": "昆明市",
        "child": [{"name": "东川区"}, {"name": "五华区"}, {"name": "呈贡县"}, {"name": "安宁市"}, {"name": "官渡区"}, {"name": "宜良县"}, {"name": "富民县"}, {"name": "寻甸回族彝族自治县"}, {"name": "嵩明县"}, {"name": "晋宁县"}, {"name": "盘龙区"}, {"name": "石林彝族自治县"}, {"name": "禄劝彝族苗族自治县"}, {"name": "西山区"}],
        "city_id": [24, 0]
    }, {
        "name": "曲靖市",
        "child": [{"name": "会泽县"}, {"name": "宣威市"}, {"name": "富源县"}, {"name": "师宗县"}, {"name": "沾益县"}, {"name": "罗平县"}, {"name": "陆良县"}, {"name": "马龙县"}, {"name": "麒麟区"}],
        "city_id": [24, 1]
    }, {
        "name": "玉溪市",
        "child": [{"name": "元江哈尼族彝族傣族自治县"}, {"name": "华宁县"}, {"name": "峨山彝族自治县"}, {"name": "新平彝族傣族自治县"}, {"name": "易门县"}, {"name": "江川县"}, {"name": "澄江县"}, {"name": "红塔区"}, {"name": "通海县"}],
        "city_id": [24, 2]
    }, {
        "name": "保山市",
        "child": [{"name": "施甸县"}, {"name": "昌宁县"}, {"name": "腾冲县"}, {"name": "隆阳区"}, {"name": "龙陵县"}],
        "city_id": [24, 3]
    }, {
        "name": "昭通市",
        "child": [{"name": "大关县"}, {"name": "威信县"}, {"name": "巧家县"}, {"name": "彝良县"}, {"name": "昭阳区"}, {"name": "水富县"}, {"name": "永善县"}, {"name": "盐津县"}, {"name": "绥江县"}, {"name": "镇雄县"}, {"name": "鲁甸县"}],
        "city_id": [24, 4]
    }, {
        "name": "丽江市",
        "child": [{"name": "华坪县"}, {"name": "古城区"}, {"name": "宁蒗彝族自治县"}, {"name": "永胜县"}, {"name": "玉龙纳西族自治县"}],
        "city_id": [24, 5]
    }, {"name": "思茅市"}, {
        "name": "临沧市",
        "child": [{"name": "临翔区"}, {"name": "云县"}, {"name": "凤庆县"}, {"name": "双江拉祜族佤族布朗族傣族自治县"}, {"name": "永德县"}, {"name": "沧源佤族自治县"}, {"name": "耿马傣族佤族自治县"}, {"name": "镇康县"}],
        "city_id": [24, 7]
    }, {
        "name": "楚雄彝族自治州",
        "child": [{"name": "元谋县"}, {"name": "南华县"}, {"name": "双柏县"}, {"name": "大姚县"}, {"name": "姚安县"}, {"name": "楚雄市"}, {"name": "武定县"}, {"name": "永仁县"}, {"name": "牟定县"}, {"name": "禄丰县"}],
        "city_id": [24, 8]
    }, {
        "name": "红河哈尼族彝族自治州",
        "child": [{"name": "个旧市"}, {"name": "元阳县"}, {"name": "屏边苗族自治县"}, {"name": "建水县"}, {"name": "开远市"}, {"name": "弥勒县"}, {"name": "河口瑶族自治县"}, {"name": "泸西县"}, {"name": "石屏县"}, {"name": "红河县"}, {"name": "绿春县"}, {"name": "蒙自县"}, {"name": "金平苗族瑶族傣族自治县"}],
        "city_id": [24, 9]
    }, {
        "name": "文山壮族苗族自治州",
        "child": [{"name": "丘北县"}, {"name": "富宁县"}, {"name": "广南县"}, {"name": "文山县"}, {"name": "砚山县"}, {"name": "西畴县"}, {"name": "马关县"}, {"name": "麻栗坡县"}],
        "city_id": [24, 10]
    }, {
        "name": "西双版纳傣族自治州",
        "child": [{"name": "勐海县"}, {"name": "勐腊县"}, {"name": "景洪市"}],
        "city_id": [24, 11]
    }, {
        "name": "大理白族自治州",
        "child": [{"name": "云龙县"}, {"name": "剑川县"}, {"name": "南涧彝族自治县"}, {"name": "大理市"}, {"name": "宾川县"}, {"name": "巍山彝族回族自治县"}, {"name": "弥渡县"}, {"name": "永平县"}, {"name": "洱源县"}, {"name": "漾濞彝族自治县"}, {"name": "祥云县"}, {"name": "鹤庆县"}],
        "city_id": [24, 12]
    }, {
        "name": "德宏傣族景颇族自治州",
        "child": [{"name": "梁河县"}, {"name": "潞西市"}, {"name": "瑞丽市"}, {"name": "盈江县"}, {"name": "陇川县"}],
        "city_id": [24, 13]
    }, {"name": "怒江傈僳族自治州"}, {
        "name": "迪庆藏族自治州",
        "child": [{"name": "德钦县"}, {"name": "维西傈僳族自治县"}, {"name": "香格里拉县"}],
        "city_id": [24, 15]
    }],
    "id": 24
}, {
    "name": "西藏自治区",
    "child": [{
        "name": "拉萨市",
        "child": [{"name": "城关区"}, {"name": "堆龙德庆县"}, {"name": "墨竹工卡县"}, {"name": "尼木县"}, {"name": "当雄县"}, {"name": "曲水县"}, {"name": "林周县"}, {"name": "达孜县"}],
        "city_id": [25, 0]
    }, {
        "name": "昌都地区",
        "child": [{"name": "丁青县"}, {"name": "八宿县"}, {"name": "察雅县"}, {"name": "左贡县"}, {"name": "昌都县"}, {"name": "江达县"}, {"name": "洛隆县"}, {"name": "类乌齐县"}, {"name": "芒康县"}, {"name": "贡觉县"}, {"name": "边坝县"}],
        "city_id": [25, 1]
    }, {
        "name": "山南地区",
        "child": [{"name": "乃东县"}, {"name": "加查县"}, {"name": "扎囊县"}, {"name": "措美县"}, {"name": "曲松县"}, {"name": "桑日县"}, {"name": "洛扎县"}, {"name": "浪卡子县"}, {"name": "琼结县"}, {"name": "贡嘎县"}, {"name": "错那县"}, {"name": "隆子县"}],
        "city_id": [25, 2]
    }, {
        "name": "日喀则地区",
        "child": [{"name": "亚东县"}, {"name": "仁布县"}, {"name": "仲巴县"}, {"name": "南木林县"}, {"name": "吉隆县"}, {"name": "定日县"}, {"name": "定结县"}, {"name": "岗巴县"}, {"name": "康马县"}, {"name": "拉孜县"}, {"name": "日喀则市"}, {"name": "昂仁县"}, {"name": "江孜县"}, {"name": "白朗县"}, {"name": "聂拉木县"}, {"name": "萨嘎县"}, {"name": "萨迦县"}, {"name": "谢通门县"}],
        "city_id": [25, 3]
    }, {
        "name": "那曲地区",
        "child": [{"name": "嘉黎县"}, {"name": "安多县"}, {"name": "尼玛县"}, {"name": "巴青县"}, {"name": "比如县"}, {"name": "班戈县"}, {"name": "申扎县"}, {"name": "索县"}, {"name": "聂荣县"}, {"name": "那曲县"}],
        "city_id": [25, 4]
    }, {
        "name": "阿里地区",
        "child": [{"name": "噶尔县"}, {"name": "措勤县"}, {"name": "改则县"}, {"name": "日土县"}, {"name": "普兰县"}, {"name": "札达县"}, {"name": "革吉县"}],
        "city_id": [25, 5]
    }, {
        "name": "林芝地区",
        "child": [{"name": "墨脱县"}, {"name": "察隅县"}, {"name": "工布江达县"}, {"name": "朗县"}, {"name": "林芝县"}, {"name": "波密县"}, {"name": "米林县"}],
        "city_id": [25, 6]
    }],
    "id": 25
}, {
    "name": "陕西省",
    "child": [{
        "name": "西安市",
        "child": [{"name": "临潼区"}, {"name": "周至县"}, {"name": "户县"}, {"name": "新城区"}, {"name": "未央区"}, {"name": "灞桥区"}, {"name": "碑林区"}, {"name": "莲湖区"}, {"name": "蓝田县"}, {"name": "长安区"}, {"name": "阎良区"}, {"name": "雁塔区"}, {"name": "高陵县"}],
        "city_id": [26, 0]
    }, {
        "name": "铜川市",
        "child": [{"name": "印台区"}, {"name": "宜君县"}, {"name": "王益区"}, {"name": "耀州区"}],
        "city_id": [26, 1]
    }, {
        "name": "宝鸡市",
        "child": [{"name": "凤县"}, {"name": "凤翔县"}, {"name": "千阳县"}, {"name": "太白县"}, {"name": "岐山县"}, {"name": "扶风县"}, {"name": "渭滨区"}, {"name": "眉县"}, {"name": "金台区"}, {"name": "陇县"}, {"name": "陈仓区"}, {"name": "麟游县"}],
        "city_id": [26, 2]
    }, {
        "name": "咸阳市",
        "child": [{"name": "三原县"}, {"name": "干县"}, {"name": "兴平市"}, {"name": "彬县"}, {"name": "旬邑县"}, {"name": "杨陵区"}, {"name": "武功县"}, {"name": "永寿县"}, {"name": "泾阳县"}, {"name": "淳化县"}, {"name": "渭城区"}, {"name": "礼泉县"}, {"name": "秦都区"}, {"name": "长武县"}],
        "city_id": [26, 3]
    }, {
        "name": "渭南市",
        "child": [{"name": "临渭区"}, {"name": "华县"}, {"name": "华阴市"}, {"name": "合阳县"}, {"name": "大荔县"}, {"name": "富平县"}, {"name": "潼关县"}, {"name": "澄城县"}, {"name": "白水县"}, {"name": "蒲城县"}, {"name": "韩城市"}],
        "city_id": [26, 4]
    }, {
        "name": "延安市",
        "child": [{"name": "吴起县"}, {"name": "子长县"}, {"name": "安塞县"}, {"name": "宜川县"}, {"name": "宝塔区"}, {"name": "富县"}, {"name": "延川县"}, {"name": "延长县"}, {"name": "志丹县"}, {"name": "洛川县"}, {"name": "甘泉县"}, {"name": "黄陵县"}, {"name": "黄龙县"}],
        "city_id": [26, 5]
    }, {
        "name": "汉中市",
        "child": [{"name": "佛坪县"}, {"name": "勉县"}, {"name": "南郑县"}, {"name": "城固县"}, {"name": "宁强县"}, {"name": "汉台区"}, {"name": "洋县"}, {"name": "留坝县"}, {"name": "略阳县"}, {"name": "西乡县"}, {"name": "镇巴县"}],
        "city_id": [26, 6]
    }, {
        "name": "榆林市",
        "child": [{"name": "佳县"}, {"name": "吴堡县"}, {"name": "子洲县"}, {"name": "定边县"}, {"name": "府谷县"}, {"name": "榆林市榆阳区"}, {"name": "横山县"}, {"name": "清涧县"}, {"name": "神木县"}, {"name": "米脂县"}, {"name": "绥德县"}, {"name": "靖边县"}],
        "city_id": [26, 7]
    }, {
        "name": "安康市",
        "child": [{"name": "宁陕县"}, {"name": "岚皋县"}, {"name": "平利县"}, {"name": "旬阳县"}, {"name": "汉滨区"}, {"name": "汉阴县"}, {"name": "白河县"}, {"name": "石泉县"}, {"name": "紫阳县"}, {"name": "镇坪县"}],
        "city_id": [26, 8]
    }, {
        "name": "商洛市",
        "child": [{"name": "丹凤县"}, {"name": "商南县"}, {"name": "商州区"}, {"name": "山阳县"}, {"name": "柞水县"}, {"name": "洛南县"}, {"name": "镇安县"}],
        "city_id": [26, 9]
    }],
    "id": 26
}, {
    "name": "甘肃省",
    "child": [{
        "name": "兰州市",
        "child": [{"name": "七里河区"}, {"name": "城关区"}, {"name": "安宁区"}, {"name": "榆中县"}, {"name": "永登县"}, {"name": "皋兰县"}, {"name": "红古区"}, {"name": "西固区"}],
        "city_id": [27, 0]
    }, {"name": "嘉峪关市", "child": [{"name": "嘉峪关市"}], "city_id": [27, 1]}, {
        "name": "金昌市",
        "child": [{"name": "永昌县"}, {"name": "金川区"}],
        "city_id": [27, 2]
    }, {
        "name": "白银市",
        "child": [{"name": "会宁县"}, {"name": "平川区"}, {"name": "景泰县"}, {"name": "白银区"}, {"name": "靖远县"}],
        "city_id": [27, 3]
    }, {
        "name": "天水市",
        "child": [{"name": "张家川回族自治县"}, {"name": "武山县"}, {"name": "清水县"}, {"name": "甘谷县"}, {"name": "秦安县"}, {"name": "秦州区"}, {"name": "麦积区"}],
        "city_id": [27, 4]
    }, {
        "name": "武威市",
        "child": [{"name": "凉州区"}, {"name": "古浪县"}, {"name": "天祝藏族自治县"}, {"name": "民勤县"}],
        "city_id": [27, 5]
    }, {
        "name": "张掖市",
        "child": [{"name": "临泽县"}, {"name": "山丹县"}, {"name": "民乐县"}, {"name": "甘州区"}, {"name": "肃南裕固族自治县"}, {"name": "高台县"}],
        "city_id": [27, 6]
    }, {
        "name": "平凉市",
        "child": [{"name": "华亭县"}, {"name": "崆峒区"}, {"name": "崇信县"}, {"name": "庄浪县"}, {"name": "泾川县"}, {"name": "灵台县"}, {"name": "静宁县"}],
        "city_id": [27, 7]
    }, {
        "name": "酒泉市",
        "child": [{"name": "敦煌市"}, {"name": "玉门市"}, {"name": "瓜州县（原安西县）"}, {"name": "肃北蒙古族自治县"}, {"name": "肃州区"}, {"name": "金塔县"}, {"name": "阿克塞哈萨克族自治县"}],
        "city_id": [27, 8]
    }, {
        "name": "庆阳市",
        "child": [{"name": "华池县"}, {"name": "合水县"}, {"name": "宁县"}, {"name": "庆城县"}, {"name": "正宁县"}, {"name": "环县"}, {"name": "西峰区"}, {"name": "镇原县"}],
        "city_id": [27, 9]
    }, {
        "name": "定西市",
        "child": [{"name": "临洮县"}, {"name": "安定区"}, {"name": "岷县"}, {"name": "渭源县"}, {"name": "漳县"}, {"name": "通渭县"}, {"name": "陇西县"}],
        "city_id": [27, 10]
    }, {
        "name": "陇南市",
        "child": [{"name": "两当县"}, {"name": "宕昌县"}, {"name": "康县"}, {"name": "徽县"}, {"name": "成县"}, {"name": "文县"}, {"name": "武都区"}, {"name": "礼县"}, {"name": "西和县"}],
        "city_id": [27, 11]
    }, {
        "name": "临夏回族自治州",
        "child": [{"name": "东乡族自治县"}, {"name": "临夏县"}, {"name": "临夏市"}, {"name": "和政县"}, {"name": "广河县"}, {"name": "康乐县"}, {"name": "永靖县"}, {"name": "积石山保安族东乡族撒拉族自治县"}],
        "city_id": [27, 12]
    }, {
        "name": "甘南藏族自治州",
        "child": [{"name": "临潭县"}, {"name": "卓尼县"}, {"name": "合作市"}, {"name": "夏河县"}, {"name": "玛曲县"}, {"name": "碌曲县"}, {"name": "舟曲县"}, {"name": "迭部县"}],
        "city_id": [27, 13]
    }],
    "id": 27
}, {
    "name": "青海省",
    "child": [{
        "name": "西宁市",
        "child": [{"name": "城东区"}, {"name": "城中区"}, {"name": "城北区"}, {"name": "城西区"}, {"name": "大通回族土族自治县"}, {"name": "湟中县"}, {"name": "湟源县"}],
        "city_id": [28, 0]
    }, {
        "name": "海东地区",
        "child": [{"name": "乐都县"}, {"name": "互助土族自治县"}, {"name": "化隆回族自治县"}, {"name": "平安县"}, {"name": "循化撒拉族自治县"}, {"name": "民和回族土族自治县"}],
        "city_id": [28, 1]
    }, {
        "name": "海北藏族自治州",
        "child": [{"name": "刚察县"}, {"name": "海晏县"}, {"name": "祁连县"}, {"name": "门源回族自治县"}],
        "city_id": [28, 2]
    }, {
        "name": "黄南藏族自治州",
        "child": [{"name": "同仁县"}, {"name": "尖扎县"}, {"name": "河南蒙古族自治县"}, {"name": "泽库县"}],
        "city_id": [28, 3]
    }, {
        "name": "海南藏族自治州",
        "child": [{"name": "共和县"}, {"name": "兴海县"}, {"name": "同德县"}, {"name": "贵南县"}, {"name": "贵德县"}],
        "city_id": [28, 4]
    }, {
        "name": "果洛藏族自治州",
        "child": [{"name": "久治县"}, {"name": "玛多县"}, {"name": "玛沁县"}, {"name": "班玛县"}, {"name": "甘德县"}, {"name": "达日县"}],
        "city_id": [28, 5]
    }, {
        "name": "玉树藏族自治州",
        "child": [{"name": "囊谦县"}, {"name": "曲麻莱县"}, {"name": "杂多县"}, {"name": "治多县"}, {"name": "玉树县"}, {"name": "称多县"}],
        "city_id": [28, 6]
    }, {
        "name": "海西蒙古族藏族自治州",
        "child": [{"name": "乌兰县"}, {"name": "冷湖行委"}, {"name": "大柴旦行委"}, {"name": "天峻县"}, {"name": "德令哈市"}, {"name": "格尔木市"}, {"name": "茫崖行委"}, {"name": "都兰县"}],
        "city_id": [28, 7]
    }],
    "id": 28
}, {
    "name": "宁夏回族自治区",
    "child": [{
        "name": "银川市",
        "child": [{"name": "兴庆区"}, {"name": "永宁县"}, {"name": "灵武市"}, {"name": "西夏区"}, {"name": "贺兰县"}, {"name": "金凤区"}],
        "city_id": [29, 0]
    }, {
        "name": "石嘴山市",
        "child": [{"name": "大武口区"}, {"name": "平罗县"}, {"name": "惠农区"}],
        "city_id": [29, 1]
    }, {
        "name": "吴忠市",
        "child": [{"name": "利通区"}, {"name": "同心县"}, {"name": "盐池县"}, {"name": "青铜峡市"}],
        "city_id": [29, 2]
    }, {
        "name": "固原市",
        "child": [{"name": "原州区"}, {"name": "彭阳县"}, {"name": "泾源县"}, {"name": "西吉县"}, {"name": "隆德县"}],
        "city_id": [29, 3]
    }, {"name": "中卫市", "child": [{"name": "中宁县"}, {"name": "沙坡头区"}, {"name": "海原县"}], "city_id": [29, 4]}],
    "id": 29
}, {
    "name": "新疆维吾尔自治区",
    "child": [{
        "name": "乌鲁木齐市",
        "child": [{"name": "东山区"}, {"name": "乌鲁木齐县"}, {"name": "天山区"}, {"name": "头屯河区"}, {"name": "新市区"}, {"name": "水磨沟区"}, {"name": "沙依巴克区"}, {"name": "达坂城区"}],
        "city_id": [30, 0]
    }, {
        "name": "克拉玛依市",
        "child": [{"name": "乌尔禾区"}, {"name": "克拉玛依区"}, {"name": "独山子区"}, {"name": "白碱滩区"}],
        "city_id": [30, 1]
    }, {
        "name": "吐鲁番地区",
        "child": [{"name": "吐鲁番市"}, {"name": "托克逊县"}, {"name": "鄯善县"}],
        "city_id": [30, 2]
    }, {
        "name": "哈密地区",
        "child": [{"name": "伊吾县"}, {"name": "哈密市"}, {"name": "巴里坤哈萨克自治县"}],
        "city_id": [30, 3]
    }, {
        "name": "昌吉回族自治州",
        "child": [{"name": "吉木萨尔县"}, {"name": "呼图壁县"}, {"name": "奇台县"}, {"name": "昌吉市"}, {"name": "木垒哈萨克自治县"}, {"name": "玛纳斯县"}, {"name": "米泉市"}, {"name": "阜康市"}],
        "city_id": [30, 4]
    }, {
        "name": "博尔塔拉蒙古自治州",
        "child": [{"name": "博乐市"}, {"name": "温泉县"}, {"name": "精河县"}],
        "city_id": [30, 5]
    }, {
        "name": "巴音郭楞蒙古自治州",
        "child": [{"name": "博湖县"}, {"name": "和硕县"}, {"name": "和静县"}, {"name": "尉犁县"}, {"name": "库尔勒市"}, {"name": "焉耆回族自治县"}, {"name": "若羌县"}, {"name": "轮台县"}],
        "city_id": [30, 6]
    }, {
        "name": "阿克苏地区",
        "child": [{"name": "乌什县"}, {"name": "库车县"}, {"name": "拜城县"}, {"name": "新和县"}, {"name": "柯坪县"}, {"name": "沙雅县"}, {"name": "温宿县"}, {"name": "阿克苏市"}, {"name": "阿瓦提县"}],
        "city_id": [30, 7]
    }, {
        "name": "克孜勒苏柯尔克孜自治州",
        "child": [{"name": "乌恰县"}, {"name": "阿克陶县"}, {"name": "阿合奇县"}, {"name": "阿图什市"}],
        "city_id": [30, 8]
    }, {
        "name": "喀什地区",
        "child": [{"name": "伽师县"}, {"name": "叶城县"}, {"name": "喀什市"}, {"name": "塔什库尔干塔吉克自治县"}, {"name": "岳普湖县"}, {"name": "巴楚县"}, {"name": "泽普县"}, {"name": "疏勒县"}, {"name": "疏附县"}, {"name": "英吉沙县"}, {"name": "莎车县"}, {"name": "麦盖提县"}],
        "city_id": [30, 9]
    }, {
        "name": "和田地区",
        "child": [{"name": "于田县"}, {"name": "和田县"}, {"name": "和田市"}, {"name": "墨玉县"}, {"name": "民丰县"}, {"name": "洛浦县"}, {"name": "皮山县"}, {"name": "策勒县"}],
        "city_id": [30, 10]
    }, {
        "name": "伊犁哈萨克自治州",
        "child": [{"name": "伊宁县"}, {"name": "伊宁市"}, {"name": "奎屯市"}, {"name": "察布查尔锡伯自治县"}, {"name": "尼勒克县"}, {"name": "巩留县"}, {"name": "新源县"}, {"name": "昭苏县"}, {"name": "特克斯县"}, {"name": "霍城县"}],
        "city_id": [30, 11]
    }, {
        "name": "塔城地区",
        "child": [{"name": "乌苏市"}, {"name": "和布克赛尔蒙古自治县"}, {"name": "塔城市"}, {"name": "托里县"}, {"name": "沙湾县"}, {"name": "裕民县"}, {"name": "额敏县"}],
        "city_id": [30, 12]
    }, {
        "name": "阿勒泰地区",
        "child": [{"name": "吉木乃县"}, {"name": "哈巴河县"}, {"name": "富蕴县"}, {"name": "布尔津县"}, {"name": "福海县"}, {"name": "阿勒泰市"}, {"name": "青河县"}],
        "city_id": [30, 13]
    }, {"name": "石河子市", "child": [{"name": "石河子市"}], "city_id": [30, 14]}, {
        "name": "阿拉尔市",
        "child": [{"name": "阿拉尔市"}],
        "city_id": [30, 15]
    }, {"name": "图木舒克市", "child": [{"name": "图木舒克市"}], "city_id": [30, 16]}, {
        "name": "五家渠市",
        "child": [{"name": "五家渠市"}],
        "city_id": [30, 17]
    }],
    "id": 30
}, {
    "name": "台湾省",
    "child": [{"name": "台北市"}, {"name": "高雄市"}, {"name": "基隆市"}, {"name": "台中市"}, {"name": "台南市"}, {"name": "新竹市"}, {"name": "嘉义市"}, {"name": "台北县"}, {"name": "宜兰县"}, {"name": "桃园县"}, {"name": "新竹县"}, {"name": "苗栗县"}, {"name": "台中县"}, {"name": "彰化县"}, {"name": "南投县"}, {"name": "云林县"}, {"name": "嘉义县"}, {"name": "台南县"}, {"name": "高雄县"}, {"name": "屏东县"}, {"name": "澎湖县"}, {"name": "台东县"}, {"name": "花莲县"}],
    "id": 31
}, {
    "name": "香港特别行政区",
    "child": [{
        "name": "香港特别行政区",
        "child": [{"name": "中西区"}, {"name": "东区"}, {"name": "九龙城区"}, {"name": "观塘区"}, {"name": "南区"}, {"name": "深水埗区"}, {"name": "黄大仙区"}, {"name": "湾仔区"}, {"name": "油尖旺区"}, {"name": "离岛区"}, {"name": "葵青区"}, {"name": "北区"}, {"name": "西贡区"}, {"name": "沙田区"}, {"name": "屯门区"}, {"name": "大埔区"}, {"name": "荃湾区"}, {"name": "元朗区"}],
        "city_id": [32, 0]
    }],
    "id": 32
}, {"name": "澳门特别行政区", "child": [{"name": "澳门特别行政区"}], "id": 33}];

