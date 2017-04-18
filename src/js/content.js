/**
 *让文字显示部分，超过的被隐藏并追加省略号
 *
 *
 */
// js无法直接通过class获取对象，必须自己写一个方法,这样效率会非常低，原生js里最好用id获取，
// 直接用id获取domo对象
var oBox=document.getElementById("blogText");
// slice() 方法可从已有的数组中返回选定的元素。
// 您可使用负值从数组的尾部选取元素。
// 如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。
// 此处需要根据需求自行修改slice()的值，以达到要显示的内容
var demoHtml = oBox.innerHTML.slice(0,10)+'...';
// 填充至指定位置
oBox.innerHTML = demoHtml;
