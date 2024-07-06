const calcy = () => {
    let Tam = document.getElementById('tam').value;
    let Eng = document.getElementById('eng').value;
    let Mat = document.getElementById('math').value;
    let Sci = document.getElementById('sci').value;
    let Soc = document.getElementById('soc').value;
    let grades = "";
  
    let totalGrades = (parseFloat(Tam) + parseFloat(Eng) + parseFloat(Mat) + parseFloat(Sci) + parseFloat(Soc)).toFixed(2);
  
    let perc = (((totalGrades / 500) * 100).toFixed(2));
  
    if (perc >= 39.5) {
        document.getElementById('showData').innerHTML = `Out of 500<br><br>Total is ${totalGrades}<br><br>Percentage is ${perc}%.`;
        document.getElementById('result').innerHTML = `PASS`;
    } else {
        document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and percentage is ${perc}%.`;
        document.getElementById('result').innerHTML = `FAIL`;
    }
  }
  
  const showGrades = () => {
    let Tam = document.getElementById('tam').value;
    let Eng = document.getElementById('eng').value;
    let Mat = document.getElementById('math').value;
    let Sci = document.getElementById('sci').value;
    let Soc = document.getElementById('soc').value;
    let grades = "";
  
    let totalGrades = (parseFloat(Tam) + parseFloat(Eng) + parseFloat(Mat) + parseFloat(Sci) + parseFloat(Soc)).toFixed(2);
  
    let perc = (((totalGrades / 500) * 100).toFixed(2));
  
    if (perc <= 100 && perc >= 80) {
        grades = 'A';
        alert("Congratulations! You achieved an 'A' grade");
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    } else if (perc <= 59 && perc >= 40) {
        grades = 'C';
    } else {
        grades = 'F';
        alert("work hard")
    }
  
    document.getElementById('showData').innerHTML = `Out of 500<br><br>Total is ${totalGrades}<br><br>Percentage is ${perc}%.<br><br>Your grade is ${grades}.`;
    document.getElementById('result').innerHTML = ``; // Clear the result section
  }
  