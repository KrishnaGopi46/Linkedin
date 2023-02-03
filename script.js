//3 containers
const loginPage = document.getElementById("login-page")
const signupPage = document.getElementById("signup-page");
const mainPage = document.getElementById("main-page");

function showSingupPage(){
    loginPage.classList.toggle("active-page");
	signupPage.classList.toggle("active-page");
}

function showLoginPage(){
   loginPage.classList.add("active-page");
   signupPage.classList.remove("active-page");
   mainPage.classList.remove("active-page");
}

function showMainPage(){
   loginPage.classList.remove("active-page");
   signupPage.classList.remove("active-page");
   mainPage.classList.add("active-page");
}

function myCreateFunction(){
    loginPage.classList.add("active-page");
    signupPage.classList.remove("active-page");
    mainPage.classList.remove("active-page");
}

const person=[
    {
		id:100,
        name:"gopi",
        phonenumber:7397603020,
        password:'12345',
        URL:"image/Linkedin.png",
    },
    {
		id:101,
        name:"mani",
        phonenumber:7397603021,
        password:'12345',
        URL:"image/Linkedin.png",
    },
    {
		id:102,
        name:"rupu",
        phonenumber:7397603022,
        password:"12345",
        URL:"image/Linkedin.png",
    },
    {
		id:103,
        name:"rajith",
        phonenumber:7397603023,
        password:"12345",
        URL:"image/Linkedin.png",
    },

];


const name1=document.getElementById("inp-name");
const pass1=document.getElementById("inp-pass");
let loginUser = [];
let filterUsers = [];

function mySigninFunction(){  
    if(name1.value === "" && pass1.value === ""){
        alert("please enter all fields");
    }
    else{
	    const details = person.find( e => e.name === name1.value);
            if(details){
                if(pass1.value === details.password){
                    const filterData = person.filter( e => e.id !== details.id);
                    filterUsers = [...filterData];
                    loginUser = [details];
                    console.log(filterUsers);
                    console.log(loginUser);
                    showMainPage();
                    clearInput();
                    myFunction();
                    myFunction1();
                }
                else{
                    alert("Pasword Error")
                }
            }
            else{
                alert("User Not found..!")
            }
      
    }    
}

function clearInput(){
	name1.value = "";
	pass1.value = "";
}

function myFunction(){
    let loginuserid=document.getElementById("people-detailes");

    for(i=0;i<filterUsers.length;i++){
        let parent=document.createElement("div");
        let child1=document.createElement("h1");
        let child2=document.createElement("h1");
        let child3=document.createElement("h1");
        let pic=document.createElement("img");
            pic.setAttribute("style","width:100px;");
            pic.setAttribute("src",filterUsers[i].URL);


        child1.innerHTML=("Name : " + filterUsers[i].name);
        child2.innerHTML=("Id : " + filterUsers[i].id);
        child3.innerHTML=("PhoneNumber : " + filterUsers[i].phonenumber);

        
        
        parent.append(child1,child2,child3,pic);

        loginuserid.append(parent);
    }
}

function myFunction1(){
    let peopleid=document.getElementById("user-detailes");
    let picc=document.createElement("img");
            picc.setAttribute("style","width:100px;");
            picc.setAttribute("src",loginUser[0].URL);
    peopleid.innerHTML= `NAME :${loginUser[0].name}<br>ID No :${loginUser[0].id}<br>PHONE No :${loginUser[0].phonenumber}`;
}