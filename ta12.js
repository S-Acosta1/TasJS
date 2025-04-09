function generatePassword(num){
    if (num < 8){
        console.log("Debe determinar al menos 8 caracteres")
        num = 8;
    }
    const mays = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "1234567890";
    const simb = "!@#$%^*()_-+={[}];:'?.,/" ;
    const min = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    password.push(mays[Math.floor(Math.random() * mays.length)]);
    password.push(nums[Math.floor(Math.random() * nums.length)]);
    password.push(simb[Math.floor(Math.random() * simb.length)]);
    password.push(min[Math.floor(Math.random() * min.length)]);
    while (password.length<num){
        keyUtils = Math.floor(Math.random()*4 + 1);
        switch (keyUtils){
            case 1:
                password += mays[Math.floor(Math.random()*mays.length)];
                break
            case 2:
                password += nums[Math.floor(Math.random()*nums.length)];
                break
            case 3:
                password += simb[Math.floor(Math.random()*simb.length)];
                break
            case 4:
                password += min[Math.floor(Math.random()*min.length)];
                break
        }
        
        console.log(password);
        
    }

}