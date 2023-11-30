export class ConstValue {
    public static readonly IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    public static readonly IS_TEACHER = true; //是否为教师端版本
    public static readonly CoursewareKey = 'HeiBaiPei2_3ns1Eh4K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    public static readonly GameName = '2023-k1-J6冬-黑白配（交互二）'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    public static readonly Subject = 1; //学科（1理科 2语文 3英语）
}
