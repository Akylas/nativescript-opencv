require('globals');
import * as cv from 'nativescript-opencv';
import { Color, isIOS } from 'tns-core-modules/ui/page/page';

function pointerTo(type, value) {
    const outerPtr = interop.alloc(interop.sizeof(interop.Pointer));
    const outerRef = new interop.Reference(type, outerPtr);
    outerRef.value = value;
    return outerPtr;
}

function valueFromPointerNumber(type, value) {
    const ptr = new interop.Pointer(value);
    const ptrToPtr = pointerTo(interop.Pointer, ptr);
    const ref = new interop.Reference(type, ptrToPtr);

    return ref.value;
}

(global as any).onmessage = function(msg) {
    if (isIOS) {
        const dict = valueFromPointerNumber(NSDictionary, msg.data.value.dictionaryPtr) as NSDictionary<string, any>;
        const data = dict.objectForKey('data');
        console.log('worker onmessage');
        // decrease reference count
        // data.release();
        (dict as any).release();
        // sendMessageBack(data);
    }
};

function sendMessageBack(data) {
    if (isIOS) {
        const nativeDict = NSDictionary.dictionaryWithObjectForKey(data, 'data');
        const message = {
            value: { dictionaryPtr: interop.handleof(nativeDict).toNumber() }
        };
        // increase reference count to account for `dictionaryPtr`
        (nativeDict as any).retain();
        (global as any).postMessage(message);
    }
}
