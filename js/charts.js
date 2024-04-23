const trafficCanvas = document.getElementById("trafficOverview");
const dailyCanvas = document.getElementById("dailyTraffic");
const mobileCanvas = document.getElementById("mobileUsers");
const hourly = document.querySelector('.hourlyt');
const daily = document.querySelector('.dailyt');
const weekly = document.querySelector('.weeklyt');
const monthly = document.querySelector('.monthlyt');

var context = document.querySelector('#trafficOverview').getContext('2d');
var chartParams = {
	type: 'line',
	data: chartData,
	options: {
		responsive: true,
		maintainAspectRatio: false,
		elements: {
	      line: {
	        tension: 0,
	      }
	  	},
	    scales: {
	         yAxes: [{
	             ticks: {
	                 beginAtZero:true
	             }
	         }]
	     },
	     legend: {
	            display: false
	         },
	         tooltips: {
	            enabled: false
	         },
		}
};
var myLineChart = new Chart(context, chartParams);

window.onload = weekly.classList.add('active');

function switchCharts(chartName) {
		myLineChart.destroy();
		chartName.classList.add('active');
		myLineChart = new Chart(context, chartParams);
}

hourly.addEventListener('click', (e) => {
	chartData = {
		labels: ["6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [450, 1050, 700, 1700, 1600, 2500, 2750, 2250, 2750, 2250, 1750, 2250],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	daily.classList.remove('active');
	weekly.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(hourly);
});
daily.addEventListener('click', (e) => {
	chartData = {
		labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [250, 750, 600, 2700, 610, 200, 2150],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	hourly.classList.remove('active');
	weekly.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(daily);
});
weekly.addEventListener('click', (e) => {
	chartData = {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	hourly.classList.remove('active');
	daily.classList.remove('active');
	monthly.classList.remove('active');
	switchCharts(weekly);
});
monthly.addEventListener('click', (e) => {
	chartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [{
			backgroundColor: 'rgba(116, 120, 191, .5)',
			borderColor: 'rgba(116, 120, 191, 1)',
			data: [700, 250, 100, 500, 200, 1500, 1000, 1250, 1750, 2050, 1650, 2550],
		}]
	};
	chartParams = {
		type: 'line',
		data: chartData,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			elements: {
		      line: {
		        tension: 0,
		      }
		  	},
		    scales: {
		         yAxes: [{
		             ticks: {
		                 beginAtZero:true
		             }
		         }]
		     },
		     legend: {
		            display: false
		         },
		         tooltips: {
		            enabled: false
		         },
			}
	};
	hourly.classList.remove('active');
	daily.classList.remove('active');
	weekly.classList.remove('active');
	switchCharts(monthly);
});

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };
let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    maintainAspectRatio: false,
    animation: {
    duration: 0
    },
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };

let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
        });

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };
let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });

const mobileData = {
            labels: ["Desktop", "Tablet", "Phones"],
            datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
            ]
            }]
            };
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }
    };

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });    
      
