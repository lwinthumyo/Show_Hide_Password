// const showHiddenInput = (inputOverlay,inputPass,inputIcon) => {
//     const overlay = document.getElementById(inputOverlay),
//             input = document.getElementById(inputPass),
//             iconEye = document.getElementById(inputIcon)

//         iconEye.addEventListener('click',() => {
//             if(input.type === 'password'){
//                 input.type = 'text'
//                 iconEye.classList.add('bx-show')
//             }else{
//                 input.type = 'password';
//                 iconEye.classList.remove('bx-show')
//             }
//             overlay.classList.toggle('overlay-content')
//         })
// }

// showHiddenInput('input-overlay','input-password','input-icon')

const overlay = document.getElementById('input-overlay'),
            inputLock = document.getElementById('input-lock'),
            inputPass = document.getElementById('input-password'),
            iconEye = document.getElementById('input-icon');

    iconEye.addEventListener('click', () => {
        if(inputPass.type === 'password'){
            inputPass.type = 'text';
            iconEye.classList.add('bx-show')
        }else{
            inputPass.type = 'password';
            iconEye.classList.remove('bx-show')
        }
        overlay.classList.toggle('overlay-content')
    })