function addTask(){
    let newTask = '<li>' + task.value + '<button class="ui-btn ui-btn-inline btnarchive" style="background: green ; color: white;">Archiver</button></li>';
    taskList.innerHTML += newTask;
    //task.value = '';
    task.focus();
    task.select();
    $(taskList).listview('refresh');
}

function reinitialiser(){
    taskList.innerHTML ='';
    $(taskList).listview('refresh');
}


