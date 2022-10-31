var heart = document.querySelector("#heart")
heart.addEventListener("click",(evt)=>{
 let heart = evt.target
 heart.setAttribute("class","heart")
 heart.style.fontSize = "xx-large"
 heart.innerHTML = "&#x2764"
})

var btn = document.querySelector("#option")
btn.addEventListener("click",(evt)=>{
 let img = document.querySelector("#img")
 img.src = "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17563000-1-.jpg?context=bWFzdGVyfGF6dXJlcHJvZHVjdG1lZGlhc3wxMzE5MXxpbWFnZS9qcGVnfGgxMS9oZjgvODg2MjQzNzAxNTU4Mi81MTVXeDUxNUhfREdBUDE3NTYzMDAwXyAoMSkuanBnfGUyMGJjODViYjk5Y2I3NjY3NzkzYmE0NDBjM2U1MjM4YmY0NzA3NzM1ZDlmZjVjODM5MGE1YTc5NTA1MGI3OGQ"
 let text = document.querySelector(".cointanerCenter2")
 text.innerHTML = 'Apple iPhone 14 64GB Black Tela 6,1" 5G Cam. Back 12+12MP Frontal 12MP'
  
 let bottom1 = document.querySelector(".containerBottom1")
 bottom1.innerHTML = '64GB'
  
 let bottom2 = document.querySelector(".containerBottom2")
 bottom2.innerHTML = 'From $499 or $20.79/mo.per<br> month for 24'
})

var btn1 = document.querySelector("#option1")
btn1.addEventListener("click",(evt)=>{
 let img = document.querySelector("#img")
 img.src = "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17523000-1-.jpg?context=bWFzdGVyfGF6dXJlcHJvZHVjdG1lZGlhc3wxMzY4M3xpbWFnZS9qcGVnfGhmNC9oOTYvODg2MjQ0NjM4NzIzMC81MTVXeDUxNUhfREdBUDE3NTIzMDAwXyAoMSkuanBnfGZmMTljOWQyNTQ0MzI4MjA3OWQyZDkzNjRmYmNkMjgxYWIyMzI1NWQ3MWUxY2JlZjNhOGNlZGRjYWE2N2FjNjI"
 let text = document.querySelector(".cointanerCenter2")
 text.innerHTML = 'Apple iPhone 14 128GB White Tela 6,1" 5G Cam. Back 12+12MP Frontal 12MP'
  
 let bottom1 = document.querySelector(".containerBottom1")
 bottom1.innerHTML = '128GB'
  
 let bottom2 = document.querySelector(".containerBottom2")
 bottom2.innerHTML = 'From $799 or $33.29/mo.per<br>month for 24'
})

var btn2 = document.querySelector("#option2")
btn2.addEventListener("click",(evt)=>{
 let img = document.querySelector("#img")
 img.src = "https://api.store.vivo.com.br/medias/515Wx515H-DGAP17503000-1-.jpg?context=bWFzdGVyfGF6dXJlcHJvZHVjdG1lZGlhc3wxNTQ3NHxpbWFnZS9qcGVnfGgxYi9oM2QvODg2MjQyNzY0MzkzNC81MTVXeDUxNUhfREdBUDE3NTAzMDAwXyAoMSkuanBnfDc2YmE4ZmU2NjQ4YWQyZjY1NDBlZDU0N2YyZWY0YmU3OGMxNmU1ODIzOTBlNjAxYjk4OWFlNDBhMWIyMjQ3ZWE"
 let text = document.querySelector(".cointanerCenter2")
 text.innerHTML = 'Apple iPhone 14 256GB Red Tela 6,1" 5G Cam. Back 12+12MP Frontal 12MP'
  
 let bottom1 = document.querySelector(".containerBottom1")
 bottom1.innerHTML = '256GB'
  
 let bottom2 = document.querySelector(".containerBottom2")
 bottom2.innerHTML = 'From $1199 or $49.95/mo.per<br>month for 24'  
})

