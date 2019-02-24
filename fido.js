const Fido2Lib = require("fido2-lib");

// create a new instance of the library
const f2l = new Fido2Lib();

// which just makes the options calls easier later on:
var f2l = new Fido2Lib({
  timeout: 42,
  rpId: "localhost",
  rpName: "SLAM",
  challengeSize: 128,
  attestation: "none",
  cryptoParams: [-7, -257],
  authenticatorAttachment: "platform",
  authenticatorRequireResidentKey: false,
  authenticatorUserVerification: "required"
});

var registrationOptions = await f2l.attestationOptions();
