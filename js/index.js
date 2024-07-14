
$(document).ready(function () {
    $("#loader").fadeOut(1000)
    $(".nav-header .fa-bars").on("click", function () {
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded")
        // $(".nav-links .links li a").eq(0).animate({top:0},500);
        // $(".nav-links .links li a").eq(1).animate({top:0},550);
        // $(".nav-links .links li a").eq(2).animate({top:0},600);
        // $(".nav-links .links li a").eq(3).animate({top:0},650);
        // $(".nav-links .links li a").eq(4).animate({top:0},700);
    })


    $(".search").on("click", function () {
        $("#search").fadeIn(1000);
        $("#home").css("display", "none");
        $("#categories").css("display", "none");
        $("#area").css("display", "none");
        $("#ingredients").css("display", "none");
        $("#contactUs").css("display", "none");
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded");
    })

    $(".categ").on("click", function () {
        $("#categories").fadeIn(1000);
        $("#home").css("display", "none");
        $("#search").css("display", "none");
        $("#area").css("display", "none");
        $("#ingredients").css("display", "none");
        $("#contactUs").css("display", "none");
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded");
    })

    $(".zone").on("click", function () {
        $("#area").fadeIn(1000);
        $("#home").css("display", "none");
        $("#search").css("display", "none");
        $("#categories").css("display", "none");
        $("#ingredients").css("display", "none");
        $("#contactUs").css("display", "none");
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded");
    })

    $(".ingred").on("click", function () {
        $("#ingredients").fadeIn(1000);
        $("#home").css("display", "none");
        $("#search").css("display", "none");
        $("#categories").css("display", "none");
        $("#area").css("display", "none");
        $("#contactUs").css("display", "none");
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded");
    })

    $(".contact").on("click", function () {
        $("#contactUs").fadeIn(1000);
        $("#home").css("display", "none");
        $("#search").css("display", "none");
        $("#categories").css("display", "none");
        $("#area").css("display", "none");
        $("#ingredients").css("display", "none");
        $(".fa-bars ").toggleClass("fa-xmark");
        $(".side-nav").toggleClass("expanded");
    })


   
})



let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let age = document.getElementById("age");
let psw = document.getElementById("psw");
let psw_repeat = document.getElementById("psw_repeat");
let sendBtn = document.getElementById("sendBtn");


function validateFormInputs(ele) {
    console.log(ele.id, ele.value);
    var regex = {
        userName: /^[A-Za-z]{3,10}$/,
        email: /^([a-z0-9_-]+)(@[a-z0-9-]+)(\.[a-z]+|\.[a-z]+\.[a-z]+)?$/,
        phone: /^(002){0,1}01[0-25][0-9]{8}$/,
        age: /^[1-90]{1,2}$/,
        psw: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        psw_repeat: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,

    };


    var isValid = regex[ele.id].test(ele.value);

    if (isValid) {
        if (ele.classList.contains("is-invalid")) {
            ele.classList.replace("is-invalid", "is-valid");
        } else {
            ele.classList.add("is-valid");
        }
        ele.nextElementSibling.classList.replace("d-block", "d-none");
    } else {
        if (ele.classList.contains("is-valid")) {
            ele.classList.replace("is-valid", "is-invalid");
        } else {
            ele.classList.add("is-invalid");
        }
        ele.nextElementSibling.classList.replace("d-none", "d-block");
    }
    

    return isValid;

}


// if (psw_repeat.value != psw.value) {
//     ele.classList.add("is-invalid");
//     ele.nextElementSibling.classList.replace("d-none", "d-block");
    
// }


userName.addEventListener("input", function () {
    validateFormInputs(this)
})
email.addEventListener("input", function () {
    validateFormInputs(this)
})
phone.addEventListener("input", function () {
    validateFormInputs(this)
})
age.addEventListener("input", function () {
    validateFormInputs(this)
})
psw.addEventListener("input", function () {
    validateFormInputs(this)
})
psw_repeat.addEventListener("input", function () {
    validateFormInputs(this)
})


if (
    validateFormInputs(userName) && 
    validateFormInputs(email) && 
    validateFormInputs(phone) && 
    validateFormInputs(age) && 
    validateFormInputs(psw) && 
    validateFormInputs(psw_repeat)
    ) {
        sendBtn.removeAttribute("disabled");
    } else {
    sendBtn.setAttribute("disabled", true)
    }



    // $("#home .col-lg-3 .item a").on("click", function () {
    //     getMealDetails(meals)
    //     $("#get-details").fadeIn(1000)
    // })


        // search
const fullNameSearch = document.querySelector("#fullName");
fullNameSearch.addEventListener("input", function () {
    getMeals(fullNameSearch.value);
    $("#home").fadeIn(1000)
})
const fLetterSearch = document.querySelector("#fLetter");
fLetterSearch.addEventListener("input", function () {
    getMeals(fLetterSearch.value);
    $("#home").fadeIn(1000)
})

async function getMeals(Meal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Meal}`);
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayMeals(meals)
    }
}
getMeals('')

function displayMeals(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += `<div class="col-lg-3">
                    <div onclick="getMealDetails('${arr[i].idMeal}')" class="item position-relative overflow-hidden rounded-2" role="button">
                        <img src="${arr[i].strMealThumb}" class="w-100 " alt="">
                        <div class="item-layer d-flex  align-items-center text-black p-2 position-absolute">
                            <h3 class=" me-auto ms-2">${arr[i].strMeal}</h3>
                        </div>
                    </div>
                </div>`

    }
    document.getElementById("meal-list").innerHTML = bBox

}



        // categories
async function getCategory () {
    // document.getElementById("categories-list").innerHTML = "";
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    if (response.ok) {
        const { categories } = await response.json();
        // console.log(categories);
        display(categories);
    }
}
getCategory()

function display(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += `<div class="col-lg-3">
                    <div onclick = "getCategoryMeals('${arr[i].strCategory}')" class="item position-relative overflow-hidden rounded-2" role="button">
                        <img src="${arr[i].strCategoryThumb}" class="w-100 " alt="">
                        <div class="item-layer d-flex flex-column align-items-center text-black p-2 position-absolute">
                            <h4>${arr[i].strCategory}</h4>
                            <p>${arr[i].strCategoryDescription}</p>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("categories-list").innerHTML = bBox
}



        // area
async function getArea() {
    // document.getElementById("area-list").innerHTML = ""
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayArea(meals)
    }

}
getArea()

function displayArea(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += `<div class="col-lg-3">
                    <div onclick="getAreaMeals('${arr[i].strArea}')" class="logo text-center" role="button">
                        <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                        <h3 class="text-white ms-4">${arr[i].strArea}</h3>
                    </div>
                </div>`
    }
    document.getElementById("area-list").innerHTML = bBox
}


        // ingredients
async function getIngredients() {
    // document.getElementById("ingredients-list").innerHTML = ""
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayIngredients(meals)
    }

}
getIngredients()

function displayIngredients(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += `<div class="col-lg-3">
                    <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="logo pointer-event text-white text-center" role="button">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p">${arr[i].strDescription}</p>
                    </div>
                </div>`
    }
    document.getElementById("ingredients-list").innerHTML = bBox
}


// category-meals
async function getCategoryMeals(category) {
    // document.getElementById("categories-list").innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    if (response.ok) {
        const { categories } = await response.json();
        // console.log(categories);
        displayMeals(categories);
    }

}

// area-meals
async function getAreaMeals(area) {
    document.getElementById("area-list").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayMeals(meals)
    }

}

// ingredients-meals
async function getIngredientsMeals(ingredients) {
    document.getElementById("ingredients-list").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayMeals(meals)
    }

}

async function getMealDetails(mealID) {
    // document.getElementById("meal-list").innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    if (response.ok) {
        const { meals } = await response.json();
        // console.log(meals);
        displayMealDetails(meals)
    }

}

// getMealDetails()

function displayMealDetails(arr) {
    let bBox = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        bBox += ` <div class="col-lg-4">
                    <div class="recipe-header">
                        <img src="${arr[i].strMealThumb}" class="w-100" alt="">
                        <h2 class="text-white">${arr[i].strMeal}</h2>
                    </div>
                </div>
                <div class="col-lg-8 ">
                    <div class="recipe-details">
                        <h3 class="text-white">Instructions</h3>
                        <p class="text-white">${arr[i].strInstructions}</p>
                        <h3 class="text-white"><strong>Area:${arr[i].strArea}</strong></h3>
                        <h3 class="text-white"><strong>Category:${arr[i].strCategory}</strong></h3>
                        <h3 class="text-white"><strong>Recipe:</strong></h3>
                        <ul class="list-unstyled d-flex flex-wrap g-3">
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure1} ${arr[i].strIngredient1}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure2} ${arr[i].strIngredient2}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure3} ${arr[i].strIngredient3}.</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure4} ${arr[i].strIngredient4}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure5} ${arr[i].strIngredient5}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure6} ${arr[i].strIngredient6}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure7} ${arr[i].strIngredient7}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure8} ${arr[i].strIngredient8}</li>
                            <li class="alert alert-info p-1 m-2">${arr[i].strMeasure9} ${arr[i].strIngredient9}</li>
                        </ul>
                        <h3><strong>${arr[i].strTags}:</strong></h3>
                        <div>
                            <a href="${arr[i].strSource}" target="_blank" class="btn btn-success">Source</a>
                            <a href="${arr[i].strYoutube}" target="_blank" class="btn btn-danger ">Youtube</a>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("meal-list").innerHTML = bBox
}



