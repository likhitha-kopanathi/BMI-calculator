<script type="text/babel">



    class Input1 extends React.Component {
        render(){
            return (<div class = "input-control1">
                <h1>BMI Calculator</h1>
                <label1 for = "num11">Weight: <input type = "text" id = "num11" placeholder = "in kgs" autofocus/></label1><br/>
                <label1 for = "num21">Height: <input type = "text" id = "num21" placeholder = "in feet" autofocus/></label1><br/><br/>
                <button id="calculate1">Calculate</button><br/><br/><br/>
                <p class = "answer1">0</p>
                </div>              
                )
        }   
    }

    ReactDOM.render(<Input1 />, document.getElementById("root1"));

    var btn = document.querySelector('#calculate1');
btn.addEventListener ('click', function () {
    var num1 = Number ( document.querySelector('#num11').value ),
            num2 = Number ( document.querySelector('#num21').value ),
            rlt = document.querySelector('p.answer1');
    var answer = 0;
    answer = num1/((num2/3.281)*(num2/3.281));
        if(answer < 16){
            rlt.innerHTML = "BMI: "+answer+"\n" +"you are underweighted";
    }
    else if(answer < 25){
        rlt.innerHTML = "BMI: "+answer+" and you are normal";

    }
    else if(answer < 30){
        rlt.innerHTML = "BMI: "+answer+" and you are overweighted";

    }
    else{
        rlt.innerHTML = "BMI: "+answer+" and you are obese";
    }
});

</script>