import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

    // instantiating the elements
    const articleCard = document.createElement('div')
    const artHeadline = document.createElement('div')
    const artAuthor = document.createElement('div')
    const artImgCont = document.createElement('div')
    const artImg = document.createElement('img')
    const artAuthName = document.createElement('span')
    // setting class names, attributes and text
    articleCard.classList.add('card')
    artHeadline.classList.add('headline')
    artHeadline.textContent = `${article.headline}`
    artAuthor.classList.add('author')
    artImgCont.classList.add('img-container')
    artImg.src = `${article.authorPhoto}`
    artAuthName.textContent = `${article.authorName}`
    // creating the hierarchy
    articleCard.appendChild(artHeadline)
    articleCard.appendChild(artAuthor)
    artAuthor.appendChild(artImgCont)
    artImgCont.appendChild(artImg)
    artAuthor.appendChild(artAuthName)
    // adding event listeners
    articleCard.addEventListener('click', event => {
      console.log(`${artHeadline.textContent}`)
    })
    // never forget to return!
    return articleCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/articles`)
    .then(response => {
      const parentArticlesObj = response.data.articles
      // Description of code below for data transformation:
      //    The data fetched and stored in the parentArticlesObj variable above contains a object for which each value is an array containing multiple object.  Each of these nested objects contained the a single article's data, and would need to be passed into the Card function.
      //    I used Object.values() to transform parentArticlesObj's values into an array, so that I could use the forEach array method with a nested forEach array method to access each object containing article information
      Object.values(parentArticlesObj).forEach(parentArray => {
        parentArray.forEach(articleObj =>{
          const newArticleCard = Card(articleObj)
          document.querySelector(`${selector}`).appendChild(newArticleCard)
        })
      })
    })
    .catch(err => console.group(err.message))
    .finally(() => console.group('done'))
}

export { Card, cardAppender }
