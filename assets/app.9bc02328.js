function uploadImage(e){const t=e.target.attributes.name.value;document.getElementsByClassName(t)[0].classList.add("hidden");const n=document.querySelector(`[wrapper-name="${t}"]`);n?.classList.add("block"),n?.classList.remove("hidden");const a=e.target.files[0],r=document.querySelector(`[img-name="${t}"]`);r.classList.add("block"),r.classList.remove("hidden"),r.src=URL.createObjectURL(a)}function goTo(e){window.open(e,"_self")}function uuidv4(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}function whitespacePreWrapText(e=""){return e.replace(/(\r\n)|(\n)/g,"<br>")}document.addEventListener("alpine:init",(()=>{Alpine.store("openedModal",null)}));