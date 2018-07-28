function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let grand = document.querySelector('#grand-node')
  let children = grand.querySelectorAll('div')
  return children[children.length - 1]

}

function increaseRankBy() {
  const rankedLists = document.querySelectorAll('.ranked-list li')

  for (let i of rankedLists) {
    i.innerHTML = parseInt(i.innerHTML) + 3
  }
}
