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
  delete this.Name[Key];
  }
  this.GetKeys = function(){
  this.KeysA = Object.keys(this.Name);
}
}