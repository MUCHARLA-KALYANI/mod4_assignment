var names= new Array();
names[0]="Harshitha";
names[1]="Jhon";
names[2]="Jen";
names[3]="joshna";
names[4]="pradeep";
names[5]="uha";
names[6]="varshini";
names[7]="dinesh";
names[8]="chandana";
names[9]="jim";

for(var i = 0; i < names.length; i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+names[i])
    }
    else{
        console.log("Hello "+names[i])
    }
    
}