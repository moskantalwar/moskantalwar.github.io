const setup = () => {
                let listItems = document.querySelectorAll("li");
                for (let i = 0; i < listItems.length; i++) {
                        listItems[i].className = "listitem";
                }
                let style = document.createElement("style");
                style.textContent = ".listitem {color: red;}";
                document.body.appendChild(style);
                let img = document.createElement("img");
                img.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/025/220/125/small_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg");
                document.body.appendChild(img);

}

window.addEventListener("load", setup);