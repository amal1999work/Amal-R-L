function series(){
    
    let a = document.getElementById('a').value;

    let number=''
    let current =1
    let count=(a%2==0)?a-1:a
    for (let i = 0; i < count; i++) {
        number=number+current

        if(i<count-1){
            
           number = number+','   
             }
        current = current+2
        
    }

    document.getElementById('ans').innerText=number


}


