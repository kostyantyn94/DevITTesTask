function nodeChildCount(node, deep = Infinity) {
  if (deep === 0 || !node.childNodes.length) {
    return 0;
  }

  let count = node.childNodes.length;

  if (deep !== Infinity) {
    deep--;
  }

  node.childNodes.forEach((childNode) => {
    count += nodeChildCount(childNode, deep);
  });

  return count;
}

const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div)); //  2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2
