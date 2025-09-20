class Calculator {
   constructor(a, b, operation) {
 this.a = parseFloat(a);
 this.b = parseFloat(b);
 this.operation = operation.toLowerCase();
 }

            
 calculate() {
     switch (this.operation) {
       case 'addition':
           return this.a + this.b;
       case 'subtraction':
           return this.a - this.b;
       case 'multiplication':
           return this.a * this.b;
       case 'division':
           return this.b !== 0 ? this.a / this.b : 'cannot divide by zero';
       default:
           return 'invalid';
                }
            }
        }

        function calculation() {


         let a = document.getElementById('a').value;
         let b = document.getElementById('b').value;
         let op = document.getElementById('operation').value; 


         const calc = new Calculator(a, b, op);
         const result = calc.calculate(); 


         document.getElementById('ans').innerText = result
        }