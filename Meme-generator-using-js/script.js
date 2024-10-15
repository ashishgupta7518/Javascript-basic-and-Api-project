const generateMemebtn = document.querySelector(".meme-generator");

const memeImage = document.querySelector(".meme-generator img");

const memeAuthor = document.getElementById("author-detail");

const memeTitle = document.getElementById("titles-details");



const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author)
        })
};

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

generateMemebtn.addEventListener("click", generateMeme);