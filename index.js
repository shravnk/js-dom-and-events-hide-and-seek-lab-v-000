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

  for (let i=0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + 3
  }
}
