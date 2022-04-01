# **H5C3的学习**

前端学习

```
1、HTML、CSS基础、JavaScript语法基础。学完基础后，可以仿照电商网站（例如京东、小米）做首页的布局。

2、JavaScript语法进阶。包括：作用域和闭包、this和对象原型等。相信我，JS语法，永远是面试中最重要的部分。

3、jQuery、Ajax等。jQuery没有过时，它仍然是前端基础的一部分。 

4、ES6语法。这部分属于JS新增的语法，面试必问。其中，关于 promise、async 等内容要尤其关注。 

5、HTML5和CSS3。要熟悉其中的新特性。

6、移动Web开发、Bootstrap等。要注意移动开发中的适配和兼容性问题。

7、前端框架：Vue.js和React。这两个框架至少要会一个。入门时，建议先学Vue.js，上手相对容易。但无论如何，同时掌握 Vue 和 React 才是合格的前端同学。
```

推荐网站：https://www.w3school.com.cn/

由于markdown的特性，html不适合在md文件里书写。故截图

目的：精通网页布局，前端必备，为JavaScript做准备！

什么是网页？（切片）

多个网页集合成网站，网页是一页通常是html格式的文件，通过浏览器阅读。

网页的组成：元素组成。称之为HTML文件。

本质是一个标记语言，标记语言是一套标记标签！

![image-20220318170403854](readme.assets/image-20220318170403854.png)

网页的形成：前端人员开发代码，浏览器解析渲染，生成web界面

常用的浏览器：火狐，谷歌，safari，opera，IE，Edge

浏览器内核：渲染引擎，读取网页内容。

![image-20220318170733079](readme.assets/image-20220318170733079.png)

web标准：W3C组织制定的一系列标准的集合。

1.web标准确保各种浏览器展示一致

web标准：

![image-20220318171002663](readme.assets/image-20220318171002663.png)

![image-20220318171208147](readme.assets/image-20220318171208147.png)

![image-20220318171249090](readme.assets/image-20220318171249090.png)

## HTML5基础标签：

### 多数标签成对出现，单标签少。

![image-20220318171651499](readme.assets/image-20220318171651499.png)

### 双标签：包含关系，并列关系

![image-20220318171754677](readme.assets/image-20220318171754677.png)

### HTML页面==HTML文档

![image-20220318171929724](readme.assets/image-20220318171929724.png)

![image-20220318172419684](readme.assets/image-20220318172419684.png)

![image-20220318172710102](readme.assets/image-20220318172710102.png)

常用vscode插件

![image-20220318173944487](readme.assets/image-20220318173944487.png)

![image-20220318180254732](readme.assets/image-20220318180254732.png)

### html版本声明

![image-20220318181132362](readme.assets/image-20220318181132362.png)

### **常用标签**

html页面语言

![image-20220318181353918](readme.assets/image-20220318181353918.png)

定义字符集meta

![image-20220318181500655](readme.assets/image-20220318181500655.png)

标签语意：

![image-20220318181737094](readme.assets/image-20220318181737094.png)

h1标题标签

![image-20220318181905557](readme.assets/image-20220318181905557.png)

p段落标签

![image-20220318182203108](readme.assets/image-20220318182203108.png)

br换行标签（单标签）

![image-20220318182319895](readme.assets/image-20220318182319895.png)

文本格式化标签

![image-20220318182719997](readme.assets/image-20220318182719997.png)

b加粗

i倾斜

s删除线

u下划线

构造盒子标签: div span

![image-20220318183344666](readme.assets/image-20220318183344666.png)

图像标签img （单标签）

![image-20220318183524526](readme.assets/image-20220318183524526.png)

一般单填一个width，height会等比例刷新

![image-20220318183729847](readme.assets/image-20220318183729847.png)

![image-20220318184233756](readme.assets/image-20220318184233756.png)

路径问题

![image-20220318184652786](readme.assets/image-20220318184652786.png)

![image-20220318184913850](readme.assets/image-20220318184913850.png)

超连接a标签

![image-20220321142533189](readme.assets/image-20220321142533189.png)

可以进行标签嵌套，让图片也有链接。

![image-20220321194710242](readme.assets/image-20220321194710242.png)

![image-20220321194731115](readme.assets/image-20220321194731115.png)

HTML注释标签和特殊字符

<!-- target='外部链接打开方式' -->

![image-20220323181507159](readme.assets/image-20220323181507159.png)

特殊字符

![image-20220323181545611](readme.assets/image-20220323181545611.png)

表格标签<table>，<tr>,  <td>, <th>用来展示数据。

![image-20220323183014370](readme.assets/image-20220323183014370.png)

![image-20220323183616453](readme.assets/image-20220323183616453.png)

表格标签属性一般不用,用CSS做

![image-20220323183753727](readme.assets/image-20220323183753727.png)

![image-20220323184907792](readme.assets/image-20220323184907792.png)

合并单元格

![image-20220323185131466](readme.assets/image-20220323185131466.png)

![image-20220323190000968](readme.assets/image-20220323190000968.png)

![image-20220323185605154](readme.assets/image-20220323185605154.png)

★列表标签，用来布局。ul,li

无序列表ul只能放li

![image-20220323190640663](readme.assets/image-20220323190640663.png)

![image-20220323191231736](readme.assets/image-20220323191231736.png)

有序列表标签ol只能放li

![image-20220323191411630](readme.assets/image-20220323191411630.png)

![image-20220323192521444](readme.assets/image-20220323192521444.png)

★表单form

实现用户的搜集和传递

![image-20220323193546721](readme.assets/image-20220323193546721.png)

input标签

![image-20220323193840161](readme.assets/image-20220323193840161.png)

![image-20220323194129734](readme.assets/image-20220323194129734.png)

![image-20220323234059570](readme.assets/image-20220323234059570.png)

label标签

![image-20220324004851034](readme.assets/image-20220324004851034.png)

select下拉菜单

![image-20220324005242014](readme.assets/image-20220324005242014.png)

textarea文本域

![image-20220324005600507](readme.assets/image-20220324005600507.png)

H5新增标签

推荐网站：https://www.w3school.com.cn/

```
1、结构标签
（1）section：独立内容区块，可以用h1~h6组成大纲，表示文档结构，也可以有章节、页眉、页脚或页眉的其他部分；
（2）article：特殊独立区块，表示这篇页眉中的核心内容；
（3）aside：标签内容之外与标签内容相关的辅助信息；
（4）header：某个区块的头部信息/标题；
（5）hgroup：头部信息/标题的补充内容；
（6）footer：底部信息；
（7）nav：导航条部分信息
（8）figure：独立的单元，例如某个有图片与内容的新闻块。
```

```
2、表单标签
（1）email：必须输入邮件；
（2）url：必须输入url地址；
（3）number：必须输入数值；
（4）range：必须输入一定范围内的数值；
（5）Date Pickers：日期选择器
（6）search：搜索常规的文本域；
（7）color：颜色；
```

```
3、媒体标签
（1）video：视频
（2）audio：音频
（3）embed：嵌入内容（包括各种媒体），Midi、Wav、AU、MP3、Flash、AIFF等。
```

```
H5新增属性
 （1）对于js进行添加的属性
<script defer src=".....js" onload="alert('a')"></script> 
<script async src=".....js" onload="alert('b')"></script> 
异步加载先出现b再出现a。

 （2）网页中标签中加入小图标的样式代码
 有序列表ol:新增start（列表起始值），reversed（是否倒置）menu菜单type属性（3个菜单类型）
 内嵌css样式：在标签内部来定义一个样式区块（scoped）,只对样式标签内部才有效
 内嵌框架：iframe元素，新增了seamless无边距无边框，srcdoc定义了内嵌框架的内容。

总结新增属性：
 （1）manifest属性：定义页面需要用到的离线应用文件，一般放在<html>标签里
 （2）charset属性：meta属性之一,定义页面的字符集
 （3）sizes属性： `<link>`新增属性，当link的rel="icon"时，用以设置图标大小
 （4）base属性: `<base href="http://localhost/" target="_blank">`表示当在新窗口打开一个页面时，会将href中的内容作为前缀添加到地址前
 （5）defer属性：script标签属性，表示脚本加载完毕后，只有当页面也加载完毕才执行（推迟执行）
 （6）async属性：script标签属性，脚本加载完毕后马上执行（运行过程中浏览器会解析下面的内容），即使页面还没有加载完毕（异步执行）
 （7）media属性： `<a>`元素属性：表示对何种设备进行优化
 （8）hreflang属性： `<a>`的属性，表示超链接指向的网址使用的语言
 （9）ref属性：`<a>`的属性,定义超链接是否是外部链接
 （10）reversed属性:`<ol>`的属性，定义序号是否倒叙
 （11）start属性：`<ol>`的属性，定义序号的起始值
 （12）scoped属性：内嵌CSS样式的属性，定义该样式只局限于拥有该内嵌样式的元素，适用于单页开发


```

## CSS3基础：

![image-20220327200901146](readme.assets/image-20220327200901146.png)

**作用：**

1.美化装饰网页。

2.html结构和CSS样式相分离。

### CSS语法规范

![image-20220329192023228](readme.assets/image-20220329192023228.png)

![image-20220329195232237](readme.assets/image-20220329195232237.png)

### 代码风格: 展开，小写，加空格

![image-20220329195606931](readme.assets/image-20220329195606931.png)

![image-20220329195701467](readme.assets/image-20220329195701467.png)

![image-20220329195755721](readme.assets/image-20220329195755721.png)

### CSS选择器：

1.基础选择器

单个选择器组成。

标签选择器

![image-20220330125557091](readme.assets/image-20220330125557091.png)

![image-20220330125755166](readme.assets/image-20220330125755166.png)

类选择器（最常用）

![image-20220330133335529](readme.assets/image-20220330133335529.png)

![image-20220330135855791](readme.assets/image-20220330135855791.png)

![image-20220330140816506](readme.assets/image-20220330140816506.png)

![image-20220330141745587](readme.assets/image-20220330141745587.png)

id选择器

id属性只能被使用一次，对于每个html来说不能重复使用，应当作为唯一属性

![image-20220330141827761](readme.assets/image-20220330141827761.png)

![image-20220330143150064](readme.assets/image-20220330143150064.png)

**经常作为javascript的首选锚点**

通配符选择器(清除内外边距)

![image-20220330143857473](readme.assets/image-20220330143857473.png)

设置字体样式：

![image-20220330144728668](readme.assets/image-20220330144728668.png)

**建议使用常见字体**

![image-20220330144908025](readme.assets/image-20220330144908025.png)

![image-20220330145736316](readme.assets/image-20220330145736316.png)

![image-20220330150836205](readme.assets/image-20220330150836205.png)

![image-20220330151050350](readme.assets/image-20220330151050350.png)

设置文本样式：

![image-20220330155709675](readme.assets/image-20220330155709675.png)

十六进制颜色可以两两缩写

#FF00FF  <===>  #F0F

![image-20220330155645446](readme.assets/image-20220330155645446.png)

图片等其他的文件标签，需要用其父标签去设置位置

![image-20220330155918070](readme.assets/image-20220330155918070.png)

![image-20220330160525637](readme.assets/image-20220330160525637.png)

一般通过行间距，来调整文本内容垂直方式

![image-20220330162024608](readme.assets/image-20220330162024608.png)

### CSS三种引入方式：

1.嵌入式（学习用）

![image-20220330163400590](readme.assets/image-20220330163400590.png)

2.行内式（非主流,一般用于对文字的修改）

![image-20220330163814773](readme.assets/image-20220330163814773.png)

3.链接式（主流用法，单.css保存）

![image-20220330164158844](readme.assets/image-20220330164158844.png)

![image-20220330164254655](readme.assets/image-20220330164254655.png)

### Chrome调试工具调试样式：

![image-20220330165854920](readme.assets/image-20220330165854920.png)

![image-20220330170037850](readme.assets/image-20220330170037850.png)

### Emmet语法

快捷写法(快速构造框架)

![image-20220330172118420](readme.assets/image-20220330172118420.png)

### css的复合选择器

![image-20220330175312990](readme.assets/image-20220330175312990.png)

后代选择器

![image-20220330192816410](readme.assets/image-20220330192816410.png)

子选择器

![image-20220330193635122](readme.assets/image-20220330193635122.png)

并集选择器

![image-20220330194104276](readme.assets/image-20220330194104276.png)

伪类选择器

![image-20220330201508134](readme.assets/image-20220330201508134.png)

![image-20220330201725658](readme.assets/image-20220330201725658.png)

![image-20220330201742368](readme.assets/image-20220330201742368.png)

![image-20220331001955516](readme.assets/image-20220331001955516.png)

![image-20220331002051844](readme.assets/image-20220331002051844.png)

### css的元素显示模式

什么是元素显示模式？

网页标签非常多，不同的地方会用到不同类型的标签，了解他们的特点可以更好布局我们的网页。

html元素一般分为，块元素和行内元素。

块元素

![image-20220331105614884](readme.assets/image-20220331105614884.png)

![image-20220331105809401](readme.assets/image-20220331105809401.png)

![image-20220331110420941](readme.assets/image-20220331110420941.png)

行内元素

![image-20220331110711856](readme.assets/image-20220331110711856.png)

![image-20220331125717630](readme.assets/image-20220331125717630.png)

![image-20220331130343650](readme.assets/image-20220331130343650.png)

![image-20220331132223946](readme.assets/image-20220331132223946.png)

转换成块元素：常用

转换成行内块元素：常用

### css的背景

背景图片的导入和渲染方式

![image-20220401004657611](readme.assets/image-20220401004657611.png)

背景图片位置

![image-20220401004327054](readme.assets/image-20220401004327054.png)

![image-20220401005133035](readme.assets/image-20220401005133035.png)

![image-20220401010520468](readme.assets/image-20220401010520468.png)

做视差滚动效果

![image-20220401011259304](readme.assets/image-20220401011259304.png)

推荐使用复合型的写法

![image-20220401011603887](readme.assets/image-20220401011603887.png)

![image-20220401012002016](readme.assets/image-20220401012002016.png)

### css三大特性

相同的属性值会覆盖，不同的则保留

![image-20220401013240582](readme.assets/image-20220401013240582.png)

子类会继承父类的部分属性

![image-20220401013454159](readme.assets/image-20220401013454159.png)

行高的继承性

![image-20220401014231444](readme.assets/image-20220401014231444.png)

默认选择器权重

![image-20220401014358145](readme.assets/image-20220401014358145.png)

继承的权重是0

![image-20220401015015779](readme.assets/image-20220401015015779.png)

复合选择器

![image-20220401015731803](readme.assets/image-20220401015731803.png)

### 盒子模型

页面布局三大核心：盒子模型，浮动，定位。

![image-20220401133057864](readme.assets/image-20220401133057864.png)

![image-20220401133400519](readme.assets/image-20220401133400519.png)

边框属性

![image-20220401133801829](readme.assets/image-20220401133801829.png)

![image-20220401145315435](readme.assets/image-20220401145315435.png)

边框简写

![image-20220401150427062](readme.assets/image-20220401150427062.png)

合理的运用层叠性。

![image-20220401151344010](readme.assets/image-20220401151344010.png)

表格调整

一般来说，表格需要细细调整

![image-20220401155837244](readme.assets/image-20220401155837244.png)

![image-20220401155903521](readme.assets/image-20220401155903521.png)

边框粗细影响盒子大小

![image-20220401161808540](readme.assets/image-20220401161808540.png)

内边距，边框和内容的关系

![image-20220401162120677](readme.assets/image-20220401162120677.png)

外边距（会影响边框大小）

![image-20220401163424377](readme.assets/image-20220401163424377.png)

常用外边距写法：

*margin*: 0 auto;水平居中

![image-20220401180657647](readme.assets/image-20220401180657647.png)

解决外边距塌陷

![image-20220401172648021](readme.assets/image-20220401172648021.png)

直接清除所有元素的内外边距

![image-20220401172957885](readme.assets/image-20220401172957885.png)

![image-20220401172902428](readme.assets/image-20220401172902428.png)

分析布局

![image-20220401173346176](readme.assets/image-20220401173346176.png)

1.布局为啥用不同的盒子？

标签有语义，用的多了，就输了。

2.类名or多类名

选取盒子方便，后期维护方便。

3.margin和padding怎么用？

margin不会撑大盒子，padding则会。

4.布局学习主要是由UI设计先做，然后按照比列去做。









## H5C3进阶：









## 实战项目：
