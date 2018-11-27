// //vanilla
// function handleClick(){
//     var doc = window.document;
//     var body =doc.getElementById('#bod');
//     body.style('background-color')='blue';
// }

// jquery
$(document).ready(()=>{
    
    const button = $('button');
    const colors = ['blue', 'green','red','violet'];
    let count = 0;
    
    button.click(()=>{
        
        $('body').css('background', colors[count])
        count++;
        
        if(count>=3){
            count=0;
        }
    })
})

