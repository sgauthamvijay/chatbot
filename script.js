 document.getElementById('wmessage').value;


document.querySelector('.send').addEventListener('click',function(){
    // console.log(`You typed ${document.getElementById('wmessage').value}`)
    document.querySelector('.cahtbotm').textContent=`You typed ${ document.getElementById('wmessage').value}`
    document.querySelector('.card').classList.remove('hidden')
})

const showModal=function(){
    document.querySelector('.card').remove('hidden')
}

