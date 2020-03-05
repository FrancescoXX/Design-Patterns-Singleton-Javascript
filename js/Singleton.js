/**
 * AppConfig is a concrete implementation of a Singleton
 */
class AppConfig {
  constructor() {

    if (AppConfig.instance instanceof AppConfig) {
      return AppConfig.instance;
    }

    //The object we want as a Singleton
    this.configObject = {
      'id': Math.floor(Math.random() * 1000),
      'app-style': 'blue',
    };

    //Turn into a Singleton
    Object.freeze(this.configObject);
    Object.freeze(this);
    AppConfig.instance = this;

  }
  getInstance = (key) => this.configObject[key]
}

/**
 * Client: Test the Singleton Class
 */
const myConfiguration = new AppConfig();
console.log(`\nApp Style is ${myConfiguration.getInstance('app-style')}`);
console.log('============================');

//Try to create another instance
const anotherConfiguration = new AppConfig();

console.log('anotherConfiguration : ', anotherConfiguration.getInstance('id'));
console.log('myConfiguration: ', anotherConfiguration.getInstance('id'));
console.log('============================');
console.log(`Same object ? ${myConfiguration === anotherConfiguration}`);