function ThashStorage(Name){
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
  this.Name[key] = null;
  }
  this.GetKeys = function(){
  }
}