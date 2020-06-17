const buttons=document.querySelector('button');

const buttonClickHandler=()=>
{
    alert('hello how are you doing..?');
};

buttons.onclick=buttonClickHandler;
const btnAdd=document.getElementById('btn-add');
// btnAdd.addEventListener('click',()=>
// {
//     alert('hello ...');

// });
// buttons.forEach(element => {
//     element.addEventListener('click',buttonClickHandler());
// });

// const form=document.querySelector('form');
// form.addEventListener('submit',event =>
//     {

//         event.preventDefault();
//         console.log(event);
//     });
    const form=document.querySelector('form');
form.addEventListener('submit',event =>
    {
// it will load page again if we dont use preventDefault()
        //event.preventDefault();
        console.log(event);
        
    });

    const listItem=document.querySelectorAll('li');
    listItem.forEach(res=>{
        res.addEventListener('clicl',event =>{
        });

    });