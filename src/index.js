import weather from './weather';
import './styles/main.css';
import logo from './assets/Logo.png'
import search from './assets/Search.png'

const logodiv = document.querySelector('.logo')
const img = document.createElement('img')
img.src = logo;
logodiv.appendChild(img)

const searchbar = document.querySelector('.search')
const searchIcon = document.createElement('img')
searchIcon.src = search;
searchIcon.classList.add('searchIcon')
searchbar.appendChild(searchIcon);

const body = document.body

console.log('working');
weather();