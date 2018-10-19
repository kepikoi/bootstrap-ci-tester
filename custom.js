const
    sass = require("node-sass")
    , path = require("path")
    , fs = require("fs")
;

sass.render({
    file: path.resolve(__dirname + "/custom.scss"),
}, function (err, result) {
    if (err) {
        console.error(err);
        process.exitCode = 1
    }

    try {

        fs.writeFileSync(__dirname + "/public/custom.css", result.css.toString());
    }
    catch (e) {
        console.error(e);
        process.exitCode = 2
    }

    process.exit(0)
});
