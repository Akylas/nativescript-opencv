/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
declare namespace org {
    export namespace opencv {
        export class BuildConfig extends java.lang.Object {
            public static class: java.lang.Class<BuildConfig>;
            public static DEBUG: boolean;
            public static APPLICATION_ID: string;
            public static BUILD_TYPE: string;
            public static FLAVOR: string;
            public static VERSION_CODE: number;
            public static VERSION_NAME: string;
            public constructor();
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class AsyncServiceHelper extends java.lang.Object {
                public static class: java.lang.Class<AsyncServiceHelper>;
                public static TAG: string;
                public static MINIMUM_ENGINE_VERSION: number;
                public mEngineService: engine.OpenCVEngineInterface;
                public mUserAppCallback: LoaderCallbackInterface;
                public mOpenCVersion: string;
                public mAppContext: globalAndroid.content.Context;
                public static mServiceInstallationProgress: boolean;
                public static mLibraryInstallationProgress: boolean;
                public static OPEN_CV_SERVICE_URL: string;
                public mServiceConnection: globalAndroid.content.ServiceConnection;
                public static InstallService(param0: globalAndroid.content.Context, param1: LoaderCallbackInterface): void;
                public static InstallServiceQuiet(param0: globalAndroid.content.Context): boolean;
                public static initOpenCV(param0: string, param1: globalAndroid.content.Context, param2: LoaderCallbackInterface): boolean;
                public constructor(param0: string, param1: globalAndroid.content.Context, param2: LoaderCallbackInterface);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export abstract class BaseLoaderCallback extends java.lang.Object implements LoaderCallbackInterface {
                public static class: java.lang.Class<BaseLoaderCallback>;
                public mAppContext: globalAndroid.content.Context;
                public constructor(param0: globalAndroid.content.Context);
                public onPackageInstall(param0: number, param1: InstallCallbackInterface): void;
                public onManagerConnected(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class Camera2Renderer extends CameraGLRendererBase {
                public static class: java.lang.Class<Camera2Renderer>;
                public LOGTAG: string;
                public setCameraPreviewSize(param0: number, param1: number): void;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public doStart(): void;
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public openCamera(param0: number): void;
                public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public doStop(): void;
                public closeCamera(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class CameraActivity extends globalAndroid.app.Activity {
                public static class: java.lang.Class<CameraActivity>;
                public getCameraViewList(): java.util.List<any>;
                public onMenuItemSelected(param0: number, param1: globalAndroid.view.MenuItem): boolean;
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onCreatePanelMenu(param0: number, param1: globalAndroid.view.Menu): boolean;
                public onCreateView(param0: globalAndroid.view.View, param1: string, param2: globalAndroid.content.Context, param3: globalAndroid.util.AttributeSet): globalAndroid.view.View;
                public dispatchTrackballEvent(param0: globalAndroid.view.MotionEvent): boolean;
                public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback, param1: number): globalAndroid.view.ActionMode;
                public dispatchKeyEvent(param0: globalAndroid.view.KeyEvent): boolean;
                public onActionModeFinished(param0: globalAndroid.view.ActionMode): void;
                public constructor();
                public dispatchGenericMotionEvent(param0: globalAndroid.view.MotionEvent): boolean;
                public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
                public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public onMenuOpened(param0: number, param1: globalAndroid.view.Menu): boolean;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: number);
                public onWindowStartingActionMode(param0: globalAndroid.view.ActionMode.Callback): globalAndroid.view.ActionMode;
                public onTrimMemory(param0: number): void;
                public onPreparePanel(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.Menu): boolean;
                public onActionModeStarted(param0: globalAndroid.view.ActionMode): void;
                public onPointerCaptureChanged(param0: boolean): void;
                public onSearchRequested(param0: any): boolean;
                public dispatchKeyShortcutEvent(param0: globalAndroid.view.KeyEvent): boolean;
                public dispatchPopulateAccessibilityEvent(param0: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
                public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: globalAndroid.view.Menu, param2: number): void;
                public dispatchTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources.Theme);
                public onCameraPermissionGranted(): void;
                public onCreateContextMenu(param0: globalAndroid.view.ContextMenu, param1: globalAndroid.view.View, param2: globalAndroid.view.ContextMenu.ContextMenuInfo): void;
                public onContentChanged(): void;
                public onCreatePanelView(param0: number): globalAndroid.view.View;
                public onStart(): void;
                public onPanelClosed(param0: number, param1: globalAndroid.view.Menu): void;
                public onDetachedFromWindow(): void;
                public onSearchRequested(): boolean;
                public onWindowFocusChanged(param0: boolean): void;
                public onAttachedToWindow(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export abstract class CameraBridgeViewBase extends globalAndroid.view.SurfaceView implements globalAndroid.view.SurfaceHolder.Callback {
                public static class: java.lang.Class<CameraBridgeViewBase>;
                public static MAX_UNSPECIFIED: number;
                public mFrameWidth: number;
                public mFrameHeight: number;
                public mMaxHeight: number;
                public mMaxWidth: number;
                public mScale: number;
                public mPreviewFormat: number;
                public mCameraIndex: number;
                public mEnabled: boolean;
                public mCameraPermissionGranted: boolean;
                public mFpsMeter: FpsMeter;
                public static CAMERA_ID_ANY: number;
                public static CAMERA_ID_BACK: number;
                public static CAMERA_ID_FRONT: number;
                public static RGBA: number;
                public static GRAY: number;
                public enableView(): void;
                public setCvCameraViewListener(param0: CameraBridgeViewBase.CvCameraViewListener): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
                public disableView(): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public disconnectCamera(): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: number);
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public setCameraIndex(param0: number): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public setMaxFrameSize(param0: number, param1: number): void;
                public AllocateCache(): void;
                public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public connectCamera(param0: number, param1: number): boolean;
                public setCameraPermissionGranted(): void;
                public enableFpsMeter(): void;
                public setCvCameraViewListener(param0: CameraBridgeViewBase.CvCameraViewListener2): void;
                public SetCaptureFormat(param0: number): void;
                public disableFpsMeter(): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public deliverAndDrawFrame(param0: CameraBridgeViewBase.CvCameraViewFrame): void;
                public calculateCameraFrameSize(param0: java.util.List<any>, param1: CameraBridgeViewBase.ListItemAccessor, param2: number, param3: number): core.Size;
                public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
            }
            export namespace CameraBridgeViewBase {
                export class CvCameraViewFrame extends java.lang.Object {
                    public static class: java.lang.Class<CvCameraViewFrame>;
                    /**
                     * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewFrame interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        rgba(): core.Mat;
                        gray(): core.Mat;
                    });
                    public constructor();
                    public rgba(): core.Mat;
                    public gray(): core.Mat;
                }
                export class CvCameraViewListener extends java.lang.Object {
                    public static class: java.lang.Class<CvCameraViewListener>;
                    /**
                     * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onCameraViewStarted(param0: number, param1: number): void;
                        onCameraViewStopped(): void;
                        onCameraFrame(param0: core.Mat): core.Mat;
                    });
                    public constructor();
                    public onCameraViewStopped(): void;
                    public onCameraViewStarted(param0: number, param1: number): void;
                    public onCameraFrame(param0: core.Mat): core.Mat;
                }
                export class CvCameraViewListener2 extends java.lang.Object {
                    public static class: java.lang.Class<CvCameraViewListener2>;
                    /**
                     * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$CvCameraViewListener2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onCameraViewStarted(param0: number, param1: number): void;
                        onCameraViewStopped(): void;
                        onCameraFrame(param0: CvCameraViewFrame): core.Mat;
                    });
                    public constructor();
                    public onCameraFrame(param0: CvCameraViewFrame): core.Mat;
                    public onCameraViewStopped(): void;
                    public onCameraViewStarted(param0: number, param1: number): void;
                }
                export class CvCameraViewListenerAdapter extends java.lang.Object implements CvCameraViewListener2 {
                    public static class: java.lang.Class<CvCameraViewListenerAdapter>;
                    public onCameraFrame(param0: CvCameraViewFrame): core.Mat;
                    public onCameraViewStopped(): void;
                    public constructor(param0: CameraBridgeViewBase, param1: CvCameraViewListener);
                    public onCameraViewStarted(param0: number, param1: number): void;
                    public setFrameFormat(param0: number): void;
                }
                export class ListItemAccessor extends java.lang.Object {
                    public static class: java.lang.Class<ListItemAccessor>;
                    /**
                     * Constructs a new instance of the org.opencv.android.CameraBridgeViewBase$ListItemAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        getWidth(param0: any): number;
                        getHeight(param0: any): number;
                    });
                    public constructor();
                    public getWidth(param0: any): number;
                    public getHeight(param0: any): number;
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export abstract class CameraGLRendererBase extends java.lang.Object implements globalAndroid.opengl.GLSurfaceView.Renderer, globalAndroid.graphics.SurfaceTexture.OnFrameAvailableListener {
                public static class: java.lang.Class<CameraGLRendererBase>;
                public LOGTAG: string;
                public mCameraWidth: number;
                public mCameraHeight: number;
                public mFBOWidth: number;
                public mFBOHeight: number;
                public mMaxCameraWidth: number;
                public mMaxCameraHeight: number;
                public mCameraIndex: number;
                public mSTexture: globalAndroid.graphics.SurfaceTexture;
                public mHaveSurface: boolean;
                public mHaveFBO: boolean;
                public mUpdateST: boolean;
                public mEnabled: boolean;
                public mIsStarted: boolean;
                public mView: CameraGLSurfaceView;
                public enableView(): void;
                public onResume(): void;
                public setPreviewSize(param0: number, param1: number): void;
                public setCameraPreviewSize(param0: number, param1: number): void;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public onPause(): void;
                public openCamera(param0: number): void;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public disableView(): void;
                public closeCamera(): void;
                public setMaxCameraPreviewSize(param0: number, param1: number): void;
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public doStart(): void;
                public constructor(param0: CameraGLSurfaceView);
                public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
                public updateState(): void;
                public setCameraIndex(param0: number): void;
                public doStop(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class CameraGLSurfaceView extends globalAndroid.opengl.GLSurfaceView {
                public static class: java.lang.Class<CameraGLSurfaceView>;
                public enableView(): void;
                public surfaceRedrawNeededAsync(param0: globalAndroid.view.SurfaceHolder, param1: java.lang.Runnable): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onPause(): void;
                public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
                public disableView(): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public setCameraIndex(param0: number): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                /** @deprecated */
                public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
                public setCameraTextureListener(param0: CameraGLSurfaceView.CameraTextureListener): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public onResume(): void;
                public setMaxCameraPreviewSize(param0: number, param1: number): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public surfaceRedrawNeeded(param0: globalAndroid.view.SurfaceHolder): void;
                public getCameraTextureListener(): CameraGLSurfaceView.CameraTextureListener;
                public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
            }
            export namespace CameraGLSurfaceView {
                export class CameraTextureListener extends java.lang.Object {
                    public static class: java.lang.Class<CameraTextureListener>;
                    /**
                     * Constructs a new instance of the org.opencv.android.CameraGLSurfaceView$CameraTextureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        onCameraViewStarted(param0: number, param1: number): void;
                        onCameraViewStopped(): void;
                        onCameraTexture(param0: number, param1: number, param2: number, param3: number): boolean;
                    });
                    public constructor();
                    public onCameraViewStopped(): void;
                    public onCameraViewStarted(param0: number, param1: number): void;
                    public onCameraTexture(param0: number, param1: number, param2: number, param3: number): boolean;
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class CameraRenderer extends CameraGLRendererBase {
                public static class: java.lang.Class<CameraRenderer>;
                public static LOGTAG: string;
                public setCameraPreviewSize(param0: number, param1: number): void;
                public onSurfaceChanged(param0: javax.microedition.khronos.opengles.GL10, param1: number, param2: number): void;
                public onSurfaceCreated(param0: javax.microedition.khronos.opengles.GL10, param1: javax.microedition.khronos.egl.EGLConfig): void;
                public openCamera(param0: number): void;
                public onFrameAvailable(param0: globalAndroid.graphics.SurfaceTexture): void;
                public onDrawFrame(param0: javax.microedition.khronos.opengles.GL10): void;
                public closeCamera(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class FpsMeter extends java.lang.Object {
                public static class: java.lang.Class<FpsMeter>;
                public measure(): void;
                public draw(param0: globalAndroid.graphics.Canvas, param1: number, param2: number): void;
                public setResolution(param0: number, param1: number): void;
                public constructor();
                public init(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class InstallCallbackInterface extends java.lang.Object {
                public static class: java.lang.Class<InstallCallbackInterface>;
                /**
                 * Constructs a new instance of the org.opencv.android.InstallCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getPackageName(): string;
                    install(): void;
                    cancel(): void;
                    wait_install(): void;
                });
                public constructor();
                public static NEW_INSTALLATION: number;
                public static INSTALLATION_PROGRESS: number;
                public wait_install(): void;
                public install(): void;
                public getPackageName(): string;
                public cancel(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class JavaCamera2View extends CameraBridgeViewBase {
                public static class: java.lang.Class<JavaCamera2View>;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public connectCamera(param0: number, param1: number): boolean;
                public initializeCamera(): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public disconnectCamera(): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: number);
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
                public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
            }
            export namespace JavaCamera2View {
                export class JavaCamera2Frame extends java.lang.Object implements CameraBridgeViewBase.CvCameraViewFrame {
                    public static class: java.lang.Class<JavaCamera2Frame>;
                    public constructor(param0: JavaCamera2View, param1: globalAndroid.media.Image);
                    public rgba(): core.Mat;
                    public gray(): core.Mat;
                    public release(): void;
                }
                export class JavaCameraSizeAccessor extends java.lang.Object implements CameraBridgeViewBase.ListItemAccessor {
                    public static class: java.lang.Class<JavaCameraSizeAccessor>;
                    public constructor();
                    public getWidth(param0: any): number;
                    public getHeight(param0: any): number;
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class JavaCameraView extends CameraBridgeViewBase implements globalAndroid.hardware.Camera.PreviewCallback {
                public static class: java.lang.Class<JavaCameraView>;
                public mCamera: globalAndroid.hardware.Camera;
                public mCameraFrame: native.Array<JavaCameraView.JavaCameraFrame>;
                public initializeCamera(param0: number, param1: number): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                public connectCamera(param0: number, param1: number): boolean;
                public onPreviewFrame(param0: native.Array<number>, param1: globalAndroid.hardware.Camera): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public surfaceDestroyed(param0: globalAndroid.view.SurfaceHolder): void;
                public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
                public releaseCamera(): void;
                public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public sendAccessibilityEvent(param0: number): void;
                public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public sendAccessibilityEventUnchecked(param0: globalAndroid.view.accessibility.AccessibilityEvent): void;
                public onKeyLongPress(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context);
                public disconnectCamera(): void;
                public onKeyMultiple(param0: number, param1: number, param2: globalAndroid.view.KeyEvent): boolean;
                public constructor(param0: globalAndroid.content.Context, param1: number);
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
                public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
                public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
                public surfaceChanged(param0: globalAndroid.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
                public surfaceCreated(param0: globalAndroid.view.SurfaceHolder): void;
            }
            export namespace JavaCameraView {
                export class CameraWorker extends java.lang.Object implements java.lang.Runnable {
                    public static class: java.lang.Class<CameraWorker>;
                    public run(): void;
                }
                export class JavaCameraFrame extends java.lang.Object implements CameraBridgeViewBase.CvCameraViewFrame {
                    public static class: java.lang.Class<JavaCameraFrame>;
                    public rgba(): core.Mat;
                    public gray(): core.Mat;
                    public release(): void;
                    public constructor(param0: JavaCameraView, param1: core.Mat, param2: number, param3: number);
                }
                export class JavaCameraSizeAccessor extends java.lang.Object implements CameraBridgeViewBase.ListItemAccessor {
                    public static class: java.lang.Class<JavaCameraSizeAccessor>;
                    public constructor();
                    public getWidth(param0: any): number;
                    public getHeight(param0: any): number;
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class LoaderCallbackInterface extends java.lang.Object {
                public static class: java.lang.Class<LoaderCallbackInterface>;
                /**
                 * Constructs a new instance of the org.opencv.android.LoaderCallbackInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    onManagerConnected(param0: number): void;
                    onPackageInstall(param0: number, param1: InstallCallbackInterface): void;
                });
                public constructor();
                public static MARKET_ERROR: number;
                public static INCOMPATIBLE_MANAGER_VERSION: number;
                public static INIT_FAILED: number;
                public static SUCCESS: number;
                public static INSTALL_CANCELED: number;
                public onPackageInstall(param0: number, param1: InstallCallbackInterface): void;
                public onManagerConnected(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class OpenCVLoader extends java.lang.Object {
                public static class: java.lang.Class<OpenCVLoader>;
                public static OPENCV_VERSION_2_4_2: string;
                public static OPENCV_VERSION_2_4_3: string;
                public static OPENCV_VERSION_2_4_4: string;
                public static OPENCV_VERSION_2_4_5: string;
                public static OPENCV_VERSION_2_4_6: string;
                public static OPENCV_VERSION_2_4_7: string;
                public static OPENCV_VERSION_2_4_8: string;
                public static OPENCV_VERSION_2_4_9: string;
                public static OPENCV_VERSION_2_4_10: string;
                public static OPENCV_VERSION_2_4_11: string;
                public static OPENCV_VERSION_2_4_12: string;
                public static OPENCV_VERSION_2_4_13: string;
                public static OPENCV_VERSION_3_0_0: string;
                public static OPENCV_VERSION_3_1_0: string;
                public static OPENCV_VERSION_3_2_0: string;
                public static OPENCV_VERSION_3_3_0: string;
                public static OPENCV_VERSION_3_4_0: string;
                public static OPENCV_VERSION: string;
                public static initDebug(): boolean;
                public static initDebug(param0: boolean): boolean;
                public static initAsync(param0: string, param1: globalAndroid.content.Context, param2: LoaderCallbackInterface): boolean;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class StaticHelper extends java.lang.Object {
                public static class: java.lang.Class<StaticHelper>;
                public static initOpenCV(param0: boolean): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace android {
            export class Utils extends java.lang.Object {
                public static class: java.lang.Class<Utils>;
                public static loadResource(param0: globalAndroid.content.Context, param1: number, param2: number): core.Mat;
                public static bitmapToMat(param0: globalAndroid.graphics.Bitmap, param1: core.Mat, param2: boolean): void;
                public static bitmapToMat(param0: globalAndroid.graphics.Bitmap, param1: core.Mat): void;
                public static exportResource(param0: globalAndroid.content.Context, param1: number, param2: string): string;
                public static matToBitmap(param0: core.Mat, param1: globalAndroid.graphics.Bitmap, param2: boolean): void;
                public static exportResource(param0: globalAndroid.content.Context, param1: number): string;
                public constructor();
                public static loadResource(param0: globalAndroid.content.Context, param1: number): core.Mat;
                public static matToBitmap(param0: core.Mat, param1: globalAndroid.graphics.Bitmap): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace calib3d {
            export class Calib3d extends java.lang.Object {
                public static class: java.lang.Class<Calib3d>;
                public static CV_ITERATIVE: number;
                public static CV_EPNP: number;
                public static CV_P3P: number;
                public static CV_DLS: number;
                public static CvLevMarq_DONE: number;
                public static CvLevMarq_STARTED: number;
                public static CvLevMarq_CALC_J: number;
                public static CvLevMarq_CHECK_ERR: number;
                public static LMEDS: number;
                public static RANSAC: number;
                public static RHO: number;
                public static CALIB_CB_ADAPTIVE_THRESH: number;
                public static CALIB_CB_NORMALIZE_IMAGE: number;
                public static CALIB_CB_FILTER_QUADS: number;
                public static CALIB_CB_FAST_CHECK: number;
                public static CALIB_CB_EXHAUSTIVE: number;
                public static CALIB_CB_ACCURACY: number;
                public static CALIB_CB_LARGER: number;
                public static CALIB_CB_MARKER: number;
                public static CALIB_CB_SYMMETRIC_GRID: number;
                public static CALIB_CB_ASYMMETRIC_GRID: number;
                public static CALIB_CB_CLUSTERING: number;
                public static CALIB_NINTRINSIC: number;
                public static CALIB_USE_INTRINSIC_GUESS: number;
                public static CALIB_FIX_ASPECT_RATIO: number;
                public static CALIB_FIX_PRINCIPAL_POINT: number;
                public static CALIB_ZERO_TANGENT_DIST: number;
                public static CALIB_FIX_FOCAL_LENGTH: number;
                public static CALIB_FIX_K1: number;
                public static CALIB_FIX_K2: number;
                public static CALIB_FIX_K3: number;
                public static CALIB_FIX_K4: number;
                public static CALIB_FIX_K5: number;
                public static CALIB_FIX_K6: number;
                public static CALIB_RATIONAL_MODEL: number;
                public static CALIB_THIN_PRISM_MODEL: number;
                public static CALIB_FIX_S1_S2_S3_S4: number;
                public static CALIB_TILTED_MODEL: number;
                public static CALIB_FIX_TAUX_TAUY: number;
                public static CALIB_USE_QR: number;
                public static CALIB_FIX_TANGENT_DIST: number;
                public static CALIB_FIX_INTRINSIC: number;
                public static CALIB_SAME_FOCAL_LENGTH: number;
                public static CALIB_ZERO_DISPARITY: number;
                public static CALIB_USE_LU: number;
                public static CALIB_USE_EXTRINSIC_GUESS: number;
                public static FM_7POINT: number;
                public static FM_8POINT: number;
                public static FM_LMEDS: number;
                public static FM_RANSAC: number;
                public static fisheye_CALIB_USE_INTRINSIC_GUESS: number;
                public static fisheye_CALIB_RECOMPUTE_EXTRINSIC: number;
                public static fisheye_CALIB_CHECK_COND: number;
                public static fisheye_CALIB_FIX_SKEW: number;
                public static fisheye_CALIB_FIX_K1: number;
                public static fisheye_CALIB_FIX_K2: number;
                public static fisheye_CALIB_FIX_K3: number;
                public static fisheye_CALIB_FIX_K4: number;
                public static fisheye_CALIB_FIX_INTRINSIC: number;
                public static fisheye_CALIB_FIX_PRINCIPAL_POINT: number;
                public static PROJ_SPHERICAL_ORTHO: number;
                public static PROJ_SPHERICAL_EQRECT: number;
                public static SOLVEPNP_ITERATIVE: number;
                public static SOLVEPNP_EPNP: number;
                public static SOLVEPNP_P3P: number;
                public static SOLVEPNP_DLS: number;
                public static SOLVEPNP_UPNP: number;
                public static SOLVEPNP_AP3P: number;
                public static SOLVEPNP_IPPE: number;
                public static SOLVEPNP_IPPE_SQUARE: number;
                public static SOLVEPNP_MAX_COUNT: number;
                public static CALIB_HAND_EYE_TSAI: number;
                public static CALIB_HAND_EYE_PARK: number;
                public static CALIB_HAND_EYE_HORAUD: number;
                public static CALIB_HAND_EYE_ANDREFF: number;
                public static CALIB_HAND_EYE_DANIILIDIS: number;
                public static CirclesGridFinderParameters_SYMMETRIC_GRID: number;
                public static CirclesGridFinderParameters_ASYMMETRIC_GRID: number;
                public static RQDecomp3x3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): native.Array<number>;
                public static validateDisparity(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static calibrateCameraROExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: number): number;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: boolean, param7: number): number;
                public static fisheye_projectPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: number): void;
                public static estimateChessboardSharpness(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number, param4: boolean, param5: core.Mat): core.Scalar;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number): core.Mat;
                public static findChessboardCorners(param0: core.Mat, param1: core.Size, param2: core.MatOfPoint2f, param3: number): boolean;
                public static fisheye_undistortImage(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static fisheye_undistortImage(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Size): void;
                public static stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat): number;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: number, param6: core.Point, param7: core.Mat): number;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number, param8: number, param9: number): boolean;
                public static triangulatePoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat): core.Mat;
                public static drawFrameAxes(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: number): void;
                public static findCirclesGrid(param0: core.Mat, param1: core.Size, param2: core.Mat): boolean;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Point): core.Mat;
                public static decomposeProjectionMatrix(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static initUndistortRectifyMap(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: number, param6: core.Mat, param7: core.Mat): void;
                public static getOptimalNewCameraMatrix(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: core.Size, param5: core.Rect): core.Mat;
                public static filterSpeckles(param0: core.Mat, param1: number, param2: number, param3: number): void;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: number, param7: core.Mat, param8: core.Mat): number;
                public static convertPointsFromHomogeneous(param0: core.Mat, param1: core.Mat): void;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): core.Mat;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean): boolean;
                public static computeCorrespondEpilines(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat): void;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: number): void;
                public static calibrateCameraROExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: number, param14: core.TermCriteria): number;
                public static validateDisparity(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static calibrateCameraRO(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat, param9: number): number;
                public static stereoRectifyUncalibrated(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: core.Mat, param5: core.Mat, param6: number): boolean;
                public static calibrateCameraExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: number): number;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: core.Mat): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Point, param4: number): core.Mat;
                public static estimateAffine3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number): number;
                public static solvePnPRefineLM(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.TermCriteria): void;
                public static filterHomographyDecompByVisibleRefpoints(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number): core.Mat;
                public static findChessboardCornersSBWithMeta(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number, param4: core.Mat): boolean;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: number, param14: core.Size, param15: core.Rect, param16: core.Rect): void;
                public static stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number): number;
                public static calibrateCameraRO(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat): number;
                public static stereoRectifyUncalibrated(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: core.Mat, param5: core.Mat): boolean;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat): core.Mat;
                public static estimateChessboardSharpness(param0: core.Mat, param1: core.Size, param2: core.Mat): core.Scalar;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>): number;
                public static filterSpeckles(param0: core.Mat, param1: number, param2: number, param3: number, param4: core.Mat): void;
                public static getOptimalNewCameraMatrix(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number): core.Mat;
                public static findChessboardCornersSB(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number): boolean;
                public static fisheye_stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: core.Size, param14: number, param15: number): void;
                public static reprojectImageTo3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: boolean): void;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f): core.Mat;
                public static estimateChessboardSharpness(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number, param4: boolean): core.Scalar;
                public static estimateAffine3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): number;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): core.Mat;
                public static calibrateCameraExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: core.Mat, param8: core.Mat, param9: core.Mat): number;
                public static calibrateHandEye(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: java.util.List<core.Mat>, param4: core.Mat, param5: core.Mat, param6: number): void;
                public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: number, param6: core.Size, param7: number): void;
                public static decomposeProjectionMatrix(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static fisheye_undistortImage(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static calibrateCamera(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: number, param8: core.TermCriteria): number;
                public static decomposeHomographyMat(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.Mat>, param3: java.util.List<core.Mat>, param4: java.util.List<core.Mat>): number;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: number): core.Mat;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number): core.Mat;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat): void;
                public static solveP3P(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: number): number;
                public static fisheye_stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number): void;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number): core.Mat;
                public static estimateTranslation3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): number;
                public static calibrateCameraROExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat): number;
                public static stereoCalibrateExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: number): number;
                public static Rodrigues(param0: core.Mat, param1: core.Mat): void;
                public static estimateTranslation3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number): number;
                public static solvePnPRefineVVS(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Point, param4: number, param5: number, param6: number): core.Mat;
                public static undistortPoints(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static estimateTranslation3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): number;
                public static RQDecomp3x3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): native.Array<number>;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: number, param5: number): core.Mat;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: number): number;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat): core.Mat;
                public static calibrationMatrixValues(param0: core.Mat, param1: core.Size, param2: number, param3: number, param4: native.Array<number>, param5: native.Array<number>, param6: native.Array<number>, param7: core.Point, param8: native.Array<number>): void;
                public static decomposeProjectionMatrix(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat): void;
                public static fisheye_undistortPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: boolean, param7: number, param8: core.Mat, param9: core.Mat, param10: core.Mat): number;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: number): core.Mat;
                public static getOptimalNewCameraMatrix(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: core.Size, param5: core.Rect, param6: boolean): core.Mat;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number): boolean;
                public static find4QuadCornerSubpix(param0: core.Mat, param1: core.Mat, param2: core.Size): boolean;
                public static projectPoints(param0: core.MatOfPoint3f, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.MatOfDouble, param5: core.MatOfPoint2f, param6: core.Mat, param7: number): void;
                public static decomposeProjectionMatrix(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: number, param7: core.Mat): number;
                public static decomposeEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static calibrateCamera(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: number): number;
                public static solvePnP(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat): boolean;
                public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: number, param6: core.Size): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Point, param4: number, param5: number): core.Mat;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number): core.Mat;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f): core.Mat;
                public static calibrateHandEye(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: java.util.List<core.Mat>, param4: core.Mat, param5: core.Mat): void;
                public static sampsonDistance(param0: core.Mat, param1: core.Mat, param2: core.Mat): number;
                public static getOptimalNewCameraMatrix(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: core.Size): core.Mat;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: core.Mat): core.Mat;
                public static decomposeProjectionMatrix(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat): void;
                public static calibrateCameraRO(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Mat, param9: number, param10: core.TermCriteria): number;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: number): number;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: number, param14: core.Size, param15: core.Rect): void;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): core.Mat;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: boolean, param7: number, param8: core.Mat, param9: core.Mat): number;
                public static fisheye_stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: number): number;
                public static fisheye_initUndistortRectifyMap(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: number, param6: core.Mat, param7: core.Mat): void;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat): number;
                public static projectPoints(param0: core.MatOfPoint3f, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.MatOfDouble, param5: core.MatOfPoint2f): void;
                public static findCirclesGrid(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number): boolean;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat): core.Mat;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): core.Mat;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number): core.Mat;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat): void;
                public static getDefaultNewCameraMatrix(param0: core.Mat, param1: core.Size): core.Mat;
                public static fisheye_stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat): number;
                public static fisheye_distortPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static fisheye_stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: number, param11: core.TermCriteria): number;
                public static rectify3Collinear(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: java.util.List<core.Mat>, param7: java.util.List<core.Mat>, param8: core.Size, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: core.Mat, param14: core.Mat, param15: core.Mat, param16: core.Mat, param17: core.Mat, param18: core.Mat, param19: core.Mat, param20: number, param21: core.Size, param22: core.Rect, param23: core.Rect, param24: number): number;
                public static fisheye_undistortPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: core.Mat, param5: number, param6: number): core.Mat;
                public static calibrateCamera(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>): number;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: number, param5: core.Mat): core.Mat;
                public static estimateAffine3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): number;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat): core.Mat;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat): void;
                public static RQDecomp3x3(param0: core.Mat, param1: core.Mat, param2: core.Mat): native.Array<number>;
                public static initCameraMatrix2D(param0: java.util.List<core.MatOfPoint3f>, param1: java.util.List<core.MatOfPoint2f>, param2: core.Size, param3: number): core.Mat;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Point, param4: number, param5: number, param6: number, param7: core.Mat): core.Mat;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: core.Mat): core.Mat;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: number): core.Mat;
                public static stereoCalibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: core.TermCriteria): number;
                public static fisheye_projectPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: number, param7: core.Mat): void;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number): void;
                public static solvePnPRefineVVS(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.TermCriteria): void;
                public static RQDecomp3x3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): native.Array<number>;
                public static correctMatches(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static initCameraMatrix2D(param0: java.util.List<core.MatOfPoint3f>, param1: java.util.List<core.MatOfPoint2f>, param2: core.Size): core.Mat;
                public static fisheye_calibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: number, param8: core.TermCriteria): number;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat): void;
                public static fisheye_stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: core.Size, param14: number): void;
                public static getDefaultNewCameraMatrix(param0: core.Mat): core.Mat;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat): void;
                public static solvePnPRefineLM(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static undistortPoints(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.Mat): void;
                public static drawFrameAxes(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: number, param6: number): void;
                public static stereoCalibrateExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat, param13: number, param14: core.TermCriteria): number;
                public static findFundamentalMat(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: number, param5: number, param6: core.Mat): core.Mat;
                public static reprojectImageTo3D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: boolean, param4: number): void;
                public static estimateChessboardSharpness(param0: core.Mat, param1: core.Size, param2: core.Mat, param3: number): core.Scalar;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat): void;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): core.Mat;
                public static reprojectImageTo3D(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: number, param6: core.Point): number;
                public constructor();
                public static findChessboardCorners(param0: core.Mat, param1: core.Size, param2: core.MatOfPoint2f): boolean;
                public static filterHomographyDecompByVisibleRefpoints(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): core.Mat;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): number;
                public static projectPoints(param0: core.MatOfPoint3f, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.MatOfDouble, param5: core.MatOfPoint2f, param6: core.Mat): void;
                public static recoverPose(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): number;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: number, param14: core.Size): void;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number, param8: number, param9: number, param10: core.Mat): boolean;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: boolean): number;
                public static undistort(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static composeRT(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat): void;
                public static fisheye_calibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: number): number;
                public static checkChessboard(param0: core.Mat, param1: core.Size): boolean;
                public static drawChessboardCorners(param0: core.Mat, param1: core.Size, param2: core.MatOfPoint2f, param3: boolean): void;
                public static undistort(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static undistortPoints(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static matMulDeriv(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static solvePnPGeneric(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: java.util.List<core.Mat>, param5: java.util.List<core.Mat>, param6: boolean, param7: number, param8: core.Mat): number;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): core.Mat;
                public static getValidDisparityROI(param0: core.Rect, param1: core.Rect, param2: number, param3: number, param4: number): core.Rect;
                public static fisheye_projectPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public static getDefaultNewCameraMatrix(param0: core.Mat, param1: core.Size, param2: boolean): core.Mat;
                public static convertPointsToHomogeneous(param0: core.Mat, param1: core.Mat): void;
                public static fisheye_calibrate(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>): number;
                public static solvePnPRefineVVS(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.TermCriteria, param7: number): void;
                public static estimateAffinePartial2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): core.Mat;
                public static findChessboardCornersSB(param0: core.Mat, param1: core.Size, param2: core.Mat): boolean;
                public static solvePnP(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number): boolean;
                public static fisheye_undistortPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number, param8: number, param9: number, param10: core.Mat, param11: number): boolean;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat): boolean;
                public static stereoCalibrateExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat, param7: core.Size, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: core.Mat): number;
                public static undistortPointsIter(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.TermCriteria): void;
                public static fisheye_stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: core.Size): void;
                public static findHomography(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: number, param4: core.Mat, param5: number): core.Mat;
                public static solvePnP(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean): boolean;
                public static fisheye_distortPoints(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): void;
                public static stereoRectify(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Size, param5: core.Mat, param6: core.Mat, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: core.Mat, param11: core.Mat, param12: number, param13: number): void;
                public static Rodrigues(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static solvePnPRansac(param0: core.MatOfPoint3f, param1: core.MatOfPoint2f, param2: core.Mat, param3: core.MatOfDouble, param4: core.Mat, param5: core.Mat, param6: boolean, param7: number, param8: number): boolean;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number): core.Mat;
                public static estimateAffine2D(param0: core.Mat, param1: core.Mat): core.Mat;
                public static fisheye_estimateNewCameraMatrixForUndistortRectify(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Mat, param4: core.Mat): void;
                public static findEssentialMat(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): core.Mat;
                public static calibrateCameraExtended(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Size, param3: core.Mat, param4: core.Mat, param5: java.util.List<core.Mat>, param6: java.util.List<core.Mat>, param7: core.Mat, param8: core.Mat, param9: core.Mat, param10: number, param11: core.TermCriteria): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace calib3d {
            export class StereoBM extends StereoMatcher {
                public static class: java.lang.Class<StereoBM>;
                public static PREFILTER_NORMALIZED_RESPONSE: number;
                public static PREFILTER_XSOBEL: number;
                public setSmallerBlockSize(param0: number): void;
                public setTextureThreshold(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getPreFilterCap(): number;
                public getTextureThreshold(): number;
                public setPreFilterCap(param0: number): void;
                public finalize(): void;
                public static create(): StereoBM;
                public setROI2(param0: core.Rect): void;
                public setPreFilterSize(param0: number): void;
                public static create(param0: number, param1: number): StereoBM;
                public setUniquenessRatio(param0: number): void;
                public getUniquenessRatio(): number;
                public getROI2(): core.Rect;
                public getSmallerBlockSize(): number;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): StereoMatcher;
                public static create(param0: number): StereoBM;
                public setPreFilterType(param0: number): void;
                public static __fromPtr__(param0: number): StereoBM;
                public getPreFilterType(): number;
                public setROI1(param0: core.Rect): void;
                public getROI1(): core.Rect;
                public getPreFilterSize(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace calib3d {
            export class StereoMatcher extends core.Algorithm {
                public static class: java.lang.Class<StereoMatcher>;
                public static DISP_SHIFT: number;
                public static DISP_SCALE: number;
                public setMinDisparity(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getSpeckleRange(): number;
                public getNumDisparities(): number;
                public getDisp12MaxDiff(): number;
                public finalize(): void;
                public compute(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public getBlockSize(): number;
                public setBlockSize(param0: number): void;
                public setDisp12MaxDiff(param0: number): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): StereoMatcher;
                public getSpeckleWindowSize(): number;
                public setNumDisparities(param0: number): void;
                public getMinDisparity(): number;
                public setSpeckleRange(param0: number): void;
                public setSpeckleWindowSize(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace calib3d {
            export class StereoSGBM extends StereoMatcher {
                public static class: java.lang.Class<StereoSGBM>;
                public static MODE_SGBM: number;
                public static MODE_HH: number;
                public static MODE_SGBM_3WAY: number;
                public static MODE_HH4: number;
                public getMode(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): StereoSGBM;
                public setPreFilterCap(param0: number): void;
                public finalize(): void;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): StereoSGBM;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): StereoSGBM;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): StereoSGBM;
                public getP1(): number;
                public static create(param0: number, param1: number): StereoSGBM;
                public getP2(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number): StereoSGBM;
                public setP2(param0: number): void;
                public static create(param0: number): StereoSGBM;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getPreFilterCap(): number;
                public static create(): StereoSGBM;
                public static create(param0: number, param1: number, param2: number, param3: number): StereoSGBM;
                public static create(param0: number, param1: number, param2: number): StereoSGBM;
                public setP1(param0: number): void;
                public setMode(param0: number): void;
                public setUniquenessRatio(param0: number): void;
                public getUniquenessRatio(): number;
                public static __fromPtr__(param0: number): StereoSGBM;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): StereoMatcher;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): StereoSGBM;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): StereoSGBM;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Algorithm extends java.lang.Object {
                public static class: java.lang.Class<Algorithm>;
                public nativeObj: number;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): Algorithm;
                public clear(): void;
                public finalize(): void;
                public constructor(param0: number);
                public getNativeObjAddr(): number;
                public save(param0: string): void;
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Core extends java.lang.Object {
                public static class: java.lang.Class<Core>;
                public static VERSION: string;
                public static NATIVE_LIBRARY_NAME: string;
                public static VERSION_MAJOR: number;
                public static VERSION_MINOR: number;
                public static VERSION_REVISION: number;
                public static VERSION_STATUS: string;
                public static DECOMP_LU: number;
                public static DECOMP_SVD: number;
                public static DECOMP_EIG: number;
                public static DECOMP_CHOLESKY: number;
                public static DECOMP_QR: number;
                public static DECOMP_NORMAL: number;
                public static BORDER_CONSTANT: number;
                public static BORDER_REPLICATE: number;
                public static BORDER_REFLECT: number;
                public static BORDER_WRAP: number;
                public static BORDER_REFLECT_101: number;
                public static BORDER_TRANSPARENT: number;
                public static BORDER_REFLECT101: number;
                public static BORDER_DEFAULT: number;
                public static BORDER_ISOLATED: number;
                public static GEMM_1_T: number;
                public static GEMM_2_T: number;
                public static GEMM_3_T: number;
                public static KMEANS_RANDOM_CENTERS: number;
                public static KMEANS_PP_CENTERS: number;
                public static KMEANS_USE_INITIAL_LABELS: number;
                public static CMP_EQ: number;
                public static CMP_GT: number;
                public static CMP_GE: number;
                public static CMP_LT: number;
                public static CMP_LE: number;
                public static CMP_NE: number;
                public static PCA_DATA_AS_ROW: number;
                public static PCA_DATA_AS_COL: number;
                public static PCA_USE_AVG: number;
                public static DFT_INVERSE: number;
                public static DFT_SCALE: number;
                public static DFT_ROWS: number;
                public static DFT_COMPLEX_OUTPUT: number;
                public static DFT_REAL_OUTPUT: number;
                public static DFT_COMPLEX_INPUT: number;
                public static DCT_INVERSE: number;
                public static DCT_ROWS: number;
                public static SVD_MODIFY_A: number;
                public static SVD_NO_UV: number;
                public static SVD_FULL_UV: number;
                public static FILLED: number;
                public static REDUCE_SUM: number;
                public static REDUCE_AVG: number;
                public static REDUCE_MAX: number;
                public static REDUCE_MIN: number;
                public static RNG_UNIFORM: number;
                public static RNG_NORMAL: number;
                public static COVAR_SCRAMBLED: number;
                public static COVAR_NORMAL: number;
                public static COVAR_USE_AVG: number;
                public static COVAR_SCALE: number;
                public static COVAR_ROWS: number;
                public static COVAR_COLS: number;
                public static SORT_EVERY_ROW: number;
                public static SORT_EVERY_COLUMN: number;
                public static SORT_ASCENDING: number;
                public static SORT_DESCENDING: number;
                public static Formatter_FMT_DEFAULT: number;
                public static Formatter_FMT_MATLAB: number;
                public static Formatter_FMT_CSV: number;
                public static Formatter_FMT_PYTHON: number;
                public static Formatter_FMT_NUMPY: number;
                public static Formatter_FMT_C: number;
                public static Param_INT: number;
                public static Param_BOOLEAN: number;
                public static Param_REAL: number;
                public static Param_STRING: number;
                public static Param_MAT: number;
                public static Param_MAT_VECTOR: number;
                public static Param_ALGORITHM: number;
                public static Param_FLOAT: number;
                public static Param_UNSIGNED_INT: number;
                public static Param_UINT64: number;
                public static Param_UCHAR: number;
                public static Param_SCALAR: number;
                public static NORM_INF: number;
                public static NORM_L1: number;
                public static NORM_L2: number;
                public static NORM_L2SQR: number;
                public static NORM_HAMMING: number;
                public static NORM_HAMMING2: number;
                public static NORM_TYPE_MASK: number;
                public static NORM_RELATIVE: number;
                public static NORM_MINMAX: number;
                public static ROTATE_90_CLOCKWISE: number;
                public static ROTATE_180: number;
                public static ROTATE_90_COUNTERCLOCKWISE: number;
                public static StsOk: number;
                public static StsBackTrace: number;
                public static StsError: number;
                public static StsInternal: number;
                public static StsNoMem: number;
                public static StsBadArg: number;
                public static StsBadFunc: number;
                public static StsNoConv: number;
                public static StsAutoTrace: number;
                public static HeaderIsNull: number;
                public static BadImageSize: number;
                public static BadOffset: number;
                public static BadDataPtr: number;
                public static BadStep: number;
                public static BadModelOrChSeq: number;
                public static BadNumChannels: number;
                public static BadNumChannel1U: number;
                public static BadDepth: number;
                public static BadAlphaChannel: number;
                public static BadOrder: number;
                public static BadOrigin: number;
                public static BadAlign: number;
                public static BadCallBack: number;
                public static BadTileSize: number;
                public static BadCOI: number;
                public static BadROISize: number;
                public static MaskIsTiled: number;
                public static StsNullPtr: number;
                public static StsVecLengthErr: number;
                public static StsFilterStructContentErr: number;
                public static StsKernelStructContentErr: number;
                public static StsFilterOffsetErr: number;
                public static StsBadSize: number;
                public static StsDivByZero: number;
                public static StsInplaceNotSupported: number;
                public static StsObjectNotFound: number;
                public static StsUnmatchedFormats: number;
                public static StsBadFlag: number;
                public static StsBadPoint: number;
                public static StsBadMask: number;
                public static StsUnmatchedSizes: number;
                public static StsUnsupportedFormat: number;
                public static StsOutOfRange: number;
                public static StsParseError: number;
                public static StsNotImplemented: number;
                public static StsBadMemBlock: number;
                public static StsAssert: number;
                public static GpuNotSupported: number;
                public static GpuApiCallError: number;
                public static OpenGlNotSupported: number;
                public static OpenGlApiCallError: number;
                public static OpenCLApiCallError: number;
                public static OpenCLDoubleNotSupported: number;
                public static OpenCLInitError: number;
                public static OpenCLNoAMDBlasFft: number;
                public static LUT(param0: Mat, param1: Mat, param2: Mat): void;
                public static solveCubic(param0: Mat, param1: Mat): number;
                public static SVDecomp(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: number): void;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat): void;
                public static rotate(param0: Mat, param1: Mat, param2: number): void;
                public static cartToPolar(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static subtract(param0: Mat, param1: Scalar, param2: Mat, param3: Mat, param4: number): void;
                public static getTickFrequency(): number;
                public static SVDecomp(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat, param5: number, param6: number, param7: Mat): void;
                public static borderInterpolate(param0: number, param1: number, param2: number): number;
                public static convertScaleAbs(param0: Mat, param1: Mat, param2: number, param3: number): void;
                public static sort(param0: Mat, param1: Mat, param2: number): void;
                public static bitwise_or(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static calcCovarMatrix(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: number): void;
                public static subtract(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static bitwise_xor(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static findFile(param0: string, param1: boolean): string;
                public static extractChannel(param0: Mat, param1: Mat, param2: number): void;
                public static mulTransposed(param0: Mat, param1: Mat, param2: boolean): void;
                public static dft(param0: Mat, param1: Mat): void;
                public static subtract(param0: Mat, param1: Scalar, param2: Mat, param3: Mat): void;
                public static gemm(param0: Mat, param1: Mat, param2: number, param3: Mat, param4: number, param5: Mat): void;
                public static setNumThreads(param0: number): void;
                public static getVersionRevision(): number;
                public static transpose(param0: Mat, param1: Mat): void;
                public static convertFp16(param0: Mat, param1: Mat): void;
                public static minMaxLoc(param0: Mat): Core.MinMaxLocResult;
                public static PSNR(param0: Mat, param1: Mat): number;
                public static idct(param0: Mat, param1: Mat, param2: number): void;
                public static PCABackProject(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static insertChannel(param0: Mat, param1: Mat, param2: number): void;
                public static compare(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
                public static dct(param0: Mat, param1: Mat): void;
                public static getVersionMajor(): number;
                public static normalize(param0: Mat, param1: Mat, param2: number, param3: number, param4: number): void;
                public static convertScaleAbs(param0: Mat, param1: Mat, param2: number): void;
                public static flip(param0: Mat, param1: Mat, param2: number): void;
                public static min(param0: Mat, param1: Mat, param2: Mat): void;
                public static add(param0: Mat, param1: Mat, param2: Mat): void;
                public static multiply(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
                public static countNonZero(param0: Mat): number;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat, param5: number, param6: number, param7: Mat, param8: number): void;
                public static norm(param0: Mat, param1: Mat): number;
                public static reduce(param0: Mat, param1: Mat, param2: number, param3: number): void;
                /** @deprecated */
                public static getThreadNum(): number;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat, param5: number, param6: number): void;
                public static findFileOrKeep(param0: string): string;
                public static split(param0: Mat, param1: java.util.List<Mat>): void;
                public static kmeans(param0: Mat, param1: number, param2: Mat, param3: TermCriteria, param4: number, param5: number, param6: Mat): number;
                public static polarToCart(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: boolean): void;
                public static getVersionMinor(): number;
                public static perspectiveTransform(param0: Mat, param1: Mat, param2: Mat): void;
                public static getHardwareFeatureName(param0: number): string;
                public static multiply(param0: Mat, param1: Scalar, param2: Mat): void;
                public static divide(param0: number, param1: Mat, param2: Mat): void;
                public static randShuffle(param0: Mat): void;
                public static PCACompute2(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: number): void;
                public static patchNaNs(param0: Mat, param1: number): void;
                public static mulTransposed(param0: Mat, param1: Mat, param2: boolean, param3: Mat): void;
                public static cartToPolar(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: boolean): void;
                public static divide(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: number): void;
                public static invert(param0: Mat, param1: Mat, param2: number): number;
                public static copyMakeBorder(param0: Mat, param1: Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static gemm(param0: Mat, param1: Mat, param2: number, param3: Mat, param4: number, param5: Mat, param6: number): void;
                public static getCPUFeaturesLine(): string;
                public static patchNaNs(param0: Mat): void;
                public static fastAtan2(param0: number, param1: number): number;
                public static idft(param0: Mat, param1: Mat): void;
                public static sqrt(param0: Mat, param1: Mat): void;
                public static setErrorVerbosity(param0: boolean): void;
                public static getCPUTickCount(): number;
                public static bitwise_or(param0: Mat, param1: Mat, param2: Mat): void;
                public static transform(param0: Mat, param1: Mat, param2: Mat): void;
                public static completeSymm(param0: Mat, param1: boolean): void;
                public static repeat(param0: Mat, param1: number, param2: number, param3: Mat): void;
                public static invert(param0: Mat, param1: Mat): number;
                public static norm(param0: Mat): number;
                public static Mahalanobis(param0: Mat, param1: Mat, param2: Mat): number;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat, param5: number, param6: number, param7: Mat, param8: number, param9: boolean): void;
                public static mulSpectrums(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: boolean): void;
                public static solvePoly(param0: Mat, param1: Mat): number;
                public static multiply(param0: Mat, param1: Mat, param2: Mat): void;
                public static norm(param0: Mat, param1: Mat, param2: number, param3: Mat): number;
                public static getBuildInformation(): string;
                public static divide(param0: Mat, param1: Mat, param2: Mat): void;
                public static inRange(param0: Mat, param1: Scalar, param2: Scalar, param3: Mat): void;
                public static eigenNonSymmetric(param0: Mat, param1: Mat, param2: Mat): void;
                public static divide(param0: Mat, param1: Scalar, param2: Mat, param3: number): void;
                public static subtract(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: number): void;
                public static findFile(param0: string): string;
                public static mean(param0: Mat): Scalar;
                public static bitwise_not(param0: Mat, param1: Mat): void;
                public static findFile(param0: string, param1: boolean, param2: boolean): string;
                public static eigen(param0: Mat, param1: Mat): boolean;
                public static convertScaleAbs(param0: Mat, param1: Mat): void;
                public static solve(param0: Mat, param1: Mat, param2: Mat): boolean;
                public static mulSpectrums(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
                public static multiply(param0: Mat, param1: Scalar, param2: Mat, param3: number, param4: number): void;
                public static determinant(param0: Mat): number;
                public static solvePoly(param0: Mat, param1: Mat, param2: number): number;
                public static multiply(param0: Mat, param1: Scalar, param2: Mat, param3: number): void;
                public static add(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static magnitude(param0: Mat, param1: Mat, param2: Mat): void;
                public static bitwise_not(param0: Mat, param1: Mat, param2: Mat): void;
                public static divide(param0: Mat, param1: Scalar, param2: Mat, param3: number, param4: number): void;
                public static min(param0: Mat, param1: Scalar, param2: Mat): void;
                public static setIdentity(param0: Mat): void;
                public static copyMakeBorder(param0: Mat, param1: Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: Scalar): void;
                public static bitwise_xor(param0: Mat, param1: Mat, param2: Mat): void;
                public static dft(param0: Mat, param1: Mat, param2: number, param3: number): void;
                public static getNumThreads(): number;
                public static normalize(param0: Mat, param1: Mat): void;
                public static addSamplesDataSearchSubDirectory(param0: string): void;
                public static exp(param0: Mat, param1: Mat): void;
                public static addWeighted(param0: Mat, param1: number, param2: Mat, param3: number, param4: number, param5: Mat, param6: number): void;
                public static hconcat(param0: java.util.List<Mat>, param1: Mat): void;
                public static normalize(param0: Mat, param1: Mat, param2: number, param3: number): void;
                public static normalize(param0: Mat, param1: Mat, param2: number): void;
                public static norm(param0: Mat, param1: number): number;
                public static dct(param0: Mat, param1: Mat, param2: number): void;
                public static mixChannels(param0: java.util.List<Mat>, param1: java.util.List<Mat>, param2: MatOfInt): void;
                public static phase(param0: Mat, param1: Mat, param2: Mat, param3: boolean): void;
                public static sumElems(param0: Mat): Scalar;
                public static eigen(param0: Mat, param1: Mat, param2: Mat): boolean;
                public static getNumberOfCPUs(): number;
                public static absdiff(param0: Mat, param1: Scalar, param2: Mat): void;
                public static max(param0: Mat, param1: Mat, param2: Mat): void;
                public static absdiff(param0: Mat, param1: Mat, param2: Mat): void;
                public static addSamplesDataSearchPath(param0: string): void;
                public static calcCovarMatrix(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
                public static minMaxLoc(param0: Mat, param1: Mat): Core.MinMaxLocResult;
                public static getIppVersion(): string;
                public static checkRange(param0: Mat, param1: boolean, param2: number, param3: number): boolean;
                public static findNonZero(param0: Mat, param1: Mat): void;
                public static add(param0: Mat, param1: Scalar, param2: Mat): void;
                public static divide(param0: number, param1: Mat, param2: Mat, param3: number): void;
                public static findFileOrKeep(param0: string, param1: boolean): string;
                public static compare(param0: Mat, param1: Scalar, param2: Mat, param3: number): void;
                public static useIPP(): boolean;
                public static PCAProject(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static scaleAdd(param0: Mat, param1: number, param2: Mat, param3: Mat): void;
                public static solve(param0: Mat, param1: Mat, param2: Mat, param3: number): boolean;
                public static idft(param0: Mat, param1: Mat, param2: number, param3: number): void;
                public static checkRange(param0: Mat, param1: boolean): boolean;
                public static getOptimalDFTSize(param0: number): number;
                public static PCACompute2(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static SVBackSubst(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: Mat): void;
                public static subtract(param0: Mat, param1: Scalar, param2: Mat): void;
                public static addWeighted(param0: Mat, param1: number, param2: Mat, param3: number, param4: number, param5: Mat): void;
                public static idft(param0: Mat, param1: Mat, param2: number): void;
                public static reduce(param0: Mat, param1: Mat, param2: number, param3: number, param4: number): void;
                public static PCACompute(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
                public static randShuffle(param0: Mat, param1: number): void;
                public static phase(param0: Mat, param1: Mat, param2: Mat): void;
                public static getVersionString(): string;
                public static multiply(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: number): void;
                public static setRNGSeed(param0: number): void;
                public static log(param0: Mat, param1: Mat): void;
                public static kmeans(param0: Mat, param1: number, param2: Mat, param3: TermCriteria, param4: number, param5: number): number;
                public static cubeRoot(param0: number): number;
                public static sortIdx(param0: Mat, param1: Mat, param2: number): void;
                public constructor();
                public static idct(param0: Mat, param1: Mat): void;
                public static pow(param0: Mat, param1: number, param2: Mat): void;
                public static divide(param0: Mat, param1: Scalar, param2: Mat): void;
                public static randu(param0: Mat, param1: number, param2: number): void;
                public static mean(param0: Mat, param1: Mat): Scalar;
                public static normalize(param0: Mat, param1: Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static copyTo(param0: Mat, param1: Mat, param2: Mat): void;
                public static bitwise_and(param0: Mat, param1: Mat, param2: Mat): void;
                public static mulTransposed(param0: Mat, param1: Mat, param2: boolean, param3: Mat, param4: number): void;
                public static getTickCount(): number;
                public static bitwise_and(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static meanStdDev(param0: Mat, param1: MatOfDouble, param2: MatOfDouble): void;
                public static checkRange(param0: Mat, param1: boolean, param2: number): boolean;
                public static PCACompute(param0: Mat, param1: Mat, param2: Mat): void;
                public static mulTransposed(param0: Mat, param1: Mat, param2: boolean, param3: Mat, param4: number, param5: number): void;
                public static PSNR(param0: Mat, param1: Mat, param2: number): number;
                public static add(param0: Mat, param1: Scalar, param2: Mat, param3: Mat, param4: number): void;
                public static useIPP_NotExact(): boolean;
                public static setUseIPP(param0: boolean): void;
                public static vconcat(param0: java.util.List<Mat>, param1: Mat): void;
                public static polarToCart(param0: Mat, param1: Mat, param2: Mat, param3: Mat): void;
                public static dft(param0: Mat, param1: Mat, param2: number): void;
                public static norm(param0: Mat, param1: Mat, param2: number): number;
                public static norm(param0: Mat, param1: number, param2: Mat): number;
                public static meanStdDev(param0: Mat, param1: MatOfDouble, param2: MatOfDouble, param3: Mat): void;
                public static setIdentity(param0: Mat, param1: Scalar): void;
                public static trace(param0: Mat): Scalar;
                public static completeSymm(param0: Mat): void;
                public static max(param0: Mat, param1: Scalar, param2: Mat): void;
                public static add(param0: Mat, param1: Mat, param2: Mat, param3: Mat, param4: number): void;
                public static normalize(param0: Mat, param1: Mat, param2: number, param3: number, param4: number, param5: number, param6: Mat): void;
                public static randn(param0: Mat, param1: number, param2: number): void;
                public static subtract(param0: Mat, param1: Mat, param2: Mat): void;
                public static batchDistance(param0: Mat, param1: Mat, param2: Mat, param3: number, param4: Mat, param5: number): void;
                public static merge(param0: java.util.List<Mat>, param1: Mat): void;
                public static setUseIPP_NotExact(param0: boolean): void;
                public static add(param0: Mat, param1: Scalar, param2: Mat, param3: Mat): void;
                public static checkRange(param0: Mat): boolean;
                public static divide(param0: Mat, param1: Mat, param2: Mat, param3: number): void;
            }
            export namespace Core {
                export class MinMaxLocResult extends java.lang.Object {
                    public static class: java.lang.Class<MinMaxLocResult>;
                    public minVal: number;
                    public maxVal: number;
                    public minLoc: Point;
                    public maxLoc: Point;
                    public constructor();
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class CvException extends java.lang.RuntimeException {
                public static class: java.lang.Class<CvException>;
                public constructor(param0: string, param1: java.lang.Throwable);
                public toString(): string;
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
                public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class CvType extends java.lang.Object {
                public static class: java.lang.Class<CvType>;
                public static CV_8U: number;
                public static CV_8S: number;
                public static CV_16U: number;
                public static CV_16S: number;
                public static CV_32S: number;
                public static CV_32F: number;
                public static CV_64F: number;
                public static CV_16F: number;
                public static CV_USRTYPE1: number;
                public static CV_8UC1: number;
                public static CV_8UC2: number;
                public static CV_8UC3: number;
                public static CV_8UC4: number;
                public static CV_8SC1: number;
                public static CV_8SC2: number;
                public static CV_8SC3: number;
                public static CV_8SC4: number;
                public static CV_16UC1: number;
                public static CV_16UC2: number;
                public static CV_16UC3: number;
                public static CV_16UC4: number;
                public static CV_16SC1: number;
                public static CV_16SC2: number;
                public static CV_16SC3: number;
                public static CV_16SC4: number;
                public static CV_32SC1: number;
                public static CV_32SC2: number;
                public static CV_32SC3: number;
                public static CV_32SC4: number;
                public static CV_32FC1: number;
                public static CV_32FC2: number;
                public static CV_32FC3: number;
                public static CV_32FC4: number;
                public static CV_64FC1: number;
                public static CV_64FC2: number;
                public static CV_64FC3: number;
                public static CV_64FC4: number;
                public static CV_16FC1: number;
                public static CV_16FC2: number;
                public static CV_16FC3: number;
                public static CV_16FC4: number;
                public static CV_32FC(param0: number): number;
                public static depth(param0: number): number;
                public static CV_16SC(param0: number): number;
                public static makeType(param0: number, param1: number): number;
                public static CV_16UC(param0: number): number;
                public static channels(param0: number): number;
                public constructor();
                public static CV_64FC(param0: number): number;
                public static CV_32SC(param0: number): number;
                public static CV_8SC(param0: number): number;
                public static CV_8UC(param0: number): number;
                public static CV_16FC(param0: number): number;
                public static isInteger(param0: number): boolean;
                public static ELEM_SIZE(param0: number): number;
                public static typeToString(param0: number): string;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class DMatch extends java.lang.Object {
                public static class: java.lang.Class<DMatch>;
                public queryIdx: number;
                public trainIdx: number;
                public imgIdx: number;
                public distance: number;
                public constructor(param0: number, param1: number, param2: number);
                public lessThan(param0: DMatch): boolean;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class KeyPoint extends java.lang.Object {
                public static class: java.lang.Class<KeyPoint>;
                public pt: Point;
                public size: number;
                public angle: number;
                public response: number;
                public octave: number;
                public class_id: number;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
                public toString(): string;
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number);
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Mat extends java.lang.Object {
                public static class: java.lang.Class<Mat>;
                public nativeObj: number;
                public dot(param0: Mat): number;
                public static zeros(param0: number, param1: number, param2: number): Mat;
                public convertTo(param0: Mat, param1: number, param2: number): void;
                public copySize(param0: Mat): void;
                public setTo(param0: Mat, param1: Mat): Mat;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public diag(): Mat;
                public constructor(param0: native.Array<number>, param1: number);
                public mul(param0: Mat): Mat;
                public reshape(param0: number, param1: native.Array<number>): Mat;
                public width(): number;
                public constructor(param0: Size, param1: number);
                public isSubmatrix(): boolean;
                public dataAddr(): number;
                public checkVector(param0: number, param1: number): number;
                public step1(param0: number): number;
                public cols(): number;
                public setTo(param0: Scalar, param1: Mat): Mat;
                public rowRange(param0: number, param1: number): Mat;
                public dump(): string;
                public isContinuous(): boolean;
                public diag(param0: number): Mat;
                public cross(param0: Mat): Mat;
                public reshape(param0: number, param1: number): Mat;
                public colRange(param0: Range): Mat;
                public convertTo(param0: Mat, param1: number, param2: number, param3: number): void;
                public depth(): number;
                public elemSize(): number;
                public adjustROI(param0: number, param1: number, param2: number, param3: number): Mat;
                public dims(): number;
                public create(param0: number, param1: number, param2: number): void;
                public submat(param0: Range, param1: Range): Mat;
                public mul(param0: Mat, param1: number): Mat;
                public create(param0: native.Array<number>, param1: number): void;
                public release(): void;
                public static diag(param0: Mat): Mat;
                public checkVector(param0: number): number;
                public clone(): Mat;
                public push_back(param0: Mat): void;
                public setTo(param0: Scalar): Mat;
                public create(param0: Size, param1: number): void;
                public channels(): number;
                public elemSize1(): number;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
                public colRange(param0: number, param1: number): Mat;
                public submat(param0: native.Array<Range>): Mat;
                public checkVector(param0: number, param1: number, param2: boolean): number;
                public height(): number;
                public copyTo(param0: Mat): void;
                public constructor();
                public static ones(param0: native.Array<number>, param1: number): Mat;
                public convertTo(param0: Mat, param1: number): void;
                public static ones(param0: number, param1: number, param2: number): Mat;
                public clone(): any;
                public size(param0: number): number;
                public submat(param0: Rect): Mat;
                public col(param0: number): Mat;
                public constructor(param0: Mat, param1: Rect);
                public rowRange(param0: Range): Mat;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public toString(): string;
                public put(param0: number, param1: number, param2: native.Array<number>, param3: number, param4: number): number;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public static zeros(param0: Size, param1: number): Mat;
                public constructor(param0: Mat, param1: native.Array<Range>);
                public static eye(param0: Size, param1: number): Mat;
                public total(): number;
                public get(param0: number, param1: number, param2: native.Array<number>): number;
                public locateROI(param0: Size, param1: Point): void;
                public t(): Mat;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public assignTo(param0: Mat): void;
                public step1(): number;
                public finalize(): void;
                public inv(): Mat;
                public row(param0: number): Mat;
                public setTo(param0: Mat): Mat;
                public put(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: number): number;
                public get(param0: native.Array<number>, param1: native.Array<number>): number;
                public get(param0: number, param1: number): native.Array<number>;
                public put(param0: native.Array<number>, param1: native.Array<number>): number;
                public size(): Size;
                public constructor(param0: Mat, param1: Range);
                public reshape(param0: number): Mat;
                public get(param0: native.Array<number>): native.Array<number>;
                public put(param0: number, param1: number, param2: native.Array<number>): number;
                public copyTo(param0: Mat, param1: Mat): void;
                public static eye(param0: number, param1: number, param2: number): Mat;
                public static ones(param0: Size, param1: number): Mat;
                public empty(): boolean;
                public inv(param0: number): Mat;
                public submat(param0: number, param1: number, param2: number, param3: number): Mat;
                public getNativeObjAddr(): number;
                public assignTo(param0: Mat, param1: number): void;
                public type(): number;
                public static zeros(param0: native.Array<number>, param1: number): Mat;
                public rows(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfByte extends Mat {
                public static class: java.lang.Class<MatOfByte>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public toList(): java.util.List<java.lang.Byte>;
                public constructor(param0: Mat, param1: Rect);
                public constructor(param0: number, param1: number, param2: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public fromArray(param0: number, param1: number, param2: native.Array<number>): void;
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public fromList(param0: java.util.List<java.lang.Byte>): void;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public static fromNativeAddr(param0: number): MatOfByte;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfDMatch extends Mat {
                public static class: java.lang.Class<MatOfDMatch>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<DMatch>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public toList(): java.util.List<DMatch>;
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<DMatch>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public static fromNativeAddr(param0: number): MatOfDMatch;
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: native.Array<DMatch>);
                public toArray(): native.Array<DMatch>;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfDouble extends Mat {
                public static class: java.lang.Class<MatOfDouble>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public toList(): java.util.List<java.lang.Double>;
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Double>): void;
                public static fromNativeAddr(param0: number): MatOfDouble;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfFloat extends Mat {
                public static class: java.lang.Class<MatOfFloat>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Float>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public static fromNativeAddr(param0: number): MatOfFloat;
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public toList(): java.util.List<java.lang.Float>;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfFloat4 extends Mat {
                public static class: java.lang.Class<MatOfFloat4>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Float>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public static fromNativeAddr(param0: number): MatOfFloat4;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public toList(): java.util.List<java.lang.Float>;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfFloat6 extends Mat {
                public static class: java.lang.Class<MatOfFloat6>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Float>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public static fromNativeAddr(param0: number): MatOfFloat6;
                public toList(): java.util.List<java.lang.Float>;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfInt extends Mat {
                public static class: java.lang.Class<MatOfInt>;
                public toList(): java.util.List<java.lang.Integer>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Integer>): void;
                public static fromNativeAddr(param0: number): MatOfInt;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfInt4 extends Mat {
                public static class: java.lang.Class<MatOfInt4>;
                public toList(): java.util.List<java.lang.Integer>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public fromArray(param0: native.Array<number>): void;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<java.lang.Integer>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public toArray(): native.Array<number>;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: native.Array<number>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public static fromNativeAddr(param0: number): MatOfInt4;
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfKeyPoint extends Mat {
                public static class: java.lang.Class<MatOfKeyPoint>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public static fromNativeAddr(param0: number): MatOfKeyPoint;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public fromList(param0: java.util.List<KeyPoint>): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: native.Array<KeyPoint>);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public fromArray(param0: native.Array<KeyPoint>): void;
                public toArray(): native.Array<KeyPoint>;
                public toList(): java.util.List<KeyPoint>;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfPoint extends Mat {
                public static class: java.lang.Class<MatOfPoint>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public toArray(): native.Array<Point>;
                public toList(): java.util.List<Point>;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public constructor(param0: native.Array<Point>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public fromList(param0: java.util.List<Point>): void;
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public static fromNativeAddr(param0: number): MatOfPoint;
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public fromArray(param0: native.Array<Point>): void;
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfPoint2f extends Mat {
                public static class: java.lang.Class<MatOfPoint2f>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public toArray(): native.Array<Point>;
                public toList(): java.util.List<Point>;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public constructor(param0: native.Array<Point>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public static fromNativeAddr(param0: number): MatOfPoint2f;
                public fromList(param0: java.util.List<Point>): void;
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public fromArray(param0: native.Array<Point>): void;
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfPoint3 extends Mat {
                public static class: java.lang.Class<MatOfPoint3>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public toList(): java.util.List<Point3>;
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public fromList(param0: java.util.List<Point3>): void;
                public constructor(param0: native.Array<Point3>);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public static fromNativeAddr(param0: number): MatOfPoint3;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public fromArray(param0: native.Array<Point3>): void;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
                public toArray(): native.Array<Point3>;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfPoint3f extends Mat {
                public static class: java.lang.Class<MatOfPoint3f>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public static fromNativeAddr(param0: number): MatOfPoint3f;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public toList(): java.util.List<Point3>;
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public fromList(param0: java.util.List<Point3>): void;
                public constructor(param0: native.Array<Point3>);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public fromArray(param0: native.Array<Point3>): void;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
                public toArray(): native.Array<Point3>;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfRect extends Mat {
                public static class: java.lang.Class<MatOfRect>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public toList(): java.util.List<Rect>;
                public constructor(param0: Mat, param1: Rect);
                public fromArray(param0: native.Array<Rect>): void;
                public constructor(param0: native.Array<Rect>);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public toArray(): native.Array<Rect>;
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
                public static fromNativeAddr(param0: number): MatOfRect;
                public fromList(param0: java.util.List<Rect>): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfRect2d extends Mat {
                public static class: java.lang.Class<MatOfRect2d>;
                public toList(): java.util.List<Rect2d>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public constructor(param0: Size, param1: number, param2: Scalar);
                public fromArray(param0: native.Array<Rect2d>): void;
                public constructor(param0: Mat, param1: Rect);
                public fromList(param0: java.util.List<Rect2d>): void;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public constructor();
                public toArray(): native.Array<Rect2d>;
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: native.Array<Rect2d>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public static fromNativeAddr(param0: number): MatOfRect2d;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class MatOfRotatedRect extends Mat {
                public static class: java.lang.Class<MatOfRotatedRect>;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: Mat);
                public toList(): java.util.List<RotatedRect>;
                public constructor(param0: Size, param1: number, param2: Scalar);
                public constructor(param0: Mat, param1: Rect);
                public toArray(): native.Array<RotatedRect>;
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer);
                public alloc(param0: number): void;
                public fromArray(param0: native.Array<RotatedRect>): void;
                public constructor(param0: Mat, param1: Range, param2: Range);
                public fromList(param0: java.util.List<RotatedRect>): void;
                public constructor();
                public constructor(param0: native.Array<RotatedRect>);
                public constructor(param0: native.Array<number>, param1: number);
                public constructor(param0: number, param1: number, param2: number, param3: java.nio.ByteBuffer, param4: number);
                public constructor(param0: Mat, param1: Range);
                public constructor(param0: Mat, param1: native.Array<Range>);
                public constructor(param0: Size, param1: number);
                public constructor(param0: number);
                public constructor(param0: native.Array<number>, param1: number, param2: Scalar);
                public static fromNativeAddr(param0: number): MatOfRotatedRect;
                public constructor(param0: number, param1: number, param2: number, param3: Scalar);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Point extends java.lang.Object {
                public static class: java.lang.Class<Point>;
                public x: number;
                public y: number;
                public constructor(param0: number, param1: number);
                public constructor(param0: native.Array<number>);
                public hashCode(): number;
                public clone(): Point;
                public clone(): any;
                public equals(param0: any): boolean;
                public set(param0: native.Array<number>): void;
                public inside(param0: Rect): boolean;
                public toString(): string;
                public dot(param0: Point): number;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Point3 extends java.lang.Object {
                public static class: java.lang.Class<Point3>;
                public x: number;
                public y: number;
                public z: number;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: native.Array<number>);
                public cross(param0: Point3): Point3;
                public hashCode(): number;
                public constructor(param0: Point);
                public clone(): any;
                public equals(param0: any): boolean;
                public set(param0: native.Array<number>): void;
                public clone(): Point3;
                public toString(): string;
                public dot(param0: Point3): number;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Range extends java.lang.Object {
                public static class: java.lang.Class<Range>;
                public start: number;
                public end: number;
                public constructor(param0: number, param1: number);
                public shift(param0: number): Range;
                public toString(): string;
                public constructor();
                public size(): number;
                public constructor(param0: native.Array<number>);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public set(param0: native.Array<number>): void;
                public static all(): Range;
                public intersection(param0: Range): Range;
                public clone(): Range;
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Rect extends java.lang.Object {
                public static class: java.lang.Class<Rect>;
                public x: number;
                public y: number;
                public width: number;
                public height: number;
                public clone(): Rect;
                public contains(param0: Point): boolean;
                public constructor(param0: Point, param1: Point);
                public toString(): string;
                public br(): Point;
                public constructor();
                public constructor(param0: native.Array<number>);
                public tl(): Point;
                public size(): Size;
                public area(): number;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public set(param0: native.Array<number>): void;
                public constructor(param0: Point, param1: Size);
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Rect2d extends java.lang.Object {
                public static class: java.lang.Class<Rect2d>;
                public x: number;
                public y: number;
                public width: number;
                public height: number;
                public contains(param0: Point): boolean;
                public constructor(param0: Point, param1: Point);
                public toString(): string;
                public br(): Point;
                public constructor();
                public constructor(param0: native.Array<number>);
                public tl(): Point;
                public size(): Size;
                public area(): number;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public clone(): Rect2d;
                public set(param0: native.Array<number>): void;
                public constructor(param0: Point, param1: Size);
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class RotatedRect extends java.lang.Object {
                public static class: java.lang.Class<RotatedRect>;
                public center: Point;
                public size: Size;
                public angle: number;
                public constructor(param0: native.Array<number>);
                public boundingRect(): Rect;
                public constructor(param0: Point, param1: Size, param2: number);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public points(param0: native.Array<Point>): void;
                public set(param0: native.Array<number>): void;
                public toString(): string;
                public clone(): RotatedRect;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Scalar extends java.lang.Object {
                public static class: java.lang.Class<Scalar>;
                public val: native.Array<number>;
                public constructor(param0: number, param1: number);
                public constructor(param0: number, param1: number, param2: number);
                public toString(): string;
                public mul(param0: Scalar): Scalar;
                public mul(param0: Scalar, param1: number): Scalar;
                public constructor(param0: native.Array<number>);
                public isReal(): boolean;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public constructor(param0: number);
                public static all(param0: number): Scalar;
                public conj(): Scalar;
                public set(param0: native.Array<number>): void;
                public clone(): Scalar;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class Size extends java.lang.Object {
                public static class: java.lang.Class<Size>;
                public width: number;
                public height: number;
                public constructor(param0: number, param1: number);
                public constructor(param0: native.Array<number>);
                public area(): number;
                public hashCode(): number;
                public clone(): Size;
                public constructor(param0: Point);
                public clone(): any;
                public equals(param0: any): boolean;
                public set(param0: native.Array<number>): void;
                public toString(): string;
                public constructor();
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class TermCriteria extends java.lang.Object {
                public static class: java.lang.Class<TermCriteria>;
                public static COUNT: number;
                public static MAX_ITER: number;
                public static EPS: number;
                public type: number;
                public maxCount: number;
                public epsilon: number;
                public constructor(param0: number, param1: number, param2: number);
                public constructor(param0: native.Array<number>);
                public hashCode(): number;
                public clone(): any;
                public equals(param0: any): boolean;
                public clone(): TermCriteria;
                public set(param0: native.Array<number>): void;
                public toString(): string;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace core {
            export class TickMeter extends java.lang.Object {
                public static class: java.lang.Class<TickMeter>;
                public nativeObj: number;
                public getTimeSec(): number;
                public getFPS(): number;
                public static __fromPtr__(param0: number): TickMeter;
                public getAvgTimeSec(): number;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public constructor();
                public getAvgTimeMilli(): number;
                public reset(): void;
                public stop(): void;
                public getTimeMilli(): number;
                public start(): void;
                public constructor(param0: number);
                public getCounter(): number;
                public getTimeMicro(): number;
                public getTimeTicks(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class ClassificationModel extends Model {
                public static class: java.lang.Class<ClassificationModel>;
                public constructor(param0: Net);
                public static __fromPtr__(param0: number): Model;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): Net;
                public static __fromPtr__(param0: number): ClassificationModel;
                public classify(param0: core.Mat, param1: native.Array<number>, param2: native.Array<number>): void;
                public constructor(param0: string, param1: string);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class DetectionModel extends Model {
                public static class: java.lang.Class<DetectionModel>;
                public static __fromPtr__(param0: number): DetectionModel;
                public detect(param0: core.Mat, param1: core.MatOfInt, param2: core.MatOfFloat, param3: core.MatOfRect): void;
                public constructor(param0: Net);
                public static __fromPtr__(param0: number): Model;
                public detect(param0: core.Mat, param1: core.MatOfInt, param2: core.MatOfFloat, param3: core.MatOfRect, param4: number): void;
                public detect(param0: core.Mat, param1: core.MatOfInt, param2: core.MatOfFloat, param3: core.MatOfRect, param4: number, param5: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): Net;
                public constructor(param0: string, param1: string);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class DictValue extends java.lang.Object {
                public static class: java.lang.Class<DictValue>;
                public nativeObj: number;
                public getStringValue(param0: number): string;
                public getIntValue(): number;
                public getRealValue(param0: number): number;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public constructor(param0: string);
                public getRealValue(): number;
                public getStringValue(): string;
                public isReal(): boolean;
                public isString(): boolean;
                public constructor(param0: number);
                public isInt(): boolean;
                public static __fromPtr__(param0: number): DictValue;
                public getIntValue(param0: number): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class Dnn extends java.lang.Object {
                public static class: java.lang.Class<Dnn>;
                public static DNN_BACKEND_DEFAULT: number;
                public static DNN_BACKEND_HALIDE: number;
                public static DNN_BACKEND_INFERENCE_ENGINE: number;
                public static DNN_BACKEND_OPENCV: number;
                public static DNN_BACKEND_VKCOM: number;
                public static DNN_BACKEND_CUDA: number;
                public static DNN_TARGET_CPU: number;
                public static DNN_TARGET_OPENCL: number;
                public static DNN_TARGET_OPENCL_FP16: number;
                public static DNN_TARGET_MYRIAD: number;
                public static DNN_TARGET_VULKAN: number;
                public static DNN_TARGET_FPGA: number;
                public static DNN_TARGET_CUDA: number;
                public static DNN_TARGET_CUDA_FP16: number;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean, param5: boolean, param6: number): core.Mat;
                public static setInferenceEngineBackendType(param0: string): string;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number): core.Mat;
                public static readNet(param0: string, param1: core.MatOfByte, param2: core.MatOfByte): Net;
                public static readNetFromCaffe(param0: core.MatOfByte, param1: core.MatOfByte): Net;
                public static blobFromImage(param0: core.Mat, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean, param5: boolean, param6: number): core.Mat;
                public static readNetFromONNX(param0: string): Net;
                public static NMSBoxesRotated(param0: core.MatOfRotatedRect, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt): void;
                public static readTorchBlob(param0: string): core.Mat;
                public constructor();
                public static readNetFromDarknet(param0: core.MatOfByte): Net;
                public static readNetFromONNX(param0: core.MatOfByte): Net;
                public static blobFromImage(param0: core.Mat, param1: number): core.Mat;
                public static readNetFromTensorflow(param0: core.MatOfByte): Net;
                public static NMSBoxes(param0: core.MatOfRect2d, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt): void;
                public static shrinkCaffeModel(param0: string, param1: string, param2: java.util.List<string>): void;
                public static readNetFromCaffe(param0: core.MatOfByte): Net;
                public static readTorchBlob(param0: string, param1: boolean): core.Mat;
                public static readNetFromTorch(param0: string): Net;
                public static readNetFromCaffe(param0: string): Net;
                public static NMSBoxes(param0: core.MatOfRect2d, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt, param5: number, param6: number): void;
                public static readNet(param0: string, param1: string): Net;
                public static blobFromImage(param0: core.Mat, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean): core.Mat;
                public static readNetFromModelOptimizer(param0: core.MatOfByte, param1: core.MatOfByte): Net;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number, param2: core.Size): core.Mat;
                public static blobFromImage(param0: core.Mat, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean, param5: boolean): core.Mat;
                public static readNetFromDarknet(param0: string): Net;
                public static readNetFromTorch(param0: string, param1: boolean): Net;
                public static blobFromImages(param0: java.util.List<core.Mat>): core.Mat;
                public static NMSBoxesRotated(param0: core.MatOfRotatedRect, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt, param5: number, param6: number): void;
                public static imagesFromBlob(param0: core.Mat, param1: java.util.List<core.Mat>): void;
                public static writeTextGraph(param0: string, param1: string): void;
                public static shrinkCaffeModel(param0: string, param1: string): void;
                public static readNetFromDarknet(param0: core.MatOfByte, param1: core.MatOfByte): Net;
                public static blobFromImage(param0: core.Mat, param1: number, param2: core.Size, param3: core.Scalar): core.Mat;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number, param2: core.Size, param3: core.Scalar): core.Mat;
                public static readTensorFromONNX(param0: string): core.Mat;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean, param5: boolean): core.Mat;
                public static readNetFromTorch(param0: string, param1: boolean, param2: boolean): Net;
                public static getInferenceEngineBackendType(): string;
                public static readNetFromTensorflow(param0: core.MatOfByte, param1: core.MatOfByte): Net;
                public static getInferenceEngineVPUType(): string;
                public static readNetFromCaffe(param0: string, param1: string): Net;
                public static blobFromImage(param0: core.Mat): core.Mat;
                public static NMSBoxesRotated(param0: core.MatOfRotatedRect, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt, param5: number): void;
                public static readNet(param0: string, param1: core.MatOfByte): Net;
                public static blobFromImages(param0: java.util.List<core.Mat>, param1: number, param2: core.Size, param3: core.Scalar, param4: boolean): core.Mat;
                public static getAvailableTargets(param0: number): java.util.List<java.lang.Integer>;
                public static readNet(param0: string): Net;
                public static resetMyriadDevice(): void;
                public static readNetFromTensorflow(param0: string, param1: string): Net;
                public static readNetFromModelOptimizer(param0: string, param1: string): Net;
                public static readNetFromTensorflow(param0: string): Net;
                public static blobFromImage(param0: core.Mat, param1: number, param2: core.Size): core.Mat;
                public static readNet(param0: string, param1: string, param2: string): Net;
                public static NMSBoxes(param0: core.MatOfRect2d, param1: core.MatOfFloat, param2: number, param3: number, param4: core.MatOfInt, param5: number): void;
                public static readNetFromDarknet(param0: string, param1: string): Net;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class KeypointsModel extends Model {
                public static class: java.lang.Class<KeypointsModel>;
                public static __fromPtr__(param0: number): KeypointsModel;
                public constructor(param0: Net);
                public static __fromPtr__(param0: number): Model;
                public estimate(param0: core.Mat): core.MatOfPoint2f;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): Net;
                public constructor(param0: string, param1: string);
                public constructor(param0: string);
                public estimate(param0: core.Mat, param1: number): core.MatOfPoint2f;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class Layer extends core.Algorithm {
                public static class: java.lang.Class<Layer>;
                public static __fromPtr__(param0: number): Layer;
                public static __fromPtr__(param0: number): core.Algorithm;
                public outputNameToIndex(param0: string): number;
                public get_name(): string;
                public finalize(): void;
                public get_blobs(): java.util.List<core.Mat>;
                public constructor(param0: number);
                public set_blobs(param0: java.util.List<core.Mat>): void;
                /** @deprecated */
                public run(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: java.util.List<core.Mat>): void;
                public get_preferableTarget(): number;
                public finalize(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>): void;
                public get_type(): string;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class Model extends Net {
                public static class: java.lang.Class<Model>;
                public setInputParams(): void;
                public predict(param0: core.Mat, param1: java.util.List<core.Mat>): void;
                public static __fromPtr__(param0: number): Model;
                public finalize(): void;
                public setInputCrop(param0: boolean): Model;
                public setInputScale(param0: number): Model;
                public setInputSwapRB(param0: boolean): Model;
                public constructor(param0: string);
                public constructor();
                public setInputParams(param0: number, param1: core.Size): void;
                public setInputParams(param0: number, param1: core.Size, param2: core.Scalar): void;
                public constructor(param0: Net);
                public setInputSize(param0: core.Size): Model;
                public constructor(param0: number);
                public setInputMean(param0: core.Scalar): Model;
                public setInputParams(param0: number, param1: core.Size, param2: core.Scalar, param3: boolean): void;
                public static __fromPtr__(param0: number): Net;
                public setInputSize(param0: number, param1: number): Model;
                public setInputParams(param0: number, param1: core.Size, param2: core.Scalar, param3: boolean, param4: boolean): void;
                public constructor(param0: string, param1: string);
                public setInputParams(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class Net extends java.lang.Object {
                public static class: java.lang.Class<Net>;
                public nativeObj: number;
                public connect(param0: string, param1: string): void;
                public getFLOPS(param0: core.MatOfInt): number;
                public forward(param0: java.util.List<core.Mat>, param1: java.util.List<string>): void;
                public getParam(param0: DictValue): core.Mat;
                public getMemoryConsumption(param0: number, param1: core.MatOfInt, param2: native.Array<number>, param3: native.Array<number>): void;
                public getPerfProfile(param0: core.MatOfDouble): number;
                public setInputsNames(param0: java.util.List<string>): void;
                public getLayerNames(): java.util.List<string>;
                public getUnconnectedOutLayersNames(): java.util.List<string>;
                public finalize(): void;
                public static readFromModelOptimizer(param0: string, param1: string): Net;
                public forward(param0: java.util.List<core.Mat>): void;
                public setInput(param0: core.Mat): void;
                public getParam(param0: DictValue, param1: number): core.Mat;
                public constructor();
                public getLayersCount(param0: string): number;
                public setHalideScheduler(param0: string): void;
                public getFLOPS(param0: java.util.List<core.MatOfInt>): number;
                public getLayerTypes(param0: java.util.List<string>): void;
                public getUnconnectedOutLayers(): core.MatOfInt;
                public getFLOPS(param0: number, param1: core.MatOfInt): number;
                public getMemoryConsumption(param0: number, param1: java.util.List<core.MatOfInt>, param2: native.Array<number>, param3: native.Array<number>): void;
                public static __fromPtr__(param0: number): Net;
                public getLayerId(param0: string): number;
                public enableFusion(param0: boolean): void;
                public empty(): boolean;
                public setInput(param0: core.Mat, param1: string): void;
                public getLayer(param0: DictValue): Layer;
                public setInput(param0: core.Mat, param1: string, param2: number, param3: core.Scalar): void;
                public forward(param0: string): core.Mat;
                public getMemoryConsumption(param0: core.MatOfInt, param1: native.Array<number>, param2: native.Array<number>): void;
                public getNativeObjAddr(): number;
                public getFLOPS(param0: number, param1: java.util.List<core.MatOfInt>): number;
                public dump(): string;
                public forward(): core.Mat;
                public setInputShape(param0: string, param1: core.MatOfInt): void;
                public forward(param0: java.util.List<core.Mat>, param1: string): void;
                public dumpToFile(param0: string): void;
                public setInput(param0: core.Mat, param1: string, param2: number): void;
                public setParam(param0: DictValue, param1: number, param2: core.Mat): void;
                public static readFromModelOptimizer(param0: core.MatOfByte, param1: core.MatOfByte): Net;
                public setPreferableBackend(param0: number): void;
                public constructor(param0: number);
                public setPreferableTarget(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace dnn {
            export class SegmentationModel extends Model {
                public static class: java.lang.Class<SegmentationModel>;
                public constructor(param0: Net);
                public static __fromPtr__(param0: number): Model;
                public segment(param0: core.Mat, param1: core.Mat): void;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): SegmentationModel;
                public static __fromPtr__(param0: number): Net;
                public constructor(param0: string, param1: string);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace engine {
            export class OpenCVEngineInterface extends java.lang.Object implements globalAndroid.os.IInterface {
                public static class: java.lang.Class<OpenCVEngineInterface>;
                /**
                 * Constructs a new instance of the org.opencv.engine.OpenCVEngineInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getEngineVersion(): number;
                    getLibPathByVersion(param0: string): string;
                    installVersion(param0: string): boolean;
                    getLibraryList(param0: string): string;
                    asBinder(): globalAndroid.os.IBinder;
                });
                public constructor();
                public getEngineVersion(): number;
                public getLibPathByVersion(param0: string): string;
                public getLibraryList(param0: string): string;
                public asBinder(): globalAndroid.os.IBinder;
                public installVersion(param0: string): boolean;
            }
            export namespace OpenCVEngineInterface {
                export abstract class Stub extends globalAndroid.os.Binder implements OpenCVEngineInterface {
                    public static class: java.lang.Class<Stub>;
                    public static asInterface(param0: globalAndroid.os.IBinder): OpenCVEngineInterface;
                    public isBinderAlive(): boolean;
                    public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                    public dumpAsync(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
                    public getLibPathByVersion(param0: string): string;
                    public asBinder(): globalAndroid.os.IBinder;
                    public queryLocalInterface(param0: string): globalAndroid.os.IInterface;
                    public installVersion(param0: string): boolean;
                    public getLibraryList(param0: string): string;
                    public transact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                    public dump(param0: java.io.FileDescriptor, param1: native.Array<string>): void;
                    public unlinkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): boolean;
                    public constructor();
                    public getEngineVersion(): number;
                    public getInterfaceDescriptor(): string;
                    public linkToDeath(param0: globalAndroid.os.IBinder.DeathRecipient, param1: number): void;
                    public pingBinder(): boolean;
                    public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
                }
                export namespace Stub {
                    export class Proxy extends java.lang.Object implements OpenCVEngineInterface {
                        public static class: java.lang.Class<Proxy>;
                        public getInterfaceDescriptor(): string;
                        public installVersion(param0: string): boolean;
                        public getLibraryList(param0: string): string;
                        public asBinder(): globalAndroid.os.IBinder;
                        public getEngineVersion(): number;
                        public getLibPathByVersion(param0: string): string;
                    }
                }
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class AKAZE extends Feature2D {
                public static class: java.lang.Class<AKAZE>;
                public static DESCRIPTOR_KAZE_UPRIGHT: number;
                public static DESCRIPTOR_KAZE: number;
                public static DESCRIPTOR_MLDB_UPRIGHT: number;
                public static DESCRIPTOR_MLDB: number;
                public getDescriptorChannels(): number;
                public getNOctaves(): number;
                public finalize(): void;
                public setDescriptorType(param0: number): void;
                public getDiffusivity(): number;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(param0: number, param1: number, param2: number, param3: number): AKAZE;
                public static create(): AKAZE;
                public setNOctaves(param0: number): void;
                public setDiffusivity(param0: number): void;
                public static create(param0: number): AKAZE;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): AKAZE;
                public static create(param0: number, param1: number, param2: number): AKAZE;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): AKAZE;
                public getDefaultName(): string;
                public static create(param0: number, param1: number): AKAZE;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setDescriptorSize(param0: number): void;
                public static __fromPtr__(param0: number): AKAZE;
                public getThreshold(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): AKAZE;
                public setNOctaveLayers(param0: number): void;
                public setThreshold(param0: number): void;
                public setDescriptorChannels(param0: number): void;
                public constructor(param0: number);
                public getDescriptorType(): number;
                public getDescriptorSize(): number;
                public getNOctaveLayers(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class AgastFeatureDetector extends Feature2D {
                public static class: java.lang.Class<AgastFeatureDetector>;
                public static THRESHOLD: number;
                public static NONMAX_SUPPRESSION: number;
                public static AGAST_5_8: number;
                public static AGAST_7_12d: number;
                public static AGAST_7_12s: number;
                public static OAST_9_16: number;
                public getDefaultName(): string;
                public setType(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getNonmaxSuppression(): boolean;
                public getType(): number;
                public static create(): AgastFeatureDetector;
                public getThreshold(): number;
                public static create(param0: number): AgastFeatureDetector;
                public finalize(): void;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(param0: number, param1: boolean, param2: number): AgastFeatureDetector;
                public setThreshold(param0: number): void;
                public constructor(param0: number);
                public static create(param0: number, param1: boolean): AgastFeatureDetector;
                public static __fromPtr__(param0: number): AgastFeatureDetector;
                public setNonmaxSuppression(param0: boolean): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class BFMatcher extends DescriptorMatcher {
                public static class: java.lang.Class<BFMatcher>;
                public static create(param0: number, param1: boolean): BFMatcher;
                public static create(): BFMatcher;
                public static __fromPtr__(param0: number): BFMatcher;
                public static __fromPtr__(param0: number): core.Algorithm;
                public finalize(): void;
                public constructor(param0: number);
                public constructor(param0: number, param1: boolean);
                public static create(param0: string): DescriptorMatcher;
                public static __fromPtr__(param0: number): DescriptorMatcher;
                public static create(param0: number): DescriptorMatcher;
                public constructor();
                public static create(param0: number): BFMatcher;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class BOWImgDescriptorExtractor extends java.lang.Object {
                public static class: java.lang.Class<BOWImgDescriptorExtractor>;
                public nativeObj: number;
                public static __fromPtr__(param0: number): BOWImgDescriptorExtractor;
                public setVocabulary(param0: core.Mat): void;
                public finalize(): void;
                public constructor(param0: number);
                public getNativeObjAddr(): number;
                public getVocabulary(): core.Mat;
                public descriptorSize(): number;
                public descriptorType(): number;
                public compute(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class BOWKMeansTrainer extends BOWTrainer {
                public static class: java.lang.Class<BOWKMeansTrainer>;
                public constructor(param0: number, param1: core.TermCriteria, param2: number, param3: number);
                public static __fromPtr__(param0: number): BOWTrainer;
                public cluster(param0: core.Mat): core.Mat;
                public finalize(): void;
                public constructor(param0: number);
                public constructor(param0: number, param1: core.TermCriteria);
                public static __fromPtr__(param0: number): BOWKMeansTrainer;
                public constructor(param0: number, param1: core.TermCriteria, param2: number);
                public cluster(): core.Mat;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class BOWTrainer extends java.lang.Object {
                public static class: java.lang.Class<BOWTrainer>;
                public nativeObj: number;
                public static __fromPtr__(param0: number): BOWTrainer;
                public cluster(param0: core.Mat): core.Mat;
                public clear(): void;
                public finalize(): void;
                public constructor(param0: number);
                public getNativeObjAddr(): number;
                public add(param0: core.Mat): void;
                public getDescriptors(): java.util.List<core.Mat>;
                public cluster(): core.Mat;
                public descriptorsCount(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class BRISK extends Feature2D {
                public static class: java.lang.Class<BRISK>;
                public getDefaultName(): string;
                public static create(param0: number, param1: number, param2: core.MatOfFloat, param3: core.MatOfInt, param4: number): BRISK;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): BRISK;
                public static create(param0: core.MatOfFloat, param1: core.MatOfInt, param2: number, param3: number): BRISK;
                public getThreshold(): number;
                public finalize(): void;
                public static create(param0: core.MatOfFloat, param1: core.MatOfInt, param2: number): BRISK;
                public setOctaves(param0: number): void;
                public static __fromPtr__(param0: number): Feature2D;
                public getOctaves(): number;
                public static create(param0: number, param1: number, param2: core.MatOfFloat, param3: core.MatOfInt): BRISK;
                public static create(param0: number, param1: number, param2: number): BRISK;
                public static create(): BRISK;
                public static create(param0: number, param1: number, param2: core.MatOfFloat, param3: core.MatOfInt, param4: number, param5: number, param6: core.MatOfInt): BRISK;
                public static create(param0: number, param1: number): BRISK;
                public static create(param0: number): BRISK;
                public static create(param0: core.MatOfFloat, param1: core.MatOfInt, param2: number, param3: number, param4: core.MatOfInt): BRISK;
                public setThreshold(param0: number): void;
                public static create(param0: number, param1: number, param2: core.MatOfFloat, param3: core.MatOfInt, param4: number, param5: number): BRISK;
                public constructor(param0: number);
                public static create(param0: core.MatOfFloat, param1: core.MatOfInt): BRISK;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class DescriptorMatcher extends core.Algorithm {
                public static class: java.lang.Class<DescriptorMatcher>;
                public static FLANNBASED: number;
                public static BRUTEFORCE: number;
                public static BRUTEFORCE_L1: number;
                public static BRUTEFORCE_HAMMING: number;
                public static BRUTEFORCE_HAMMINGLUT: number;
                public static BRUTEFORCE_SL2: number;
                public radiusMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number, param3: java.util.List<core.Mat>, param4: boolean): void;
                public knnMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number): void;
                public isMaskSupported(): boolean;
                public match(param0: core.Mat, param1: core.MatOfDMatch): void;
                public finalize(): void;
                public knnMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number, param3: java.util.List<core.Mat>): void;
                public knnMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number, param4: core.Mat, param5: boolean): void;
                public knnMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number, param3: java.util.List<core.Mat>, param4: boolean): void;
                public knnMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number, param4: core.Mat): void;
                public clone(): any;
                public clear(): void;
                public radiusMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number, param4: core.Mat, param5: boolean): void;
                public static __fromPtr__(param0: number): DescriptorMatcher;
                public getTrainDescriptors(): java.util.List<core.Mat>;
                public empty(): boolean;
                public static __fromPtr__(param0: number): core.Algorithm;
                public match(param0: core.Mat, param1: core.MatOfDMatch, param2: java.util.List<core.Mat>): void;
                public static create(param0: string): DescriptorMatcher;
                public clone(param0: boolean): DescriptorMatcher;
                public clone(): DescriptorMatcher;
                public static create(param0: number): DescriptorMatcher;
                public radiusMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number, param3: java.util.List<core.Mat>): void;
                public match(param0: core.Mat, param1: core.Mat, param2: core.MatOfDMatch, param3: core.Mat): void;
                public radiusMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number): void;
                public radiusMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number, param4: core.Mat): void;
                public knnMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>, param2: number): void;
                public read(param0: string): void;
                public train(): void;
                public add(param0: java.util.List<core.Mat>): void;
                public constructor(param0: number);
                public radiusMatch(param0: core.Mat, param1: core.Mat, param2: java.util.List<core.MatOfDMatch>, param3: number): void;
                public match(param0: core.Mat, param1: core.Mat, param2: core.MatOfDMatch): void;
                public write(param0: string): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class FastFeatureDetector extends Feature2D {
                public static class: java.lang.Class<FastFeatureDetector>;
                public static TYPE_5_8: number;
                public static TYPE_7_12: number;
                public static TYPE_9_16: number;
                public static THRESHOLD: number;
                public static NONMAX_SUPPRESSION: number;
                public static FAST_N: number;
                public getDefaultName(): string;
                public setType(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getNonmaxSuppression(): boolean;
                public getType(): number;
                public static create(): FastFeatureDetector;
                public getThreshold(): number;
                public finalize(): void;
                public static create(param0: number, param1: boolean): FastFeatureDetector;
                public static __fromPtr__(param0: number): Feature2D;
                public static __fromPtr__(param0: number): FastFeatureDetector;
                public static create(param0: number, param1: boolean, param2: number): FastFeatureDetector;
                public setThreshold(param0: number): void;
                public static create(param0: number): FastFeatureDetector;
                public constructor(param0: number);
                public setNonmaxSuppression(param0: boolean): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class Feature2D extends core.Algorithm {
                public static class: java.lang.Class<Feature2D>;
                public getDefaultName(): string;
                public detect(param0: core.Mat, param1: core.MatOfKeyPoint): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public finalize(): void;
                public static __fromPtr__(param0: number): Feature2D;
                public compute(param0: java.util.List<core.Mat>, param1: java.util.List<core.MatOfKeyPoint>, param2: java.util.List<core.Mat>): void;
                public detect(param0: java.util.List<core.Mat>, param1: java.util.List<core.MatOfKeyPoint>): void;
                public defaultNorm(): number;
                public detect(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat): void;
                public detectAndCompute(param0: core.Mat, param1: core.Mat, param2: core.MatOfKeyPoint, param3: core.Mat): void;
                public detect(param0: java.util.List<core.Mat>, param1: java.util.List<core.MatOfKeyPoint>, param2: java.util.List<core.Mat>): void;
                public read(param0: string): void;
                public constructor(param0: number);
                public descriptorSize(): number;
                public detectAndCompute(param0: core.Mat, param1: core.Mat, param2: core.MatOfKeyPoint, param3: core.Mat, param4: boolean): void;
                public descriptorType(): number;
                public compute(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat): void;
                public empty(): boolean;
                public write(param0: string): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class Features2d extends java.lang.Object {
                public static class: java.lang.Class<Features2d>;
                public static DrawMatchesFlags_DEFAULT: number;
                public static DrawMatchesFlags_DRAW_OVER_OUTIMG: number;
                public static DrawMatchesFlags_NOT_DRAW_SINGLE_POINTS: number;
                public static DrawMatchesFlags_DRAW_RICH_KEYPOINTS: number;
                public static drawKeypoints(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat): void;
                public static drawMatches(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: core.MatOfDMatch, param5: core.Mat, param6: core.Scalar, param7: core.Scalar, param8: core.MatOfByte): void;
                public static drawKeypoints(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.Scalar, param4: number): void;
                public static drawMatches(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: core.MatOfDMatch, param5: core.Mat, param6: core.Scalar, param7: core.Scalar): void;
                public static drawMatches(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: core.MatOfDMatch, param5: core.Mat, param6: core.Scalar): void;
                public static drawMatchesKnn(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: java.util.List<core.MatOfDMatch>, param5: core.Mat, param6: core.Scalar, param7: core.Scalar, param8: java.util.List<core.MatOfByte>, param9: number): void;
                public static drawMatchesKnn(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: java.util.List<core.MatOfDMatch>, param5: core.Mat, param6: core.Scalar, param7: core.Scalar, param8: java.util.List<core.MatOfByte>): void;
                public constructor();
                public static drawMatchesKnn(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: java.util.List<core.MatOfDMatch>, param5: core.Mat, param6: core.Scalar): void;
                public static drawMatchesKnn(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: java.util.List<core.MatOfDMatch>, param5: core.Mat, param6: core.Scalar, param7: core.Scalar): void;
                public static drawMatchesKnn(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: java.util.List<core.MatOfDMatch>, param5: core.Mat): void;
                public static drawKeypoints(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.Scalar): void;
                public static drawMatches(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: core.MatOfDMatch, param5: core.Mat, param6: core.Scalar, param7: core.Scalar, param8: core.MatOfByte, param9: number): void;
                public static drawMatches(param0: core.Mat, param1: core.MatOfKeyPoint, param2: core.Mat, param3: core.MatOfKeyPoint, param4: core.MatOfDMatch, param5: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class FlannBasedMatcher extends DescriptorMatcher {
                public static class: java.lang.Class<FlannBasedMatcher>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): FlannBasedMatcher;
                public static create(): FlannBasedMatcher;
                public finalize(): void;
                public constructor(param0: number);
                public static create(param0: string): DescriptorMatcher;
                public static __fromPtr__(param0: number): DescriptorMatcher;
                public static create(param0: number): DescriptorMatcher;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class GFTTDetector extends Feature2D {
                public static class: java.lang.Class<GFTTDetector>;
                public getK(): number;
                public static create(param0: number, param1: number): GFTTDetector;
                public static __fromPtr__(param0: number): GFTTDetector;
                public finalize(): void;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(): GFTTDetector;
                public static create(param0: number, param1: number, param2: number, param3: number): GFTTDetector;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean): GFTTDetector;
                public setMinDistance(param0: number): void;
                public setK(param0: number): void;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): GFTTDetector;
                public static create(param0: number): GFTTDetector;
                public getHarrisDetector(): boolean;
                public getMaxFeatures(): number;
                public getDefaultName(): string;
                public getQualityLevel(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: boolean, param6: number): GFTTDetector;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: number): GFTTDetector;
                public setMaxFeatures(param0: number): void;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: boolean): GFTTDetector;
                public getBlockSize(): number;
                public setQualityLevel(param0: number): void;
                public setBlockSize(param0: number): void;
                public getMinDistance(): number;
                public setHarrisDetector(param0: boolean): void;
                public constructor(param0: number);
                public static create(param0: number, param1: number, param2: number): GFTTDetector;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class KAZE extends Feature2D {
                public static class: java.lang.Class<KAZE>;
                public static DIFF_PM_G1: number;
                public static DIFF_PM_G2: number;
                public static DIFF_WEICKERT: number;
                public static DIFF_CHARBONNIER: number;
                public getNOctaves(): number;
                public setExtended(param0: boolean): void;
                public finalize(): void;
                public getExtended(): boolean;
                public setUpright(param0: boolean): void;
                public getDiffusivity(): number;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(param0: boolean, param1: boolean, param2: number, param3: number, param4: number): KAZE;
                public setNOctaves(param0: number): void;
                public setDiffusivity(param0: number): void;
                public static create(param0: boolean, param1: boolean, param2: number, param3: number): KAZE;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): KAZE;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(param0: boolean, param1: boolean, param2: number, param3: number, param4: number, param5: number): KAZE;
                public getUpright(): boolean;
                public getThreshold(): number;
                public setNOctaveLayers(param0: number): void;
                public static create(): KAZE;
                public static create(param0: boolean, param1: boolean): KAZE;
                public setThreshold(param0: number): void;
                public constructor(param0: number);
                public static create(param0: boolean, param1: boolean, param2: number): KAZE;
                public static create(param0: boolean): KAZE;
                public getNOctaveLayers(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class MSER extends Feature2D {
                public static class: java.lang.Class<MSER>;
                public finalize(): void;
                public static __fromPtr__(param0: number): Feature2D;
                public getPass2Only(): boolean;
                public setMaxArea(param0: number): void;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): MSER;
                public static create(param0: number, param1: number, param2: number, param3: number): MSER;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): MSER;
                public setDelta(param0: number): void;
                public setPass2Only(param0: boolean): void;
                public getDelta(): number;
                public detectRegions(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.MatOfRect): void;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): MSER;
                public static create(): MSER;
                public static create(param0: number, param1: number): MSER;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): MSER;
                public setMinArea(param0: number): void;
                public getMaxArea(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): MSER;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): MSER;
                public static create(param0: number, param1: number, param2: number): MSER;
                public static create(param0: number): MSER;
                public getMinArea(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class ORB extends Feature2D {
                public static class: java.lang.Class<ORB>;
                public static HARRIS_SCORE: number;
                public static FAST_SCORE: number;
                public static create(): ORB;
                public setFastThreshold(param0: number): void;
                public setNLevels(param0: number): void;
                public finalize(): void;
                public getScoreType(): number;
                public getEdgeThreshold(): number;
                public getFastThreshold(): number;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): ORB;
                public setWTA_K(param0: number): void;
                public setEdgeThreshold(param0: number): void;
                public static create(param0: number, param1: number): ORB;
                public getFirstLevel(): number;
                public static create(param0: number, param1: number, param2: number, param3: number): ORB;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): ORB;
                public getWTA_K(): number;
                public setFirstLevel(param0: number): void;
                public getMaxFeatures(): number;
                public getPatchSize(): number;
                public setScoreType(param0: number): void;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(param0: number): ORB;
                public setScaleFactor(param0: number): void;
                public static create(param0: number, param1: number, param2: number): ORB;
                public setMaxFeatures(param0: number): void;
                public getNLevels(): number;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): ORB;
                public getScaleFactor(): number;
                public setPatchSize(param0: number): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): ORB;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): ORB;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): ORB;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class Params extends java.lang.Object {
                public static class: java.lang.Class<Params>;
                public nativeObj: number;
                public set_filterByCircularity(param0: boolean): void;
                public set_maxArea(param0: number): void;
                public get_filterByColor(): boolean;
                public get_maxInertiaRatio(): number;
                public finalize(): void;
                public get_maxThreshold(): number;
                public set_minArea(param0: number): void;
                public set_maxConvexity(param0: number): void;
                public constructor();
                public get_minConvexity(): number;
                public get_filterByArea(): boolean;
                public set_filterByInertia(param0: boolean): void;
                public set_minInertiaRatio(param0: number): void;
                public set_filterByConvexity(param0: boolean): void;
                public set_filterByColor(param0: boolean): void;
                public get_minRepeatability(): number;
                public set_minDistBetweenBlobs(param0: number): void;
                public set_maxInertiaRatio(param0: number): void;
                public get_maxConvexity(): number;
                public set_filterByArea(param0: boolean): void;
                public get_minArea(): number;
                public get_minCircularity(): number;
                public set_minCircularity(param0: number): void;
                public getNativeObjAddr(): number;
                public get_filterByInertia(): boolean;
                public set_thresholdStep(param0: number): void;
                public set_minRepeatability(param0: number): void;
                public get_minDistBetweenBlobs(): number;
                public get_thresholdStep(): number;
                public get_maxCircularity(): number;
                public set_minConvexity(param0: number): void;
                public static __fromPtr__(param0: number): Params;
                public get_filterByConvexity(): boolean;
                public set_minThreshold(param0: number): void;
                public get_minThreshold(): number;
                public set_maxThreshold(param0: number): void;
                public get_filterByCircularity(): boolean;
                public set_maxCircularity(param0: number): void;
                public get_maxArea(): number;
                public constructor(param0: number);
                public get_minInertiaRatio(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class SIFT extends Feature2D {
                public static class: java.lang.Class<SIFT>;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(param0: number, param1: number, param2: number, param3: number): SIFT;
                public static create(param0: number, param1: number, param2: number, param3: number, param4: number): SIFT;
                public static create(): SIFT;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): SIFT;
                public static create(param0: number, param1: number): SIFT;
                public static create(param0: number, param1: number, param2: number): SIFT;
                public static __fromPtr__(param0: number): Feature2D;
                public static create(param0: number): SIFT;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace features2d {
            export class SimpleBlobDetector extends Feature2D {
                public static class: java.lang.Class<SimpleBlobDetector>;
                public getDefaultName(): string;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static create(): SimpleBlobDetector;
                public static __fromPtr__(param0: number): SimpleBlobDetector;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): Feature2D;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgcodecs {
            export class Imgcodecs extends java.lang.Object {
                public static class: java.lang.Class<Imgcodecs>;
                public static IMWRITE_JPEG_QUALITY: number;
                public static IMWRITE_JPEG_PROGRESSIVE: number;
                public static IMWRITE_JPEG_OPTIMIZE: number;
                public static IMWRITE_JPEG_RST_INTERVAL: number;
                public static IMWRITE_JPEG_LUMA_QUALITY: number;
                public static IMWRITE_JPEG_CHROMA_QUALITY: number;
                public static IMWRITE_PNG_COMPRESSION: number;
                public static IMWRITE_PNG_STRATEGY: number;
                public static IMWRITE_PNG_BILEVEL: number;
                public static IMWRITE_PXM_BINARY: number;
                public static IMWRITE_EXR_TYPE: number;
                public static IMWRITE_WEBP_QUALITY: number;
                public static IMWRITE_PAM_TUPLETYPE: number;
                public static IMWRITE_TIFF_RESUNIT: number;
                public static IMWRITE_TIFF_XDPI: number;
                public static IMWRITE_TIFF_YDPI: number;
                public static IMWRITE_TIFF_COMPRESSION: number;
                public static IMWRITE_JPEG2000_COMPRESSION_X1000: number;
                public static IMREAD_UNCHANGED: number;
                public static IMREAD_GRAYSCALE: number;
                public static IMREAD_COLOR: number;
                public static IMREAD_ANYDEPTH: number;
                public static IMREAD_ANYCOLOR: number;
                public static IMREAD_LOAD_GDAL: number;
                public static IMREAD_REDUCED_GRAYSCALE_2: number;
                public static IMREAD_REDUCED_COLOR_2: number;
                public static IMREAD_REDUCED_GRAYSCALE_4: number;
                public static IMREAD_REDUCED_COLOR_4: number;
                public static IMREAD_REDUCED_GRAYSCALE_8: number;
                public static IMREAD_REDUCED_COLOR_8: number;
                public static IMREAD_IGNORE_ORIENTATION: number;
                public static IMWRITE_PAM_FORMAT_NULL: number;
                public static IMWRITE_PAM_FORMAT_BLACKANDWHITE: number;
                public static IMWRITE_PAM_FORMAT_GRAYSCALE: number;
                public static IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA: number;
                public static IMWRITE_PAM_FORMAT_RGB: number;
                public static IMWRITE_PAM_FORMAT_RGB_ALPHA: number;
                public static IMWRITE_EXR_TYPE_HALF: number;
                public static IMWRITE_EXR_TYPE_FLOAT: number;
                public static IMWRITE_PNG_STRATEGY_DEFAULT: number;
                public static IMWRITE_PNG_STRATEGY_FILTERED: number;
                public static IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY: number;
                public static IMWRITE_PNG_STRATEGY_RLE: number;
                public static IMWRITE_PNG_STRATEGY_FIXED: number;
                public static imwrite(param0: string, param1: core.Mat, param2: core.MatOfInt): boolean;
                public static imdecode(param0: core.Mat, param1: number): core.Mat;
                public static imread(param0: string): core.Mat;
                public static imreadmulti(param0: string, param1: java.util.List<core.Mat>, param2: number): boolean;
                public static imread(param0: string, param1: number): core.Mat;
                public static haveImageWriter(param0: string): boolean;
                public static imencode(param0: string, param1: core.Mat, param2: core.MatOfByte, param3: core.MatOfInt): boolean;
                public static imreadmulti(param0: string, param1: java.util.List<core.Mat>): boolean;
                public static imwrite(param0: string, param1: core.Mat): boolean;
                public static haveImageReader(param0: string): boolean;
                public static imencode(param0: string, param1: core.Mat, param2: core.MatOfByte): boolean;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class CLAHE extends core.Algorithm {
                public static class: java.lang.Class<CLAHE>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public collectGarbage(): void;
                public getClipLimit(): number;
                public finalize(): void;
                public constructor(param0: number);
                public getTilesGridSize(): core.Size;
                public setTilesGridSize(param0: core.Size): void;
                public setClipLimit(param0: number): void;
                public static __fromPtr__(param0: number): CLAHE;
                public apply(param0: core.Mat, param1: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class GeneralizedHough extends core.Algorithm {
                public static class: java.lang.Class<GeneralizedHough>;
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public getMinDist(): number;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setTemplate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point): void;
                public getCannyLowThresh(): number;
                public detect(param0: core.Mat, param1: core.Mat): void;
                public setTemplate(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public setMinDist(param0: number): void;
                public finalize(): void;
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public setTemplate(param0: core.Mat, param1: core.Point): void;
                public getMaxBufferSize(): number;
                public setDp(param0: number): void;
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public setTemplate(param0: core.Mat): void;
                public static __fromPtr__(param0: number): GeneralizedHough;
                public getCannyHighThresh(): number;
                public setCannyLowThresh(param0: number): void;
                public constructor(param0: number);
                public getDp(): number;
                public setCannyHighThresh(param0: number): void;
                public setMaxBufferSize(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class GeneralizedHoughBallard extends GeneralizedHough {
                public static class: java.lang.Class<GeneralizedHoughBallard>;
                public static __fromPtr__(param0: number): GeneralizedHough;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setLevels(param0: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public getVotesThreshold(): number;
                public setVotesThreshold(param0: number): void;
                public getLevels(): number;
                public static __fromPtr__(param0: number): GeneralizedHoughBallard;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class GeneralizedHoughGuil extends GeneralizedHough {
                public static class: java.lang.Class<GeneralizedHoughGuil>;
                public setAngleEpsilon(param0: number): void;
                public getAngleThresh(): number;
                public setPosThresh(param0: number): void;
                public setXi(param0: number): void;
                public setMaxScale(param0: number): void;
                public getMinScale(): number;
                public finalize(): void;
                public getMaxScale(): number;
                public getLevels(): number;
                public setAngleStep(param0: number): void;
                public setScaleThresh(param0: number): void;
                public static __fromPtr__(param0: number): GeneralizedHough;
                public getMinAngle(): number;
                public setLevels(param0: number): void;
                public getPosThresh(): number;
                public getScaleThresh(): number;
                public setMinScale(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getAngleStep(): number;
                public getScaleStep(): number;
                public getXi(): number;
                public setMinAngle(param0: number): void;
                public setScaleStep(param0: number): void;
                public setAngleThresh(param0: number): void;
                public setMaxAngle(param0: number): void;
                public static __fromPtr__(param0: number): GeneralizedHoughGuil;
                public getMaxAngle(): number;
                public constructor(param0: number);
                public getAngleEpsilon(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class Imgproc extends java.lang.Object {
                public static class: java.lang.Class<Imgproc>;
                public static FONT_HERSHEY_SIMPLEX: number;
                public static FONT_HERSHEY_PLAIN: number;
                public static FONT_HERSHEY_DUPLEX: number;
                public static FONT_HERSHEY_COMPLEX: number;
                public static FONT_HERSHEY_TRIPLEX: number;
                public static FONT_HERSHEY_COMPLEX_SMALL: number;
                public static FONT_HERSHEY_SCRIPT_SIMPLEX: number;
                public static FONT_HERSHEY_SCRIPT_COMPLEX: number;
                public static FONT_ITALIC: number;
                public static INTER_BITS: number;
                public static INTER_BITS2: number;
                public static INTER_TAB_SIZE: number;
                public static INTER_TAB_SIZE2: number;
                public static MORPH_ERODE: number;
                public static MORPH_DILATE: number;
                public static MORPH_OPEN: number;
                public static MORPH_CLOSE: number;
                public static MORPH_GRADIENT: number;
                public static MORPH_TOPHAT: number;
                public static MORPH_BLACKHAT: number;
                public static MORPH_HITMISS: number;
                public static FLOODFILL_FIXED_RANGE: number;
                public static FLOODFILL_MASK_ONLY: number;
                public static HOUGH_STANDARD: number;
                public static HOUGH_PROBABILISTIC: number;
                public static HOUGH_MULTI_SCALE: number;
                public static HOUGH_GRADIENT: number;
                public static HOUGH_GRADIENT_ALT: number;
                public static CCL_WU: number;
                public static CCL_DEFAULT: number;
                public static CCL_GRANA: number;
                public static RETR_EXTERNAL: number;
                public static RETR_LIST: number;
                public static RETR_CCOMP: number;
                public static RETR_TREE: number;
                public static RETR_FLOODFILL: number;
                public static GC_BGD: number;
                public static GC_FGD: number;
                public static GC_PR_BGD: number;
                public static GC_PR_FGD: number;
                public static COLORMAP_AUTUMN: number;
                public static COLORMAP_BONE: number;
                public static COLORMAP_JET: number;
                public static COLORMAP_WINTER: number;
                public static COLORMAP_RAINBOW: number;
                public static COLORMAP_OCEAN: number;
                public static COLORMAP_SUMMER: number;
                public static COLORMAP_SPRING: number;
                public static COLORMAP_COOL: number;
                public static COLORMAP_HSV: number;
                public static COLORMAP_PINK: number;
                public static COLORMAP_HOT: number;
                public static COLORMAP_PARULA: number;
                public static COLORMAP_MAGMA: number;
                public static COLORMAP_INFERNO: number;
                public static COLORMAP_PLASMA: number;
                public static COLORMAP_VIRIDIS: number;
                public static COLORMAP_CIVIDIS: number;
                public static COLORMAP_TWILIGHT: number;
                public static COLORMAP_TWILIGHT_SHIFTED: number;
                public static COLORMAP_TURBO: number;
                public static COLORMAP_DEEPGREEN: number;
                public static HISTCMP_CORREL: number;
                public static HISTCMP_CHISQR: number;
                public static HISTCMP_INTERSECT: number;
                public static HISTCMP_BHATTACHARYYA: number;
                public static HISTCMP_HELLINGER: number;
                public static HISTCMP_CHISQR_ALT: number;
                public static HISTCMP_KL_DIV: number;
                public static FILLED: number;
                public static LINE_4: number;
                public static LINE_8: number;
                public static LINE_AA: number;
                public static INTER_NEAREST: number;
                public static INTER_LINEAR: number;
                public static INTER_CUBIC: number;
                public static INTER_AREA: number;
                public static INTER_LANCZOS4: number;
                public static INTER_LINEAR_EXACT: number;
                public static INTER_MAX: number;
                public static WARP_FILL_OUTLIERS: number;
                public static WARP_INVERSE_MAP: number;
                public static FILTER_SCHARR: number;
                public static CHAIN_APPROX_NONE: number;
                public static CHAIN_APPROX_SIMPLE: number;
                public static CHAIN_APPROX_TC89_L1: number;
                public static CHAIN_APPROX_TC89_KCOS: number;
                public static INTERSECT_NONE: number;
                public static INTERSECT_PARTIAL: number;
                public static INTERSECT_FULL: number;
                public static CV_GAUSSIAN_5x5: number;
                public static CV_SCHARR: number;
                public static CV_MAX_SOBEL_KSIZE: number;
                public static CV_RGBA2mRGBA: number;
                public static CV_mRGBA2RGBA: number;
                public static CV_WARP_FILL_OUTLIERS: number;
                public static CV_WARP_INVERSE_MAP: number;
                public static CV_CHAIN_CODE: number;
                public static CV_LINK_RUNS: number;
                public static CV_POLY_APPROX_DP: number;
                public static CV_CONTOURS_MATCH_I1: number;
                public static CV_CONTOURS_MATCH_I2: number;
                public static CV_CONTOURS_MATCH_I3: number;
                public static CV_CLOCKWISE: number;
                public static CV_COUNTER_CLOCKWISE: number;
                public static CV_COMP_CORREL: number;
                public static CV_COMP_CHISQR: number;
                public static CV_COMP_INTERSECT: number;
                public static CV_COMP_BHATTACHARYYA: number;
                public static CV_COMP_HELLINGER: number;
                public static CV_COMP_CHISQR_ALT: number;
                public static CV_COMP_KL_DIV: number;
                public static CV_DIST_MASK_3: number;
                public static CV_DIST_MASK_5: number;
                public static CV_DIST_MASK_PRECISE: number;
                public static CV_DIST_LABEL_CCOMP: number;
                public static CV_DIST_LABEL_PIXEL: number;
                public static CV_DIST_USER: number;
                public static CV_DIST_L1: number;
                public static CV_DIST_L2: number;
                public static CV_DIST_C: number;
                public static CV_DIST_L12: number;
                public static CV_DIST_FAIR: number;
                public static CV_DIST_WELSCH: number;
                public static CV_DIST_HUBER: number;
                public static CV_CANNY_L2_GRADIENT: number;
                public static CV_HOUGH_STANDARD: number;
                public static CV_HOUGH_PROBABILISTIC: number;
                public static CV_HOUGH_MULTI_SCALE: number;
                public static CV_HOUGH_GRADIENT: number;
                public static CONTOURS_MATCH_I1: number;
                public static CONTOURS_MATCH_I2: number;
                public static CONTOURS_MATCH_I3: number;
                public static WARP_POLAR_LINEAR: number;
                public static WARP_POLAR_LOG: number;
                public static COLOR_BGR2BGRA: number;
                public static COLOR_RGB2RGBA: number;
                public static COLOR_BGRA2BGR: number;
                public static COLOR_RGBA2RGB: number;
                public static COLOR_BGR2RGBA: number;
                public static COLOR_RGB2BGRA: number;
                public static COLOR_RGBA2BGR: number;
                public static COLOR_BGRA2RGB: number;
                public static COLOR_BGR2RGB: number;
                public static COLOR_RGB2BGR: number;
                public static COLOR_BGRA2RGBA: number;
                public static COLOR_RGBA2BGRA: number;
                public static COLOR_BGR2GRAY: number;
                public static COLOR_RGB2GRAY: number;
                public static COLOR_GRAY2BGR: number;
                public static COLOR_GRAY2RGB: number;
                public static COLOR_GRAY2BGRA: number;
                public static COLOR_GRAY2RGBA: number;
                public static COLOR_BGRA2GRAY: number;
                public static COLOR_RGBA2GRAY: number;
                public static COLOR_BGR2BGR565: number;
                public static COLOR_RGB2BGR565: number;
                public static COLOR_BGR5652BGR: number;
                public static COLOR_BGR5652RGB: number;
                public static COLOR_BGRA2BGR565: number;
                public static COLOR_RGBA2BGR565: number;
                public static COLOR_BGR5652BGRA: number;
                public static COLOR_BGR5652RGBA: number;
                public static COLOR_GRAY2BGR565: number;
                public static COLOR_BGR5652GRAY: number;
                public static COLOR_BGR2BGR555: number;
                public static COLOR_RGB2BGR555: number;
                public static COLOR_BGR5552BGR: number;
                public static COLOR_BGR5552RGB: number;
                public static COLOR_BGRA2BGR555: number;
                public static COLOR_RGBA2BGR555: number;
                public static COLOR_BGR5552BGRA: number;
                public static COLOR_BGR5552RGBA: number;
                public static COLOR_GRAY2BGR555: number;
                public static COLOR_BGR5552GRAY: number;
                public static COLOR_BGR2XYZ: number;
                public static COLOR_RGB2XYZ: number;
                public static COLOR_XYZ2BGR: number;
                public static COLOR_XYZ2RGB: number;
                public static COLOR_BGR2YCrCb: number;
                public static COLOR_RGB2YCrCb: number;
                public static COLOR_YCrCb2BGR: number;
                public static COLOR_YCrCb2RGB: number;
                public static COLOR_BGR2HSV: number;
                public static COLOR_RGB2HSV: number;
                public static COLOR_BGR2Lab: number;
                public static COLOR_RGB2Lab: number;
                public static COLOR_BGR2Luv: number;
                public static COLOR_RGB2Luv: number;
                public static COLOR_BGR2HLS: number;
                public static COLOR_RGB2HLS: number;
                public static COLOR_HSV2BGR: number;
                public static COLOR_HSV2RGB: number;
                public static COLOR_Lab2BGR: number;
                public static COLOR_Lab2RGB: number;
                public static COLOR_Luv2BGR: number;
                public static COLOR_Luv2RGB: number;
                public static COLOR_HLS2BGR: number;
                public static COLOR_HLS2RGB: number;
                public static COLOR_BGR2HSV_FULL: number;
                public static COLOR_RGB2HSV_FULL: number;
                public static COLOR_BGR2HLS_FULL: number;
                public static COLOR_RGB2HLS_FULL: number;
                public static COLOR_HSV2BGR_FULL: number;
                public static COLOR_HSV2RGB_FULL: number;
                public static COLOR_HLS2BGR_FULL: number;
                public static COLOR_HLS2RGB_FULL: number;
                public static COLOR_LBGR2Lab: number;
                public static COLOR_LRGB2Lab: number;
                public static COLOR_LBGR2Luv: number;
                public static COLOR_LRGB2Luv: number;
                public static COLOR_Lab2LBGR: number;
                public static COLOR_Lab2LRGB: number;
                public static COLOR_Luv2LBGR: number;
                public static COLOR_Luv2LRGB: number;
                public static COLOR_BGR2YUV: number;
                public static COLOR_RGB2YUV: number;
                public static COLOR_YUV2BGR: number;
                public static COLOR_YUV2RGB: number;
                public static COLOR_YUV2RGB_NV12: number;
                public static COLOR_YUV2BGR_NV12: number;
                public static COLOR_YUV2RGB_NV21: number;
                public static COLOR_YUV2BGR_NV21: number;
                public static COLOR_YUV420sp2RGB: number;
                public static COLOR_YUV420sp2BGR: number;
                public static COLOR_YUV2RGBA_NV12: number;
                public static COLOR_YUV2BGRA_NV12: number;
                public static COLOR_YUV2RGBA_NV21: number;
                public static COLOR_YUV2BGRA_NV21: number;
                public static COLOR_YUV420sp2RGBA: number;
                public static COLOR_YUV420sp2BGRA: number;
                public static COLOR_YUV2RGB_YV12: number;
                public static COLOR_YUV2BGR_YV12: number;
                public static COLOR_YUV2RGB_IYUV: number;
                public static COLOR_YUV2BGR_IYUV: number;
                public static COLOR_YUV2RGB_I420: number;
                public static COLOR_YUV2BGR_I420: number;
                public static COLOR_YUV420p2RGB: number;
                public static COLOR_YUV420p2BGR: number;
                public static COLOR_YUV2RGBA_YV12: number;
                public static COLOR_YUV2BGRA_YV12: number;
                public static COLOR_YUV2RGBA_IYUV: number;
                public static COLOR_YUV2BGRA_IYUV: number;
                public static COLOR_YUV2RGBA_I420: number;
                public static COLOR_YUV2BGRA_I420: number;
                public static COLOR_YUV420p2RGBA: number;
                public static COLOR_YUV420p2BGRA: number;
                public static COLOR_YUV2GRAY_420: number;
                public static COLOR_YUV2GRAY_NV21: number;
                public static COLOR_YUV2GRAY_NV12: number;
                public static COLOR_YUV2GRAY_YV12: number;
                public static COLOR_YUV2GRAY_IYUV: number;
                public static COLOR_YUV2GRAY_I420: number;
                public static COLOR_YUV420sp2GRAY: number;
                public static COLOR_YUV420p2GRAY: number;
                public static COLOR_YUV2RGB_UYVY: number;
                public static COLOR_YUV2BGR_UYVY: number;
                public static COLOR_YUV2RGB_Y422: number;
                public static COLOR_YUV2BGR_Y422: number;
                public static COLOR_YUV2RGB_UYNV: number;
                public static COLOR_YUV2BGR_UYNV: number;
                public static COLOR_YUV2RGBA_UYVY: number;
                public static COLOR_YUV2BGRA_UYVY: number;
                public static COLOR_YUV2RGBA_Y422: number;
                public static COLOR_YUV2BGRA_Y422: number;
                public static COLOR_YUV2RGBA_UYNV: number;
                public static COLOR_YUV2BGRA_UYNV: number;
                public static COLOR_YUV2RGB_YUY2: number;
                public static COLOR_YUV2BGR_YUY2: number;
                public static COLOR_YUV2RGB_YVYU: number;
                public static COLOR_YUV2BGR_YVYU: number;
                public static COLOR_YUV2RGB_YUYV: number;
                public static COLOR_YUV2BGR_YUYV: number;
                public static COLOR_YUV2RGB_YUNV: number;
                public static COLOR_YUV2BGR_YUNV: number;
                public static COLOR_YUV2RGBA_YUY2: number;
                public static COLOR_YUV2BGRA_YUY2: number;
                public static COLOR_YUV2RGBA_YVYU: number;
                public static COLOR_YUV2BGRA_YVYU: number;
                public static COLOR_YUV2RGBA_YUYV: number;
                public static COLOR_YUV2BGRA_YUYV: number;
                public static COLOR_YUV2RGBA_YUNV: number;
                public static COLOR_YUV2BGRA_YUNV: number;
                public static COLOR_YUV2GRAY_UYVY: number;
                public static COLOR_YUV2GRAY_YUY2: number;
                public static COLOR_YUV2GRAY_Y422: number;
                public static COLOR_YUV2GRAY_UYNV: number;
                public static COLOR_YUV2GRAY_YVYU: number;
                public static COLOR_YUV2GRAY_YUYV: number;
                public static COLOR_YUV2GRAY_YUNV: number;
                public static COLOR_RGBA2mRGBA: number;
                public static COLOR_mRGBA2RGBA: number;
                public static COLOR_RGB2YUV_I420: number;
                public static COLOR_BGR2YUV_I420: number;
                public static COLOR_RGB2YUV_IYUV: number;
                public static COLOR_BGR2YUV_IYUV: number;
                public static COLOR_RGBA2YUV_I420: number;
                public static COLOR_BGRA2YUV_I420: number;
                public static COLOR_RGBA2YUV_IYUV: number;
                public static COLOR_BGRA2YUV_IYUV: number;
                public static COLOR_RGB2YUV_YV12: number;
                public static COLOR_BGR2YUV_YV12: number;
                public static COLOR_RGBA2YUV_YV12: number;
                public static COLOR_BGRA2YUV_YV12: number;
                public static COLOR_BayerBG2BGR: number;
                public static COLOR_BayerGB2BGR: number;
                public static COLOR_BayerRG2BGR: number;
                public static COLOR_BayerGR2BGR: number;
                public static COLOR_BayerBG2RGB: number;
                public static COLOR_BayerGB2RGB: number;
                public static COLOR_BayerRG2RGB: number;
                public static COLOR_BayerGR2RGB: number;
                public static COLOR_BayerBG2GRAY: number;
                public static COLOR_BayerGB2GRAY: number;
                public static COLOR_BayerRG2GRAY: number;
                public static COLOR_BayerGR2GRAY: number;
                public static COLOR_BayerBG2BGR_VNG: number;
                public static COLOR_BayerGB2BGR_VNG: number;
                public static COLOR_BayerRG2BGR_VNG: number;
                public static COLOR_BayerGR2BGR_VNG: number;
                public static COLOR_BayerBG2RGB_VNG: number;
                public static COLOR_BayerGB2RGB_VNG: number;
                public static COLOR_BayerRG2RGB_VNG: number;
                public static COLOR_BayerGR2RGB_VNG: number;
                public static COLOR_BayerBG2BGR_EA: number;
                public static COLOR_BayerGB2BGR_EA: number;
                public static COLOR_BayerRG2BGR_EA: number;
                public static COLOR_BayerGR2BGR_EA: number;
                public static COLOR_BayerBG2RGB_EA: number;
                public static COLOR_BayerGB2RGB_EA: number;
                public static COLOR_BayerRG2RGB_EA: number;
                public static COLOR_BayerGR2RGB_EA: number;
                public static COLOR_BayerBG2BGRA: number;
                public static COLOR_BayerGB2BGRA: number;
                public static COLOR_BayerRG2BGRA: number;
                public static COLOR_BayerGR2BGRA: number;
                public static COLOR_BayerBG2RGBA: number;
                public static COLOR_BayerGB2RGBA: number;
                public static COLOR_BayerRG2RGBA: number;
                public static COLOR_BayerGR2RGBA: number;
                public static COLOR_COLORCVT_MAX: number;
                public static LSD_REFINE_NONE: number;
                public static LSD_REFINE_STD: number;
                public static LSD_REFINE_ADV: number;
                public static THRESH_BINARY: number;
                public static THRESH_BINARY_INV: number;
                public static THRESH_TRUNC: number;
                public static THRESH_TOZERO: number;
                public static THRESH_TOZERO_INV: number;
                public static THRESH_MASK: number;
                public static THRESH_OTSU: number;
                public static THRESH_TRIANGLE: number;
                public static ADAPTIVE_THRESH_MEAN_C: number;
                public static ADAPTIVE_THRESH_GAUSSIAN_C: number;
                public static CV_SHAPE_RECT: number;
                public static CV_SHAPE_CROSS: number;
                public static CV_SHAPE_ELLIPSE: number;
                public static CV_SHAPE_CUSTOM: number;
                public static GC_INIT_WITH_RECT: number;
                public static GC_INIT_WITH_MASK: number;
                public static GC_EVAL: number;
                public static GC_EVAL_FREEZE_MODEL: number;
                public static MORPH_RECT: number;
                public static MORPH_CROSS: number;
                public static MORPH_ELLIPSE: number;
                public static DIST_LABEL_CCOMP: number;
                public static DIST_LABEL_PIXEL: number;
                public static DIST_USER: number;
                public static DIST_L1: number;
                public static DIST_L2: number;
                public static DIST_C: number;
                public static DIST_L12: number;
                public static DIST_FAIR: number;
                public static DIST_WELSCH: number;
                public static DIST_HUBER: number;
                public static TM_SQDIFF: number;
                public static TM_SQDIFF_NORMED: number;
                public static TM_CCORR: number;
                public static TM_CCORR_NORMED: number;
                public static TM_CCOEFF: number;
                public static TM_CCOEFF_NORMED: number;
                public static DIST_MASK_3: number;
                public static DIST_MASK_5: number;
                public static DIST_MASK_PRECISE: number;
                public static CC_STAT_LEFT: number;
                public static CC_STAT_TOP: number;
                public static CC_STAT_WIDTH: number;
                public static CC_STAT_HEIGHT: number;
                public static CC_STAT_AREA: number;
                public static CC_STAT_MAX: number;
                public static CV_BLUR_NO_SCALE: number;
                public static CV_BLUR: number;
                public static CV_GAUSSIAN: number;
                public static CV_MEDIAN: number;
                public static CV_BILATERAL: number;
                public static MARKER_CROSS: number;
                public static MARKER_TILTED_CROSS: number;
                public static MARKER_STAR: number;
                public static MARKER_DIAMOND: number;
                public static MARKER_SQUARE: number;
                public static MARKER_TRIANGLE_UP: number;
                public static MARKER_TRIANGLE_DOWN: number;
                public static HoughLinesPointSet(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
                public static circle(param0: core.Mat, param1: core.Point, param2: number, param3: core.Scalar, param4: number, param5: number, param6: number): void;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number, param7: number, param8: boolean, param9: number): void;
                public static floodFill(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: core.Scalar, param4: core.Rect): number;
                public static rectangle(param0: core.Mat, param1: core.Rect, param2: core.Scalar, param3: number, param4: number, param5: number): void;
                public static getGaborKernel(param0: core.Size, param1: number, param2: number, param3: number, param4: number, param5: number): core.Mat;
                public static intersectConvexConvex(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: boolean): number;
                public static GaussianBlur(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: number): void;
                public static accumulateProduct(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static integral(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static Scharr(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static sqrBoxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point, param5: boolean): void;
                public static minAreaRect(param0: core.MatOfPoint2f): core.RotatedRect;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number, param7: number): void;
                public static drawMarker(param0: core.Mat, param1: core.Point, param2: core.Scalar): void;
                public static Scharr(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                public static circle(param0: core.Mat, param1: core.Point, param2: number, param3: core.Scalar, param4: number, param5: number): void;
                public static createHanningWindow(param0: core.Mat, param1: core.Size, param2: number): void;
                public static connectedComponentsWithStats(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): number;
                public static ellipse(param0: core.Mat, param1: core.Point, param2: core.Size, param3: number, param4: number, param5: number, param6: core.Scalar, param7: number, param8: number, param9: number): void;
                public static distanceTransformWithLabels(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): void;
                public static applyColorMap(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static grabCut(param0: core.Mat, param1: core.Mat, param2: core.Rect, param3: core.Mat, param4: core.Mat, param5: number, param6: number): void;
                public static polylines(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: boolean, param3: core.Scalar, param4: number, param5: number, param6: number): void;
                public static connectedComponents(param0: core.Mat, param1: core.Mat, param2: number, param3: number): number;
                public static HoughLines(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static morphologyEx(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat): void;
                public static ellipse(param0: core.Mat, param1: core.RotatedRect, param2: core.Scalar): void;
                public static cornerSubPix(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Size, param4: core.TermCriteria): void;
                public static arrowedLine(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number): void;
                public static cornerMinEigenVal(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number): LineSegmentDetector;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number, param7: boolean): void;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat): void;
                public static moments(param0: core.Mat): Moments;
                public static getRectSubPix(param0: core.Mat, param1: core.Size, param2: core.Point, param3: core.Mat, param4: number): void;
                public static filter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point): void;
                public static putText(param0: core.Mat, param1: string, param2: core.Point, param3: number, param4: number, param5: core.Scalar, param6: number, param7: number, param8: boolean): void;
                public static connectedComponentsWithStats(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): number;
                public static accumulateSquare(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static watershed(param0: core.Mat, param1: core.Mat): void;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number): LineSegmentDetector;
                public static createLineSegmentDetector(param0: number, param1: number): LineSegmentDetector;
                public static pointPolygonTest(param0: core.MatOfPoint2f, param1: core.Point, param2: boolean): number;
                public static filter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point, param5: number): void;
                public static resize(param0: core.Mat, param1: core.Mat, param2: core.Size): void;
                public static integral3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): void;
                public static warpPerspective(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size): void;
                public static Canny(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar, param4: number): void;
                public static ellipse(param0: core.Mat, param1: core.RotatedRect, param2: core.Scalar, param3: number): void;
                public static polylines(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: boolean, param3: core.Scalar, param4: number): void;
                public static blur(param0: core.Mat, param1: core.Mat, param2: core.Size): void;
                public static getPerspectiveTransform(param0: core.Mat, param1: core.Mat, param2: number): core.Mat;
                public static drawMarker(param0: core.Mat, param1: core.Point, param2: core.Scalar, param3: number, param4: number, param5: number): void;
                public static ellipse(param0: core.Mat, param1: core.Point, param2: core.Size, param3: number, param4: number, param5: number, param6: core.Scalar, param7: number): void;
                public static blur(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Point, param4: number): void;
                public static getGaussianKernel(param0: number, param1: number, param2: number): core.Mat;
                public static fitEllipseAMS(param0: core.Mat): core.RotatedRect;
                public static arrowedLine(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number, param6: number, param7: number): void;
                public static cornerHarris(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static polylines(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: boolean, param3: core.Scalar, param4: number, param5: number): void;
                public static fillConvexPoly(param0: core.Mat, param1: core.MatOfPoint, param2: core.Scalar): void;
                public static ellipse(param0: core.Mat, param1: core.RotatedRect, param2: core.Scalar, param3: number, param4: number): void;
                public static pyrMeanShiftFiltering(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: core.TermCriteria): void;
                public static erode(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number, param5: number, param6: core.Scalar): void;
                public static approxPolyDP(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f, param2: number, param3: boolean): void;
                public static convexityDefects(param0: core.MatOfPoint, param1: core.MatOfInt, param2: core.MatOfInt4): void;
                public static ellipse2Poly(param0: core.Point, param1: core.Size, param2: number, param3: number, param4: number, param5: number, param6: core.MatOfPoint): void;
                public static circle(param0: core.Mat, param1: core.Point, param2: number, param3: core.Scalar, param4: number): void;
                public static invertAffineTransform(param0: core.Mat, param1: core.Mat): void;
                public static fitEllipseDirect(param0: core.Mat): core.RotatedRect;
                public static floodFill(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: core.Scalar, param4: core.Rect, param5: core.Scalar, param6: core.Scalar): number;
                public static arrowedLine(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number): void;
                public static integral2(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static sqrBoxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point, param5: boolean, param6: number): void;
                public static drawMarker(param0: core.Mat, param1: core.Point, param2: core.Scalar, param3: number, param4: number, param5: number, param6: number): void;
                public static accumulate(param0: core.Mat, param1: core.Mat): void;
                public static calcHist(param0: java.util.List<core.Mat>, param1: core.MatOfInt, param2: core.Mat, param3: core.Mat, param4: core.MatOfInt, param5: core.MatOfFloat): void;
                public static convexHull(param0: core.MatOfPoint, param1: core.MatOfInt, param2: boolean): void;
                public static rectangle(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar): void;
                public static ellipse(param0: core.Mat, param1: core.Point, param2: core.Size, param3: number, param4: number, param5: number, param6: core.Scalar, param7: number, param8: number): void;
                public static Canny(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static contourArea(param0: core.Mat): number;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): LineSegmentDetector;
                public static boxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point, param5: boolean, param6: number): void;
                public static drawMarker(param0: core.Mat, param1: core.Point, param2: core.Scalar, param3: number): void;
                public static accumulateSquare(param0: core.Mat, param1: core.Mat): void;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number): LineSegmentDetector;
                public static cornerMinEigenVal(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static dilate(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static Canny(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: boolean): void;
                public static rotatedRectangleIntersection(param0: core.RotatedRect, param1: core.RotatedRect, param2: core.Mat): number;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number): void;
                public static getRectSubPix(param0: core.Mat, param1: core.Size, param2: core.Point, param3: core.Mat): void;
                public static createLineSegmentDetector(): LineSegmentDetector;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar, param4: number, param5: number): void;
                public static HoughCircles(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                public static isContourConvex(param0: core.MatOfPoint): boolean;
                public static Scharr(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static findContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Mat, param3: number, param4: number, param5: core.Point): void;
                public static Sobel(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static getGaussianKernel(param0: number, param1: number): core.Mat;
                public static warpPerspective(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number, param5: number, param6: core.Scalar): void;
                public static boxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point): void;
                /** @deprecated */
                public static logPolar(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: number, param4: number): void;
                public static integral3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number): void;
                public static convertMaps(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: boolean): void;
                public static cvtColorTwoPlane(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static arrowedLine(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar): void;
                public static applyColorMap(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static findContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Mat, param3: number, param4: number): void;
                public static convexHull(param0: core.MatOfPoint, param1: core.MatOfInt): void;
                public static fillConvexPoly(param0: core.Mat, param1: core.MatOfPoint, param2: core.Scalar, param3: number, param4: number): void;
                public static fillPoly(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Scalar, param3: number): void;
                public static pyrUp(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number): void;
                public static HoughLinesP(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static sqrBoxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point): void;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number): void;
                public static convertMaps(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): void;
                public static equalizeHist(param0: core.Mat, param1: core.Mat): void;
                public static getFontScaleFromHeight(param0: number, param1: number): number;
                public static Scharr(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static moments(param0: core.Mat, param1: boolean): Moments;
                public static integral3(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static dilate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point): void;
                public static medianBlur(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static polylines(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: boolean, param3: core.Scalar): void;
                public static preCornerDetect(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static putText(param0: core.Mat, param1: string, param2: core.Point, param3: number, param4: number, param5: core.Scalar, param6: number): void;
                public static getAffineTransform(param0: core.MatOfPoint2f, param1: core.MatOfPoint2f): core.Mat;
                public static accumulateWeighted(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat): void;
                public static preCornerDetect(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar, param4: number, param5: number, param6: core.Mat): void;
                public static line(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number, param6: number): void;
                public static rectangle(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number): void;
                public static matchTemplate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static sepFilter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Mat, param5: core.Point): void;
                public static connectedComponents(param0: core.Mat, param1: core.Mat): number;
                public static putText(param0: core.Mat, param1: string, param2: core.Point, param3: number, param4: number, param5: core.Scalar, param6: number, param7: number): void;
                public static HoughCircles(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static warpAffine(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number): void;
                public static contourArea(param0: core.Mat, param1: boolean): number;
                public static cvtColor(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static getStructuringElement(param0: number, param1: core.Size, param2: core.Point): core.Mat;
                public static HoughCircles(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static distanceTransform(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static spatialGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static getDerivKernels(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static getRotationMatrix2D(param0: core.Point, param1: number, param2: number): core.Mat;
                public static warpPolar(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Point, param4: number, param5: number): void;
                public static calcBackProject(param0: java.util.List<core.Mat>, param1: core.MatOfInt, param2: core.Mat, param3: core.Mat, param4: core.MatOfFloat, param5: number): void;
                public static dilate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number, param5: number, param6: core.Scalar): void;
                public static morphologyEx(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point, param5: number, param6: number): void;
                public static minEnclosingTriangle(param0: core.Mat, param1: core.Mat): number;
                public static floodFill(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: core.Scalar, param4: core.Rect, param5: core.Scalar, param6: core.Scalar, param7: number): number;
                public static calcHist(param0: java.util.List<core.Mat>, param1: core.MatOfInt, param2: core.Mat, param3: core.Mat, param4: core.MatOfInt, param5: core.MatOfFloat, param6: boolean): void;
                public static fillPoly(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Scalar, param3: number, param4: number): void;
                public static createGeneralizedHoughGuil(): GeneralizedHoughGuil;
                public static HoughLines(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static fillPoly(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Scalar, param3: number, param4: number, param5: core.Point): void;
                public static arrowedLine(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number, param6: number): void;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): LineSegmentDetector;
                public static ellipse(param0: core.Mat, param1: core.Point, param2: core.Size, param3: number, param4: number, param5: number, param6: core.Scalar): void;
                public static pyrDown(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number): void;
                public static getGaborKernel(param0: core.Size, param1: number, param2: number, param3: number, param4: number): core.Mat;
                public static phaseCorrelate(param0: core.Mat, param1: core.Mat, param2: core.Mat): core.Point;
                public static HoughLinesP(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static Sobel(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static floodFill(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: core.Scalar, param4: core.Rect, param5: core.Scalar): number;
                public static morphologyEx(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point, param5: number, param6: number, param7: core.Scalar): void;
                public static Canny(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static sepFilter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Mat, param5: core.Point, param6: number, param7: number): void;
                public static connectedComponentsWithStats(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number): number;
                public static line(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar): void;
                public static warpAffine(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size): void;
                public static remap(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number): void;
                public static fillPoly(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: core.Scalar): void;
                public static EMD(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat): number;
                public static rectangle(param0: core.Mat, param1: core.Rect, param2: core.Scalar, param3: number): void;
                public static erode(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static distanceTransform(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static erode(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point): void;
                public static threshold(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): number;
                public static warpPerspective(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number, param5: number): void;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar): void;
                public static erode(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number): void;
                public static HoughCircles(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static accumulate(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static blur(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: core.Point): void;
                public static boxPoints(param0: core.RotatedRect, param1: core.Mat): void;
                public static matchShapes(param0: core.Mat, param1: core.Mat, param2: number, param3: number): number;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar, param4: number, param5: number, param6: core.Mat, param7: number): void;
                public static fitLine(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static boxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size): void;
                public static createCLAHE(param0: number): CLAHE;
                public static connectedComponents(param0: core.Mat, param1: core.Mat, param2: number): number;
                public static filter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point, param5: number, param6: number): void;
                public static bilateralFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static minEnclosingCircle(param0: core.MatOfPoint2f, param1: core.Point, param2: native.Array<number>): void;
                public static pyrDown(param0: core.Mat, param1: core.Mat, param2: core.Size): void;
                public static Laplacian(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static fillConvexPoly(param0: core.Mat, param1: core.MatOfPoint, param2: core.Scalar, param3: number): void;
                public static pyrDown(param0: core.Mat, param1: core.Mat): void;
                public static warpPerspective(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number): void;
                public static spatialGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static connectedComponentsWithAlgorithm(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): number;
                public static HoughLines(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                public static GaussianBlur(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: number, param5: number): void;
                public static dilate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number): void;
                public static resize(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: number): void;
                public static cvtColor(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static cornerMinEigenVal(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static circle(param0: core.Mat, param1: core.Point, param2: number, param3: core.Scalar): void;
                public static pyrMeanShiftFiltering(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static rectangle(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number): void;
                public static getFontScaleFromHeight(param0: number, param1: number, param2: number): number;
                public static grabCut(param0: core.Mat, param1: core.Mat, param2: core.Rect, param3: core.Mat, param4: core.Mat, param5: number): void;
                public static putText(param0: core.Mat, param1: string, param2: core.Point, param3: number, param4: number, param5: core.Scalar): void;
                public static HoughCircles(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                public static cornerEigenValsAndVecs(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static EMD(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Mat): number;
                public static demosaicing(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static createCLAHE(): CLAHE;
                public static cornerEigenValsAndVecs(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static erode(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number, param5: number): void;
                public static intersectConvexConvex(param0: core.Mat, param1: core.Mat, param2: core.Mat): number;
                public static createCLAHE(param0: number, param1: core.Size): CLAHE;
                public static GaussianBlur(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number): void;
                public static morphologyEx(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point, param5: number): void;
                public static arcLength(param0: core.MatOfPoint2f, param1: boolean): number;
                public static createLineSegmentDetector(param0: number): LineSegmentDetector;
                public static connectedComponentsWithStatsWithAlgorithm(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number, param6: number): number;
                public static createLineSegmentDetector(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): LineSegmentDetector;
                /** @deprecated */
                public static linearPolar(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: number, param4: number): void;
                public static sqrBoxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size): void;
                public static morphologyEx(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Point): void;
                public static boundingRect(param0: core.Mat): core.Rect;
                public static phaseCorrelate(param0: core.Mat, param1: core.Mat): core.Point;
                public static EMD(param0: core.Mat, param1: core.Mat, param2: number): number;
                public static pyrUp(param0: core.Mat, param1: core.Mat, param2: core.Size): void;
                public constructor();
                public static getDerivKernels(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: boolean, param6: number): void;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number, param7: boolean, param8: number): void;
                public static Laplacian(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static HoughLines(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static createGeneralizedHoughBallard(): GeneralizedHoughBallard;
                public static cornerHarris(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static rectangle(param0: core.Mat, param1: core.Rect, param2: core.Scalar, param3: number, param4: number): void;
                public static Canny(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: boolean): void;
                public static HoughLines(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                public static clipLine(param0: core.Rect, param1: core.Point, param2: core.Point): boolean;
                public static floodFill(param0: core.Mat, param1: core.Mat, param2: core.Point, param3: core.Scalar): number;
                public static adaptiveThreshold(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static pyrUp(param0: core.Mat, param1: core.Mat): void;
                public static Sobel(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
                public static sepFilter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Mat, param5: core.Point, param6: number): void;
                public static spatialGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static bilateralFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static compareHist(param0: core.Mat, param1: core.Mat, param2: number): number;
                public static boxFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Size, param4: core.Point, param5: boolean): void;
                public static matchTemplate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: core.Mat): void;
                public static goodFeaturesToTrack(param0: core.Mat, param1: core.MatOfPoint, param2: number, param3: number, param4: number, param5: core.Mat, param6: number, param7: number, param8: boolean): void;
                public static remap(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number): void;
                public static line(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number): void;
                public static integral2(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static Sobel(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                public static dilate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: number, param5: number): void;
                public static integral(param0: core.Mat, param1: core.Mat): void;
                public static integral2(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static Laplacian(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static sepFilter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat, param4: core.Mat): void;
                public static accumulateWeighted(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static drawContours(param0: core.Mat, param1: java.util.List<core.MatOfPoint>, param2: number, param3: core.Scalar, param4: number, param5: number, param6: core.Mat, param7: number, param8: core.Point): void;
                public static rectangle(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number, param5: number, param6: number): void;
                public static pyrMeanShiftFiltering(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static getDerivKernels(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: boolean): void;
                public static resize(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number): void;
                public static Sobel(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static warpAffine(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number, param5: number, param6: core.Scalar): void;
                public static line(param0: core.Mat, param1: core.Point, param2: core.Point, param3: core.Scalar, param4: number): void;
                public static rectangle(param0: core.Mat, param1: core.Rect, param2: core.Scalar): void;
                public static resize(param0: core.Mat, param1: core.Mat, param2: core.Size, param3: number, param4: number, param5: number): void;
                public static filter2D(param0: core.Mat, param1: core.Mat, param2: number, param3: core.Mat): void;
                public static Laplacian(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static getPerspectiveTransform(param0: core.Mat, param1: core.Mat): core.Mat;
                public static HuMoments(param0: Moments, param1: core.Mat): void;
                public static getStructuringElement(param0: number, param1: core.Size): core.Mat;
                public static getTextSize(param0: string, param1: number, param2: number, param3: number, param4: native.Array<number>): core.Size;
                public static getGaborKernel(param0: core.Size, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): core.Mat;
                public static drawMarker(param0: core.Mat, param1: core.Point, param2: core.Scalar, param3: number, param4: number): void;
                public static fitEllipse(param0: core.MatOfPoint2f): core.RotatedRect;
                public static Laplacian(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static remap(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: number, param5: number, param6: core.Scalar): void;
                public static demosaicing(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static phaseCorrelate(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: native.Array<number>): core.Point;
                public static HoughLinesP(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static accumulateProduct(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public static distanceTransformWithLabels(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static warpAffine(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: number, param5: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class LineSegmentDetector extends core.Algorithm {
                public static class: java.lang.Class<LineSegmentDetector>;
                public compareSegments(param0: core.Size, param1: core.Mat, param2: core.Mat, param3: core.Mat): number;
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public detect(param0: core.Mat, param1: core.Mat): void;
                public drawSegments(param0: core.Mat, param1: core.Mat): void;
                public compareSegments(param0: core.Size, param1: core.Mat, param2: core.Mat): number;
                public finalize(): void;
                public constructor(param0: number);
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static __fromPtr__(param0: number): LineSegmentDetector;
                public detect(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class Moments extends java.lang.Object {
                public static class: java.lang.Class<Moments>;
                public m00: number;
                public m10: number;
                public m01: number;
                public m20: number;
                public m11: number;
                public m02: number;
                public m30: number;
                public m21: number;
                public m12: number;
                public m03: number;
                public mu20: number;
                public mu11: number;
                public mu02: number;
                public mu30: number;
                public mu21: number;
                public mu12: number;
                public mu03: number;
                public nu20: number;
                public nu11: number;
                public nu02: number;
                public nu30: number;
                public nu21: number;
                public nu12: number;
                public nu03: number;
                public set_nu02(param0: number): void;
                public get_mu30(): number;
                public get_mu20(): number;
                public set_mu11(param0: number): void;
                public set_m03(param0: number): void;
                public constructor();
                public set_m20(param0: number): void;
                public get_m21(): number;
                public get_nu03(): number;
                public get_m01(): number;
                public get_m11(): number;
                public set_m11(param0: number): void;
                public get_m20(): number;
                public set_mu02(param0: number): void;
                public set_nu20(param0: number): void;
                public get_nu20(): number;
                public get_m10(): number;
                public get_mu02(): number;
                public get_m00(): number;
                public set_m00(param0: number): void;
                public get_mu12(): number;
                public toString(): string;
                public set_mu12(param0: number): void;
                public get_nu30(): number;
                public set_mu20(param0: number): void;
                public get_nu21(): number;
                public get_nu11(): number;
                public get_mu03(): number;
                public set_m12(param0: number): void;
                public get_m12(): number;
                public get_nu02(): number;
                public set_mu30(param0: number): void;
                public set_nu21(param0: number): void;
                public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number);
                public get_m02(): number;
                public get_nu12(): number;
                public set_m01(param0: number): void;
                public constructor(param0: native.Array<number>);
                public set_m30(param0: number): void;
                public set_nu12(param0: number): void;
                public get_mu11(): number;
                public set_mu21(param0: number): void;
                public get_mu21(): number;
                public get_m30(): number;
                public set_m02(param0: number): void;
                public completeState(): void;
                public set_nu03(param0: number): void;
                public set_m21(param0: number): void;
                public get_m03(): number;
                public set_nu30(param0: number): void;
                public set_m10(param0: number): void;
                public set(param0: native.Array<number>): void;
                public set_nu11(param0: number): void;
                public set_mu03(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace imgproc {
            export class Subdiv2D extends java.lang.Object {
                public static class: java.lang.Class<Subdiv2D>;
                public nativeObj: number;
                public static PTLOC_ERROR: number;
                public static PTLOC_OUTSIDE_RECT: number;
                public static PTLOC_INSIDE: number;
                public static PTLOC_VERTEX: number;
                public static PTLOC_ON_EDGE: number;
                public static NEXT_AROUND_ORG: number;
                public static NEXT_AROUND_DST: number;
                public static PREV_AROUND_ORG: number;
                public static PREV_AROUND_DST: number;
                public static NEXT_AROUND_LEFT: number;
                public static NEXT_AROUND_RIGHT: number;
                public static PREV_AROUND_LEFT: number;
                public static PREV_AROUND_RIGHT: number;
                public getEdgeList(param0: core.MatOfFloat4): void;
                public getVertex(param0: number, param1: native.Array<number>): core.Point;
                public rotateEdge(param0: number, param1: number): number;
                public getLeadingEdgeList(param0: core.MatOfInt): void;
                public insert(param0: core.Point): number;
                public edgeDst(param0: number, param1: core.Point): number;
                public nextEdge(param0: number): number;
                public finalize(): void;
                public static __fromPtr__(param0: number): Subdiv2D;
                public getTriangleList(param0: core.MatOfFloat6): void;
                public insert(param0: core.MatOfPoint2f): void;
                public constructor();
                public edgeOrg(param0: number): number;
                public locate(param0: core.Point, param1: native.Array<number>, param2: native.Array<number>): number;
                public getVertex(param0: number): core.Point;
                public findNearest(param0: core.Point): number;
                public getEdge(param0: number, param1: number): number;
                public getNativeObjAddr(): number;
                public getVoronoiFacetList(param0: core.MatOfInt, param1: java.util.List<core.MatOfPoint2f>, param2: core.MatOfPoint2f): void;
                public symEdge(param0: number): number;
                public constructor(param0: core.Rect);
                public initDelaunay(param0: core.Rect): void;
                public edgeDst(param0: number): number;
                public constructor(param0: number);
                public edgeOrg(param0: number, param1: core.Point): number;
                public findNearest(param0: core.Point, param1: core.Point): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class ANN_MLP extends StatModel {
                public static class: java.lang.Class<ANN_MLP>;
                public static BACKPROP: number;
                public static RPROP: number;
                public static ANNEAL: number;
                public static UPDATE_WEIGHTS: number;
                public static NO_INPUT_SCALE: number;
                public static NO_OUTPUT_SCALE: number;
                public static IDENTITY: number;
                public static SIGMOID_SYM: number;
                public static GAUSSIAN: number;
                public static RELU: number;
                public static LEAKYRELU: number;
                public getAnnealFinalT(): number;
                public finalize(): void;
                public getRpropDWMin(): number;
                public setBackpropWeightScale(param0: number): void;
                public setTrainMethod(param0: number, param1: number): void;
                public getBackpropMomentumScale(): number;
                public getRpropDWMax(): number;
                public setActivationFunction(param0: number, param1: number): void;
                public setTrainMethod(param0: number, param1: number, param2: number): void;
                public setAnnealFinalT(param0: number): void;
                public static create(): ANN_MLP;
                public setRpropDW0(param0: number): void;
                public setRpropDWPlus(param0: number): void;
                public setTermCriteria(param0: core.TermCriteria): void;
                public getAnnealInitialT(): number;
                public setAnnealItePerStep(param0: number): void;
                public getWeights(param0: number): core.Mat;
                public getRpropDW0(): number;
                public getRpropDWMinus(): number;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getAnnealCoolingRatio(): number;
                public getTrainMethod(): number;
                public getRpropDWPlus(): number;
                public setLayerSizes(param0: core.Mat): void;
                public setActivationFunction(param0: number, param1: number, param2: number): void;
                public setActivationFunction(param0: number): void;
                public setBackpropMomentumScale(param0: number): void;
                public setTrainMethod(param0: number): void;
                public setAnnealInitialT(param0: number): void;
                public getAnnealItePerStep(): number;
                public static __fromPtr__(param0: number): ANN_MLP;
                public getBackpropWeightScale(): number;
                public getLayerSizes(): core.Mat;
                public setRpropDWMin(param0: number): void;
                public constructor(param0: number);
                public setAnnealCoolingRatio(param0: number): void;
                public setRpropDWMinus(param0: number): void;
                public getTermCriteria(): core.TermCriteria;
                public setRpropDWMax(param0: number): void;
                public static load(param0: string): ANN_MLP;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class Boost extends DTrees {
                public static class: java.lang.Class<Boost>;
                public static DISCRETE: number;
                public static REAL: number;
                public static LOGIT: number;
                public static GENTLE: number;
                public static __fromPtr__(param0: number): Boost;
                public static __fromPtr__(param0: number): DTrees;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getBoostType(): number;
                public finalize(): void;
                public static load(param0: string): DTrees;
                public static create(): Boost;
                public static load(param0: string, param1: string): Boost;
                public getWeightTrimRate(): number;
                public setBoostType(param0: number): void;
                public getWeakCount(): number;
                public static load(param0: string): Boost;
                public setWeightTrimRate(param0: number): void;
                public constructor(param0: number);
                public static load(param0: string, param1: string): DTrees;
                public static create(): DTrees;
                public setWeakCount(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class DTrees extends StatModel {
                public static class: java.lang.Class<DTrees>;
                public static PREDICT_AUTO: number;
                public static PREDICT_SUM: number;
                public static PREDICT_MAX_VOTE: number;
                public static PREDICT_MASK: number;
                public getPriors(): core.Mat;
                public getUse1SERule(): boolean;
                public setMaxDepth(param0: number): void;
                public finalize(): void;
                public getMaxCategories(): number;
                public getMaxDepth(): number;
                public setTruncatePrunedTree(param0: boolean): void;
                public setRegressionAccuracy(param0: number): void;
                public setUseSurrogates(param0: boolean): void;
                public setMaxCategories(param0: number): void;
                public getTruncatePrunedTree(): boolean;
                public getCVFolds(): number;
                public getRegressionAccuracy(): number;
                public static create(): DTrees;
                public setCVFolds(param0: number): void;
                public static __fromPtr__(param0: number): DTrees;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setPriors(param0: core.Mat): void;
                public setUse1SERule(param0: boolean): void;
                public getUseSurrogates(): boolean;
                public static load(param0: string): DTrees;
                public getMinSampleCount(): number;
                public constructor(param0: number);
                public static load(param0: string, param1: string): DTrees;
                public setMinSampleCount(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class EM extends StatModel {
                public static class: java.lang.Class<EM>;
                public static DEFAULT_NCLUSTERS: number;
                public static DEFAULT_MAX_ITERS: number;
                public static START_E_STEP: number;
                public static START_M_STEP: number;
                public static START_AUTO_STEP: number;
                public static COV_MAT_SPHERICAL: number;
                public static COV_MAT_DIAGONAL: number;
                public static COV_MAT_GENERIC: number;
                public static COV_MAT_DEFAULT: number;
                public trainE(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): boolean;
                public getCovarianceMatrixType(): number;
                public getWeights(): core.Mat;
                public trainM(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): boolean;
                public trainEM(param0: core.Mat, param1: core.Mat, param2: core.Mat): boolean;
                public finalize(): void;
                public trainEM(param0: core.Mat, param1: core.Mat): boolean;
                public static load(param0: string, param1: string): EM;
                public trainE(param0: core.Mat, param1: core.Mat): boolean;
                public getCovs(param0: java.util.List<core.Mat>): void;
                public setClustersNumber(param0: number): void;
                public predict(param0: core.Mat, param1: core.Mat, param2: number): number;
                public trainM(param0: core.Mat, param1: core.Mat): boolean;
                public static create(): EM;
                public trainM(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): boolean;
                public setTermCriteria(param0: core.TermCriteria): void;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public trainE(param0: core.Mat, param1: core.Mat, param2: core.Mat): boolean;
                public trainE(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): boolean;
                public trainEM(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): boolean;
                public trainM(param0: core.Mat, param1: core.Mat, param2: core.Mat): boolean;
                public static __fromPtr__(param0: number): EM;
                public predict2(param0: core.Mat, param1: core.Mat): native.Array<number>;
                public predict(param0: core.Mat): number;
                public getMeans(): core.Mat;
                public predict(param0: core.Mat, param1: core.Mat): number;
                public static load(param0: string): EM;
                public trainEM(param0: core.Mat): boolean;
                public trainE(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): boolean;
                public constructor(param0: number);
                public getTermCriteria(): core.TermCriteria;
                public setCovarianceMatrixType(param0: number): void;
                public trainE(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat): boolean;
                public getClustersNumber(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class KNearest extends StatModel {
                public static class: java.lang.Class<KNearest>;
                public static BRUTE_FORCE: number;
                public static KDTREE: number;
                public findNearest(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat): number;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setDefaultK(param0: number): void;
                public getDefaultK(): number;
                public setIsClassifier(param0: boolean): void;
                public findNearest(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat, param4: core.Mat): number;
                public finalize(): void;
                public getAlgorithmType(): number;
                public static load(param0: string): KNearest;
                public setEmax(param0: number): void;
                public getIsClassifier(): boolean;
                public getEmax(): number;
                public static create(): KNearest;
                public constructor(param0: number);
                public findNearest(param0: core.Mat, param1: number, param2: core.Mat): number;
                public setAlgorithmType(param0: number): void;
                public static __fromPtr__(param0: number): KNearest;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class LogisticRegression extends StatModel {
                public static class: java.lang.Class<LogisticRegression>;
                public static REG_DISABLE: number;
                public static REG_L1: number;
                public static REG_L2: number;
                public static BATCH: number;
                public static MINI_BATCH: number;
                public static __fromPtr__(param0: number): LogisticRegression;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getRegularization(): number;
                public get_learnt_thetas(): core.Mat;
                public setIterations(param0: number): void;
                public getTrainMethod(): number;
                public static load(param0: string): LogisticRegression;
                public finalize(): void;
                public predict(param0: core.Mat): number;
                public setLearningRate(param0: number): void;
                public setTrainMethod(param0: number): void;
                public getMiniBatchSize(): number;
                public predict(param0: core.Mat, param1: core.Mat): number;
                public predict(param0: core.Mat, param1: core.Mat, param2: number): number;
                public getLearningRate(): number;
                public setMiniBatchSize(param0: number): void;
                public constructor(param0: number);
                public setRegularization(param0: number): void;
                public static create(): LogisticRegression;
                public static load(param0: string, param1: string): LogisticRegression;
                public getTermCriteria(): core.TermCriteria;
                public getIterations(): number;
                public setTermCriteria(param0: core.TermCriteria): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class Ml extends java.lang.Object {
                public static class: java.lang.Class<Ml>;
                public static ROW_SAMPLE: number;
                public static COL_SAMPLE: number;
                public static VAR_NUMERICAL: number;
                public static VAR_ORDERED: number;
                public static VAR_CATEGORICAL: number;
                public static TEST_ERROR: number;
                public static TRAIN_ERROR: number;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class NormalBayesClassifier extends StatModel {
                public static class: java.lang.Class<NormalBayesClassifier>;
                public static create(): NormalBayesClassifier;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static load(param0: string, param1: string): NormalBayesClassifier;
                public finalize(): void;
                public constructor(param0: number);
                public static load(param0: string): NormalBayesClassifier;
                public static __fromPtr__(param0: number): NormalBayesClassifier;
                public predictProb(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): number;
                public predictProb(param0: core.Mat, param1: core.Mat, param2: core.Mat): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class ParamGrid extends java.lang.Object {
                public static class: java.lang.Class<ParamGrid>;
                public nativeObj: number;
                public static create(param0: number, param1: number): ParamGrid;
                public static create(): ParamGrid;
                public get_maxVal(): number;
                public static __fromPtr__(param0: number): ParamGrid;
                public set_minVal(param0: number): void;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public static create(param0: number): ParamGrid;
                public set_maxVal(param0: number): void;
                public static create(param0: number, param1: number, param2: number): ParamGrid;
                public get_logStep(): number;
                public set_logStep(param0: number): void;
                public get_minVal(): number;
                public constructor(param0: number);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class RTrees extends DTrees {
                public static class: java.lang.Class<RTrees>;
                public static load(param0: string, param1: string): RTrees;
                public static __fromPtr__(param0: number): DTrees;
                public static create(): RTrees;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getActiveVarCount(): number;
                public setCalculateVarImportance(param0: boolean): void;
                public finalize(): void;
                public static load(param0: string): DTrees;
                public static __fromPtr__(param0: number): RTrees;
                public getCalculateVarImportance(): boolean;
                public getVotes(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static load(param0: string): RTrees;
                public getVarImportance(): core.Mat;
                public setActiveVarCount(param0: number): void;
                public constructor(param0: number);
                public static load(param0: string, param1: string): DTrees;
                public getTermCriteria(): core.TermCriteria;
                public static create(): DTrees;
                public setTermCriteria(param0: core.TermCriteria): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class SVM extends StatModel {
                public static class: java.lang.Class<SVM>;
                public static CUSTOM: number;
                public static LINEAR: number;
                public static POLY: number;
                public static RBF: number;
                public static SIGMOID: number;
                public static CHI2: number;
                public static INTER: number;
                public static C_SVC: number;
                public static NU_SVC: number;
                public static ONE_CLASS: number;
                public static EPS_SVR: number;
                public static NU_SVR: number;
                public static C: number;
                public static GAMMA: number;
                public static P: number;
                public static NU: number;
                public static COEF: number;
                public static DEGREE: number;
                public setNu(param0: number): void;
                public setClassWeights(param0: core.Mat): void;
                public getType(): number;
                public finalize(): void;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat): boolean;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid, param6: ParamGrid, param7: ParamGrid): boolean;
                public getClassWeights(): core.Mat;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number): boolean;
                public setCoef0(param0: number): void;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid, param6: ParamGrid): boolean;
                public static getDefaultGridPtr(param0: number): ParamGrid;
                public getGamma(): number;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid, param6: ParamGrid, param7: ParamGrid, param8: ParamGrid): boolean;
                public setTermCriteria(param0: core.TermCriteria): void;
                public getKernelType(): number;
                public setType(param0: number): void;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid, param6: ParamGrid, param7: ParamGrid, param8: ParamGrid, param9: ParamGrid, param10: boolean): boolean;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setC(param0: number): void;
                public getUncompressedSupportVectors(): core.Mat;
                public static create(): SVM;
                public getCoef0(): number;
                public getDecisionFunction(param0: number, param1: core.Mat, param2: core.Mat): number;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid): boolean;
                public getP(): number;
                public static __fromPtr__(param0: number): SVM;
                public setGamma(param0: number): void;
                public getSupportVectors(): core.Mat;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid, param6: ParamGrid, param7: ParamGrid, param8: ParamGrid, param9: ParamGrid): boolean;
                public getNu(): number;
                public setKernel(param0: number): void;
                public getC(): number;
                public setDegree(param0: number): void;
                public static load(param0: string): SVM;
                public constructor(param0: number);
                public getTermCriteria(): core.TermCriteria;
                public trainAuto(param0: core.Mat, param1: number, param2: core.Mat, param3: number, param4: ParamGrid, param5: ParamGrid): boolean;
                public getDegree(): number;
                public setP(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class SVMSGD extends StatModel {
                public static class: java.lang.Class<SVMSGD>;
                public static SGD: number;
                public static ASGD: number;
                public static SOFT_MARGIN: number;
                public static HARD_MARGIN: number;
                public static create(): SVMSGD;
                public getMarginRegularization(): number;
                public getWeights(): core.Mat;
                public finalize(): void;
                public getSvmsgdType(): number;
                public getStepDecreasingPower(): number;
                public setOptimalParameters(param0: number): void;
                public setOptimalParameters(): void;
                public setStepDecreasingPower(param0: number): void;
                public static __fromPtr__(param0: number): SVMSGD;
                public setOptimalParameters(param0: number, param1: number): void;
                public getShift(): number;
                public setMarginType(param0: number): void;
                public setTermCriteria(param0: core.TermCriteria): void;
                public static load(param0: string, param1: string): SVMSGD;
                public setInitialStepSize(param0: number): void;
                public setSvmsgdType(param0: number): void;
                public static __fromPtr__(param0: number): StatModel;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getMarginType(): number;
                public static load(param0: string): SVMSGD;
                public setMarginRegularization(param0: number): void;
                public getInitialStepSize(): number;
                public constructor(param0: number);
                public getTermCriteria(): core.TermCriteria;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class StatModel extends core.Algorithm {
                public static class: java.lang.Class<StatModel>;
                public static UPDATE_MODEL: number;
                public static RAW_OUTPUT: number;
                public static COMPRESSED_INPUT: number;
                public static PREPROCESSED_INPUT: number;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): StatModel;
                public isClassifier(): boolean;
                public calcError(param0: TrainData, param1: boolean, param2: core.Mat): number;
                public finalize(): void;
                public train(param0: core.Mat, param1: number, param2: core.Mat): boolean;
                public predict(param0: core.Mat): number;
                public predict(param0: core.Mat, param1: core.Mat): number;
                public predict(param0: core.Mat, param1: core.Mat, param2: number): number;
                public train(param0: TrainData): boolean;
                public constructor(param0: number);
                public isTrained(): boolean;
                public getVarCount(): number;
                public train(param0: TrainData, param1: number): boolean;
                public empty(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace ml {
            export class TrainData extends java.lang.Object {
                public static class: java.lang.Class<TrainData>;
                public nativeObj: number;
                public getTestSamples(): core.Mat;
                public getCatOfs(): core.Mat;
                public static create(param0: core.Mat, param1: number, param2: core.Mat): TrainData;
                public getNTrainSamples(): number;
                public setTrainTestSplit(param0: number, param1: boolean): void;
                public getCatCount(param0: number): number;
                public setTrainTestSplitRatio(param0: number): void;
                public getLayout(): number;
                public static getSubVector(param0: core.Mat, param1: core.Mat): core.Mat;
                public getTrainSamples(param0: number): core.Mat;
                public getClassLabels(): core.Mat;
                public getResponseType(): number;
                public getDefaultSubstValues(): core.Mat;
                public getSamples(): core.Mat;
                public static create(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat): TrainData;
                public getTrainSampleIdx(): core.Mat;
                public getSample(param0: core.Mat, param1: number, param2: number): void;
                public getTrainSamples(param0: number, param1: boolean, param2: boolean): core.Mat;
                public getNVars(): number;
                public setTrainTestSplit(param0: number): void;
                public getTrainSampleWeights(): core.Mat;
                public getNAllVars(): number;
                public getNTestSamples(): number;
                public getNSamples(): number;
                public getTestSampleIdx(): core.Mat;
                public getVarSymbolFlags(): core.Mat;
                public getTestNormCatResponses(): core.Mat;
                public getNames(param0: java.util.List<string>): void;
                public getTrainSamples(param0: number, param1: boolean): core.Mat;
                public getCatMap(): core.Mat;
                public getTrainSamples(): core.Mat;
                public getNormCatResponses(): core.Mat;
                public getResponses(): core.Mat;
                public getVarType(): core.Mat;
                public static create(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): TrainData;
                public getTestSampleWeights(): core.Mat;
                public static create(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat, param6: core.Mat): TrainData;
                public finalize(): void;
                public getSampleWeights(): core.Mat;
                public getMissing(): core.Mat;
                public getValues(param0: number, param1: core.Mat, param2: number): void;
                public getVarIdx(): core.Mat;
                public static getSubMatrix(param0: core.Mat, param1: core.Mat, param2: number): core.Mat;
                public getTestResponses(): core.Mat;
                public getTrainResponses(): core.Mat;
                public static create(param0: core.Mat, param1: number, param2: core.Mat, param3: core.Mat, param4: core.Mat): TrainData;
                public getNativeObjAddr(): number;
                public getTrainNormCatResponses(): core.Mat;
                public static __fromPtr__(param0: number): TrainData;
                public constructor(param0: number);
                public setTrainTestSplitRatio(param0: number, param1: boolean): void;
                public shuffleTrainTest(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace objdetect {
            export class BaseCascadeClassifier extends core.Algorithm {
                public static class: java.lang.Class<BaseCascadeClassifier>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): BaseCascadeClassifier;
                public finalize(): void;
                public constructor(param0: number);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace objdetect {
            export class CascadeClassifier extends java.lang.Object {
                public static class: java.lang.Class<CascadeClassifier>;
                public nativeObj: number;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: number, param3: number, param4: number, param5: core.Size, param6: core.Size): void;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: number, param4: number): void;
                public finalize(): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: number, param3: number, param4: number, param5: core.Size): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: number, param3: number, param4: number): void;
                public constructor(param0: string);
                public constructor();
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number, param5: number): void;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number, param5: number, param6: number, param7: core.Size, param8: core.Size): void;
                public load(param0: string): boolean;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: number, param3: number): void;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: number, param4: number, param5: number): void;
                public empty(): boolean;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt): void;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number, param5: number, param6: number): void;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number, param5: number, param6: number, param7: core.Size, param8: core.Size, param9: boolean): void;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: number, param4: number, param5: number, param6: core.Size, param7: core.Size): void;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number): void;
                public getNativeObjAddr(): number;
                public static convert(param0: string, param1: string): boolean;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: number): void;
                public getFeatureType(): number;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble): void;
                public static __fromPtr__(param0: number): CascadeClassifier;
                public detectMultiScale3(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: core.MatOfDouble, param4: number, param5: number, param6: number, param7: core.Size): void;
                public isOldFormatCascade(): boolean;
                public constructor(param0: number);
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect): void;
                public getOriginalWindowSize(): core.Size;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: number): void;
                public detectMultiScale2(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfInt, param3: number, param4: number, param5: number, param6: core.Size): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace objdetect {
            export class HOGDescriptor extends java.lang.Object {
                public static class: java.lang.Class<HOGDescriptor>;
                public nativeObj: number;
                public static DESCR_FORMAT_COL_BY_COL: number;
                public static DESCR_FORMAT_ROW_BY_ROW: number;
                public static DEFAULT_NLEVELS: number;
                public static L2Hys: number;
                public compute(param0: core.Mat, param1: core.MatOfFloat): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size, param6: number, param7: number): void;
                public get_svmDetector(): core.MatOfFloat;
                public detect(param0: core.Mat, param1: core.MatOfPoint, param2: core.MatOfDouble, param3: number): void;
                public constructor();
                public computeGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size, param4: core.Size): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size, param6: number, param7: number, param8: boolean): void;
                public setSVMDetector(param0: core.Mat): void;
                public get_signedGradient(): boolean;
                public computeGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: number, param11: boolean);
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble): void;
                public get_nbins(): number;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number, param7: number, param8: number);
                public get_L2HysThreshold(): number;
                public load(param0: string): boolean;
                public save(param0: string): void;
                public load(param0: string, param1: string): boolean;
                public get_winSize(): core.Size;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size): void;
                public get_winSigma(): number;
                public static __fromPtr__(param0: number): HOGDescriptor;
                public static getDaimlerPeopleDetector(): core.MatOfFloat;
                public detect(param0: core.Mat, param1: core.MatOfPoint, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size): void;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean);
                public getWinSigma(): number;
                public detect(param0: core.Mat, param1: core.MatOfPoint, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size, param6: core.MatOfPoint): void;
                public get_nlevels(): number;
                public detect(param0: core.Mat, param1: core.MatOfPoint, param2: core.MatOfDouble, param3: number, param4: core.Size): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number): void;
                public finalize(): void;
                public constructor(param0: string);
                public get_blockStride(): core.Size;
                public get_cellSize(): core.Size;
                public compute(param0: core.Mat, param1: core.MatOfFloat, param2: core.Size, param3: core.Size, param4: core.MatOfPoint): void;
                public detect(param0: core.Mat, param1: core.MatOfPoint, param2: core.MatOfDouble): void;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number, param4: core.Size): void;
                public save(param0: string, param1: string): void;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number);
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number);
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number, param7: number);
                public compute(param0: core.Mat, param1: core.MatOfFloat, param2: core.Size, param3: core.Size): void;
                public getNativeObjAddr(): number;
                public get_histogramNormType(): number;
                public detectMultiScale(param0: core.Mat, param1: core.MatOfRect, param2: core.MatOfDouble, param3: number, param4: core.Size, param5: core.Size, param6: number): void;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number);
                public computeGradient(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Size): void;
                public get_derivAperture(): number;
                public static getDefaultPeopleDetector(): core.MatOfFloat;
                public constructor(param0: core.Size, param1: core.Size, param2: core.Size, param3: core.Size, param4: number, param5: number, param6: number, param7: number, param8: number, param9: boolean, param10: number);
                public compute(param0: core.Mat, param1: core.MatOfFloat, param2: core.Size): void;
                public checkDetectorSize(): boolean;
                public constructor(param0: number);
                public getDescriptorSize(): number;
                public get_blockSize(): core.Size;
                public get_gammaCorrection(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace objdetect {
            export class Objdetect extends java.lang.Object {
                public static class: java.lang.Class<Objdetect>;
                public static CASCADE_DO_CANNY_PRUNING: number;
                public static CASCADE_SCALE_IMAGE: number;
                public static CASCADE_FIND_BIGGEST_OBJECT: number;
                public static CASCADE_DO_ROUGH_SEARCH: number;
                public static DetectionBasedTracker_DETECTED_NOT_SHOWN_YET: number;
                public static DetectionBasedTracker_DETECTED: number;
                public static DetectionBasedTracker_DETECTED_TEMPORARY_LOST: number;
                public static DetectionBasedTracker_WRONG_OBJECT: number;
                public static groupRectangles(param0: core.MatOfRect, param1: core.MatOfInt, param2: number, param3: number): void;
                public static groupRectangles(param0: core.MatOfRect, param1: core.MatOfInt, param2: number): void;
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace objdetect {
            export class QRCodeDetector extends java.lang.Object {
                public static class: java.lang.Class<QRCodeDetector>;
                public nativeObj: number;
                public detectAndDecodeMulti(param0: core.Mat, param1: java.util.List<string>): boolean;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public decodeMulti(param0: core.Mat, param1: core.Mat, param2: java.util.List<string>): boolean;
                public constructor();
                public decode(param0: core.Mat, param1: core.Mat, param2: core.Mat): string;
                public setEpsX(param0: number): void;
                public setEpsY(param0: number): void;
                public detectAndDecodeMulti(param0: core.Mat, param1: java.util.List<string>, param2: core.Mat, param3: java.util.List<core.Mat>): boolean;
                public detectAndDecodeMulti(param0: core.Mat, param1: java.util.List<string>, param2: core.Mat): boolean;
                public detect(param0: core.Mat, param1: core.Mat): boolean;
                public static __fromPtr__(param0: number): QRCodeDetector;
                public decode(param0: core.Mat, param1: core.Mat): string;
                public constructor(param0: number);
                public decodeMulti(param0: core.Mat, param1: core.Mat, param2: java.util.List<string>, param3: java.util.List<core.Mat>): boolean;
                public detectAndDecode(param0: core.Mat, param1: core.Mat): string;
                public detectMulti(param0: core.Mat, param1: core.Mat): boolean;
                public detectAndDecode(param0: core.Mat, param1: core.Mat, param2: core.Mat): string;
                public detectAndDecode(param0: core.Mat): string;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace osgi {
            export class OpenCVInterface extends java.lang.Object {
                public static class: java.lang.Class<OpenCVInterface>;
                /**
                 * Constructs a new instance of the org.opencv.osgi.OpenCVInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace osgi {
            export class OpenCVNativeLoader extends java.lang.Object implements OpenCVInterface {
                public static class: java.lang.Class<OpenCVNativeLoader>;
                public constructor();
                public init(): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class AlignExposures extends core.Algorithm {
                public static class: java.lang.Class<AlignExposures>;
                public process(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Mat, param3: core.Mat): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): AlignExposures;
                public finalize(): void;
                public constructor(param0: number);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class AlignMTB extends AlignExposures {
                public static class: java.lang.Class<AlignMTB>;
                public process(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>, param2: core.Mat, param3: core.Mat): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getExcludeRange(): number;
                public shiftMat(param0: core.Mat, param1: core.Mat, param2: core.Point): void;
                public setExcludeRange(param0: number): void;
                public setMaxBits(param0: number): void;
                public finalize(): void;
                public computeBitmaps(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public getMaxBits(): number;
                public static __fromPtr__(param0: number): AlignMTB;
                public static __fromPtr__(param0: number): AlignExposures;
                public calculateShift(param0: core.Mat, param1: core.Mat): core.Point;
                public constructor(param0: number);
                public setCut(param0: boolean): void;
                public process(param0: java.util.List<core.Mat>, param1: java.util.List<core.Mat>): void;
                public getCut(): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class CalibrateCRF extends core.Algorithm {
                public static class: java.lang.Class<CalibrateCRF>;
                public static __fromPtr__(param0: number): CalibrateCRF;
                public static __fromPtr__(param0: number): core.Algorithm;
                public finalize(): void;
                public constructor(param0: number);
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class CalibrateDebevec extends CalibrateCRF {
                public static class: java.lang.Class<CalibrateDebevec>;
                public setSamples(param0: number): void;
                public static __fromPtr__(param0: number): CalibrateDebevec;
                public getLambda(): number;
                public static __fromPtr__(param0: number): CalibrateCRF;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getSamples(): number;
                public setLambda(param0: number): void;
                public setRandom(param0: boolean): void;
                public getRandom(): boolean;
                public finalize(): void;
                public constructor(param0: number);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class CalibrateRobertson extends CalibrateCRF {
                public static class: java.lang.Class<CalibrateRobertson>;
                public static __fromPtr__(param0: number): CalibrateCRF;
                public setMaxIter(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getMaxIter(): number;
                public getThreshold(): number;
                public static __fromPtr__(param0: number): CalibrateRobertson;
                public setThreshold(param0: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public getRadiance(): core.Mat;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class MergeDebevec extends MergeExposures {
                public static class: java.lang.Class<MergeDebevec>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): MergeExposures;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): MergeDebevec;
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class MergeExposures extends core.Algorithm {
                public static class: java.lang.Class<MergeExposures>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): MergeExposures;
                public finalize(): void;
                public constructor(param0: number);
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class MergeMertens extends MergeExposures {
                public static class: java.lang.Class<MergeMertens>;
                public getSaturationWeight(): number;
                public setExposureWeight(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getContrastWeight(): number;
                public setSaturationWeight(param0: number): void;
                public static __fromPtr__(param0: number): MergeExposures;
                public static __fromPtr__(param0: number): MergeMertens;
                public finalize(): void;
                public setContrastWeight(param0: number): void;
                public process(param0: java.util.List<core.Mat>, param1: core.Mat): void;
                public constructor(param0: number);
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public getExposureWeight(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class MergeRobertson extends MergeExposures {
                public static class: java.lang.Class<MergeRobertson>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): MergeExposures;
                public static __fromPtr__(param0: number): MergeRobertson;
                public finalize(): void;
                public constructor(param0: number);
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
                public process(param0: java.util.List<core.Mat>, param1: core.Mat, param2: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class Photo extends java.lang.Object {
                public static class: java.lang.Class<Photo>;
                public static INPAINT_NS: number;
                public static INPAINT_TELEA: number;
                public static LDR_SIZE: number;
                public static NORMAL_CLONE: number;
                public static MIXED_CLONE: number;
                public static MONOCHROME_TRANSFER: number;
                public static RECURS_FILTER: number;
                public static NORMCONV_FILTER: number;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static stylization(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static createCalibrateDebevec(param0: number, param1: number): CalibrateDebevec;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: core.MatOfFloat, param3: number): void;
                public static createTonemapDrago(param0: number, param1: number): TonemapDrago;
                public static seamlessClone(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Point, param4: core.Mat, param5: number): void;
                public static denoise_TVL1(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number): void;
                public static detailEnhance(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public constructor();
                public static createMergeMertens(param0: number): MergeMertens;
                public static createMergeRobertson(): MergeRobertson;
                public static edgePreservingFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static edgePreservingFilter(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number): void;
                public static detailEnhance(param0: core.Mat, param1: core.Mat): void;
                public static textureFlattening(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static createTonemapDrago(param0: number, param1: number, param2: number): TonemapDrago;
                public static denoise_TVL1(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number): void;
                public static createAlignMTB(param0: number, param1: number): AlignMTB;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat): void;
                public static fastNlMeansDenoisingColored(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number): void;
                public static createMergeMertens(param0: number, param1: number, param2: number): MergeMertens;
                public static colorChange(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static inpaint(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static createCalibrateRobertson(): CalibrateRobertson;
                public static createAlignMTB(param0: number, param1: number, param2: boolean): AlignMTB;
                public static createTonemapDrago(param0: number): TonemapDrago;
                public static createTonemapMantiuk(param0: number, param1: number): TonemapMantiuk;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: core.MatOfFloat, param5: number, param6: number): void;
                public static createTonemapMantiuk(): TonemapMantiuk;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number): void;
                public static createTonemapDrago(): TonemapDrago;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: core.MatOfFloat, param3: number, param4: number, param5: number): void;
                public static createTonemap(): Tonemap;
                public static createTonemapReinhard(param0: number, param1: number, param2: number, param3: number): TonemapReinhard;
                public static createMergeMertens(): MergeMertens;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: core.MatOfFloat, param5: number): void;
                public static fastNlMeansDenoisingColored(param0: core.Mat, param1: core.Mat): void;
                public static illuminationChange(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static createAlignMTB(): AlignMTB;
                public static createTonemapReinhard(param0: number, param1: number, param2: number): TonemapReinhard;
                public static createTonemapMantiuk(param0: number, param1: number, param2: number): TonemapMantiuk;
                public static createTonemapReinhard(): TonemapReinhard;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: core.MatOfFloat): void;
                public static colorChange(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static createCalibrateDebevec(param0: number, param1: number, param2: boolean): CalibrateDebevec;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static createCalibrateRobertson(param0: number, param1: number): CalibrateRobertson;
                public static pencilSketch(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static colorChange(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: core.MatOfFloat, param5: number, param6: number, param7: number): void;
                public static createCalibrateDebevec(): CalibrateDebevec;
                public static decolor(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static createTonemap(param0: number): Tonemap;
                public static illuminationChange(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number): void;
                public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number, param5: number): void;
                public static createTonemapMantiuk(param0: number): TonemapMantiuk;
                public static createAlignMTB(param0: number): AlignMTB;
                public static textureFlattening(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static stylization(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static colorChange(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): void;
                public static edgePreservingFilter(param0: core.Mat, param1: core.Mat): void;
                public static pencilSketch(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static fastNlMeansDenoisingColoredMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
                public static createMergeDebevec(): MergeDebevec;
                public static detailEnhance(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static createCalibrateRobertson(param0: number): CalibrateRobertson;
                public static createTonemapReinhard(param0: number, param1: number): TonemapReinhard;
                public static edgePreservingFilter(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static fastNlMeansDenoisingColored(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static pencilSketch(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static createTonemapReinhard(param0: number): TonemapReinhard;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: core.MatOfFloat): void;
                public static illuminationChange(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number): void;
                public static stylization(param0: core.Mat, param1: core.Mat): void;
                public static createCalibrateDebevec(param0: number): CalibrateDebevec;
                public static pencilSketch(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): void;
                public static fastNlMeansDenoisingMulti(param0: java.util.List<core.Mat>, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static createMergeMertens(param0: number, param1: number): MergeMertens;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: number, param3: number, param4: number): void;
                public static fastNlMeansDenoisingColored(param0: core.Mat, param1: core.Mat, param2: number, param3: number): void;
                public static fastNlMeansDenoisingColored(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static textureFlattening(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
                public static fastNlMeansDenoising(param0: core.Mat, param1: core.Mat, param2: core.MatOfFloat, param3: number, param4: number): void;
                public static denoise_TVL1(param0: java.util.List<core.Mat>, param1: core.Mat): void;
                public static textureFlattening(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class Tonemap extends core.Algorithm {
                public static class: java.lang.Class<Tonemap>;
                public setGamma(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public finalize(): void;
                public constructor(param0: number);
                public getGamma(): number;
                public process(param0: core.Mat, param1: core.Mat): void;
                public static __fromPtr__(param0: number): Tonemap;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class TonemapDrago extends Tonemap {
                public static class: java.lang.Class<TonemapDrago>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getBias(): number;
                public getSaturation(): number;
                public setBias(param0: number): void;
                public setSaturation(param0: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): TonemapDrago;
                public static __fromPtr__(param0: number): Tonemap;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class TonemapMantiuk extends Tonemap {
                public static class: java.lang.Class<TonemapMantiuk>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): TonemapMantiuk;
                public getScale(): number;
                public getSaturation(): number;
                public setSaturation(param0: number): void;
                public setScale(param0: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): Tonemap;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace photo {
            export class TonemapReinhard extends Tonemap {
                public static class: java.lang.Class<TonemapReinhard>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getIntensity(): number;
                public setColorAdaptation(param0: number): void;
                public setIntensity(param0: number): void;
                public finalize(): void;
                public constructor(param0: number);
                public getLightAdaptation(): number;
                public static __fromPtr__(param0: number): TonemapReinhard;
                public getColorAdaptation(): number;
                public setLightAdaptation(param0: number): void;
                public static __fromPtr__(param0: number): Tonemap;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace utils {
            export class Converters extends java.lang.Object {
                public static class: java.lang.Class<Converters>;
                public static vector_Rect2d_to_Mat(param0: java.util.List<core.Rect2d>): core.Mat;
                public static Mat_to_vector_vector_Point3f(param0: core.Mat, param1: java.util.List<core.MatOfPoint3f>): void;
                public static Mat_to_vector_int(param0: core.Mat, param1: java.util.List<java.lang.Integer>): void;
                public constructor();
                public static vector_Point2f_to_Mat(param0: java.util.List<core.Point>): core.Mat;
                public static Mat_to_vector_vector_KeyPoint(param0: core.Mat, param1: java.util.List<core.MatOfKeyPoint>): void;
                public static Mat_to_vector_uchar(param0: core.Mat, param1: java.util.List<java.lang.Byte>): void;
                public static vector_KeyPoint_to_Mat(param0: java.util.List<core.KeyPoint>): core.Mat;
                public static Mat_to_vector_Point3f(param0: core.Mat, param1: java.util.List<core.Point3>): void;
                public static Mat_to_vector_DMatch(param0: core.Mat, param1: java.util.List<core.DMatch>): void;
                public static Mat_to_vector_vector_Point2f(param0: core.Mat, param1: java.util.List<core.MatOfPoint2f>): void;
                public static vector_vector_DMatch_to_Mat(param0: java.util.List<core.MatOfDMatch>, param1: java.util.List<core.Mat>): core.Mat;
                public static vector_char_to_Mat(param0: java.util.List<java.lang.Byte>): core.Mat;
                public static vector_int_to_Mat(param0: java.util.List<java.lang.Integer>): core.Mat;
                public static Mat_to_vector_vector_Point(param0: core.Mat, param1: java.util.List<core.MatOfPoint>): void;
                public static Mat_to_vector_Point2d(param0: core.Mat, param1: java.util.List<core.Point>): void;
                public static vector_vector_KeyPoint_to_Mat(param0: java.util.List<core.MatOfKeyPoint>, param1: java.util.List<core.Mat>): core.Mat;
                public static vector_Point_to_Mat(param0: java.util.List<core.Point>): core.Mat;
                public static vector_Point3d_to_Mat(param0: java.util.List<core.Point3>): core.Mat;
                public static Mat_to_vector_vector_char(param0: core.Mat, param1: java.util.List<java.util.List<java.lang.Byte>>): void;
                public static Mat_to_vector_float(param0: core.Mat, param1: java.util.List<java.lang.Float>): void;
                public static vector_vector_Point3f_to_Mat(param0: java.util.List<core.MatOfPoint3f>, param1: java.util.List<core.Mat>): core.Mat;
                public static Mat_to_vector_RotatedRect(param0: core.Mat, param1: java.util.List<core.RotatedRect>): void;
                public static Mat_to_vector_Rect(param0: core.Mat, param1: java.util.List<core.Rect>): void;
                public static Mat_to_vector_Point3d(param0: core.Mat, param1: java.util.List<core.Point3>): void;
                public static Mat_to_vector_Point3(param0: core.Mat, param1: java.util.List<core.Point3>): void;
                public static Mat_to_vector_vector_DMatch(param0: core.Mat, param1: java.util.List<core.MatOfDMatch>): void;
                public static vector_uchar_to_Mat(param0: java.util.List<java.lang.Byte>): core.Mat;
                public static vector_vector_char_to_Mat(param0: java.util.List<core.MatOfByte>, param1: java.util.List<core.Mat>): core.Mat;
                public static vector_Rect_to_Mat(param0: java.util.List<core.Rect>): core.Mat;
                public static Mat_to_vector_KeyPoint(param0: core.Mat, param1: java.util.List<core.KeyPoint>): void;
                public static vector_float_to_Mat(param0: java.util.List<java.lang.Float>): core.Mat;
                public static vector_RotatedRect_to_Mat(param0: java.util.List<core.RotatedRect>): core.Mat;
                public static Mat_to_vector_Point(param0: core.Mat, param1: java.util.List<core.Point>): void;
                public static vector_Point3i_to_Mat(param0: java.util.List<core.Point3>): core.Mat;
                public static Mat_to_vector_char(param0: core.Mat, param1: java.util.List<java.lang.Byte>): void;
                public static Mat_to_vector_Point3i(param0: core.Mat, param1: java.util.List<core.Point3>): void;
                public static vector_vector_Point_to_Mat(param0: java.util.List<core.MatOfPoint>, param1: java.util.List<core.Mat>): core.Mat;
                public static vector_DMatch_to_Mat(param0: java.util.List<core.DMatch>): core.Mat;
                public static vector_Point_to_Mat(param0: java.util.List<core.Point>, param1: number): core.Mat;
                public static vector_Point3_to_Mat(param0: java.util.List<core.Point3>, param1: number): core.Mat;
                public static Mat_to_vector_Rect2d(param0: core.Mat, param1: java.util.List<core.Rect2d>): void;
                public static vector_vector_Point2f_to_Mat(param0: java.util.List<core.MatOfPoint2f>, param1: java.util.List<core.Mat>): core.Mat;
                public static Mat_to_vector_Point2f(param0: core.Mat, param1: java.util.List<core.Point>): void;
                public static Mat_to_vector_Mat(param0: core.Mat, param1: java.util.List<core.Mat>): void;
                public static vector_double_to_Mat(param0: java.util.List<java.lang.Double>): core.Mat;
                public static Mat_to_vector_double(param0: core.Mat, param1: java.util.List<java.lang.Double>): void;
                public static vector_Point3f_to_Mat(param0: java.util.List<core.Point3>): core.Mat;
                public static vector_Point2d_to_Mat(param0: java.util.List<core.Point>): core.Mat;
                public static vector_Mat_to_Mat(param0: java.util.List<core.Mat>): core.Mat;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class BackgroundSubtractor extends core.Algorithm {
                public static class: java.lang.Class<BackgroundSubtractor>;
                public getBackgroundImage(param0: core.Mat): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public apply(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static __fromPtr__(param0: number): BackgroundSubtractor;
                public finalize(): void;
                public constructor(param0: number);
                public apply(param0: core.Mat, param1: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class BackgroundSubtractorKNN extends BackgroundSubtractor {
                public static class: java.lang.Class<BackgroundSubtractorKNN>;
                public setShadowValue(param0: number): void;
                public getShadowThreshold(): number;
                public static __fromPtr__(param0: number): core.Algorithm;
                public static __fromPtr__(param0: number): BackgroundSubtractorKNN;
                public getkNNSamples(): number;
                public finalize(): void;
                public getHistory(): number;
                public setkNNSamples(param0: number): void;
                public getNSamples(): number;
                public getDetectShadows(): boolean;
                public setShadowThreshold(param0: number): void;
                public setDetectShadows(param0: boolean): void;
                public setNSamples(param0: number): void;
                public getShadowValue(): number;
                public static __fromPtr__(param0: number): BackgroundSubtractor;
                public setHistory(param0: number): void;
                public constructor(param0: number);
                public setDist2Threshold(param0: number): void;
                public getDist2Threshold(): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class BackgroundSubtractorMOG2 extends BackgroundSubtractor {
                public static class: java.lang.Class<BackgroundSubtractorMOG2>;
                public static __fromPtr__(param0: number): BackgroundSubtractorMOG2;
                public setShadowValue(param0: number): void;
                public getVarMax(): number;
                public setVarThresholdGen(param0: number): void;
                public finalize(): void;
                public getHistory(): number;
                public getNMixtures(): number;
                public setShadowThreshold(param0: number): void;
                public setVarInit(param0: number): void;
                public setDetectShadows(param0: boolean): void;
                public getVarMin(): number;
                public getBackgroundRatio(): number;
                public getVarInit(): number;
                public setNMixtures(param0: number): void;
                public getVarThresholdGen(): number;
                public getShadowThreshold(): number;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getDetectShadows(): boolean;
                public setComplexityReductionThreshold(param0: number): void;
                public getVarThreshold(): number;
                public getShadowValue(): number;
                public apply(param0: core.Mat, param1: core.Mat, param2: number): void;
                public static __fromPtr__(param0: number): BackgroundSubtractor;
                public setHistory(param0: number): void;
                public setVarMin(param0: number): void;
                public constructor(param0: number);
                public setVarThreshold(param0: number): void;
                public getComplexityReductionThreshold(): number;
                public setVarMax(param0: number): void;
                public apply(param0: core.Mat, param1: core.Mat): void;
                public setBackgroundRatio(param0: number): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class DISOpticalFlow extends DenseOpticalFlow {
                public static class: java.lang.Class<DISOpticalFlow>;
                public static PRESET_ULTRAFAST: number;
                public static PRESET_FAST: number;
                public static PRESET_MEDIUM: number;
                public setVariationalRefinementDelta(param0: number): void;
                public getGradientDescentIterations(): number;
                public setFinestScale(param0: number): void;
                public setUseMeanNormalization(param0: boolean): void;
                public finalize(): void;
                public getPatchStride(): number;
                public static create(param0: number): DISOpticalFlow;
                public setUseSpatialPropagation(param0: boolean): void;
                public getVariationalRefinementIterations(): number;
                public getFinestScale(): number;
                public setVariationalRefinementGamma(param0: number): void;
                public getPatchSize(): number;
                public setPatchStride(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getUseMeanNormalization(): boolean;
                public setGradientDescentIterations(param0: number): void;
                public static create(): DISOpticalFlow;
                public setVariationalRefinementIterations(param0: number): void;
                public getVariationalRefinementAlpha(): number;
                public static __fromPtr__(param0: number): DenseOpticalFlow;
                public setVariationalRefinementAlpha(param0: number): void;
                public getVariationalRefinementGamma(): number;
                public getVariationalRefinementDelta(): number;
                public setPatchSize(param0: number): void;
                public constructor(param0: number);
                public getUseSpatialPropagation(): boolean;
                public static __fromPtr__(param0: number): DISOpticalFlow;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class DenseOpticalFlow extends core.Algorithm {
                public static class: java.lang.Class<DenseOpticalFlow>;
                public static __fromPtr__(param0: number): DenseOpticalFlow;
                public static __fromPtr__(param0: number): core.Algorithm;
                public collectGarbage(): void;
                public finalize(): void;
                public constructor(param0: number);
                public calc(param0: core.Mat, param1: core.Mat, param2: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class FarnebackOpticalFlow extends DenseOpticalFlow {
                public static class: java.lang.Class<FarnebackOpticalFlow>;
                public setPolySigma(param0: number): void;
                public getWinSize(): number;
                public getPolySigma(): number;
                public getNumIters(): number;
                public static __fromPtr__(param0: number): FarnebackOpticalFlow;
                public static create(param0: number): FarnebackOpticalFlow;
                public finalize(): void;
                public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number, param6: number, param7: number): FarnebackOpticalFlow;
                public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number, param6: number): FarnebackOpticalFlow;
                public getPolyN(): number;
                public getFlags(): number;
                public static create(param0: number, param1: number, param2: boolean): FarnebackOpticalFlow;
                public setWinSize(param0: number): void;
                public static create(param0: number, param1: number): FarnebackOpticalFlow;
                public getNumLevels(): number;
                public setPolyN(param0: number): void;
                public static create(): FarnebackOpticalFlow;
                public setNumIters(param0: number): void;
                public static __fromPtr__(param0: number): core.Algorithm;
                public setFastPyramids(param0: boolean): void;
                public getFastPyramids(): boolean;
                public getPyrScale(): number;
                public setNumLevels(param0: number): void;
                public setFlags(param0: number): void;
                public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number): FarnebackOpticalFlow;
                public static __fromPtr__(param0: number): DenseOpticalFlow;
                public static create(param0: number, param1: number, param2: boolean, param3: number, param4: number, param5: number): FarnebackOpticalFlow;
                public static create(param0: number, param1: number, param2: boolean, param3: number): FarnebackOpticalFlow;
                public setPyrScale(param0: number): void;
                public constructor(param0: number);
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class KalmanFilter extends java.lang.Object {
                public static class: java.lang.Class<KalmanFilter>;
                public nativeObj: number;
                public constructor(param0: number, param1: number);
                public constructor(param0: number, param1: number, param2: number);
                public get_errorCovPost(): core.Mat;
                public finalize(): void;
                public get_transitionMatrix(): core.Mat;
                public get_measurementNoiseCov(): core.Mat;
                public get_gain(): core.Mat;
                public constructor();
                public get_statePre(): core.Mat;
                public get_controlMatrix(): core.Mat;
                public set_statePost(param0: core.Mat): void;
                public set_measurementNoiseCov(param0: core.Mat): void;
                public set_transitionMatrix(param0: core.Mat): void;
                public set_processNoiseCov(param0: core.Mat): void;
                public get_processNoiseCov(): core.Mat;
                public set_errorCovPre(param0: core.Mat): void;
                public set_errorCovPost(param0: core.Mat): void;
                public getNativeObjAddr(): number;
                public get_statePost(): core.Mat;
                public static __fromPtr__(param0: number): KalmanFilter;
                public set_statePre(param0: core.Mat): void;
                public predict(param0: core.Mat): core.Mat;
                public constructor(param0: number, param1: number, param2: number, param3: number);
                public get_measurementMatrix(): core.Mat;
                public set_measurementMatrix(param0: core.Mat): void;
                public constructor(param0: number);
                public predict(): core.Mat;
                public set_gain(param0: core.Mat): void;
                public get_errorCovPre(): core.Mat;
                public correct(param0: core.Mat): core.Mat;
                public set_controlMatrix(param0: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class SparseOpticalFlow extends core.Algorithm {
                public static class: java.lang.Class<SparseOpticalFlow>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public calc(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat, param5: core.Mat): void;
                public finalize(): void;
                public constructor(param0: number);
                public static __fromPtr__(param0: number): SparseOpticalFlow;
                public calc(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat, param4: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class SparsePyrLKOpticalFlow extends SparseOpticalFlow {
                public static class: java.lang.Class<SparsePyrLKOpticalFlow>;
                public static create(param0: core.Size, param1: number): SparsePyrLKOpticalFlow;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getWinSize(): core.Size;
                public static create(param0: core.Size): SparsePyrLKOpticalFlow;
                public getMinEigThreshold(): number;
                public finalize(): void;
                public static create(param0: core.Size, param1: number, param2: core.TermCriteria, param3: number): SparsePyrLKOpticalFlow;
                public setWinSize(param0: core.Size): void;
                public getMaxLevel(): number;
                public setFlags(param0: number): void;
                public static create(param0: core.Size, param1: number, param2: core.TermCriteria, param3: number, param4: number): SparsePyrLKOpticalFlow;
                public static create(param0: core.Size, param1: number, param2: core.TermCriteria): SparsePyrLKOpticalFlow;
                public setMinEigThreshold(param0: number): void;
                public static __fromPtr__(param0: number): SparsePyrLKOpticalFlow;
                public constructor(param0: number);
                public static create(): SparsePyrLKOpticalFlow;
                public getFlags(): number;
                public setMaxLevel(param0: number): void;
                public getTermCriteria(): core.TermCriteria;
                public static __fromPtr__(param0: number): SparseOpticalFlow;
                public setTermCriteria(param0: core.TermCriteria): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class VariationalRefinement extends DenseOpticalFlow {
                public static class: java.lang.Class<VariationalRefinement>;
                public static __fromPtr__(param0: number): core.Algorithm;
                public getSorIterations(): number;
                public static __fromPtr__(param0: number): VariationalRefinement;
                public finalize(): void;
                public getAlpha(): number;
                public setAlpha(param0: number): void;
                public setFixedPointIterations(param0: number): void;
                public setGamma(param0: number): void;
                public static __fromPtr__(param0: number): DenseOpticalFlow;
                public static create(): VariationalRefinement;
                public getFixedPointIterations(): number;
                public setOmega(param0: number): void;
                public setDelta(param0: number): void;
                public setSorIterations(param0: number): void;
                public constructor(param0: number);
                public getOmega(): number;
                public getDelta(): number;
                public getGamma(): number;
                public calcUV(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: core.Mat): void;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace video {
            export class Video extends java.lang.Object {
                public static class: java.lang.Class<Video>;
                public static OPTFLOW_USE_INITIAL_FLOW: number;
                public static OPTFLOW_LK_GET_MIN_EIGENVALS: number;
                public static OPTFLOW_FARNEBACK_GAUSSIAN: number;
                public static MOTION_TRANSLATION: number;
                public static MOTION_EUCLIDEAN: number;
                public static MOTION_AFFINE: number;
                public static MOTION_HOMOGRAPHY: number;
                public static buildOpticalFlowPyramid(param0: core.Mat, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: boolean, param5: number): number;
                public static buildOpticalFlowPyramid(param0: core.Mat, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: boolean, param5: number, param6: number): number;
                public static writeOpticalFlow(param0: string, param1: core.Mat): boolean;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat, param6: core.Size): void;
                public static CamShift(param0: core.Mat, param1: core.Rect, param2: core.TermCriteria): core.RotatedRect;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat, param6: core.Size, param7: number, param8: core.TermCriteria, param9: number, param10: number): void;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat, param6: core.Size, param7: number, param8: core.TermCriteria): void;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat, param6: core.Size, param7: number): void;
                public static calcOpticalFlowFarneback(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): void;
                public constructor();
                public static createBackgroundSubtractorKNN(): BackgroundSubtractorKNN;
                public static computeECC(param0: core.Mat, param1: core.Mat): number;
                public static findTransformECC(param0: core.Mat, param1: core.Mat, param2: core.Mat, param3: number, param4: core.TermCriteria, param5: core.Mat, param6: number): number;
                public static createBackgroundSubtractorKNN(param0: number, param1: number): BackgroundSubtractorKNN;
                public static buildOpticalFlowPyramid(param0: core.Mat, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: boolean): number;
                public static createBackgroundSubtractorMOG2(param0: number): BackgroundSubtractorMOG2;
                public static createBackgroundSubtractorMOG2(param0: number, param1: number): BackgroundSubtractorMOG2;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat, param6: core.Size, param7: number, param8: core.TermCriteria, param9: number): void;
                public static createBackgroundSubtractorKNN(param0: number): BackgroundSubtractorKNN;
                public static meanShift(param0: core.Mat, param1: core.Rect, param2: core.TermCriteria): number;
                public static buildOpticalFlowPyramid(param0: core.Mat, param1: java.util.List<core.Mat>, param2: core.Size, param3: number): number;
                public static createBackgroundSubtractorMOG2(param0: number, param1: number, param2: boolean): BackgroundSubtractorMOG2;
                public static readOpticalFlow(param0: string): core.Mat;
                public static calcOpticalFlowPyrLK(param0: core.Mat, param1: core.Mat, param2: core.MatOfPoint2f, param3: core.MatOfPoint2f, param4: core.MatOfByte, param5: core.MatOfFloat): void;
                public static buildOpticalFlowPyramid(param0: core.Mat, param1: java.util.List<core.Mat>, param2: core.Size, param3: number, param4: boolean, param5: number, param6: number, param7: boolean): number;
                public static createBackgroundSubtractorMOG2(): BackgroundSubtractorMOG2;
                public static createBackgroundSubtractorKNN(param0: number, param1: number, param2: boolean): BackgroundSubtractorKNN;
                public static computeECC(param0: core.Mat, param1: core.Mat, param2: core.Mat): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace videoio {
            export class VideoCapture extends java.lang.Object {
                public static class: java.lang.Class<VideoCapture>;
                public nativeObj: number;
                public constructor(param0: number, param1: number);
                public getBackendName(): string;
                public release(): void;
                public set(param0: number, param1: number): boolean;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public static __fromPtr__(param0: number): VideoCapture;
                public get(param0: number): number;
                public setExceptionMode(param0: boolean): void;
                public open(param0: string): boolean;
                public open(param0: number, param1: number): boolean;
                public constructor(param0: string);
                public constructor();
                public open(param0: number): boolean;
                public retrieve(param0: core.Mat, param1: number): boolean;
                public retrieve(param0: core.Mat): boolean;
                public grab(): boolean;
                public isOpened(): boolean;
                public constructor(param0: string, param1: number);
                public constructor(param0: number);
                public getExceptionMode(): boolean;
                public read(param0: core.Mat): boolean;
                public open(param0: string, param1: number): boolean;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace videoio {
            export class VideoWriter extends java.lang.Object {
                public static class: java.lang.Class<VideoWriter>;
                public nativeObj: number;
                public getBackendName(): string;
                public release(): void;
                public constructor(param0: string, param1: number, param2: number, param3: number, param4: core.Size, param5: boolean);
                public set(param0: number, param1: number): boolean;
                public finalize(): void;
                public getNativeObjAddr(): number;
                public constructor(param0: string, param1: number, param2: number, param3: core.Size);
                public get(param0: number): number;
                public static __fromPtr__(param0: number): VideoWriter;
                public open(param0: string, param1: number, param2: number, param3: core.Size): boolean;
                public open(param0: string, param1: number, param2: number, param3: core.Size, param4: core.MatOfInt): boolean;
                public constructor();
                public constructor(param0: string, param1: number, param2: number, param3: number, param4: core.Size);
                public constructor(param0: string, param1: number, param2: number, param3: number, param4: core.Size, param5: core.MatOfInt);
                public write(param0: core.Mat): void;
                public open(param0: string, param1: number, param2: number, param3: number, param4: core.Size): boolean;
                public isOpened(): boolean;
                public open(param0: string, param1: number, param2: number, param3: number, param4: core.Size, param5: boolean): boolean;
                public constructor(param0: number);
                public open(param0: string, param1: number, param2: number, param3: number, param4: core.Size, param5: core.MatOfInt): boolean;
                public constructor(param0: string, param1: number, param2: number, param3: core.Size, param4: core.MatOfInt);
                public open(param0: string, param1: number, param2: number, param3: core.Size, param4: boolean): boolean;
                public constructor(param0: string, param1: number, param2: number, param3: core.Size, param4: boolean);
                public static fourcc(param0: string, param1: string, param2: string, param3: string): number;
            }
        }
    }
}

declare namespace org {
    export namespace opencv {
        export namespace videoio {
            export class Videoio extends java.lang.Object {
                public static class: java.lang.Class<Videoio>;
                public static VIDEOWRITER_PROP_QUALITY: number;
                public static VIDEOWRITER_PROP_FRAMEBYTES: number;
                public static VIDEOWRITER_PROP_NSTRIPES: number;
                public static VIDEOWRITER_PROP_IS_COLOR: number;
                public static CAP_PROP_POS_MSEC: number;
                public static CAP_PROP_POS_FRAMES: number;
                public static CAP_PROP_POS_AVI_RATIO: number;
                public static CAP_PROP_FRAME_WIDTH: number;
                public static CAP_PROP_FRAME_HEIGHT: number;
                public static CAP_PROP_FPS: number;
                public static CAP_PROP_FOURCC: number;
                public static CAP_PROP_FRAME_COUNT: number;
                public static CAP_PROP_FORMAT: number;
                public static CAP_PROP_MODE: number;
                public static CAP_PROP_BRIGHTNESS: number;
                public static CAP_PROP_CONTRAST: number;
                public static CAP_PROP_SATURATION: number;
                public static CAP_PROP_HUE: number;
                public static CAP_PROP_GAIN: number;
                public static CAP_PROP_EXPOSURE: number;
                public static CAP_PROP_CONVERT_RGB: number;
                public static CAP_PROP_WHITE_BALANCE_BLUE_U: number;
                public static CAP_PROP_RECTIFICATION: number;
                public static CAP_PROP_MONOCHROME: number;
                public static CAP_PROP_SHARPNESS: number;
                public static CAP_PROP_AUTO_EXPOSURE: number;
                public static CAP_PROP_GAMMA: number;
                public static CAP_PROP_TEMPERATURE: number;
                public static CAP_PROP_TRIGGER: number;
                public static CAP_PROP_TRIGGER_DELAY: number;
                public static CAP_PROP_WHITE_BALANCE_RED_V: number;
                public static CAP_PROP_ZOOM: number;
                public static CAP_PROP_FOCUS: number;
                public static CAP_PROP_GUID: number;
                public static CAP_PROP_ISO_SPEED: number;
                public static CAP_PROP_BACKLIGHT: number;
                public static CAP_PROP_PAN: number;
                public static CAP_PROP_TILT: number;
                public static CAP_PROP_ROLL: number;
                public static CAP_PROP_IRIS: number;
                public static CAP_PROP_SETTINGS: number;
                public static CAP_PROP_BUFFERSIZE: number;
                public static CAP_PROP_AUTOFOCUS: number;
                public static CAP_PROP_SAR_NUM: number;
                public static CAP_PROP_SAR_DEN: number;
                public static CAP_PROP_BACKEND: number;
                public static CAP_PROP_CHANNEL: number;
                public static CAP_PROP_AUTO_WB: number;
                public static CAP_PROP_WB_TEMPERATURE: number;
                public static CAP_PROP_CODEC_PIXEL_FORMAT: number;
                public static CAP_PROP_BITRATE: number;
                public static CAP_PROP_DC1394_OFF: number;
                public static CAP_PROP_DC1394_MODE_MANUAL: number;
                public static CAP_PROP_DC1394_MODE_AUTO: number;
                public static CAP_PROP_DC1394_MODE_ONE_PUSH_AUTO: number;
                public static CAP_PROP_DC1394_MAX: number;
                public static CAP_OPENNI_DEPTH_GENERATOR: number;
                public static CAP_OPENNI_IMAGE_GENERATOR: number;
                public static CAP_OPENNI_IR_GENERATOR: number;
                public static CAP_OPENNI_GENERATORS_MASK: number;
                public static CAP_PROP_OPENNI_OUTPUT_MODE: number;
                public static CAP_PROP_OPENNI_FRAME_MAX_DEPTH: number;
                public static CAP_PROP_OPENNI_BASELINE: number;
                public static CAP_PROP_OPENNI_FOCAL_LENGTH: number;
                public static CAP_PROP_OPENNI_REGISTRATION: number;
                public static CAP_PROP_OPENNI_REGISTRATION_ON: number;
                public static CAP_PROP_OPENNI_APPROX_FRAME_SYNC: number;
                public static CAP_PROP_OPENNI_MAX_BUFFER_SIZE: number;
                public static CAP_PROP_OPENNI_CIRCLE_BUFFER: number;
                public static CAP_PROP_OPENNI_MAX_TIME_DURATION: number;
                public static CAP_PROP_OPENNI_GENERATOR_PRESENT: number;
                public static CAP_PROP_OPENNI2_SYNC: number;
                public static CAP_PROP_OPENNI2_MIRROR: number;
                public static CAP_OPENNI_IMAGE_GENERATOR_PRESENT: number;
                public static CAP_OPENNI_IMAGE_GENERATOR_OUTPUT_MODE: number;
                public static CAP_OPENNI_DEPTH_GENERATOR_PRESENT: number;
                public static CAP_OPENNI_DEPTH_GENERATOR_BASELINE: number;
                public static CAP_OPENNI_DEPTH_GENERATOR_FOCAL_LENGTH: number;
                public static CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION: number;
                public static CAP_OPENNI_DEPTH_GENERATOR_REGISTRATION_ON: number;
                public static CAP_OPENNI_IR_GENERATOR_PRESENT: number;
                public static CAP_OPENNI_DEPTH_MAP: number;
                public static CAP_OPENNI_POINT_CLOUD_MAP: number;
                public static CAP_OPENNI_DISPARITY_MAP: number;
                public static CAP_OPENNI_DISPARITY_MAP_32F: number;
                public static CAP_OPENNI_VALID_DEPTH_MASK: number;
                public static CAP_OPENNI_BGR_IMAGE: number;
                public static CAP_OPENNI_GRAY_IMAGE: number;
                public static CAP_OPENNI_IR_IMAGE: number;
                public static CAP_OPENNI_VGA_30HZ: number;
                public static CAP_OPENNI_SXGA_15HZ: number;
                public static CAP_OPENNI_SXGA_30HZ: number;
                public static CAP_OPENNI_QVGA_30HZ: number;
                public static CAP_OPENNI_QVGA_60HZ: number;
                public static CAP_PROP_GSTREAMER_QUEUE_LENGTH: number;
                public static CAP_PROP_PVAPI_MULTICASTIP: number;
                public static CAP_PROP_PVAPI_FRAMESTARTTRIGGERMODE: number;
                public static CAP_PROP_PVAPI_DECIMATIONHORIZONTAL: number;
                public static CAP_PROP_PVAPI_DECIMATIONVERTICAL: number;
                public static CAP_PROP_PVAPI_BINNINGX: number;
                public static CAP_PROP_PVAPI_BINNINGY: number;
                public static CAP_PROP_PVAPI_PIXELFORMAT: number;
                public static CAP_PVAPI_FSTRIGMODE_FREERUN: number;
                public static CAP_PVAPI_FSTRIGMODE_SYNCIN1: number;
                public static CAP_PVAPI_FSTRIGMODE_SYNCIN2: number;
                public static CAP_PVAPI_FSTRIGMODE_FIXEDRATE: number;
                public static CAP_PVAPI_FSTRIGMODE_SOFTWARE: number;
                public static CAP_PVAPI_DECIMATION_OFF: number;
                public static CAP_PVAPI_DECIMATION_2OUTOF4: number;
                public static CAP_PVAPI_DECIMATION_2OUTOF8: number;
                public static CAP_PVAPI_DECIMATION_2OUTOF16: number;
                public static CAP_PVAPI_PIXELFORMAT_MONO8: number;
                public static CAP_PVAPI_PIXELFORMAT_MONO16: number;
                public static CAP_PVAPI_PIXELFORMAT_BAYER8: number;
                public static CAP_PVAPI_PIXELFORMAT_BAYER16: number;
                public static CAP_PVAPI_PIXELFORMAT_RGB24: number;
                public static CAP_PVAPI_PIXELFORMAT_BGR24: number;
                public static CAP_PVAPI_PIXELFORMAT_RGBA32: number;
                public static CAP_PVAPI_PIXELFORMAT_BGRA32: number;
                public static CAP_PROP_XI_DOWNSAMPLING: number;
                public static CAP_PROP_XI_DATA_FORMAT: number;
                public static CAP_PROP_XI_OFFSET_X: number;
                public static CAP_PROP_XI_OFFSET_Y: number;
                public static CAP_PROP_XI_TRG_SOURCE: number;
                public static CAP_PROP_XI_TRG_SOFTWARE: number;
                public static CAP_PROP_XI_GPI_SELECTOR: number;
                public static CAP_PROP_XI_GPI_MODE: number;
                public static CAP_PROP_XI_GPI_LEVEL: number;
                public static CAP_PROP_XI_GPO_SELECTOR: number;
                public static CAP_PROP_XI_GPO_MODE: number;
                public static CAP_PROP_XI_LED_SELECTOR: number;
                public static CAP_PROP_XI_LED_MODE: number;
                public static CAP_PROP_XI_MANUAL_WB: number;
                public static CAP_PROP_XI_AUTO_WB: number;
                public static CAP_PROP_XI_AEAG: number;
                public static CAP_PROP_XI_EXP_PRIORITY: number;
                public static CAP_PROP_XI_AE_MAX_LIMIT: number;
                public static CAP_PROP_XI_AG_MAX_LIMIT: number;
                public static CAP_PROP_XI_AEAG_LEVEL: number;
                public static CAP_PROP_XI_TIMEOUT: number;
                public static CAP_PROP_XI_EXPOSURE: number;
                public static CAP_PROP_XI_EXPOSURE_BURST_COUNT: number;
                public static CAP_PROP_XI_GAIN_SELECTOR: number;
                public static CAP_PROP_XI_GAIN: number;
                public static CAP_PROP_XI_DOWNSAMPLING_TYPE: number;
                public static CAP_PROP_XI_BINNING_SELECTOR: number;
                public static CAP_PROP_XI_BINNING_VERTICAL: number;
                public static CAP_PROP_XI_BINNING_HORIZONTAL: number;
                public static CAP_PROP_XI_BINNING_PATTERN: number;
                public static CAP_PROP_XI_DECIMATION_SELECTOR: number;
                public static CAP_PROP_XI_DECIMATION_VERTICAL: number;
                public static CAP_PROP_XI_DECIMATION_HORIZONTAL: number;
                public static CAP_PROP_XI_DECIMATION_PATTERN: number;
                public static CAP_PROP_XI_TEST_PATTERN_GENERATOR_SELECTOR: number;
                public static CAP_PROP_XI_TEST_PATTERN: number;
                public static CAP_PROP_XI_IMAGE_DATA_FORMAT: number;
                public static CAP_PROP_XI_SHUTTER_TYPE: number;
                public static CAP_PROP_XI_SENSOR_TAPS: number;
                public static CAP_PROP_XI_AEAG_ROI_OFFSET_X: number;
                public static CAP_PROP_XI_AEAG_ROI_OFFSET_Y: number;
                public static CAP_PROP_XI_AEAG_ROI_WIDTH: number;
                public static CAP_PROP_XI_AEAG_ROI_HEIGHT: number;
                public static CAP_PROP_XI_BPC: number;
                public static CAP_PROP_XI_WB_KR: number;
                public static CAP_PROP_XI_WB_KG: number;
                public static CAP_PROP_XI_WB_KB: number;
                public static CAP_PROP_XI_WIDTH: number;
                public static CAP_PROP_XI_HEIGHT: number;
                public static CAP_PROP_XI_REGION_SELECTOR: number;
                public static CAP_PROP_XI_REGION_MODE: number;
                public static CAP_PROP_XI_LIMIT_BANDWIDTH: number;
                public static CAP_PROP_XI_SENSOR_DATA_BIT_DEPTH: number;
                public static CAP_PROP_XI_OUTPUT_DATA_BIT_DEPTH: number;
                public static CAP_PROP_XI_IMAGE_DATA_BIT_DEPTH: number;
                public static CAP_PROP_XI_OUTPUT_DATA_PACKING: number;
                public static CAP_PROP_XI_OUTPUT_DATA_PACKING_TYPE: number;
                public static CAP_PROP_XI_IS_COOLED: number;
                public static CAP_PROP_XI_COOLING: number;
                public static CAP_PROP_XI_TARGET_TEMP: number;
                public static CAP_PROP_XI_CHIP_TEMP: number;
                public static CAP_PROP_XI_HOUS_TEMP: number;
                public static CAP_PROP_XI_HOUS_BACK_SIDE_TEMP: number;
                public static CAP_PROP_XI_SENSOR_BOARD_TEMP: number;
                public static CAP_PROP_XI_CMS: number;
                public static CAP_PROP_XI_APPLY_CMS: number;
                public static CAP_PROP_XI_IMAGE_IS_COLOR: number;
                public static CAP_PROP_XI_COLOR_FILTER_ARRAY: number;
                public static CAP_PROP_XI_GAMMAY: number;
                public static CAP_PROP_XI_GAMMAC: number;
                public static CAP_PROP_XI_SHARPNESS: number;
                public static CAP_PROP_XI_CC_MATRIX_00: number;
                public static CAP_PROP_XI_CC_MATRIX_01: number;
                public static CAP_PROP_XI_CC_MATRIX_02: number;
                public static CAP_PROP_XI_CC_MATRIX_03: number;
                public static CAP_PROP_XI_CC_MATRIX_10: number;
                public static CAP_PROP_XI_CC_MATRIX_11: number;
                public static CAP_PROP_XI_CC_MATRIX_12: number;
                public static CAP_PROP_XI_CC_MATRIX_13: number;
                public static CAP_PROP_XI_CC_MATRIX_20: number;
                public static CAP_PROP_XI_CC_MATRIX_21: number;
                public static CAP_PROP_XI_CC_MATRIX_22: number;
                public static CAP_PROP_XI_CC_MATRIX_23: number;
                public static CAP_PROP_XI_CC_MATRIX_30: number;
                public static CAP_PROP_XI_CC_MATRIX_31: number;
                public static CAP_PROP_XI_CC_MATRIX_32: number;
                public static CAP_PROP_XI_CC_MATRIX_33: number;
                public static CAP_PROP_XI_DEFAULT_CC_MATRIX: number;
                public static CAP_PROP_XI_TRG_SELECTOR: number;
                public static CAP_PROP_XI_ACQ_FRAME_BURST_COUNT: number;
                public static CAP_PROP_XI_DEBOUNCE_EN: number;
                public static CAP_PROP_XI_DEBOUNCE_T0: number;
                public static CAP_PROP_XI_DEBOUNCE_T1: number;
                public static CAP_PROP_XI_DEBOUNCE_POL: number;
                public static CAP_PROP_XI_LENS_MODE: number;
                public static CAP_PROP_XI_LENS_APERTURE_VALUE: number;
                public static CAP_PROP_XI_LENS_FOCUS_MOVEMENT_VALUE: number;
                public static CAP_PROP_XI_LENS_FOCUS_MOVE: number;
                public static CAP_PROP_XI_LENS_FOCUS_DISTANCE: number;
                public static CAP_PROP_XI_LENS_FOCAL_LENGTH: number;
                public static CAP_PROP_XI_LENS_FEATURE_SELECTOR: number;
                public static CAP_PROP_XI_LENS_FEATURE: number;
                public static CAP_PROP_XI_DEVICE_MODEL_ID: number;
                public static CAP_PROP_XI_DEVICE_SN: number;
                public static CAP_PROP_XI_IMAGE_DATA_FORMAT_RGB32_ALPHA: number;
                public static CAP_PROP_XI_IMAGE_PAYLOAD_SIZE: number;
                public static CAP_PROP_XI_TRANSPORT_PIXEL_FORMAT: number;
                public static CAP_PROP_XI_SENSOR_CLOCK_FREQ_HZ: number;
                public static CAP_PROP_XI_SENSOR_CLOCK_FREQ_INDEX: number;
                public static CAP_PROP_XI_SENSOR_OUTPUT_CHANNEL_COUNT: number;
                public static CAP_PROP_XI_FRAMERATE: number;
                public static CAP_PROP_XI_COUNTER_SELECTOR: number;
                public static CAP_PROP_XI_COUNTER_VALUE: number;
                public static CAP_PROP_XI_ACQ_TIMING_MODE: number;
                public static CAP_PROP_XI_AVAILABLE_BANDWIDTH: number;
                public static CAP_PROP_XI_BUFFER_POLICY: number;
                public static CAP_PROP_XI_LUT_EN: number;
                public static CAP_PROP_XI_LUT_INDEX: number;
                public static CAP_PROP_XI_LUT_VALUE: number;
                public static CAP_PROP_XI_TRG_DELAY: number;
                public static CAP_PROP_XI_TS_RST_MODE: number;
                public static CAP_PROP_XI_TS_RST_SOURCE: number;
                public static CAP_PROP_XI_IS_DEVICE_EXIST: number;
                public static CAP_PROP_XI_ACQ_BUFFER_SIZE: number;
                public static CAP_PROP_XI_ACQ_BUFFER_SIZE_UNIT: number;
                public static CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_SIZE: number;
                public static CAP_PROP_XI_BUFFERS_QUEUE_SIZE: number;
                public static CAP_PROP_XI_ACQ_TRANSPORT_BUFFER_COMMIT: number;
                public static CAP_PROP_XI_RECENT_FRAME: number;
                public static CAP_PROP_XI_DEVICE_RESET: number;
                public static CAP_PROP_XI_COLUMN_FPN_CORRECTION: number;
                public static CAP_PROP_XI_ROW_FPN_CORRECTION: number;
                public static CAP_PROP_XI_SENSOR_MODE: number;
                public static CAP_PROP_XI_HDR: number;
                public static CAP_PROP_XI_HDR_KNEEPOINT_COUNT: number;
                public static CAP_PROP_XI_HDR_T1: number;
                public static CAP_PROP_XI_HDR_T2: number;
                public static CAP_PROP_XI_KNEEPOINT1: number;
                public static CAP_PROP_XI_KNEEPOINT2: number;
                public static CAP_PROP_XI_IMAGE_BLACK_LEVEL: number;
                public static CAP_PROP_XI_HW_REVISION: number;
                public static CAP_PROP_XI_DEBUG_LEVEL: number;
                public static CAP_PROP_XI_AUTO_BANDWIDTH_CALCULATION: number;
                public static CAP_PROP_XI_FFS_FILE_ID: number;
                public static CAP_PROP_XI_FFS_FILE_SIZE: number;
                public static CAP_PROP_XI_FREE_FFS_SIZE: number;
                public static CAP_PROP_XI_USED_FFS_SIZE: number;
                public static CAP_PROP_XI_FFS_ACCESS_KEY: number;
                public static CAP_PROP_XI_SENSOR_FEATURE_SELECTOR: number;
                public static CAP_PROP_XI_SENSOR_FEATURE_VALUE: number;
                public static CAP_PROP_ARAVIS_AUTOTRIGGER: number;
                public static CAP_PROP_IOS_DEVICE_FOCUS: number;
                public static CAP_PROP_IOS_DEVICE_EXPOSURE: number;
                public static CAP_PROP_IOS_DEVICE_FLASH: number;
                public static CAP_PROP_IOS_DEVICE_WHITEBALANCE: number;
                public static CAP_PROP_IOS_DEVICE_TORCH: number;
                public static CAP_PROP_GIGA_FRAME_OFFSET_X: number;
                public static CAP_PROP_GIGA_FRAME_OFFSET_Y: number;
                public static CAP_PROP_GIGA_FRAME_WIDTH_MAX: number;
                public static CAP_PROP_GIGA_FRAME_HEIGH_MAX: number;
                public static CAP_PROP_GIGA_FRAME_SENS_WIDTH: number;
                public static CAP_PROP_GIGA_FRAME_SENS_HEIGH: number;
                public static CAP_PROP_INTELPERC_PROFILE_COUNT: number;
                public static CAP_PROP_INTELPERC_PROFILE_IDX: number;
                public static CAP_PROP_INTELPERC_DEPTH_LOW_CONFIDENCE_VALUE: number;
                public static CAP_PROP_INTELPERC_DEPTH_SATURATION_VALUE: number;
                public static CAP_PROP_INTELPERC_DEPTH_CONFIDENCE_THRESHOLD: number;
                public static CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_HORZ: number;
                public static CAP_PROP_INTELPERC_DEPTH_FOCAL_LENGTH_VERT: number;
                public static CAP_INTELPERC_DEPTH_GENERATOR: number;
                public static CAP_INTELPERC_IMAGE_GENERATOR: number;
                public static CAP_INTELPERC_IR_GENERATOR: number;
                public static CAP_INTELPERC_GENERATORS_MASK: number;
                public static CAP_INTELPERC_DEPTH_MAP: number;
                public static CAP_INTELPERC_UVDEPTH_MAP: number;
                public static CAP_INTELPERC_IR_MAP: number;
                public static CAP_INTELPERC_IMAGE: number;
                public static CAP_PROP_GPHOTO2_PREVIEW: number;
                public static CAP_PROP_GPHOTO2_WIDGET_ENUMERATE: number;
                public static CAP_PROP_GPHOTO2_RELOAD_CONFIG: number;
                public static CAP_PROP_GPHOTO2_RELOAD_ON_CHANGE: number;
                public static CAP_PROP_GPHOTO2_COLLECT_MSGS: number;
                public static CAP_PROP_GPHOTO2_FLUSH_MSGS: number;
                public static CAP_PROP_SPEED: number;
                public static CAP_PROP_APERTURE: number;
                public static CAP_PROP_EXPOSUREPROGRAM: number;
                public static CAP_PROP_VIEWFINDER: number;
                public static CAP_PROP_IMAGES_BASE: number;
                public static CAP_PROP_IMAGES_LAST: number;
                public static CAP_ANY: number;
                public static CAP_VFW: number;
                public static CAP_V4L: number;
                public static CAP_V4L2: number;
                public static CAP_FIREWIRE: number;
                public static CAP_FIREWARE: number;
                public static CAP_IEEE1394: number;
                public static CAP_DC1394: number;
                public static CAP_CMU1394: number;
                public static CAP_QT: number;
                public static CAP_UNICAP: number;
                public static CAP_DSHOW: number;
                public static CAP_PVAPI: number;
                public static CAP_OPENNI: number;
                public static CAP_OPENNI_ASUS: number;
                public static CAP_ANDROID: number;
                public static CAP_XIAPI: number;
                public static CAP_AVFOUNDATION: number;
                public static CAP_GIGANETIX: number;
                public static CAP_MSMF: number;
                public static CAP_WINRT: number;
                public static CAP_INTELPERC: number;
                public static CAP_REALSENSE: number;
                public static CAP_OPENNI2: number;
                public static CAP_OPENNI2_ASUS: number;
                public static CAP_GPHOTO2: number;
                public static CAP_GSTREAMER: number;
                public static CAP_FFMPEG: number;
                public static CAP_IMAGES: number;
                public static CAP_ARAVIS: number;
                public static CAP_OPENCV_MJPEG: number;
                public static CAP_INTEL_MFX: number;
                public static CAP_XINE: number;
                public static getBackendName(param0: number): string;
                public constructor();
            }
        }
    }
}

//Generics information:

