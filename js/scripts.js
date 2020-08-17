let div=document.getElementById("div1");
function updateScroll(){

div.scrollTop = div.scrollHeight;
//div.scrollTop=div.scrollHeight;
//console.log(div.scrollHeight);

//console.log(div.scrollTop);
}
const chat=document.getElementById("chat1");
const chat2=document.getElementById("chat2");
let chatk=1,chatr=1,refr=1,refk=1;
var clicked,wct=0;
//console.log(chat);
//console.log(document.getElementById("div1").innerHTML); 
const raghav=document.getElementById("raghav");
const kartik=document.getElementById("kartik");
chat2.addEventListener("click",function(){
   //console.log("executedfirst")
   chat2.style.backgroundColor=" #2088CB";

   chat2.style.color="white";
   chat.style.backgroundColor="white";
   chat.style.color="black";
   clicked="raghav";
   const div2=document.getElementById("div2");
   //raghav.innerHTML="";
   //div2.innerHTML=""; 
   div.innerHTML="";
   div2.style.position="fixed";
   div.style.margin="1%";
   div.style.marginTop="11vh";
   div.style.paddingTop="20px";
   div.style.overflowY="scroll";
   div.style.overflowX="hidden";
   div.style.height="70vh";
   div.className="raghav";
   //document.getElementById("second").display.backgroundColor="";
   document.getElementById("chat-user").innerHTML="<span><span style='font-size:2rem;'><i class='fa fa-user' style='vertical-align:middle'></i>&nbsp;&nbsp;&nbsp;Raghav</span><br>last seen 1 min ago</span>"
   console.log(div.className);
   document.getElementById("ellipsis").style.display="block";
   document.getElementById("inner-search").style.display="block";
   document.getElementById("div2").style.display="block";
   if(wct===0){
   document.getElementById("second").style.backgroundImage="url('https://wallpaperaccess.com/full/121182.jpg')";}
else{
  second.style.backgroundImage="url('"+rurl+"')";
}
document.getElementById("second").style.backgroundRepeat="no-repeat";
document.getElementById("second").style.backgroundSize="cover";
   if(chatr===1){
     // console.log("inner-chat");
    
    
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>hellooo</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hiiii</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>kya hal chal</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>m bdia tu bta</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bs bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or kya krra h ajkl</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>kuch  nhi yr time pass</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>lockdown se preshan hogye yr</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>han yr bot jada ab  to mn krta h bhag jao bs</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>hnn</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or kuch kam krra h??</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>khan mn e n krta kuch krne ka</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>pda rhta hu pura din mobile pr</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>tune kia kuch</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bs same e halat h</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or bta sb bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hnn sb bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>baad mein krte ha baat</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>Bye</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bye</label><br><br>")
   }
   chatr++;
   div.innerHTML=raghav.innerHTML
   //console.log("*"+chatr);
updateScroll();
})
//console.log("******"+clicked);
var wct1=0;
chat.addEventListener("click",function(){

//if(div.innerHTML==="<b>Tap a contact to start chatting</b>"){
   //console.log(true);
   const div2=document.getElementById("div2");
   div.innerHTML="";
   chat.style.backgroundColor=" #2088CB";
   chat.style.color="white";
   chat2.style.backgroundColor="white";
   chat2.style.color="black";
   //div2.style.display="block";
   div2.style.position="fixed";
   div.style.margin="1%";
   div.className="kartik";
   div.style.marginTop="11vh";
   div.style.paddingTop="20px";
   div.style.overflowY="scroll";
div.style.overflowX="hidden";
div.style.height="70vh";
clicked="kartik";
console.log(div.className);
document.getElementById("ellipsis").style.display="block";
   document.getElementById("inner-search").style.display="block";
   

document.getElementById("chat-user").innerHTML="<span><span style='font-size:2rem'><i class='fa fa-user' style='vertical-align:middle'></i>&nbsp;&nbsp;&nbsp;Kartik</span><br><span style='margin-left:3%'>online</span></span>";
document.getElementById("div2").style.display="block";
if(wct1==0){
document.getElementById("second").style.backgroundImage="url('https://i.pinimg.com/originals/5c/f2/66/5cf2660af5f4214def7166dc7a7c8062.jpg')";
}
else{
   second.style.backgroundImage="url(\'"+kurl+"\')";
}
document.getElementById("second").style.backgroundRepeat="no-repeat";
document.getElementById("second").style.backgroundSize="cover";
if(chatk==1){
   kartik.innerHTML="";

kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>hellooo</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hiiii</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>kya hal chal</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>m bdia tu bta</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bs bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or kya krra h ajkl</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white;font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>kuch  nhi yr time pass</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>lockdown se preshan hogye yr</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white;font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>han yr bot jada ab  to mn krta h bhag jao bs</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>hnn</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or kuch kam krra h??</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white;  font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>khan mn e n krta kuch krne ka</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>pda rhta hu pura din mobile pr</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>tune kia kuch</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bs same e halat h</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>or bta sb bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hnn sb bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white;  font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>baad mein krte ha baat</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:#2088CB;color:white; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>Bye</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style=';margin-right:2%; background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>bye</label><br><br>")
}
chatk++;
div.innerHTML=kartik.innerHTML;
updateScroll();
// //}
// //else{
//    console.log(false);
// }
});

const arr1=["hi","how are you","fyn","need ur help","need your assignment for reference","okay thanks a lot","hey","whatsup","nice<br>well we are planning for get together<br>will u join us","okay<br>Try informing earlier","ttyl"];
const arr2=["hi","fyn<br/> what about you","gd","ya sure  just tell","no issues I'll send u in sometime","welcome","hlo","All well","I am bit busy<br>I will tell u soon","sure","okay"];
const button = document.getElementById("btn");
const input=document.getElementById("input");
const add=(i,arr2,clicked)=>{
   //console.log("''''"+clicked);
   //console.log(document.getElementById(clicked).innerHTML);
   document.getElementById(div.className).insertAdjacentHTML(
       "beforeend", "<label style=' background-color:white; font-size:1.5rem;padding:5px;border-radius:20px;'>"+arr2[i]+"</label><br><br>");
       div.innerHTML=document.getElementById(div.className).innerHTML;
       console.log(arr2[i]);
       console.log(i);
       updateScroll()
}
const chats=(e)=>{
   let chat=input.value;
   //console.log("p1"+input.value+"p1");
   document.getElementById(div.className).insertAdjacentHTML(
   "beforeend", "<label style='float:right;margin-right:2%; background-color:#2088CB;color:white;;font-size:1.5rem;padding:5px;border-radius:20px;'>"+input.value+"</label><br/><br/>"
   )
   div.innerHTML=document.getElementById(div.className).innerHTML;
   updateScroll();
   //(input.value===arr1[1]) console.log("its true")
   for(let i=0;i<arr1.length;i++){
      console.log(arr1[i]);
       if(arr1[i]===input.value){
          console.log("executed");
           setTimeout(function(){
               console.log(arr1[i]);
           add(i,arr2);
       },1000*((i+2)-i)
   )
   input.value="";
   return;   
    
          
       }
       
   }
   input.value="";
   
   
 
}
button.addEventListener('click',function(){
   //console.log("executedlater");
   
   //console.log(clicked);
   chats()
});
input.addEventListener('keyup',function(e){
   if(e.keyCode===13)
   {
      
      chats();
   }
});

var sidebar = document.querySelector(".sidebar");
const setting=document.getElementById("preview-settings");
const settingMenu=document.getElementById("settings");
const invite=document.getElementById("preview-invite");
const invitefriends=document.getElementById("invitefriends");
const contact=document.getElementById("preview-contacts");
const contactMenu=document.getElementById("contacts");
const calls=document.getElementById("preview-calls");
const callsMenu=document.getElementById("calls");
const group=document.getElementById("preview-group");
const groupMenu=document.getElementById("group");
const saved=document.getElementById("preview-saved");
const savedMenu=document.getElementById("saved");
function animationDisplaysidebar(){sidebar.style.display="none";console.log("remove")}
function animationDisplaysettings(){settingMenu.style.display="none";console.log("remove")}
function animationDisplayinvite(){invitefriends.style.display="none";console.log("remove")}
function animationDisplaycontact(){contactMenu.style.display="none";}
function animationDisplaycalls(){callsMenu.style.display="none";}
function animationDisplaygroup(){groupMenu.style.display="none";}
function animationDisplaysaved(){savedMenu.style.display="none";}

let ct=1;

document.getElementById("bars").addEventListener("click",function(){
   sidebar.removeEventListener("webkitAnimationEnd",animationDisplaysidebar);
   sidebar.style.display="block";
   sidebar.style.position="absolute";
   sidebar.style.animationName="sidebar-in"; 
   sidebar.style.zIndex="10";
  ct++;
}
)

// Detect all clicks on the document
document.addEventListener("click", function(event) {
   // If user clicks inside the element, do nothing
   if(ct>2){
      //console.log("entered");
	if (event.target.closest(".sidebar")){ 
      //console.log("In sidebar");
      return}
      else{
   // If user clicks outside the element, hide it!
   sidebar.style.animationName="sidebar-out"
 
  sidebar.addEventListener("webkitAnimationEnd",animationDisplaysidebar)
  
 ct=1;
      }
}
else if(sidebar.style.display==="block")
ct++;

});

setting.addEventListener("click",function(){
   settingMenu.removeEventListener("webkitAnimationEnd",animationDisplaysettings);
   settingMenu.style.display="block";
   settingMenu.style.zIndex="10";
   settingMenu.style.animationName="sidebar-in"; 
});

invite.addEventListener("click",function(){
   invitefriends.removeEventListener("webkitAnimationEnd",animationDisplayinvite);
   invitefriends.style.display="block";
   invitefriends.style.zIndex="10";
   invitefriends.style.animationName="sidebar-in"; 
});
contact.addEventListener("click",function(){
   contactMenu.removeEventListener("webkitAnimationEnd",animationDisplaycontact);
   contactMenu.style.display="block";
   contactMenu.style.zIndex="10";
   contactMenu.style.animationName="sidebar-in"; 
})
calls.addEventListener("click",function(){
   callsMenu.removeEventListener("webkitAnimationEnd",animationDisplaycalls);
   callsMenu.style.display="block";
   callsMenu.style.zIndex="10";
   callsMenu.style.animationName="sidebar-in"; 
})
group.addEventListener("click",function(){
   groupMenu.removeEventListener("webkitAnimationEnd",animationDisplaygroup);
   groupMenu.style.display="block";
   groupMenu.style.zIndex="10";
   groupMenu.style.animationName="sidebar-in"; 
})
saved.addEventListener("click",function(){
   savedMenu.removeEventListener("webkitAnimationEnd",animationDisplaysaved);
   savedMenu.style.display="block";
   savedMenu.style.zIndex="10";
   savedMenu.style.animationName="sidebar-in"; 
})
function backsaved(){
   savedMenu.style.animationName="sidebar-out"
   savedMenu.addEventListener("webkitAnimationEnd",animationDisplaysaved);
}
function backgroup(){
   groupMenu.style.animationName="sidebar-out"
   groupMenu.addEventListener("webkitAnimationEnd",animationDisplaygroup);
}
function backcall(){
   callsMenu.style.animationName="sidebar-out"
   callsMenu.addEventListener("webkitAnimationEnd",animationDisplaycalls)
}

function backcontact(){
   contactMenu.style.animationName="sidebar-out"
 
   contactMenu.addEventListener("webkitAnimationEnd",animationDisplaycontact)
}
function backinvite(){
   invitefriends.style.animationName="sidebar-out"
 
   invitefriends.addEventListener("webkitAnimationEnd",animationDisplayinvite)
}
function back(){
   settingMenu.style.animationName="sidebar-out"
 
   settingMenu.addEventListener("webkitAnimationEnd",animationDisplaysettings)
}
const chatDiv=document.querySelector(".chat-div")

var ctr1=1;
function chatMenu(){
   chatDiv.style.display="block";
   ctr1++;
 }
 document.addEventListener("click",function(event){
   if(ctr1>2){
   if(event.target.closest(".chat-div")) return;
   chatDiv.style.display="none";
   ctr1=1;
   }
  else if(chatDiv.style.display==="block"){
     ctr1++;
  }
})
//console.log(div.className);
function clearchat(){
   // var x =confirm("Do u want to clear chat?");
   swal({   title: "Your chat will be deleted permanently!",   
    text: "Are you sure to delete chat?",   
    type: "warning",   
    showCancelButton: true, 
    buttons:{
       cancel:true,
       confirm:"confirm"
    }  ,
    closeOnConfirm: false,   
    closeOnCancel: false }).then(arg=>{
       if(arg){
         div.innerHTML="";
         document.getElementById(div.className).innerHTML="";
         chatDiv.style.display="none"; 
       }
    }) 
   //  function(isConfirm){
   //     if(isconfirm){
         
   //     }
   //  })
   // if(x){
   // d}
}
const emojiMenu=document.getElementsByClassName("emoji-menu")[0];
console.log(emojiMenu);
emojiMenu.addEventListener("click",function(){
   document.getElementsByClassName("emoji-dashboard")[0].style.display="block";
   document.getElementById("input").style.width="45%";
  document.getElementById("input").style.marginLeft="16%";

})
const dashboard=document.getElementsByClassName("emoji-dashboard")[0];
const emo=document.querySelectorAll(".em");
const inputChat=document.getElementById("input");
const list=document.getElementsByClassName("emojis")[0];
const mar=20;
emo.forEach(emoji=>{
   emoji.addEventListener("click",function(){
      var newItem = document.createElement("LI");
      newItem.className="emoji";
      newItem.innerHTML=emoji.innerHTML;
      // newItem.style.position="absolute";
      // newItem.style.marginLeft+="20px";
      emoji.style.display="inline-block";
         emoji.style.position="relative";
         // emoji.style.zIndex="10";
         // emoji.padding="50px";
         //emoji.style.fontSize="2rem";
         console.log( emoji.style.fontSize)
         input.value+=emoji.innerHTML;
         //list.insertBefore(newItem,list.childNodes[0]);
         console.log(newItem);
         //emoji.style.pointer="cursor";
         //inputChat.insertAdjacentElement("beforebegin",emoji);
   })
})
let kct=1;
dashboard.addEventListener("click",function(){
dashboard.style.display="block";
dashboard.style.position="absolute";
dashboard.style.zIndex="10";
input.style.width="45%";
kct++;
})

document.addEventListener("click", function(event) {
   if(kct>1){
    if (event.target.closest(".emoji-dashboard")){ 
     
      return}
      else{
  input.style.width="60%";
  input.style.marginLeft="0.5%";
  dashboard.style.display="none";
  console.log("true");
 kct=1;
      }
}
else if(sidebar.style.display==="block")
kct++;

});
// function displayPhotos(){
//    document.getElementById("photos").style.display="block";
//   document.getElementById("name").innerHTML=div.className;
//   document.getElementById("name").style.fontSize="1.5rem";
//   document.getElementById("name").style.padding="2%";

// }
var modal = document.getElementById("myModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const header=document.getElementById("modal-heading")
function displayPhotos() {
  
  modal.style.display = "block";
  console.log(div.className);
  header.innerHTML=div.className;
  header.style.textTransform="capitalize";
  document.getElementsByClassName("modal-body")[0].innerHTML="";
  document.getElementsByClassName("modal-body")[0].style.display="flex";
  document.getElementsByClassName("modal-body")[0].style.flexWrap="wrap";
  document.getElementsByClassName("modal")[0].style.paddingTop="100px";
  document.getElementsByClassName("modal-body")[0].style.padding="1%";
  if(div.className==="raghav"){
     document.getElementsByClassName("modal-body")[0].innerHTML='<div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.unsplash.com/photo-1525648934681-a85708fc999a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=410&q=80" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" style="height:150px;width:150px;"></div>';
  }
  else{
   document.getElementsByClassName("modal-body")[0].innerHTML='<div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641__340.jpg" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118__340.jpg" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624__340.jpg" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.pexels.com/photos/755858/pexels-photo-755858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style="height:150px;width:150px;"></div><div style="margin:5px;;"><img  style="height:150px;width:150px;" src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style="height:150px;width:150px;"></div>';
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal1=document.getElementsByClassName("modal1")[0];
function displayAudio(){
   
   modal.style.display = "block";
   document.getElementsByClassName("modal-body")[0].style.display="block";
  console.log(div.className);
  header.innerHTML=div.className;
  header.style.textTransform="capitalize";
  document.getElementsByClassName("modal")[0].style.paddingTop="100px";
  document.getElementsByClassName("modal-body")[0].innerHTML="";
  if(div.className==="raghav"){
  document.getElementsByClassName("modal-body")[0].innerHTML='<audio controls><source src="./sounds/rain.mp3"/></audio>'+'<br/>'+'<audio controls><source src="./sounds/beach.mp3"/></audio>';}
  else{
   document.getElementsByClassName("modal-body")[0].innerHTML='No audios found';
   document.getElementsByClassName("modal-body")[0].style.padding="10%";
   document.getElementsByClassName("modal-body")[0].style.textAlign="center";
  }
  console.log(document.getElementsByClassName("modal-body")[0].innerHTML);
 
}
function checkedradio(){
   document.querySelector("#other").style.visibility="visible";
}
function cancelit() {
   modal.style.display = "none";
 }
var modal2=document.getElementsByClassName("modal2")[0];
function displayReport(){
   modal.style.display = "block";
   document.getElementsByClassName("modal-body")[0].style.display="block";
  console.log(document.getElementsByClassName("modal2")[0].style.paddingTop);
  header.innerHTML='<span style="font-size:2.5rem"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;Report Contact</span>';
  header.style.textTransform="capitalize";
  document.getElementsByClassName("modal-body")[0].style.overflowY="scroll";
 modal.style.paddingTop="0px";
  document.getElementsByClassName("modal2")[0].style.paddingTop="0px";
  document.getElementsByClassName("modal-body")[0].innerHTML="";
  document.getElementsByClassName("modal-body")[0].innerHTML='<div id="report-content">Why are you repoting this account??</div><div id="reason"><table><tr><td><input type="radio" name="reason"></td><td>This account belongs to someone I know</td></tr><tr><td><input type="radio" name="reason"></td><td>This is a fake account</td></tr><tr><td><input type="radio" name="reason"></td><td>This is a same account</td></tr><tr><td><input type="radio" name="reason" onclick="checkedradio()" id="other-radio"></td><td>Other</td></tr><tr id="other"><td>Type<br>reason<br>here</td><td><textarea name="other" cols="40" rows="3"></textarea></td></tr></table><div style="text-align: center;"><button class="report " onclick="cancelit()">Report</button><button class="report " onclick="cancelit()">Cancel</button></div></div>';
}
var modal3=document.getElementsByClassName("modal3")[0];
function displayVideo(){
   modal.style.display = "block";
  header.innerHTML=div.className;
  header.style.textTransform="capitalize";
  document.getElementsByClassName("modal-body")[0].innerHTML="";
  document.getElementsByClassName("modal-body")[0].style.display="flex";
  document.getElementsByClassName("modal-body")[0].style.flexWrap="wrap";
  document.getElementsByClassName("modal")[0].style.paddingTop="100px";
  document.getElementsByClassName("modal-body")[0].style.padding="1%";
  if(div.className==="raghav"){
  document.getElementsByClassName("modal-body")[0].innerHTML='<video width="150" height="150" controls><source src="./videos/VID-20191225-WA0001.mp4" /></video>';}
  else{
   document.getElementsByClassName("modal-body")[0].innerHTML='<video width="150" height="150" controls><source src="./videos/VID-20200624-WA0010.mp4" /></video>';}
  }

var modal4=document.getElementsByClassName("modal4")[0];
function displayBlock(){
   modal.style.display = "block";
   header.innerHTML='<span style="font-size:2.5rem">&nbsp;Block Contact</span>';
   document.getElementsByClassName("modal-body")[0].innerHTML="";
   document.getElementsByClassName("modal")[0].style.paddingTop="100px";
   document.getElementsByClassName("modal-body")[0].innerHTML='<span style="font-size:1.5rem;font-weight:bolder;text-align:center;padding:4%;">Block this contact? Blocked contacts will no longer be able to call you or send you messages</span>'+'<br/>'+'<div style="display:block;margin:auto;"><button class="report " onclick="cancelit()">Cancel</button><button class="report " onclick="cancelit()">Block</button></div>';
}
function displayWallpaper(){
   document.getElementById("wallpaper").style.display="block";
   document.getElementsByClassName("chat-div")[0].style.display="none";
}
function backwallpaper(){
   // document.getElementById("wallpaper").style.animationName="fadeOut";
   // document.getElementById("wallpaper").style.animationDuration="1s";
    document.getElementById("wallpaper").style.display="none";
   console.log( document.getElementById("wallpaper"));
   
}
var url,rurl,kurl;

function changewallpaper(x){
   var prev=document.getElementsByClassName("selected")[0];
prev.className="notSelected";
prev.style.border="0px";
prev.style.boxShadow="none";
console.log(prev);
x.className="selected";
url=x.src;
document.getElementsByClassName("selected")[0].style.border="1px solid black";
document.getElementsByClassName("selected")[0].style.boxShadow="0px 12px 22px 1px #333";

console.log(x);
}
function changeimg(){
   if(div.className==="raghav"){
      wct++;
      rurl=url;
   }
   else{
      wct1++;
      kurl=url;
   }
   second.style.backgroundImage="url(\'"+url+"\')";
   second.style.backgroundPosition="cover";
   second.style.backgroundRepeat="no-repeat";
   document.getElementById("wallpaper").style.display="none";
}
function cancelWall(){
   document.getElementById("wallpaper").style.display="none";
}
