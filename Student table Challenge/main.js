var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) { 
     var myArr = JSON.parse(this.responseText); // Changed the json data to JavaScript array
    
     for (i=0; i<= myArr.length; i++) {
            var maths_marks = parseInt(myArr[i].marks.Maths);
            var english_marks = parseInt(myArr[i].marks.English);
            var science_marks = parseInt(myArr[i].marks.Science);

            var total_marks = maths_marks + english_marks + science_marks;

            function create() { 
                var table = document.getElementById("myTable"); 
                var row = table.insertRow(-1); 
                var cell1 = row.insertCell(0); 
                var cell2 = row.insertCell(1); 
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
              
                cell1.innerHTML = capitalizeFirstLetter(myArr[i].name); 
                cell2.innerHTML = myArr[i].rollNumber;
                cell3.innerHTML = total_marks;

                if( maths_marks < 20 || english_marks < 20 || science_marks < 20 ) {
                    cell4.innerHTML = "Fail";
                    row.style.color = "red";
                } else if(total_marks > 120){
                    cell4.innerHTML = "Topper";
                    row.style.color = "Green";
                } else {
                    cell4.innerHTML = "Pass";
                }            
            }
            create();    
        }
     // First letter capitalization function
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } 
           
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
