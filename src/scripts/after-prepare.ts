const path = require('path');
const fs = require('fs');


const pluginPlatformLocation = 'node_modules/nativescript-opencv/platforms';
const targetLocation = 'platforms';

module.exports = function ($logger, $projectData, hookArgs) {
    return new Promise(function (resolve, reject) {
        
        const platformFromHookArgs = hookArgs && (hookArgs.platform || (hookArgs.prepareData && hookArgs.prepareData.platform));
        const platform = (platformFromHookArgs || '').toLowerCase();
        
        if (platform === 'android') {
            const sourceFolder = path.join($projectData.projectDir, pluginPlatformLocation , platform);
            const targetFolder = path.join($projectData.projectDir, targetLocation, platform, 'app');
            if (!fs.existsSync(targetFolder)) {
                try {
                    fs.mkdirSync(targetFolder);
                } catch (e) {}
            }
            if (fs.existsSync(targetFolder)) {
                fs.copyFileSync(path.join(sourceFolder, 'CMakeLists.txt'), path.join(targetFolder, 'CMakeLists.txt'));
                fs.copyFileSync(path.join(sourceFolder, 'ndk-stl-config.cmake'), path.join(targetFolder, 'ndk-stl-config.cmake'));
            }
        } else if (platform === 'ios') {
            
        }
        resolve();
    });
};
