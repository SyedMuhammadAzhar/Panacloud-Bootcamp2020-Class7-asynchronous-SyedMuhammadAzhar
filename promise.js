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
        console.log(posts)
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

createPost({
    title:'Post4',
    body:'This is 4th post'
})
.then(displayPosts)
.then(hello)
.catch(err=>console.log(err))



// const promise1 = Promise.resolve("This is promise 1");
// const promise2= new Promise((resolve,reject)=>{
//     resolve("this is promise2");
// });
// const promise3 =Promise.resolve("This is promise 3");

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())


// Promise.all([promise1,promise2,promise3,promise4])
// .then((values)=>{
//     console.log(values)
// })
