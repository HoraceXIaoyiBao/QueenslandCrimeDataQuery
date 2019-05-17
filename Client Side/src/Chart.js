function Chart(result) {

            console.log("this is chart");

        let labels="";
        let values="";
        let backgroundColor="";
        console.log(result);

        var rows = eval(result);
        for(var i = 0; i < rows.length; i++){

        
            labels += "'" + rows[i]["LGA"] + "'";
            values += "'" + rows[i]["total"] + "'";
            let R= 255-i*3;
            let G= i*3;
            let B= 200-i*2;
            backgroundColor+="'rgba(" + R+","+G+","+B+",0.8)'"
            if(i!=rows.length-1)
            {
            labels +=",";
            values +=",";
            backgroundColor +=",";  
            }
        }
        console.log(labels);
        console.log(values);
        console.log(backgroundColor);




    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `  
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [`+labels+`],
            datasets: [{
                label: '# of Votes',
                data: [`+values+`],
                backgroundColor: [`+backgroundColor+`],
                borderWidth: 1
            }]
        },
        
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: 'black'
                    }
                }]
            }
        }
    });
    `;
    document.body.appendChild(script) 
}

export default Chart;

