const items = [
    {
        id : 1,
        title : "Oats",
        category: "breakfast",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$20",
    },
    {
        id : 2,
        title : "Muesli",
        category : "breakfast",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$40",
    },
    {
        id : 3,
        title : "Rice",
        category : "lunch",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweio jebievbuwbewknioe guiee ueeguiwe",
        price : "$30",
    },
    {
        id : 4,
        title : "Pancakes",
        category: "breakfast",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$15",
    },
    {
        id : 5,
        title : "Dal Makhani",
        category: "lunch",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$20",
    },
    {
        id : 6,
        title : "Matar Paneer",
        category: "lunch",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$30",
    },
    {
        id : 7,
        title : "Shahi Paneer",
        category: "lunch",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$25",
    },
    {
        id : 8,
        title : "Malai Kofta",
        category: "lunch",
        image : "https://plus.unsplash.com/premium_photo-1673590981810-894dadc93a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlfGVufDB8fDB8fHww",
        data : "lorem biwbifweiofh oh oihgrgreguieuiehuioe guiee ueeguiwe",
        price : "$20",
    }
    
];

window.addEventListener("DOMContentLoaded",initEvents);
function initEvents(){

    const container = document.querySelector(".container");
    const buttons = document.querySelectorAll(".btn");
    displayAll();

    buttons.forEach((btn) => {
        btn.addEventListener("click",()=>{
            if(btn.classList.contains("all")){
                displayAll();
            }else if(btn.classList.contains("breakfast")){
                displayBreakfast();
            }else{
                displayLunch();
            }
        });
    });

    function displayAll(){
        const box = items.map((item)=>{
            return `
            <div class="box">
                    <div class="image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="content">
                        <div class="item">
                            <div class="title"><h3>${item.title}</h3></div>
                            <div class="price"><p>${item.price}</p></div>
                        </div>
                        <div class="data"><p>${item.data}</p></div>
                    </div>
                </div>`
        }).join("");
        container.innerHTML = box;
    }

    function displayBreakfast(){
        const breakfastarr = items.filter((item)=>{
            return item.category === "breakfast";
        });

        const box = breakfastarr.map((item)=>{
            return `
            <div class="box">
                    <div class="image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="content">
                        <div class="item">
                            <div class="title"><h3>${item.title}</h3></div>
                            <div class="price"><p>${item.price}</p></div>
                        </div>
                        <div class="data"><p>${item.data}</p></div>
                    </div>
                </div>`
        }).join("");
        container.innerHTML = box;
    }

    function displayLunch(){
        const luncharr = items.filter((item)=>{
            return item.category === "lunch";
        });

        const box = luncharr.map((item)=>{
            return `
            <div class="box">
                    <div class="image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="content">
                        <div class="item">
                            <div class="title"><h3>${item.title}</h3></div>
                            <div class="price"><p>${item.price}</p></div>
                        </div>
                        <div class="data"><p>${item.data}</p></div>
                    </div>
                </div>`
        }).join("");
        container.innerHTML = box;
    }
}
