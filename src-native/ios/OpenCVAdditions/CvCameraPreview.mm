#ifdef __cplusplus
#import <opencv2/opencv.hpp>
#endif

#ifdef __OBJC__
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#endif

#import "CvCameraPreview.h"
#import "OpenCVMat.h"

@implementation CvCameraPreview
{
  BOOL cameraStarted;
}
- (void)setup
{
  [self initCamera];
  self.contentMode = UIViewContentModeScaleAspectFill;
  cameraStarted = false;
}

- (void)initCamera
{
  self.videoCamera = [[CvVideoCamera alloc] initWithParentView:self];
  self.videoCamera.defaultAVCaptureDevicePosition = AVCaptureDevicePositionBack;
  self.videoCamera.defaultAVCaptureVideoOrientation = AVCaptureVideoOrientationPortrait; // Ensure proper orientation
  self.videoCamera.defaultAVCaptureSessionPreset = AVCaptureSessionPresetHigh;
  self.videoCamera.defaultFPS = 30;
  self.videoCamera.delegate = self;
}

- (void)awakeFromNib
{
    [super awakeFromNib];
    [self setup];
}

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];

    if (self) {
        [self setup];}

    return self;
}

-(BOOL)cameraStarted {
  return cameraStarted;
}

- (void)startCamera {
  if (self.cameraStarted) {
    return;
  }
  [self.videoCamera start];
  cameraStarted = true;
}

- (void)stopCamera {
  if (!self.cameraStarted) {
    return;
  }
  cameraStarted = false;
 [self.videoCamera stop];
}

- (void)processImage:(cv::Mat&)image
{
//  cv::Size size = image.size();
//  
//  double ratio = size.height / 500.0f;
//  // const ratio = 1;
//  int height = round(size.height / ratio);
//  int width = round(size.width / ratio);
//  
//  cv::Mat resizedImage(height, width, CV_8UC4);
//  cv::Mat grayImage(height, width, CV_8UC4);
//  cv::Mat cannedImage(height, width, CV_8UC1);
//  // console.log('testImage4', cannedImage.size());
//  
//  cv::resize(image, resizedImage, cv::Size(width, height));
//  cv::cvtColor(resizedImage, grayImage, cv::COLOR_RGBA2GRAY);
//  cv::GaussianBlur(grayImage, grayImage, cv::Size(5, 5), 0);
//  cv::Canny(grayImage, cannedImage, 75, 200);
//  // console.log('testImage5', cannedImage.size());
//  std::vector<std::vector<cv::Point>> contours;
//  cv::Mat hierarchy;
//  cv::findContours(cannedImage, contours, hierarchy, cv::RETR_LIST, cv::CHAIN_APPROX_SIMPLE);
//  for( int a = 0; a < contours.size(); a = a + 1 ) {
//    cv::drawContours(image,  contours, a, cv::Scalar(255,0,0));
//  }

  if (self.delegate) {
    OpenCVMat* mat = [[OpenCVMat alloc] initWithMat:image];
    [self.delegate processOpenCVMat:(id)mat];
  }
}
@end
