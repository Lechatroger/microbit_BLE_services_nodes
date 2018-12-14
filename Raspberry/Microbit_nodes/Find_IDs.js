// name: Find IDs
// outputs: 1
var BBCMicrobit = global.get('bbcmicrobit');

console.log('Discovering microbit...');
BBCMicrobit.discoverAll(onDiscover);

function onDiscover(microbit) {
    console.log('\tMicrobit discovered! id = %s, address = %s', microbit.id, microbit.address);
    node.send({payload:microbit});
}
