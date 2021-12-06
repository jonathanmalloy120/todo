function Todo({todo,index,remove}) {
    var counter = 1;
    function handle() {
        remove(index);
    }

        return (
            <div className = "todo" onClick={handle} style={{background: '#a9a9a9'}}/*removes this todo on click*/>
            {todo.text} (-) </div>
        )

    
}