#import <opencv2/opencv.hpp>
#ifdef __cplusplus
#import <opencv2/opencv.hpp>
#endif

#ifdef __OBJC__
#import <UIKit/UIKit.h>
#import <Foundation/Foundation.h>
#endif

#import "OpenCVWrapper.h"
#import <UIKit/UIKit.h>


@implementation OpenCVWrapper : NSObject


+(void)cvtColor: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)colorType :(int)dstChannels {
  cv::cvtColor(*mat1.mat, *mat2.mat, colorType, dstChannels);
}
//+(void)cvtColor: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)colorType {
//  cv::cvtColor(*mat1.mat, *mat2.mat, colorType, 0);
//}

+(void)GaussianBlur: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)x :(int)y :(int)sigmaX {
  cv::GaussianBlur(*mat1.mat, *mat2.mat, cv::Size(x, y), sigmaX);
}

+(void)resize: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)x :(int)y {
  cv::resize(*mat1.mat, *mat2.mat, cv::Size(x, y));
}

+(void)Canny: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(double)threshold1 :(double)threshold2 :(int)apertureSize :(BOOL)L2gradient {
  cv::Canny(*mat1.mat, *mat2.mat, threshold1, threshold2, apertureSize, L2gradient);
}
+(double)contourArea:(NSArray*)contour :(BOOL)oriented {
  __block std::vector<cv::Point> vector;
  [contour enumerateObjectsUsingBlock:^(NSDictionary*  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
    vector.push_back(cv::Point([[obj valueForKey:@"x"] intValue], [[obj valueForKey:@"y"] intValue]));
  }];
  return cv::contourArea(vector);
}

+(void)findContours: (OpenCVMat*)mat1 :(NSMutableArray*)contours :(OpenCVMat*)hierarchy :(int)mode :(int)method :(CGPoint)offset {
  std::vector<std::vector<cv::Point>> vectors;
  cv::findContours(*mat1.mat, vectors, *hierarchy.mat, mode, method, cv::Point(offset.x, offset.y));
  for(auto const& value: vectors) {
    if (value.size() > 0) {
      NSMutableArray* subArray = [NSMutableArray array];
      for(auto const& subvalue: value) {
          [subArray addObject:@{@"x":@(subvalue.x) , @"y":@(subvalue.y)}];
      }
      [contours addObject:subArray];
    }
  }
  vectors.clear();
}


+ (cv::Mat*)cvMatFromUIImage:(UIImage *)image
{
//  NSLog(@"cvMatFromUIImage");
    CGColorSpaceRef colorSpace = CGImageGetColorSpace(image.CGImage);
    CGFloat cols = image.size.width;
    CGFloat rows = image.size.height;
//    NSLog(@"cols %f", cols);
//    NSLog(@"rows %f", rows);

    cv::Mat* cvMat = new cv::Mat(rows, cols, CV_8UC4); // 8 bits per component, 4 channels (color channels + alpha)
    
    CGContextRef contextRef = CGBitmapContextCreate(cvMat->data,                 // Pointer to  data
                                                    cols,                       // Width of bitmap
                                                    rows,                       // Height of bitmap
                                                    8,                          // Bits per component
                                                    cvMat->step[0],              // Bytes per row
                                                    colorSpace,                 // Colorspace
                                                    kCGImageAlphaNoneSkipLast |
                                                    kCGBitmapByteOrderDefault); // Bitmap info flags
    
    CGContextDrawImage(contextRef, CGRectMake(0, 0, cols, rows), image.CGImage);
    CGContextRelease(contextRef);
    
    return cvMat;
}
+ (cv::Mat*)cvMatGrayFromUIImage:(UIImage *)image
{
    CGColorSpaceRef colorSpace = CGImageGetColorSpace(image.CGImage);
    CGFloat cols = image.size.width;
    CGFloat rows = image.size.height;
    cv::Mat* cvMat = new cv::Mat(rows, cols, CV_8UC1); // 8 bits per component, 1 channels
    
    CGContextRef contextRef = CGBitmapContextCreate(cvMat->data,                 // Pointer to data
                                                    cols,                       // Width of bitmap
                                                    rows,                       // Height of bitmap
                                                    8,                          // Bits per component
                                                    cvMat->step[0],              // Bytes per row
                                                    colorSpace,                 // Colorspace
                                                    kCGImageAlphaNoneSkipLast |
                                                    kCGBitmapByteOrderDefault); // Bitmap info flags
    
    CGContextDrawImage(contextRef, CGRectMake(0, 0, cols, rows), image.CGImage);
    CGContextRelease(contextRef);
    
    return cvMat;
}


+ (UIImage *)UIImageFromCVMat:(cv::Mat&)cvMat
{
    NSData *data = [NSData dataWithBytes:cvMat.data length:cvMat.elemSize()*cvMat.total()];
    CGColorSpaceRef colorSpace;
    
    if (cvMat.elemSize() == 1) {
        colorSpace = CGColorSpaceCreateDeviceGray();
    } else {
        colorSpace = CGColorSpaceCreateDeviceRGB();
    }
    
    CGDataProviderRef provider = CGDataProviderCreateWithCFData((__bridge CFDataRef)data);
  // Preserve alpha transparency, if exists
    bool alpha = cvMat.channels() == 4;
    CGBitmapInfo bitmapInfo = (alpha ? kCGImageAlphaLast : kCGImageAlphaNone) | kCGBitmapByteOrderDefault;

    // Creating CGImage from cv::Mat
    CGImageRef imageRef = CGImageCreate(cvMat.cols,                                 //width
                                        cvMat.rows,                                 //height
                                        8,                                          //bits per component
                                        8 * cvMat.elemSize(),                       //bits per pixel
                                        cvMat.step[0],                            //bytesPerRow
                                        colorSpace,                                 //colorspace
                                        bitmapInfo,// bitmap info
                                        provider,                                   //CGDataProviderRef
                                        NULL,                                       //decode
                                        false,                                      //should interpolate
                                        kCGRenderingIntentDefault                   //intent
                                        );
    
    
    // Getting UIImage from CGImage
    UIImage *finalImage = [UIImage imageWithCGImage:imageRef];
    CGImageRelease(imageRef);
    CGDataProviderRelease(provider);
    CGColorSpaceRelease(colorSpace);
    
    return finalImage;
}

+(void)drawContours:(OpenCVMat*)mat :(NSArray*)contours :(int)contourIdx :(UIColor*)color :(int)thickness :(int)lineType :(OpenCVMat*) hierarchy :(int) maxLevel :(NSDictionary*) offset {
  std::vector<std::vector<cv::Point>> vectors;
  for (NSArray* obj in contours) {
    std::vector<cv::Point> vector;
    for (NSDictionary* obj2 in obj) {
      vector.push_back(cv::Point([[obj2 valueForKey:@"x"] intValue], [[obj2 valueForKey:@"y"] intValue]));
    }
    vectors.push_back(vector);
  }
//  [contours enumerateObjectsUsingBlock:^(NSArray*  _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
//    __block std::vector<cv::Point> vector;
//    [obj enumerateObjectsUsingBlock:^(NSValue*  _Nonnull obj2, NSUInteger idx, BOOL * _Nonnull stop) {
//      vector.push_back(cv::Point([[obj2 valueForKey:@"x"] floatValue], [[obj2 valueForKey:@"y"] floatValue]));
//    }];
//    vectors.push_back(vector);
//  }];
  const CGFloat* components = CGColorGetComponents(color.CGColor);
  cv::Scalar cvColor(components[0]*255, components[1]*255, components[2]*255, components[3]*255);
  cv::Point cvOffset([[offset valueForKey:@"x"] floatValue], [[offset valueForKey:@"y"] floatValue]);
  cv::drawContours(*mat.mat, vectors, contourIdx, cvColor, thickness, lineType, hierarchy? *hierarchy.mat : cv::noArray(), maxLevel, cvOffset);
}
@end
