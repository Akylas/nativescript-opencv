#import <opencv2/videoio/cap_ios.h>
#import <UIKit/UIKit.h>
#import "OpenCVMat.h"

@protocol CvCameraPreviewDelegate <NSObject>

- (void)processOpenCVMat:(OpenCVMat*)image;

@end

@interface CvCameraPreview : UIImageView <CvVideoCameraDelegate>
@property (nonatomic,strong) CvVideoCamera *videoCamera;
@property (nonatomic, weak) id<CvCameraPreviewDelegate> delegate;

- (void)startCamera;
- (void)stopCamera;
-(BOOL)cameraStarted;
@end
