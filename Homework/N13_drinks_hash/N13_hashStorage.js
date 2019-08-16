class HashStorage {
    constructor(key1, value1) {
        this.key = key1;
        this.value = value1;
        // var drinks = { "название напитка": [{ "алкоголь": true }, { "рецепт": "описание приготовления" }], "1": [false, "проба"] };
        var drinks = {};
        console.log("!___________!");
        console.log("this.key=", this.key);
        console.log("this.value=", this.value);
        console.log((drinks));
        console.log("!___________!");

        this.addValue1 = function() {
            console.log('key='+key1); 

            console.log('__________add1_________');
            console.log('this.key=' + this.key ); 
            console.log('this.value=' + this.value);
            console.log('key1=' + key1);
            console.log('_____________  _________');
            drinks[this.key] = true;  // если среди хэша нет ключа  this.key, то добавим его в хэш
            drinks[this.key] = value1; // если среди хэша есть ключ this.key, то пишем в его значение value
                
        };

        this.addValue = function(k, v) {
            console.log('__________add________');
            // this.key = k;   
            // this.value = v;
            drinks[k] = true;
            drinks[k] = v;
            // console.log('k=' + k);
            // drinks[this.key] = true;
            // drinks[this.key] = this.value;
            // console.log('this.key=' + this.key);
            // drinks["key1"] = true;
            // drinks["key1"] = v;
            // key1='100';
            // console.log('key1=' + key1);
            console.log('drinks.key=' + k);
            console.log('getValue.key=' + drinks[k]);
            console.log((drinks));
        };

        this.getValue = function(key) {
            console.log('________getValue________');
            console.log('getValue.key=' + drinks[key]);
            return drinks[key]
        };

        this.deleteValue = function(key) {
            console.log('________delete________');
            console.log('Объект до удаления элемента=');
            console.log(Object.keys(drinks));
            
            if (drinks[key]===undefined){
                console.log('элемент для удаления не найден');
                return false;
            }else{
              console.log('Элемент:'+key+'  НАЙДЕН! (' + drinks[key]+') и будет удален');
               delete drinks[key];
               console.log('Объект после удаления элемента=');
               console.log(Object.keys(drinks)); // вывод пары (ключ, значение)
               return true;    
            }
           

        };

        this.getKeys = function() {
            console.log('________getKeys________');
            return Object.keys(drinks)
        };
    }
}
