function divisores(n){
	var	i=2;
	var arr = [];
	while(n>1){
		if(n%i==0){
			arr.push(i);
			n=n/i;
		}
		else{
		i++;}
	}
return arr;
}

function esPrimo(n){
	var j = Math.round(Math.sqrt(n));
	for(var i=2;i<=j;i++){
		if(n%i==0){
			return false;
		}
	}
	return true;
}

function main(n){
    var divs = divisores(n);
    var k = divs.length;
    while(k>=0){
        if(esPrimo(divs[k-1])){
            return divs[k-1];
        }
        k--;
    }
}

main(600851475143);