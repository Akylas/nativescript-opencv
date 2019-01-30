//
//  CvMat.h
//  OpenCVAdditions
//
//  Created by Martin Guillon on 1/26/19.
//  Copyright © 2019 Radius Networks. All rights reserved.
//

#import <opencv2/opencv.hpp>
#import <Foundation/Foundation.h>

//extern const int MY_INT_CONST;

@interface OpenCVMat : NSObject
#ifdef __cplusplus
@property /*(unsafe_unretained,assign,atomic)*/ cv::Mat * mat;
#endif
- (id)initWithMat:(cv::Mat&) mat;
- (id)initWithOpenCVMat:(OpenCVMat*)mat;
- (id)initWithRows:(int)rows cols:(int) cols type:(int) type;
- (id)initWithImage:(UIImage*)image;
- (int) channels;
- (CGSize) size;
-(void)releaseMat;
-(UIImage*)toImage;
-(void)setTo:(UIColor*)color;
-(OpenCVMat*)clone;
@end

