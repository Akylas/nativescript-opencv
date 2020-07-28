
// declare namespace com {
//     export namespace nativescript {
//         export namespace opencv {
//             export class CvCameraPreview {
//                 public static class: java.lang.Class<com.nativescript.opencv.CvCameraPreview>;
//                 public static CAMERA_BACK: number;
//                 public static CAMERA_FRONT: number;
//                 public static SCALE_FIT: number;
//                 public static SCALE_FULL: number;
//                 public enabled: boolean;
//                 public cameraFrame: native.Array<org.bytedeco.javacv.Frame>;
//                 public getCameraId(): number;
// 				public releaseCamera(): void;
				
//                 connectCamera();
//                 disconnectCamera();
//                 isCameraConnected():boolean;
//                 public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
//                 public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
//                 public onMeasure(param0: number, param1: number): void;
//                 public setCvCameraViewListener(param0: com.nativescript.opencv.CvCameraPreview.CvCameraViewListener): void;
//                 public deliverAndDrawFrame(param0: org.bytedeco.javacv.Frame): void;
//                 public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
//                 public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
//                 public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
//                 public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
//             }
//             export namespace CvCameraPreview {
//                 export class CameraWorker {
//                     public static class: java.lang.Class<com.nativescript.opencv.CvCameraPreview.CameraWorker>;
//                     public run(): void;
//                 }
//                 export class CvCameraViewListener {
//                     public static class: java.lang.Class<com.nativescript.opencv.CvCameraPreview.CvCameraViewListener>;
//                     /**
//                      * Constructs a new instance of the org.nativescript.demovueopencv.CvCameraPreview$CvCameraViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
//                      */
//                     public constructor(implementation: {
//                         onCameraViewStarted(param0: number, param1: number): void;
//                         onCameraViewStopped(): void;
//                         onCameraFrame(param0: org.bytedeco.javacpp.opencv_core.Mat): org.bytedeco.javacpp.opencv_core.Mat;
//                     });
//                     public constructor();
//                     public onCameraViewStopped(): void;
//                     public onCameraViewStarted(param0: number, param1: number): void;
//                     public onCameraFrame(param0: org.bytedeco.javacpp.opencv_core.Mat): org.bytedeco.javacpp.opencv_core.Mat;
//                 }
//             }
//         }
//     }
// }
