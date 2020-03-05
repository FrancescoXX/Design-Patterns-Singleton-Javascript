# Singleton Pattern 
### *Single object instance*
___

## Creational pattern

## ⚡️Problem (we need)
- One configuration file, from different components
- Always the same file
- Guaranteed that there is only one file
___

## 💡Intent
 - Ensure a class only has one instance.
 - Provide a global point of access to it.
___
## 🔧 Apply
 - One instance of a class is required
 - It must be one access point
 - Need to manage object instances
___
## ✅Pro
- Single point of access to the instance
- Avoid global variables
- Ability to subclass the singleton class
- Configure the number of instances
___
## ⚠️Cons
- State of the singleton must be shareable between program executions
___
## 🏆 Great for
- Manage number of instances at runtime
- Provide one single unique access
