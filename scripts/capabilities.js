
//The main method providing an entry point for the Appium JAVA REPL.
function main() {
  var DesiredCapabilities = Java.type("org.openqa.selenium.remote.DesiredCapabilities")
  var caps = new DesiredCapabilities();
  caps.setCapability("appiumServer","http://127.0.0.1:4723/wd/hub");
  caps.setCapability("udid", "ID");
  caps.setCapability("deviceName", "NAME");
  caps.setCapability("newCommandTimeout", "900000");
  caps.setCapability("app", "ApiDemos-debug.apk");
  caps.setCapability("platformName","android");
  caps.setCapability("appActivity","io.appium.android.apis.ApiDemos");
  caps.setCapability("appPackage","io.appium.android.apis");
  return caps;
}
