
let json = {
  "name": "carla",
  "age": 25,
  "hobbies": ["origami", "reading", "coding"],
  "address": {
    "city": "bangkok",
    "country": "thailand"
  }
};


for (let key in json) {
  console.log(key + ": " + json[key]);
}


for (let key in json) {
  console.log(key + ": " + json[key]);
}


for (let value of Object.values(json)) {
  console.log(value);
}

Object.values(json).forEach(function(value) {
  console.log(value);
});
