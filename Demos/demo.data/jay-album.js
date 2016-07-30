(function () {
    var jaySongs = [
        { name: "可爱女人", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "完美主义", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "星晴", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "娘子", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "斗牛", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "黑色幽默", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "伊斯坦堡", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "印第安老斑鸠", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "龙卷风", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        { name: "反方向的钟", album: "Jay", year: "2000-11-06", artist: "周杰伦" },
        
        { name: "爱在西元前", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "爸我回来了", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "简单爱", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "忍者", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "开不了口", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "上海1943", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "对不起", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "威廉古堡", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "双截棍", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        { name: "安静", album: "范特西", year: "2001-09-14", artist: "周杰伦" },
        
        { name: "半兽人", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "半岛铁盒", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "暗号", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "龙拳", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "火车叨位去", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "分裂", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "爷爷泡的茶", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "回到过去", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "米兰的小铁匠", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        { name: "最后的战役", album: "八度空间", year: "2002-07-18", artist: "周杰伦" },
        
        { name: "以父之名", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "懦夫", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "晴天", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "三年二班", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "东风破", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "你听得到", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "同一种调调", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "她的睫毛", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "爱情悬崖", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "梯田", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        { name: "双刀", album: "叶惠美", year: "2003-07-29", artist: "周杰伦" },
        
        { name: "我的地盘", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "七里香", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "借口", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "外婆", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "将军", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "搁浅", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "乱舞春秋", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "困兽之斗", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "园游会", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        { name: "止战之殇", album: "七里香", year: "2004-08-03", artist: "周杰伦" },
        
        { name: "夜曲", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "蓝色风暴", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "发如雪", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "黑色毛衣", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "四面楚歌", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "枫", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "浪漫手机", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "逆鳞", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "麦芽糖", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "珊瑚海 (feat. Lara)", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "飘逸", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        { name: "一路向北", album: "十一月的肖邦", year: "2005-11-01", artist: "周杰伦" },
        
        { name: "夜的第七章", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "听妈妈的话", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "千里之外", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "本草纲目", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "退后", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "红模仿", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "心雨", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "白色风车", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "迷迭香", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        { name: "菊花台", album: "依然范特西", year: "2006-09-05", artist: "周杰伦" },
        
        { name: "牛仔很忙", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "彩虹", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "青花瓷", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "阳光宅男", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "蒲公英的约定", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "无双", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "我不配", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "扯", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "甜甜的", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        { name: "最长的电影", album: "我很忙", year: "2007-11-02", artist: "周杰伦" },
        
        { name: "龙战骑士", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "给我一首歌的时间", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "蛇舞", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "花海", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "魔术先生", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "说好的幸福呢", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "兰亭序", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "流浪诗人", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "时光机", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "乔克叔叔", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        { name: "稻香", album: "魔杰座", year: "2008-10-15", artist: "周杰伦" },
        
        { name: "跨时代", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "说了再见", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "烟花易冷", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "免费教学录影带", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "好久不见", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "雨下一整晚", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "嘻哈空姐", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "我落泪情绪零碎", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "爱的飞行日记", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "自导自演", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        { name: "超人不会飞", album: "跨时代", year: "2010-05-18", artist: "周杰伦" },
        
        { name: "惊叹号", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "迷魂曲", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "Mine Mine", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "公主病", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "你好吗", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "疗伤烧肉粽", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "琴伤", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "水手怕水", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "世界未末日", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "皮影戏", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        { name: "超跑女神", album: "惊叹号", year: "2011-11-11", artist: "周杰伦" },
        
        { name: "四季列车", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "手语", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "公公偏头痛", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "明明就", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "傻笑", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "比较大的大提琴", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "爱你没差", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "红尘客栈", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "梦想启动", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "大笨钟", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "哪里都是你", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        { name: "乌克丽丽", album: "十二新作", year: "2012-12-28", artist: "周杰伦" },
        
        { name: "阳明山", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "窃爱", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "算什么男人", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "天涯过客", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "怎么了 (feat. 袁詠琳)", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "一口气全念对", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "我要夏天", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "手写的从前", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "鞋子特大号", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "听爸爸的话", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "美人鱼", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
        { name: "听见下雨的声音", album: "哎呦，不错哦", year: "2014-12-26", artist: "周杰伦" },
    ];
    
    window.jaySongs = jaySongs;
})();