#include <WiFi.h>
#include <ArduinoHttpClient.h>
#include "safe.h"

char ssid[] = SSID;
char pass[] = PASSWORD;
int status = WL_IDLE_STATUS;
char serverAddress[] = SERVER_URL;
WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress);

int sleep = 12000;
int halfSleep = 6000;
int microDelay = 300;
int pin[] = { 2, 3, 4, 5 };
int pinCounter = 4;
String response;
int statusCode;

void setup() {
  Serial.begin(9600);
  networkConnect();
  outputInitializer();
}

void loop() {
  apiCall();
  validator();
  client.flush();
  client.stop();
}

void networkConnect() {
    status = WiFi.begin(ssid, pass);
    if (status != WL_CONNECTED) {
        Serial.println("Couldn't get a wifi connection");
        while (true);
    }
    else {
        Serial.println("Connected to network");
    }
}

void outputInitializer() {
    for (int counter = 0; counter < pinCounter; counter++) {
        pinMode(pin[counter], OUTPUT);
        digitalWrite(pin[counter], HIGH);
    }
}

void apiCall() {
   client.get("/arduino");
   statusCode = client.responseStatusCode();
   response = client.responseBody();
}

void validator() {
    if (response == "1") {
        digitalWrite(pin[0], LOW);
        delay(sleep);
        digitalWrite(pin[0], HIGH);
    }
    if (response == "2") {
        digitalWrite(pin[1], LOW);
        delay(sleep);
        digitalWrite(pin[1], HIGH);
    }
    if (response == "3") {
        digitalWrite(pin[2], LOW);
        delay(sleep);
        digitalWrite(pin[2], HIGH);
    }
    if (response == "4") {
        digitalWrite(pin[0], LOW);
        delay(halfSleep);
        digitalWrite(pin[0], HIGH);
        delay(microDelay);
        digitalWrite(pin[1], LOW);
        delay(halfSleep);
        digitalWrite(pin[1], HIGH);
    } 
    if (response == "5") {
        digitalWrite(pin[0], LOW);
        delay(halfSleep);
        digitalWrite(pin[0], HIGH);
        delay(microDelay);
        digitalWrite(pin[2], LOW);
        delay(halfSleep);
        digitalWrite(pin[2], HIGH);
    }
    if (response == "6") {
        digitalWrite(pin[1], LOW);
        delay(halfSleep);
        digitalWrite(pin[1], HIGH);
        delay(microDelay);
        digitalWrite(pin[2], LOW);
        delay(halfSleep);
        digitalWrite(pin[2], HIGH);
    } 
    else {
        delay(3000);
    }
}