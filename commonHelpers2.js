import"./assets/styles-d52e8722.js";import{i}from"./assets/vendor-77e16229.js";const t=document.querySelector(".form");function a(r){r.preventDefault();const m=t.delay.value,o=t.state.value;t.reset();const s=Number(m);new Promise((e,n)=>{setTimeout(()=>{o==="fulfilled"?e(s):o==="rejected"&&n(s)},s)}).then(e=>{i.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})}t.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
