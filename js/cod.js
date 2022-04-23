
const w = window,
d = document

w.addEventListener('load', () => {
    $('#onload').fadeOut(),
    $('body').removeClass('hidden123')}
    )

    let loader = setTimeout (() => {
        
            const esconder = (() => {
                d.getElementById('tumama').style.display = 'none';
            })
            esconder();
            
           
}, 4000) 



