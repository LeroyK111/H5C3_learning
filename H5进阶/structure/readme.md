# html5高级结构

## 基础结构

```
基础	 
<!DOCTYPE> 	定义文档类型。
<html>	定义一个 HTML 文档
<title>	为文档定义一个标题
<body>	定义文档的主体
<h1> to <h6>	定义 HTML 标题
<p>	定义一个段落
<br>	定义简单的折行。
<hr>	定义水平线。
<!--...-->	定义一个注释
```

## 格式

```
格式	 
<acronym>	HTML5不再支持。 定义只取首字母的缩写。
<abbr>	定义一个缩写。
<address>	定义文档作者或拥有者的联系信息。
<b>	定义粗体文本。
<bdi>HTML5	允许您设置一段文本，使其脱离其父元素的文本方向设置。
<bdo>	定义文本的方向。
<big>	HTML5不再支持。 定义大号文本。
<blockquote>	定义块引用。
<center>	HTML5不再支持。 HTML 4.01 已废弃。定义居中文本。
<cite>	定义引用(citation)。
<code>	定义计算机代码文本。
<del>	定义被删除文本。
<dfn>	定义定义项目。
<em>	定义强调文本。 
<font>	HTML5不再支持。 HTML 4.01 已废弃。 定义文本的字体、尺寸和颜色
<i>	定义斜体文本。
<ins>	定义被插入文本。
<kbd>	定义键盘文本。
<mark>HTML5	定义带有记号的文本。
<meter>HTML5	定义度量衡。仅用于已知最大和最小值的度量。
<pre>	定义预格式文本
<progress>HTML5	定义运行中的任务进度（进程）。
<q>	定义短的引用。
<rp>HTML5	定义不支持 ruby 元素的浏览器所显示的内容。
<rt>HTML5	定义字符（中文注音或字符）的解释或发音。
<ruby>HTML5	定义 ruby 注释（中文注音或字符）。
<s>	定义加删除线的文本。
<samp>	定义计算机代码样本。
<small>	定义小号文本。
<strike>	HTML5不再支持。 HTML 4.01 已废弃。 定义加删除线的文本。
<strong>	定义语气更为强烈的强调文本。
<sub>	定义下标文本。
<sup>	定义上标文本。
<time>HTML5	定义一个日期/时间
<tt>	HTML5不再支持。 定义打字机文本。
<u>	定义下划线文本。
<var>	定义文本的变量部分。
<wbr>HTML5	规定在文本中的何处适合添加换行符。
```

## 表单

```
表单	 
<form>	定义一个 HTML 表单，用于用户输入。
<input>	定义一个输入控件
<textarea>	定义多行的文本输入控件。
<button>	定义按钮。
<select>	定义选择列表（下拉列表）。
<optgroup>	定义选择列表中相关选项的组合。
<option>	定义选择列表中的选项。
<label>	定义 input 元素的标注。
<fieldset>	定义围绕表单中元素的边框。
<legend>	定义 fieldset 元素的标题。
<datalist>HTML5	规定了 input 元素可能的选项列表。
<keygen>HTML5	规定用于表单的密钥对生成器字段。
<output>HTML5	定义一个计算的结果
```

## ★图像canvas

```
图像	 
<img>	定义图像。
<map>	定义图像映射。
<area>	定义图像地图内部的区域。
<canvas>HTML5	通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）。
<figcaption>HTML5	定义一个 caption for a <figure> element
<figure>HTML5	figure 标签用于对元素进行组合。
```

## ★框架iframe

```
<frame>	HTML5不再支持。 定义框架集的窗口或框架。
<frameset>	HTML5不再支持。定义框架集。
<noframes>	HTML5不再支持。 定义针对不支持框架的用户的替代内容。
<iframe>	定义内联框架。
```

## 媒体

```
<audio>HTML5	定义声音，比如音乐或其他音频流。
<source>HTML5	定义media元素 (<video> 和 <audio>)的媒体资源。media
<track>HTML5	为媒体(<video> 和 <audio>)元素定义外部文本轨道。
<video>HTML5	定义一个音频或者视频
```

## 链接

```
链接	 
<a>	定义一个链接
<link>	定义文档与外部资源的关系。
<nav>HTML5	定义导航链接
```

## 列表

```
列表	 
<ul>	定义一个无序列表
<ol>	定义一个有序列表
<li>	定义一个列表项
<dir>	HTML5不再支持。 HTML 4.01 已废弃。 定义目录列表。
<dl>	定义一个定义列表
<dt>	定义一个定义定义列表中的项目。
<dd>	定义定义列表中项目的描述。
<menu>	定义菜单列表。
<command>HTML5	定义用户可能调用的命令（比如单选按钮、复选框或按钮）。
```

## 表格

```
表格	 
<table>	定义一个表格
<caption>	定义表格标题。
<th>	定义表格中的表头单元格。
<tr>	定义表格中的行。
<td>	定义表格中的单元。
<thead>	定义表格中的表头内容。
<tbody>	定义表格中的主体内容。
<tfoot>	定义表格中的表注内容（脚注）。
<col>	定义表格中一个或多个列的属性值。
<colgroup>	定义表格中供格式化的列组。
```

## ★样式\节

```
<style>	定义文档的样式信息。
<div>	定义文档中的节。
<span>	定义文档中的节。
<header>HTML5	定义一个文档头部部分
<footer>HTML5	定义一个文档底部
<section>HTML5	定义了文档的某个区域
<article>HTML5	定义一个文章内容
<aside>HTML5	定义其所处内容之外的内容。
<details>HTML5	定义了用户可见的或者隐藏的需求的补充细节。
<dialog>HTML5	定义一个对话框或者窗口
<summary>HTML5	定义一个可见的标题。 当用户点击标题时会显示出详细信息。
```

## 元信息

```
元信息	 
<head>	定义关于文档的信息
<meta>	定义关于 HTML 文档的元信息。
<base>	定义页面中所有链接的默认地址或默认目标。
<basefont>	HTML5不再支持。 HTML 4.01 已废弃。 定义页面中文本的默认字体、颜色或尺寸。
```

## 程序

```
程序	 
<script>	定义客户端脚本。
<noscript>	定义针对不支持客户端脚本的用户的替代内容。
<applet>	HTML5不再支持。 HTML 4.01 已废弃。 定义嵌入的 applet。
<embed>HTML5	定义了一个容器，用来嵌入外部应用或者互动程序（插件）。
<object>	定义嵌入的对象。
<param>	定义对象的参数。
```



















