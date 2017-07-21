/*通票的数组*/
var throughData = [
					{
						url:"http://item.juooo.com/78445",
						img:"images/cover1.jpg",
						title:"英伦范漫画幽默剧《二马》",
						price:74.25,
					},
					{
						url:"http://item.juooo.com/79790",
						img:"images/cover5.jpg",
						title:"京剧清音会《老生常谈》",
						price:180,
					},
					{
						url:"http://item.juooo.com/79787",
						img:"images/cover6.jpg",
						title:"京昆演音会《乱弹·三月》",
						price:180,
					},
					{
						url:"http://item.juooo.com/79066",
						img:"images/cover9.jpg",
						title:"温情喜剧《独自温暖》",
						price:180,
					},
					{
						url:"http://item.juooo.com/79485",
						img:"images/cover2.jpg",
						title:"悬疑喜剧《非常悬疑》",
						price:80,
					},
					{
						url:"http://item.juooo.com/79785",
						img:"images/cover3.jpg",
						title:"美国国宝级光影偶剧《双生姊妹》",
						price:99,
					},
					{
						url:"http://item.juooo.com/79783",
						img:"images/cover4.jpg",
						title:"捷克荒诞剧作《反语》",
						price:99,
					},
					{
						url:"http://item.juooo.com/79788",
						img:"images/cover7.jpg",
						title:"台湾骉舞剧场《自由步—身体的众生相》",
						price:99,
					},
					{
						url:"http://item.juooo.com/79791",
						img:"images/cover8.jpg",
						title:"载誉国际十年经典《临池舞墨》",
						price:99,
					},
				];

/*套票的数组*/
var packageData = [
					[
						{
							url:"http://item.juooo.com/79785",
							img:"images/cover3.jpg",
							title:"2017首届嬉习喜戏艺术节《双生姊妹》",
							time: "2017.11.1/2",
							address:"南山文体中心小剧院"
						},
						{
							url:"http://item.juooo.com/79783",							
							img:"images/cover4.jpg",
							title:"2017首届嬉习喜戏艺术节《反语》",
							time: "2017.11.9/10",
							address:"南山文体中心大剧院"							
						},						
					],//嬉

					[
						{
							url:"http://item.juooo.com/79788",
							img:"images/cover7.jpg",
							title:"2017首届嬉习喜戏艺术节《自由步—身体的众生相》",
							time: "2017.11.30/12.1",
							address:"南山文体中心小剧院"
						},
						{
							url:"http://item.juooo.com/79791",
							img:"images/cover8.jpg",
							title:"2017首届嬉习喜戏艺术节《临池舞墨》",
							time: "2017.12.21",
							address:"南山文体中心大剧院"							
						},						
					],//习

					[
						{
							url:"http://item.juooo.com/78445",
							img:"images/cover1.jpg",
							title:"2017首届嬉习喜戏艺术节 开幕作品《二马》",
							time: "2017.8.22/23",
							address:"南山文体中心大剧院"
						},
						{
							url:"http://item.juooo.com/79485",
							img:"images/cover2.jpg",
							title:"2017首届嬉习喜戏艺术节《非常悬疑》",
							time: "2017.9.8/9",
							address:"南山文体中心大剧院"							
						},						
					],//喜
					
					[
						{
							url:"http://item.juooo.com/79066",
							img:"images/cover9.jpg",
							title:"2017首届嬉习喜戏艺术节闭幕作品《独自温暖》",
							time: "2017.12.28",
							address:"南山文体中心大剧院"
						},
						{

							url:"http://item.juooo.com/79790",							
							img:"images/cover5.jpg",
							title:"2017首届嬉习喜戏艺术节《老生常谈》",
							time: "2017.11.29",
							address:"南山文体中心大剧院"							
						},
						{
							url:"http://item.juooo.com/79787",
							img:"images/cover6.jpg",
							title:"2017首届嬉习喜戏艺术节《乱弹·三月》",
							time: "2017.11.30",
							address:"南山文体中心大剧院"							
						},						
					],//戏


				];

/*剧目详情的数组*/
/*var showData = [
					{
						url:"http://item.juooo.com/78445",
						img:"images/cover1.jpg",
						title:"老舍名著全新演绎 · 英伦范漫画幽默剧《二马》",
						summary:"全男班演绎 倾力复活你的笑神经",
						time:"2017.8.22-8.23",
						detail:"这个戏看似荒诞，离奇，叫人捧腹，却表现了年轻戏剧人的丰富想像力， 大胆的创造力和轻松自如，鲜明性格，高超的表演艺术水平。",
						photo:[
								"images/photo/item1/photo01.JPG",
								"images/photo/item1/photo02.JPG",
								"images/photo/item1/photo03.JPG",
								"images/photo/item1/photo04.JPG",
								"images/photo/item1/photo05.JPG",
								"images/photo/item1/photo06.JPG",
								"images/photo/item1/photo07.JPG",
								"images/photo/item1/photo08.JPG",
								"images/photo/item1/photo09.JPG",								
								"images/photo/item1/photo10.JPG",
								"images/photo/item1/photo11.JPG",
								"images/photo/item1/photo12.JPG",
								"images/photo/item1/photo13.JPG",
								"images/photo/item1/photo14.JPG",
								"images/photo/item1/photo15.JPG",	
						]
					},
					{
						url:"http://item.juooo.com/79790",
						img:"images/cover5.jpg",
						title:"“【清•弹】雅集”王珮瑜京剧巡回展·京剧清音会 《老生常谈》",
						summary:"“清音会”的一句话主旨：让观众90分钟读懂京剧（老生），90分钟听懂京剧（老生）。",
						time:"2017.11.29",
						detail:"王珮瑜的京剧清音会，受“清音桌文化”的影响，也有其更个人的符号的含义在内，即“清谈+演唱”的小型沙龙式演唱会。既能满足资深戏迷爱听的“那口唱”，也有专门为初试京剧音乐的新观众设计的跨界节目。清音会的概念来源于清末民初的“清音桌”，是当时一些京剧名家和名票的独特演出方式。如果用现代概念来划分，它更像是一个小型演唱会。与大剧场戏曲演出的区别是：清唱、不扮戏、不着戏服、依现场情况定制戏码。",
						photo:[
							"images/photo/item5/photo01.jpg",
							"images/photo/item5/photo02.jpg",
							"images/photo/item5/photo03.jpg",
							"images/photo/item5/photo04.jpg",
							"images/photo/item5/photo05.jpg",
							"images/photo/item5/photo06.jpg",
							"images/photo/item5/photo07.jpg",
							"images/photo/item5/photo08.jpg",
							"images/photo/item5/photo09.jpg",
						]
					},
					{
						url:"http://item.juooo.com/79787",
						img:"images/cover6.jpg",
						title:"“【清•弹】雅集”王珮瑜京剧巡回展·京昆演音会《乱弹·三月》",
						summary:"“演音会”是一个新的演出概念，但却并不抽象：它似音乐会又非音乐会，似演唱会又非演唱会，似戏剧又非戏剧，它融合了以上所有的演出形式，自成格局，用写意的手法、洗练的笔意勾画出一幅不一样的京剧音乐史诗。",
						time:"2017.11.30",
						detail:"“演音会”是一个新的演出概念：它似音乐会又非音乐会，似演唱会又非演唱会，似戏剧又非戏剧，它融合了以上所有的演出形式，用写意的手法、洗练的笔意勾画出一幅不一样的京剧音乐史诗。王珮瑜作为主创领衔京昆演音会《乱弹·三月》亲自担当制作人，因此这注定是一场非常“瑜老板气质”的演出，它非常符合王珮瑜给自己的标签：温和改革、积极保守。演音会秉持“绝不媚新、亦不迁旧”的想法，把乐器、人声、武打多种元素，传统的“唱念做打”以全新的概念呈现出来。王珮瑜谈及自己的创作初衷，“在京剧中，演员很强势，但在这次的演出中我希望将伴奏以演奏家的身份请上舞台，让演员和乐队平等对话。”、“今天所做的一切都是为了实现京剧艺术的当代化。”",
						photo:[
							"images/photo/item6/photo01.jpg",
							"images/photo/item6/photo02.jpg",
							"images/photo/item6/photo03.jpg",
							"images/photo/item6/photo04.jpg",
							"images/photo/item6/photo05.jpg",
							"images/photo/item6/photo06.jpg",
							"images/photo/item6/photo07.jpg",
							"images/photo/item6/photo08.jpg",
							"images/photo/item6/photo09.jpg",
						]
					},
					{
						url:"http://item.juooo.com/79066",
						img:"images/cover9.jpg",
						title:"吕丽萍孙海英担纲·年末献礼·温情喜剧《独自温暖》",
						summary:"直面孤独，用爱温暖  一部喜剧尽显人生百态",
						time:"2017.12.28",
						detail:"人间却到处是独自的人，他们以自己方式，寻找温暖，在茫茫人海中，在亲人中，在爱人身旁，在自己的心里……话剧《独自温暖》，宛如一幅画卷，无论冷嘲还是热讽，徐徐展开了一个年过花甲老妇人丰富的内心世界。她是一个独自寻找温暖的人，有过的失败和剩余的希望，在她的暮年撒下斑驳的痕迹。她的话语如飞刀般尖刻，却不妨碍心田如大地般肥沃。她和她的司机兼保镖，她和她的儿子，孙女之间的林林种种，无论误解还是理解，首先都融化在无比幽默的对话中……笑过之余，升起的难过，像一首晚诗，飘在你视野的远方，回声却萦绕在你的耳旁。",
						photo:[
							"images/photo/item9/photo01.JPG",
							"images/photo/item9/photo02.JPG",
							"images/photo/item9/photo03.JPG",
							"images/photo/item9/photo04.JPG",
							"images/photo/item9/photo05.JPG",
							"images/photo/item9/photo06.JPG",
							"images/photo/item9/photo07.jpg",
							"images/photo/item9/photo08.jpg",
							"images/photo/item9/photo09.JPG",
							"images/photo/item9/photo10.JPG",
							"images/photo/item9/photo11.jpg",
							"images/photo/item9/photo12.JPG",
							"images/photo/item9/photo13.JPG",
						]
					},
					{
						url:"http://item.juooo.com/79485",
						img:"images/cover2.jpg",
						title:"悬疑喜剧《非常悬疑》",
						summary:"这个戏看似荒诞，离奇，叫人捧腹，却表现了年轻戏剧人的丰富想像力， 大胆的创造力和轻松自如，鲜明性格，高超的表演艺术水平。",
						time:"2017.9.8-9.9",
						detail:"一部自称本年度最悬的悬疑剧马上就要在A市开演了！可是这样一个标准模式的商业演出，偏偏在演出当晚遭遇了全组演员的集体罢演。眼看观众已经陆续入场，就在导演走投无路之际，一位“临时演员”意外出现了——剧场志愿者，导演孤注一掷尽一切办法说服了剧场志愿者和自己一起演出该剧，并用仅剩的一点儿时间修改了故事情节，以便演出顺利进行。开场铃响，一出谁也不知道会发生什么的“悬疑剧”上演了！",
						photo:[
								"images/photo/item2/photo01.JPG",
								"images/photo/item2/photo02.JPG",
								"images/photo/item2/photo03.JPG",
								"images/photo/item2/photo04.JPG",
								"images/photo/item2/photo05.JPG",
								"images/photo/item2/photo07.JPG",
								"images/photo/item2/photo08.JPG",
								"images/photo/item2/photo09.JPG",								
								"images/photo/item2/photo10.JPG",							
						]
					},
					{
						url:"http://item.juooo.com/79785",
						img:"images/cover3.jpg",
						title:"爱丁堡艺术节告罄佳作 美国国宝级光影偶剧《双生姊妹》",
						summary:"非凡的技术，丰富的音效，电影与现实的巧妙转换，一部迷人，温馨又让你止不住眼泪的作品。",
						time:"2017.11.1-11.2",
						detail:"失去了双胞胎姐姐艾娃的七旬老人艾达，一直孤独的保持着姐姐在时两个人的生活习惯。然而，一场奇异狂欢节和一个怪异的镜子迷宫使她开启了一段跨越生命和死亡的时间之旅。《双生姊妹》的故事背景设置在了英格兰哥特式的风景中，用一个梦幻般的超自然的故事探索了对生命的哀悼。",
						photo:[
								"images/photo/item3/photo1.jpg",
								"images/photo/item3/photo2.jpg",
								"images/photo/item3/photo3.jpg",
								"images/photo/item3/photo4.jpg",
						]
					},
					{
						url:"http://item.juooo.com/79783",
						img:"images/cover4.jpg",
						title:"爱丁堡艺术节全戏剧奖提名 捷克荒诞剧作《反语》",
						summary:"荒诞，简约，天才之作！",
						time:"2017.11.9-11.10",
						detail:"《反语》的舞台设置简单至极：两个女人，一箱啤酒，这两位饰演啤酒厂酿酒工的女性舞者将在台上喝下所有的啤酒。她们将在舞台的氛围下逐渐呈现出历史真空下的边缘状态，诗意地回顾捷克共和国前总统哈维尔被隔离、异化的孤独。同时，雕塑家宝琳娜打造的巨型头偶，捷克著名音乐人斯万艾尔为此剧量身打造的戏剧性的配乐也为这部作品增色不少。",
						photo:[
								"images/photo/item4/photo1.jpg",
								"images/photo/item4/photo2.jpg",
								"images/photo/item4/photo3.jpg",
								"images/photo/item4/photo4.jpg",
								"images/photo/item4/photo5.jpg",
						]
					},
					{
						url:"http://item.juooo.com/79788",
						img:"images/cover7.jpg",
						title:"台湾骉舞剧场《自由步—身体的众生相》",
						summary:"作品犹如一场飨宴，各个舞段争奇斗艳，舞者展现轻快敏捷的肢体与精湛的戏剧天赋。",
						time:"2017.11.30-12.01",
						detail:"「驫」由书法家张梅驹教授刻印，他建议将原构思的「马场」命名，改成三匹马的驫，展现舞团衝劲与爆发力，也代表他们对舞蹈的热情与挚爱，于是便有了驫舞剧场。",
						photo:[
								"images/photo/item7/photo1.jpg",
								"images/photo/item7/photo2.jpg",
								"images/photo/item7/photo3.jpg",
								"images/photo/item7/photo4.jpg",
								"images/photo/item7/photo5.jpg",
								"images/photo/item7/photo6.jpg",
								"images/photo/item7/photo7.jpg",								
						]
					},
					{
						url:"http://item.juooo.com/79791",
						img:"images/cover8.jpg",
						title:"载誉国际十年经典《临池舞墨》",
						summary:"《临池舞墨》是广东现代舞团最受欢迎的镇团之作",
						time:"2017.12.21",
						detail:"《临池舞墨》是广东现代舞团最受欢迎的保留剧目之一。它于20111年被发展成为上下两阙的完整制作，上阙《临池》提取出中国书法中甲骨、小篆、隶书、楷书、行草五种书体的行笔特征、力道和神韵精髓，演化出各具特质的肢体。《临池》是广东现代舞团最成功的舞码之一。自2005年首演之后，舞团携作品巡演全球于百场。刘琦和广东现代舞团凭《临池》获得编舞、灯光设计、演出及制作的杰出奖项。",
						photo:[
								"images/photo/item8/photo01.JPG",
								"images/photo/item8/photo02.jpg",
								"images/photo/item8/photo03.JPG",
								"images/photo/item8/photo04.jpg",
								"images/photo/item8/photo05.jpg",
								"images/photo/item8/photo06.jpg",
								"images/photo/item8/photo07.jpg",
								"images/photo/item8/photo08.jpg",
								"images/photo/item8/photo09.jpg",
						]
					},
			 ];
*/