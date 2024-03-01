function checkAge(){
    const ageField = document.getElementById('age');
    const ageText= ageField.value;
    // console.log(ageText);
    const errorTag= document.getElementById('error');
    
   
    

    try{
        const age = parseInt(ageText);
        if( isNaN(age)){
            throw "Please enter a valid number" ;
        }
        else if(age < 18){
           throw 'baccha kaccha is not allow';
        }
        else if (age > 30){
            throw 'murubbi ra aikana aisen nah';
        }
        errorTag.innerHTML = '';
    }
       
    catch (err) {
        console.log('ERROR :', err);
        errorTag.innerHTML = 'ERROR : '+ err;
    }
    finally{
        console.log('All done inside try and catch');
    }
    console.log(1111111);


}