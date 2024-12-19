const categories = ["All", "Woman", "Men", "Kids"];
const content = [
    {
        id: "Men",
        label: "Men Shirt 1",
    },
    {
        id: "Men",
        label: "Men Shirt 2",
    },
    {
        id: "Men",
        label: "Men Shirt 3",
    },
    {
        id: "Men",
        label: "Men Shirt 4",
    },
    {
        id: "Woman",
        label: "Woman Shirt 20",
    },
    {
        id: "Woman",
        label: "Woman Shirt 12",
    },
    {
        id: "Woman",
        label: "Woman Shirt 44",
    },
    {
        id: "Woman",
        label: "Woman Shirt 55",
    },
    {
        id: "Kids",
        label: "Kids Shirt 7",
    },
    {
        id: "Kids",
        label: "Kids Shirt 8",
    },
    {
        id: "Kids",
        label: "Kids Shirt 10",
    },
    {
        id: "Kids",
        label: "Kids Shirt 43",
    },
    
];

const filterButtonsEl = document.querySelector(".filter-buttons-wrapper");
const contentWrapperEl = document.querySelector(".content-wrapper");

function createCategory() {
    categories.forEach(category => {
        const buttonsEl = document.createElement("button");
        buttonsEl.innerText = category;
        buttonsEl.classList.add("filter-button");
        buttonsEl.setAttribute("data-filter", category);

        filterButtonsEl.appendChild(buttonsEl);
    })
}

function createContent() {
    content.forEach(contentItem => {
        const divEl = document.createElement("div");
        divEl.classList.add("card", contentItem.id);

        divEl.textContent = contentItem.label;
        contentWrapperEl.appendChild(divEl);
    })
}

createCategory();
createContent();

const allFilterButtons = document.querySelectorAll(".filter-button");
const AllCards = document.querySelectorAll(".card");

function filterCardsByCategory(extractCurrentCategory, AllCards) {
    AllCards.forEach(item => {
        const isShowAllCards = extractCurrentCategory.toLowerCase() === "all";
        const isItemFiltered = !item.classList.contains(extractCurrentCategory)

        if(isItemFiltered && !isShowAllCards) {
            item.classList.add("hide");
        } else {
            item.classList.remove("hide");
        }
    })  
}

allFilterButtons.forEach(singleButtonItem => {
    singleButtonItem.addEventListener("click", () => {
        const extractCurrentCategory = singleButtonItem.dataset.filter;
        filterCardsByCategory(extractCurrentCategory, AllCards);        
    })
})