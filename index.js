const input=document.querySelector("#input");
const button= document.querySelector("#button");

const list=document.querySelector("#list");
function todo()
{
    const item=document.createElement("li");
    item.textContent=input.value;
    if(input.value==='')
    {
        return;
    }
    list.appendChild(item);

    const deltebtn=document.createElement("button");
    deltebtn.textContent="Done";
    item.appendChild(deltebtn);

    deltebtn.addEventListener('click',()=>{
        list.removeChild(item);
    })
    input.value="";
}

button.addEventListener('click',todo);