console.log("scriptStart");
let posts=[
    {

    title:"post1",
    body:"This is first post"
},
{
    title:'post2',
    body:'This is second post',
},
{
    title:"post3",
    body:"This is 3rd post"
}
];



const displayPosts=()=>{
    setTimeout(()=>{
       
        let output='';
    posts.forEach((element,index) => {
        console.log(element);
        output+=`<li>${element.title}</li>`

    });

    document.body.innerHTML=output;
    console.log("post displayed");
    },1000);
  
}



const createPost=(newpost)=>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            posts.push(newpost);
            let error=false;
            if(!error){
                resolve();
                console.log("post created");
            }
            else{
                reject("error")
            }
        },2000)
    });
}

function hello(){
    setTimeout(()=>{
        console.log("hello");

    },1000)
    
}



async function callAllFunction(){

    try{
        await createPost({
            title:'Post4',
            body:'This is 4th post'
        });
    
        await displayPosts();
       
    
        await hello();
        
    }
     catch(error){
        console.log("error")
    }


  
}



callAllFunction();



async function fetchData(){

    try{

        
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=res.json();

    console.log("fetched data",data);
    }
    catch(error){
        console.log("fetch error",error)
    }

   
}

fetchData();

console.log("script end");