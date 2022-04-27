const openMenu = document.querySelector('.menu-open')
const openNav = document.querySelector('.main-left')

openMenu.addEventListener('click', function(){
    openNav.classList.toggle('active')
    openMenu.classList.toggle('active')
})

const inputSection = document.querySelectorAll('.input-section')
const message_i = document.querySelectorAll('.bx-message-square-dots ')
const postLike = document.querySelectorAll('.post-like ')
const sendBtn = document.querySelectorAll('.send-btn')
const inputSendComment = document.querySelectorAll('.input-send-comment')
for(let i = 0; i<sendBtn.length || i<inputSendComment.length; i++){
sendBtn[i].addEventListener('click', function(){
    const elP2 = document.createElement('p')
    const eldiv2 = document.createElement('div')
    eldiv2.classList.add('post-cmt')
    const inputValues = inputSendComment[i].value
    
})
}

for(let i=0; i<inputSection.length || i<postLike.length || i<message_i.length; i++){
    message_i[i].addEventListener('click', function(){
    postLike[i].classList.toggle('active')
    inputSection[i].classList.toggle('active')
})
}

const getBtnPost = document.querySelector(".get-btn-post");
getBtnPost.addEventListener("click", function () {
  const allPost = document.querySelector("#all-post");
  const textPost = document.querySelector("#text-post");
  const textValue = textPost.value;
  if (textPost.value != "") {
    const elDiv = document.createElement("div");
    elDiv.classList.add("all-post-container");
    elDiv.innerHTML = `
    <p class="p">${textValue}</p>
    <img src="${uploadedImage.src}" alt=""> 
    <div class="post-like">
    <div class="input-section">
    <input class="input-send-comment" type="text" placeholder="comment...">
    <button class="send-btn"> Send </button>
    </div>
    <div class="icon">
    ${`<i class='bx bx-message-square-dots message_i'></i>`}
    <i class='bx bx-like'></i>
    </div>
    </div>
    `;

    allPost.appendChild(elDiv);
    uploadedImage.style.display = "block";
  } else {
    alert("Plase enter e text");
  }
  textPost.value = "";
  uploadedImage.style.display = "none";
});

document.getElementById("readUrl").addEventListener("change", function () {
  if (this.files[0]) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener("load", function (event) {
      document
        .getElementById("uploadedImage")
        .setAttribute("src", event.target.result);
      document.getElementById("uploadedImage").style.display = "block";
    });
  }
});

const selectName = document.querySelector('#selectName')
const user_btn = document.querySelector('.user-btn');
const selectInput = document.querySelector('#select-input')
const userName = document.querySelector('.user-name');
user_btn.addEventListener('click', function(){
    if(selectInput.value == ""){
        alert('please enter a name')
    }else{
        selectName.classList.toggle('active')
        userName.innerHTML = selectInput.value
    }
})
