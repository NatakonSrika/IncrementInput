const counter = document.querySelectorAll(".counter");
counter.forEach(counter=>{
    counter.innerText='0'
    const updeteCounter = () =>{
        const target = +counter.getAttribute("data-target")
        const start =+counter.innerText
        const increment = target/200
        if(start<target){
            counter.innerText=`${Math.ceil(start+increment)}`
            setTimeout(updeteCounter,1)
        }else{
            counter.innerText=target
        }
    }
    updeteCounter();
})