const years = document.querySelectorAll(".year_item");
const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [years[0].innerText, years[1].innerText, years[2].innerText, years[3].innerText, years[4].innerText, years[5].innerText, years[6].innerText, years[7].innerText, years[8].innerText],
        datasets: [{
            data: [268, 382142, 417140, 293222, 86987, 424703, 54428, 24797, 3364552],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
let counter = 0

const nextClick = () => {
   if(counter<years.length) {
       const selectedYear = years[counter]
       years.forEach((e)=> e.classList.remove("selectedYear"))
       selectedYear.classList.add("selectedYear")
       console.log(counter);
       drawChart(counter)
   }
   else {
       counter =  years.length
   }
   counter++
}

const previousClick = () => {
    --counter
    console.log(counter);

}

function drawChart(position) {
    switch(position) {
        case 0:
             myChart.destroy()
             myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [years[0].innerText, years[1].innerText, years[2].innerText, years[3].innerText, years[4].innerText, years[5].innerText, years[6].innerText, years[7].innerText, years[8].innerText],
                    datasets: [{
                        data: [268],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            break
            case 1:
                myChart.destroy()
                 myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [years[0].innerText, years[1].innerText, years[2].innerText, years[3].innerText, years[4].innerText, years[5].innerText, years[6].innerText, years[7].innerText, years[8].innerText],
                        datasets: [{
                            data: [268, 382142],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

    }
}


const previous  = document.querySelector(".previous")
const next = document.querySelector(".next")
previous.addEventListener("click", previousClick)
next.addEventListener("click", nextClick)
