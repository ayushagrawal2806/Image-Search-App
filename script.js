let search_Button = document.querySelector(".search_Button");
let show_more_Button = document.querySelector(".show");
let input_feild = document.querySelector("input");
let image_box = document.querySelector(".images");
let limit = 1;
let query = "";
let check = true;
function show_images (){
  query = input_feild.value;
  let data = fetch(`https://api.unsplash.com/search/photos?page=${limit}&query=${query}&client_id=stwlPQBGcMcCYbLquhdP3OalKTg_Yo9xrB1Bm5V3-RE`);
  data.then((response) => {
    let converted_data = response.json();
    return converted_data;
  })
  .then((converted_response) => {
    if(check)image_box.innerHTML = "";
    let arr = converted_response.results;
    arr.forEach((element) => {
      let div = document.createElement("div");
      div.classList.add("box");
      let img = document.createElement("img");
      img.setAttribute("src" , element.urls.full);
      let p = document.createElement("p");
      p.innerText = element.alt_description;
      div.append(img , p);
      image_box.append(div);
    });
    if(arr.length){
      console.log(arr.length);
      show_more_Button.style.display = "block";
    }else{
      show_more_Button.style.display = "none";
    }
  })
  .catch((error) => {
    console.log(error);
  })
}

function search(){
  check = true;
  show_images();
}

function show_more() {
  limit++;
  check = false;
  show_images();
}
search_Button.addEventListener("click" , search);
show_more_Button.addEventListener("click" , show_more);












// let data = fetch(`https://api.unsplash.com/search/photos?page=${limit}&query=${idss}&client_id=stwlPQBGcMcCYbLquhdP3OalKTg_Yo9xrB1Bm5V3-RE`);

// data.then((respone)=> {
//   return respone.json(); 
// }).then((respone) => {
//   console.log(respone.results[0].urls.full);
// })
// .catch(() =>{
//     console.log("error");
// })

