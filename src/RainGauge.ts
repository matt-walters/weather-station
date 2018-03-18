import gpio = require("rpi-gpio");

class RainGauge {

    public static main(): void {

        const pinNumber = 7;
        const bucketSizeMillimetres = 0.2794;
        
        let bucketTipCount = 0;

        gpio.on('change', function (channel, value) {
            bucketTipCount++;
            let rainVolumeMillimetres = bucketTipCount * bucketSizeMillimetres;
            console.log('rainVolume: [' + rainVolumeMillimetres.toFixed(4) + '] mm');
        });

        gpio.setup(pinNumber, gpio.DIR_IN, gpio.EDGE_FALLING);
    }
}

RainGauge.main();