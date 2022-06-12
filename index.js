function mooncakeSays(message) {
  let mooncake = '(o_o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }
@@ -8,4 +11,4 @@ function mooncakeSays(message) {
  return `${mooncake} ${message}!`;
}

module.exports.mooncakeSays = mooncakeSays;
