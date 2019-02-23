<script>
  if (!window.PublicKeyCredential) { /* Platform not capable. Handle error. */ }

  var publicKey = {
    challenge: { challenge }, // The challenge must be produced by the server

    // Relying Party:
    rp: {
      name: "SLAM"
    },

    // User:
    user: {
      id: { user_id }, // id may be generated by the server
      name: "a.user@example.com",
      displayName: "A User",
      icon: "https://example.com/image.png"
    },

    // This Relying Party will accept either an ES256 or RS256 credential, but
    // prefers an ES256 credential.
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7 // "ES256" as registered in the IANA COSE Algorithms registry
      },
      {
        type: "public-key",
        alg: -257 // Value registered by this specification for "RS256"
      }
    ],

    excludeCredentials: [],
    attestation: 'direct',
    timeout: 60000,
    extensions: { "loc": true }  // Include location information in attestation
  };

  // Note: The following call will cause the authenticator to display UI.
  navigator.credentials.create({ publicKey })
    .then(function (attestation) {
      // Send new credential info to server for verification and registration.
    }).catch(function (err) {
      // No acceptable authenticator or user refused consent. Handle appropriately.
    });
</script>