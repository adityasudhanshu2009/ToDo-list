window.addEventListener('load', ()=>{
    const form=document.querySelector('#new-task');
    const input=document.querySelector('#newtask');
    const list_ele=document.querySelector('#tasks');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task)
        {
            alert('Please enter a task');
            return;
        }
        const task_ele=document.createElement("div");
        task_ele.classList.add("task"); 

        const task_content=document.createElement("div");
        task_content.classList.add("content");
        //task_content.innerText=task;
        task_ele.appendChild(task_content);

        const task_input=document.createElement("input");
        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task;
        task_input.setAttribute("readonly","readonly");

        task_content.appendChild(task_input);
        list_ele.appendChild(task_ele);
        const task_action=document.createElement("div");
        task_action.classList.add("actions");

        const task_edit=document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerText="Edit";
    
        const task_delete=document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerText="Delete";

        task_action.appendChild(task_edit);
        task_action.appendChild(task_delete);

        task_ele.appendChild(task_action);
        input.value="";
        task_edit.addEventListener('click',()=>{
            if(task_edit.innerText.toLowerCase()=="edit"){
                task_input.removeAttribute("readonly");
                task_edit.innerText="Save";
                task_input.focus();
            }
            else{
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText="Edit";
            }

        
    })
    task_delete.addEventListener('click',()=>{
        task_ele.remove();
    })
})  
})