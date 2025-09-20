function series(){
    
    let a = document.getElementById('a').value;

    let number=''
    let current =1
    for (let i = 0; i < a; i++) {
        number=number+current

        if(i<a-1){
            
           number = number+','        }
        current = current+2
        
    }

    document.getElementById('ans').innerText=number


}


