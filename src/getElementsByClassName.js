// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // Document.body gives us entire HTML elements/skeleton framework starting from the body tag
  var root = document.body;
  var resultArray = [];
  // Determine if current root has a classname (using classList) of the targetName
  // Then need to loop through each div tag element and check if it has targetName (recursion)
  // Check if current div tag has childnodes and then complete steps 1 and 2 (recursion)
  // console.log(root.childNodes[1].classList.value)
  var checkEachNode = function(node) {
    if (node.classList) {
      // classList is a DOMTokenList of objects, each element is a child of the parent node
      if (node.classList.contains(className)) {
        resultArray.push(node);
        // console.log(node.childNodes)
        //Now check if the current node we're looking at has childrenNodes
      }
      if (node.childNodes.length > 0) {
        for (var i = 0; i < node.childNodes.length; i ++) {
          // console.log(node.childNodes[i]);
          checkEachNode(node.childNodes[i]);
        }
      }
    }
  }
  checkEachNode(root);
  // console.log(resultArray.length);
  return resultArray;

};
