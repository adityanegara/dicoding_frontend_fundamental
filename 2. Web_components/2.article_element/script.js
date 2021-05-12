import "./article-list.js";
import articles from "./articles.js";
 
const containerElement = document.querySelector(".container");
 
const articleListElement = document.createElement("article-list");
articleListElement.articles = articles;
 
containerElement.appendChild(articleListElement);