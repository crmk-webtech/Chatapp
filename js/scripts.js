let div=document.getElementById("div1");
function updateScroll(){

div.scrollTop = div.scrollHeight;
div.scrollTop=div.scrollHeight;
console.log(div.scrollHeight);

console.log(div.scrollTop);
}
const chat=document.getElementById("chat1");
console.log(chat);
console.log(document.getElementById("div1").innerHTML);
const page=()=>{

} 
chat.addEventListener("click",function(){

   const div2=document.getElementById("div2");
if(div.innerHTML==="<b>Tap a contact to start chatting</b>"){
   console.log(true);
   div.innerHTML="";
   div2.style.position="fixed";
   div.style.margin="1%";
   div.style.marginTop="11vh";
   div.style.overflowY="scroll";
div.style.overflowX="hidden";
div.style.height="70vh";

// ​
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; margin:5px; 2px; font-size:1.5rem;padding:5px;border-radius:20px;'>hello</span>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; text-align:right; 2px; font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px; font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px; font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")
div.insertAdjacentHTML("beforeend","<p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>hello</p>")

updateScroll();
}
else{
   console.log(false);
}
});
const arr1=["hi"," how are you"," fyn"," need ur help"," need your assignment for reference"," okay thanks a lot","hey"," whatsup"," nice<br>well we are planning for get together<br>will u join us","okay<br>Try informing earlier","ttyl"];
const arr2=["hi","fyn<br/> what about you","gd","ya sure  just tell","no issues I'll send u in sometime","welcome","hlo","All well","I am bit busy<br>I will tell u soon","sure","okay"];
const button = document.getElementById("btn");
const input=document.getElementById("input");
const add=(i,arr2)=>{
   document.getElementById("div1").insertAdjacentHTML(
       "beforeend", "<div ><p style='border:1px solid black; background-color:lightgrey; margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>"+arr2[i]+"</p></div>")
       console.log(arr2);
       updateScroll()
}
const chats=(e)=>{
   
   let chat=input.value;
   console.log(input.value);
   document.getElementById("div1").insertAdjacentHTML(
   "beforeend", "<div ><p style='text-align:right;border:1px solid black; background-color:lightgrey;margin:5px; 2px;font-size:1.5rem;padding:5px;border-radius:20px;'>"+input.value+"</p></div>"
   )
   updateScroll();
   for(let i=0;i<arr1.length;i++){
       if(arr1[i]===input.value){
           setTimeout(function(){
               console.log(arr2);
           add(i,arr2);
       },1000*i
   )
           
          
       }
   }
   
   input.value=" ";
 
}
button.addEventListener('click',function(){
   chats()
});
input.addEventListener('keyup',function(e){
   if(e.keyCode===13)
   {
      chats();
   }
});
function animationDisplay(){sidebar.style.display="none";console.log("remove")}
let display=false;
var sidebar = document.querySelector(".sidebar");
document.getElementById("bars").addEventListener("click",function(){
   sidebar.removeEventListener("webkitAnimationEnd",animationDisplay);
   sidebar.style.display="block";
   sidebar.style.position="absolute";
   sidebar.style.animationName="sidebar-in"; 
   sidebar.style.zIndex="10";
   display=true;
   console.log(display);
}
)

let ct=0;
// Detect all clicks on the document
document.addEventListener("click", function(event) {
   // If user clicks inside the element, do nothing
   if(ct%2!=0){
      console.log("entered");
	if (event.target.closest(".sidebar")){ 
      console.log("In sidebar");
      return}
      else{
   // If user clicks outside the element, hide it!
   sidebar.style.animationName="sidebar-out"
 
  sidebar.addEventListener("webkitAnimationEnd",animationDisplay)
  
  display=false;
      }
}
ct++;
console.log(ct+" "+display);
});