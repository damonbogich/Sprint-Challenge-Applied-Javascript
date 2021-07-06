// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const articleEntry = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    console.log(response.data);
    console.log(response.data.articles);
    console.log(response.data.articles.bootstrap);
    const articleData = Object.entries(response.data.articles);
    console.log('article data', articleData);
    articleData.forEach(articleArray => {
        articleArray[1].forEach(article => {
            articleEntry.appendChild(createArticle(article));
        })
    })

    })

.catch(error => {
    console.log(error);
})
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>document.createElementconst articleCard = ('div;const headline = 

function createArticle(property) {

    //elements
    const articleCard = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    //classes
    articleCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //structure append
    articleCard.appendChild(headline);
    articleCard.appendChild(author);
    
    author.appendChild(imgContainer);
    author.appendChild(authorName)

    imgContainer.appendChild(image);

    //content
    headline.textContent = property.headline;
    image.src = property.authorPhoto;
    authorName.textContent = `By ${property.authorName}`;

    return articleCard;



}