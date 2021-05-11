console.log("scriptStart");
let posts=[{

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
    posts.forEach(element => {
        output+=`<li>${element.title}</li>`

    });

    document.body.innerHTML=output;
    console.log("post displayed");
    },1000);

    
       
}



const createPost=(newpost,callback)=>{


    setTimeout(()=>{

        posts.push(newpost);
        callback();
        console.log("post created");

    },2000)
}





createPost({
    title:'Post4',
    body:'This is 4th post'
},displayPosts)

console.log("scriptEnd");