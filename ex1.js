document.addEventListener('DOMContentLoaded',() =>{
    // constantes
    const btnAddTask = document.getElementById('addTask');
    const input = document.getElementsByClassName('newTask)');
    const taskList = document.getElementById('taskList');

    //Listener
    btnAddTask.addEventListener("click", () => {
        // création de mes éléménts dom
        const div = document.createElement("div");
        div.classList.add('d-flex')
        div.classList.add('gap-2')

        const h4 = document.createElement("h4");
        const checkbox = document.createElement("input")
        checkbox.setAttribute('Type', 'checkbox');
        checkbox.classList.add (ml-'4') 

        checkbox.addEventListener('change', function() => {
            if(this.checked == true){
                div.style.backgroundColor = "green"
            }
            else{
                div.style;backgroundColor = ""
            }
            console.log(this.checked)
        })
        h4.innerHTML = input.value;

        // j'ajouteles éléments dans la div que je viens de creer

        div.appendChild(h4);
        div.appendChild(checkbox)

        // j'ajoute la div qui contient mon h4

        
       
        taskList.append(input.value);
        input.value = "";

    })

    //Functions

})