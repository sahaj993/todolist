const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
const pending = document.querySelector('.pending');
const completed = document.querySelector('.completed');
const noOfTask = document.querySelector('#tasks');

btn.addEventListener('click', addList);

function taskCount() {
    const count = pending.childElementCount-1;
    if (count==0){
        tasks.innerHTML = `No Pending Task`
    }else{
        tasks.innerHTML = `Number of Pending task: ${count}`
    }
}

function addList(){

    const task = document.createElement('li');
    const mainBtn = document.createElement('button');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    mainBtn.setAttribute('class', 'main-btn')
    checkBtn.setAttribute('class', 'tick-btn');
    delBtn.setAttribute('class', 'del-btn');

    if (input.value!=''){
        task.textContent = input.value;
        input.value='';
        pending.appendChild(task);
        task.appendChild(mainBtn);
        mainBtn.appendChild(checkBtn);
        mainBtn.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(e){
        const parent = this.parentNode.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
        taskCount();
    })

    delBtn.addEventListener('click', function(e){
        const parent = this.parentNode.parentNode;
        parent.remove();
        taskCount();

    })

taskCount();

}
