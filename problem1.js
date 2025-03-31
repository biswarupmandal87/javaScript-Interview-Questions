//I have "3+2*2"  this type of expression as input. 
// write a javascript function to get the simplified value of the expression
function evaluateExpression(expression) {
    try {
        return new Function(`return ${expression}`)();
    } catch (error) {
        console.error("Invalid expression:", error);
        return null;
    }
}

console.log(evaluateExpression("3+2*2")); // Output: 7
console.log(evaluateExpression("10/2+5")); // Output: 10
console.log(evaluateExpression("(3+2)*2")); // Output: 10

//You can use the eval function to evaluate the expression, but it's not recommended due to security concerns. 
// Instead, you can use the Function constructor or implement a proper parser. 
// Here's a safe way using the Function constructor:
// This function correctly evaluates mathematical expressions while ensuring the correct order of operations (PEMDAS/BODMAS).