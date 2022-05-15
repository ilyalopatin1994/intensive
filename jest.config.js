module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
    "^/src/(.*)$": "<rootDir>/src/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    ".*\\.(vue)$": "@vue/vue3-jest",
    ".*\\.(js)$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
