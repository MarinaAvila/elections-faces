;
var ENV_NW = (typeof nw != 'undefined');
var ENV_DEV = (!ENV_NW || nw.App.argv.indexOf('--dev') != -1);
