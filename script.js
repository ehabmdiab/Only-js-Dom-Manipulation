// start Header
let header = document.createElement("div");
header.style.cssText =
  "display:flex ; justify-content:space-between ; padding-left:15px; padding-right:15px ;background-color:white ; align-items:center ;height:80px ;margin-top:-10px ;";

document.body.style.cssText =
  "font-family:sans-serif; background-color:#eee; box-sizing:border-box ; margin:0 ; padding:0 ";
let h2 = document.createElement("h2");
h2.innerText = "EH";
h2.style.cssText =
  "font-weight:800 ;  color:#0E5C42; padding:10px ;height:40px";
let ul = document.createElement("ul");
ul.style.cssText = "list-style:none; display:flex; padding:10px; color:#777 ";
let li1 = document.createElement("li");
li1.textContent = "Home";
li1.style.marginLeft = "20px";
let li2 = document.createElement("li");
li2.innerText = "About";
li2.style.marginLeft = "20px";
let li3 = document.createElement("li");
li3.innerText = "Service";
li3.style.marginLeft = "20px";
let li4 = document.createElement("li");
li4.innerText = "Contact";
li4.style.marginLeft = "20px";
//
//appending
ul.append(li1, li2, li3, li4);
header.append(h2);
header.append(ul);
document.body.appendChild(header);
console.log(ul);
// End header
// start Container
let container = document.createElement("div");
container.style.cssText =
  "display:grid ; grid-template-columns:repeat(auto-fill,minmax(350px,1fr)); background-color:#eee ; gap:30px  ;padding:20px ;";

for (let i = 1; i < 16; i++) {
  let box = document.createElement("div");
  box.style.cssText =
    "background-color:white ;padding:10px 80px ; text-align:center ; ";
  let h3 = document.createElement("h3");
  h3.textContent = i;
  h3.style.cssText = "font-weight:bold ; font-size:32px";
  let p = document.createElement("p");
  p.textContent = "Product";
  p.style.cssText = "color:#777 ";
  box.append(h3, p);
  container.appendChild(box);
  document.body.appendChild(container);
}
// end container
// start footer
let footer = document.createElement("div");
footer.style.cssText = `
background-color:#0E5C42 ; 
display:flex;
justify-content:center;
align-items:center;
color:white;
padding:30px;
`;
footer.textContent = "Copyright 2022";

document.body.appendChild(footer);

// end footer
