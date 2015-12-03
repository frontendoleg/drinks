function THashStorage(){
  this.Name = {};
  this.Reset = function(){
  this.Name = {};
  }
  this.AddValue = function(Key, Value){
  this.Name[Key] = Value;
  }
  this.GetValue = function(Key){
  return this.Name[Key];
  }
  this.DeleteValue = function(Key){
  this.Name[Key] = null;
  }
  this.GetKeys = function(){
  this.KeysA = [];
    for(var key in this.Name)
      this.KeysA[this.KeysA.length] = key; // Работает, но выдает список значений, а не список ключей!!!
  }
}