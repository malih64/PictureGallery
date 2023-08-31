const places=[
    {
        id:1,
        name:"Spring",
        description:"Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses until the Summer Solstice in June (Northern Hemisphere) and December (Southern Hemisphere).",
        src:"/imgs/img01.jpg"
    },
    {
        id:2,
        name:"Winter",
        description:"Winter is the coldest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earth's axis causes seasons; winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.",
        src:"/imgs/imge02.jpg"
    },
    {
        id:3,
        name:"Spring",
        description:"Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa. At the spring (or vernal) equinox, days and nights are approximately twelve hours long, with daytime length increasing and nighttime length decreasing as the season progresses until the Summer Solstice in June (Northern Hemisphere) and December (Southern Hemisphere).",
        src:"/imgs/imge03.jpg"
    },
    {
        id:4,
        name:"Summer",
        description:"Summer is the hottest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are longest and darkness hours are shortest, with day length decreasing as the season progresses after the solstice. The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa",
        src:"/imgs/image06.jpg"
    },
    {
        id:5,
        name:"Fall",
        description:"Fall is a 2022 survival thriller film directed and co-written by Scott Mann and Jonathan Frank. Starring Grace Caroline Currey, Virginia Gardner, Mason Gooding and Jeffrey Dean Morgan, the film follows two women who climb a 2,000-foot-tall (610 m) television broadcasting tower, before becoming stranded at the top., special effects and pacing.",
        src:"/imgs/imge05.jpg"
    }
]

const imgs=document.querySelectorAll(".all-imgs img");
const currentImg=document.querySelector(".current-img");
const imageTitle=document.querySelector(".image-title");
const imageDesc=document.querySelector(".image-desc");

console.log(imgs);

    imgs.forEach((Image,index) => {
        Image.src=places[index].src;

        Image.addEventListener("click",() => {

            currentImg.src=places[index].src;
            imageTitle.innerHTML=places[index].name;
            imageDesc.innerHTML=places[index].description;
            currentImg.classList.add("animate-imgs")
            setTimeout(function(){
                currentImg.classList.remove("animate-imgs")
            },400)
         }) 

        })
        currentImg.src=places[0].src;
        imageTitle.innerHTML=places[0].name;
        imageDesc.innerHTML=places[0].description;
     
            
