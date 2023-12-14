let operand1="";
let operand2="";
let operator="";

function setOperand(value)
{
   
    if(operator=="")
    {
        operand1+=value;
        document.getElementById("display").value+=value;
    }
    else
    {
        operand2+=value;
        document.getElementById("display").value+=value;
    }
}

function setOperator(value)
{
    if(operator==""&&operand1!=""&&operand2=="")
    {
        operator=value;
        document.getElementById("display").value+=value;
    }
}

function clearDisplay()
{
    operand1="";
    operand2="";
    operator="";
    document.getElementById("display").value=""
}

function express()
{
    document.getElementById("display").value=eval(document.getElementById("display").value);
}