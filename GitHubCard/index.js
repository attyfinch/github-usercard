// const { default: axios } = require("axios");

`import axios from 'axios';`
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const brad = 'https://api.github.com/users/attyfinch'

// high level card div
const card = document.createElement('div');
card.classList.add('card');

// profilePic
const profilePic = document.createElement('img');
profilePic.setAttribute('src', "https://avatars.githubusercontent.com/u/7571073?v=4")
card.appendChild(profilePic);


// cardInfo div
const cardInfo = document.createElement('div');
cardInfo.classList.add('card-info');
card.appendChild(cardInfo);

const irlName = document.createElement('h3');
irlName.classList.add('name');
cardInfo.appendChild(irlName);

const userName = document.createElement('p');
userName.classList.add('username');
cardInfo.appendChild(userName);

const whereabouts = document.createElement('p');
cardInfo.appendChild(whereabouts);

// contains anchor for link
const profileLink = document.createElement('p');
cardInfo.appendChild(profileLink);
const ghlink = document.createElement('a')
profileLink.appendChild(ghlink);

const followers = document.createElement('p');
cardInfo.appendChild(followers);

const following = document.createElement('p');
cardInfo.appendChild(following);

const bio = document.createElement('p');
cardInfo.appendChild(bio);

// appending card to the cards div so it appears on the page
const cards = document.querySelector('div.cards')
cards.appendChild(card);

// card contstructor
const grabData = (event) => {
  axios.get(brad)
   .then (res => {
    irlName.textContent = res.data.name
    userName.textContent = res.data.login
    whereabouts.textContent = res.data.location
    ghlink.href = res.data.html_url
    followers.textContent = res.data.followers
    following.textContent = res.data.following
    bio.textContent = res.data.bio
   })
   .catch (err => {
    alert('clearly something is broken')
   })
}

// invoking the grabData function and it's promise.
grabData()





// const https://api.github.com/users/<Your github name>/followers

