
window.onload=function(){
var list = document.getElementById("shuffleAndSort");
var button = document.getElementById("shuffle");
function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleNodes()
{
    var nodes = list.children, 
	i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
	console.log(nodes);
    while(i < nodes.length)
    {
        list.appendChild(nodes[i]);
        ++i;
    }
} 
document.getElementById("shuffle").onclick = shuffleNodes;

$("button#sort").click(function() {
function sortList(ul) {
    var nodes = list.children;
	var ul = document.getElementById("shuffleAndSort");
	Array.from(ul.getElementsByTagName("LI"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(list => ul.appendChild(list));
}
sortList("shuffleAndSort");
});

} 
  