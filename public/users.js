(()=>{"use strict";function e(e){let t=new XMLHttpRequest,n=!1,r=new Promise(((r,s)=>{if(t.open(e.method,e.url,!0),t.addEventListener("load",(()=>{var e,o;if(!n)if(t.status<400)r(t.responseText);else{let n=t.responseText;n&&/html/.test(t.getResponseHeader("content-type"))&&(e=n,(o=document.createElement("div")).innerHTML=e,n=o.textContent.replace(/\n[^]*|\s+$/g,""));let r=new Error("Request failed: "+t.statusText+(n?"\n\n"+n:""));r.status=t.status,s(r)}})),t.addEventListener("error",(()=>{n||s(new Error("Network error"))})),e.headers)for(let n in e.headers)t.setRequestHeader(n,e.headers[n]);t.send(e.body||null)}));return r.abort=()=>{n||(t.abort(),n=!0)},r}function t(t,n,r){return e({url:t,method:"POST",body:n,headers:{"Content-Type":r}})}const n=document.querySelector("#users");function r(){("/collab-backend/users/",e({url:"/collab-backend/users/",method:"GET"})).then((e=>function(e){n.innerHTML="",e.forEach((e=>{let t=document.createElement("option");t.text=e.name,t.value=e.id,n.add(t)}));let t=document.createElement("option");t.text="create user",t.value="new",n.add(t),JSON.parse(sessionStorage.getItem("user"))&&(n.value=JSON.parse(sessionStorage.getItem("user")).id)}(JSON.parse(e))),(e=>report.failure(e)))}n.addEventListener("change",(function(){"new"==n.value?function(){let e=prompt("Name the new User","");const n=JSON.stringify({name:e});e&&t("/collab-backend/users",n,"application/json").then((e=>{sessionStorage.setItem("user",e)}),(e=>report.failure(e)))}():t("/collab-backend/current-user",JSON.stringify({id:n.value}),"application/json").then((e=>{sessionStorage.setItem("user",e)}),(e=>report.failure(e))),r()})),r()})();