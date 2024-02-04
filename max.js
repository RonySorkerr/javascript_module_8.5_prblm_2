// maximum of 3 numbers

// if(rahim > jamal && rahim > karim){
    //     console.log('rahim is bigger', rahim);
    // }
    // else if(jamal > rahim && jamal > karim){
        //     console.log('jamal is bigger', jamal);
        // }
        // else{
            //     console.log('karim is biggest', karim);
            // }
            
            // DOING IT BY MYSELF
            
            function maxOfThree(rahim, jamal, karim){
                if(rahim > jamal && rahim > karim){
                    console.log('rahim is biggers');
                }
                else if(jamal > rahim && jamal > karim){
                    console.log('jamal is the king');
                }
                else{
                    console.log('Karim is the BOSSSSSS.');
                }
                return maxOfThree;
            }
            
            const rahim = 45;
            const jamal = 609;
            const karim = 70;
            const rakamma = 466;
            const hakim = 4545;

            const values = maxOfThree(rahim, jamal, karim);
            
            const max = Math.max(rahim, jamal, karim, rakamma, hakim);
            console.log(max);
            