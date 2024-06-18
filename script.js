// const toggle_btn = document.querySelector('#checkbox')

// toggle_btn.addEventListener("change" , () =>
// {
//     if(toggle_btn.checked)
//         {
//             document.body.classList.add('dark-mode')
//         }
//         else
//         {
//             document.body .classList .remove('dark-mode')

//         }
// })


document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[name = "display"]');
    const buttons = document.querySelectorAll('.btn');
    const toggle_btn = document.querySelector('#checkbox');
    const container = document.querySelector('.container');
    // Get the toggle button and the container


    // Function to toggle dark mode
    toggle_btn.addEventListener("change", () => {
        if (toggle_btn.checked) {
            container.classList.add('dark-mode');
        } else {
            container.classList.remove('dark-mode');
        }
    });

    //logic for clicked button
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const value = e.target.innerText;

                if (value === "=") {
                    display.value = calculate(display.value);
                }
                else if (value === "AC") {
                    display.value ='';
                }
                else if (value === "DE") {
                    display.value = display.value.slice(0, -1);
                }
                else {
                    display.value += value;
                }
            });
        });

        
// calculation of expression
        function calculate(expression) {
            try {
                const tokens = expression.split(/([+\-*/])/); //["18" , " - ", "8"]  -  divides the string into an array of substring 
                let result = parseFloat(tokens[0]);

                for (let i = 1; i < tokens.length; i += 2) {
                    const operator = tokens[i];
                    const nextNumber = parseFloat(tokens[i + 1]);

                    if (operator === '+') result += nextNumber;
                    if (operator === '-') result += nextNumber
                    if (operator === '*') result += nextNumber;
                    if (operator === '/') result += nextNumber;
                }

                return result;

            } catch (error) {
                return 'Error';
            }
        }

    });


