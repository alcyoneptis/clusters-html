function uploadImage(e){const t=e.target.attributes.name.value;document.getElementsByClassName(t)[0].classList.add("hidden");const s=document.querySelector(`[wrapper-name="${t}"]`);s?.classList.add("block"),s?.classList.remove("hidden");const a=e.target.files[0],n=document.querySelector(`[img-name="${t}"]`);n.classList.add("block"),n.classList.remove("hidden"),n.src=URL.createObjectURL(a)}document.addEventListener("alpine:init",(()=>{Alpine.store("openedModal",null)}));