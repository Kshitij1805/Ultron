let ulTasks = $('#ulTasks')
let btnAdd  = $('#btnAdd')
let btnClear = $('#btnClear')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let inpNewTask = $('#inpNewTask')


function addItem(){
    let listItem = $('<li>', {
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val("")
}


inpNewTask.keypress((e)=>{
    if (e.which == 13) addItem()
    
})

function clearDone() {
    $('#ulTasks .done').remove()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}



btnAdd.click(addItem)
btnClear.click(() => inpNewTask.val(''))
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
