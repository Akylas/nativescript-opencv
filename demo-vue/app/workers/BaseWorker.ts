
export type WorkerEventType = 'image' | 'contours';


export type WorkerPostOptions = {
    
}

export type WorkerPostEvent =
    | {
          type: string;
      } & WorkerPostOptions
    | { type: 'terminate' };

export type WorkerResult = {
};

export interface IWorker extends BaseWorker {
    onmessage: Function;
    postMessage(event: WorkerPostEvent);
}

export default abstract class BaseWorker {
    onmessage: Function
    abstract processImage(
        image, data
    );

    log(...args) {
        console.log(`[${this.constructor.name}]`, ...args);
    }
    stop() {
        this.log('stop');
    }
}
