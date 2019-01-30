#ifdef __cplusplus
#import <opencv2/opencv.hpp>
#import <opencv2/imgcodecs/ios.h>
#endif

#ifdef __OBJC__
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#endif

#import "OpenCVMat.h"
#import "OpenCVWrapper.h"

@implementation OpenCVMat
{
  cv::Mat * _mat;
  BOOL owned;
}
-(id)init {
  self = [super init];
  _mat = new cv::Mat;
  owned = true;
  return self;
}

-(void)setMat:(cv::Mat*)newVal {
  @synchronized(self) {
    if (_mat && owned) {
      _mat->release();
      delete _mat;  // it's OK to delete a NULL pointer

    }
    _mat = newVal;
  }
}

-(cv::Mat*)mat {
  return _mat;
}

-(void)dealloc {
  [self setMat:NULL];
//  delete _mat;
}

- (id)initWithMat:(cv::Mat&)mat
{
  // NSLog(@"initWithMat");
  self = [super init];
  
  if (self) {
    [self setMat:&mat];
    owned = false;
  }
  
  return self;
}
- (id)initWithOwnedMat:(cv::Mat&)mat
{
  // NSLog(@"initWithMat");
  self = [super init];
  
  if (self) {
    [self setMat:&mat];
    owned = true;
  }
  
  return self;
}
- (id)initWithRows:(int)rows cols:(int) cols type:(int) type
{
  // NSLog(@"initWithRows %d %d %d", rows, cols, type);
  self = [super init];
  
  if (self) {
    _mat = new cv::Mat(rows, cols, type);
    owned = true;
  }
  
  return self;
}

- (id)initWithOpenCVMat:(OpenCVMat*)mat
{
  // NSLog(@"initWithOpenCVMat");
  self = [super init];
  
  if (self) {
    [self setMat:mat.mat];
    owned = false;
  }
  
  return self;
}
- (id)initWithImage:(UIImage*)image
{
  // NSLog(@"initWithImage");
  self = [super init];
  
  
  if (self) {
    cv::Mat* mat = new cv::Mat();
    CGImageAlphaInfo ainfo = CGImageGetAlphaInfo( image.CGImage );
    UIImageToMat( image, *mat, ainfo != kCGImageAlphaNone );
    // NSLog(@"initWithImage2 %d %d", mat->cols, mat->rows);
    [self setMat:mat];
    owned = true;
  }
  
  return self;
}

-(void)releaseMat {
  if (_mat) {
    _mat->release();
    delete _mat;  // it's OK to delete a NULL pointer
    _mat = NULL;
//    [self setMat:NULL];
//    return _mat->release();
  }
}

-(int)channels {
  if (_mat) {
    return _mat->channels();
  }
  return -1;
}

-(void)setTo:(UIColor*)color
{
  if (_mat) {
    const CGFloat* components = CGColorGetComponents(color.CGColor);
    cv::Scalar cvColor(components[0]*255, components[1]*255, components[2]*255, components[3]*255);
    _mat->setTo(cvColor);
  }
}

-(CGSize)size {
  if (_mat) {
    // NSLog(@"size %d %d", _mat->cols, _mat->rows);
    return CGSizeMake(_mat->cols, _mat->rows);
  }
  return CGSizeZero;
}

-(UIImage*)toImage  {
  if (_mat) {
//    if (_mat->channels() == 4) {
//    return MatToUIImage(*_mat);
//    }
    return [OpenCVWrapper UIImageFromCVMat:*_mat];
  }
  return nil;
}

-(OpenCVMat*)clone {
  OpenCVMat* newMat = [[OpenCVMat alloc] initWithRows:_mat->rows cols:_mat->cols type:_mat->type()];
  _mat->copyTo(*newMat.mat);
  return newMat;
}

- (id)copyWithZone:(NSZone *)zone {
  return [[[self class] alloc] initWithOpenCVMat:self];
}
@end

