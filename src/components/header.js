const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
  // instantiating the elements
  const headerContainer = document.createElement('div')
  const hdrDate = document.createElement('span')
  const hdrTitle = document.createElement('h1')
  const hdrTemp = document.createElement('span')
  // setting class names, attributes and text
  headerContainer.classList.add('header')
  hdrDate.classList.add('date')
  hdrDate.textContent = `${date}`
  hdrTitle.textContent = `${title}`
  hdrTemp.classList.add('temp')
  hdrTemp.textContent = `${temp}`
  // creating the hierarchy
  headerContainer.appendChild(hdrDate)
  headerContainer.appendChild(hdrTitle)
  headerContainer.appendChild(hdrTemp)
  // never forget to return!
  return headerContainer
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
  document.querySelector(`${selector}`).appendChild(Header('Lambda Times', 'July 9, 2021', '70°'))
}

export { Header, headerAppender }
