import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},l=document.querySelector(".feedback-form"),o=document.querySelector("input"),s=document.querySelector("textarea");document.querySelector("button");const m="feedback-form-state";l.addEventListener("input",r);function r(){e.email=o.value.trim(),e.message=s.value.trim(),localStorage.setItem(m,JSON.stringify(e))}const a=JSON.parse(localStorage.getItem(m)||{});Object.values(a).length&&(o.value=a.email,s.value=a.message,e.email=a.email,e.message=a.message);l.addEventListener("submit",i);function i(t){if(t.target.elements.email.value.trim()===""||t.target.elements.message.value.trim()===""){alert("Fill please all fields");return}else t.preventDefault(),e.email=t.target.elements.email.value.trim(),e.message=t.target.elements.message.value.trim(),localStorage.removeItem(m),l.reset(),console.log(e)}
//# sourceMappingURL=2-form.js.map
