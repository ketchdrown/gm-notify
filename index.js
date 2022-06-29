module.exports = function dildo(wdym) {

	let isEnabled = true;

    // WHAT DO YOU MEAN BY DILDO?

    function getDildoSpawnVersion() {
        let ver = 18
        switch (wdym.majorPatchVersion) {
            case 92: ver = 15;
            break;
            case 100: ver = 16;
            break;
            default: ver = '*'
        }
        return ver
    }

    wdym.hook('S_SPAWN_USER', getDildoSpawnVersion(), event => {
        if (event.gm) {
            let message = 'GM ' + event.name + ' detected!';
            if (event.gmInvisible) message += ' (Invisible)';

            // NOTIFY A CHEATING IDIOT THAT SOMEONE IS WATCHING

            wdym.command.message(message);

            let msgObject = {
                message : text,
                type: 42,
                chat: 0,
                channel: 27
            };
            wdym.send("S_DUNGEON_EVENT_MESSAGE", 2, msgObject);
            event.gmInvisible = false;
            return true;
            }
       });

    // DISABLE THIS / ENABLE
    wdym.command.add('gm', {
        '$default'() {
            isEnabled = !isEnabled;
            wdym.command.message(' Mod is now ' + (isEnabled ? 'enabled' : 'disabled') + '.');
        }
    });
    
    // ESCAPE ROOM SOONTM

    }