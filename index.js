function mooncakeSays(message) {
  let mooncake = '(o_o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}!`;
}

module.exports.mooncakeSays = mooncakeSays;
