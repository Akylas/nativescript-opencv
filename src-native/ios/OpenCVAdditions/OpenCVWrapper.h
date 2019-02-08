#include <UIKit/UIKit.h>
#import "OpenCVMat.h"

template < typename T, typename ObjCClass >
NSArray * ArrayFromVector( const std::vector< T > & vector, SEL initMethod )
{
  NSMutableArray * a;
  id ( * i )( id, SEL, T );
  
  a = [ NSMutableArray arrayWithCapacity: vector.size() ];
  
  if( [ ObjCClass instancesRespondToSelector: initMethod ] )
  {
    for( auto v: vector )
    {
      {
        id o;
        
        o = [ ObjCClass alloc ];
        i = reinterpret_cast< id ( * )( id, SEL, T ) >( [ o methodForSelector: initMethod ] );
        
        if( i != NULL )
        {
          o = i( o, initMethod, v );
          
          if( o != nil )
          {
            [ a addObject: o ];
          }
        }
        
#if !defined( __clang__ ) || !defined( __has_feature ) || !__has_feature( objc_arc )
        [ o release ];
#endif
      }
    }
  }
  
  return [ NSArray arrayWithArray: a ];
}

template < typename T, typename ObjCClass >
std::vector< T > VectorFromArray( NSArray * array, SEL getter )
{
  std::vector< T > v;
  id               o;
  T ( * i )( id, SEL );
  
  if( [ ObjCClass instancesRespondToSelector: getter ] )
  {
    for( o in array )
    {
      if( [ o isKindOfClass: [ ObjCClass class ] ] )
      {
        i = reinterpret_cast< T ( * )( id, SEL ) >( [ o methodForSelector: getter ] );
        
        if( i != NULL )
        {
          v.push_back( i( o, getter ) );
        }
      }
    }
  }
  
  return v;
}


enum
{
  OPENCV_8U = CV_8U,
  OPENCV_8S = CV_8S,
  OPENCV_16U = CV_16U,
  OPENCV_16S = CV_16S,
  OPENCV_32S = CV_32S,
  OPENCV_32F = CV_32F,
  OPENCV_64F = CV_64F,
  OPENCV_USRTYPE1 = CV_USRTYPE1,
  
  OPENCV_8UC1 = CV_8UC1,
  OPENCV_8UC2 = CV_8UC2,
  OPENCV_8UC3 = CV_8UC3,
  OPENCV_8UC4 = CV_8UC4,
  
  OPENCV_8SC1 = CV_8SC1,
  OPENCV_8SC2 = CV_8SC2,
  OPENCV_8SC3 = CV_8SC3,
  OPENCV_8SC4 = CV_8SC4,
  
  OPENCV_16UC1 = CV_16UC1,
  OPENCV_16UC2 = CV_16UC2,
  OPENCV_16UC3 = CV_16UC3,
  OPENCV_16UC4 = CV_16UC4,
  
  OPENCV_16SC1 = CV_16SC1,
  OPENCV_16SC2 = CV_16SC2,
  OPENCV_16SC3 = CV_16SC3,
  OPENCV_16SC4 = CV_16SC4,
  
  OPENCV_32SC1 = CV_32SC1,
  OPENCV_32SC2 = CV_32SC2,
  OPENCV_32SC3 = CV_32SC3,
  OPENCV_32SC4 = CV_32SC4,
  
  OPENCV_32FC1 = CV_32FC1,
  OPENCV_32FC2 = CV_32FC2,
  OPENCV_32FC3 = CV_32FC3,
  OPENCV_32FC4 = CV_32FC4,
  
  OPENCV_64FC1 = CV_64FC1,
  OPENCV_64FC2 = CV_64FC2,
  OPENCV_64FC3 = CV_64FC3
};

@interface ContoursVector : NSObject

//-(id)initWithVector:(std::vector<std::vector<cv::Point>> &) vector;
-(int)size;
-(std::vector<std::vector<cv::Point>>*)vector;
-(NSDictionary*)get:(int)i :(int)j;
-(double)contourArea:(int)index :(BOOL)oriented;

@end

@interface OpenCVWrapper : NSObject

+(void)cvtColor: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)colorType :(int)dstChannels;
//+(void)cvtColor: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)colorType;
+(void)GaussianBlur: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)x :(int)y :(int)sigmaX;
+(void)resize: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(int)x :(int)y;
+(void)Canny: (OpenCVMat*)mat1 :(OpenCVMat*)mat2 :(double)threshold1 :(double)threshold2 :(int)apertureSize :(BOOL)L2gradient;
+(ContoursVector*)findContours: (OpenCVMat*)mat1 :(OpenCVMat*)hierarchy :(int)mode :(int)method :(CGPoint)offset;
+ (cv::Mat*)cvMatFromUIImage:(UIImage *)image;
+ (cv::Mat*)cvMatGrayFromUIImage:(UIImage *)image;
+ (UIImage *)UIImageFromCVMat:(cv::Mat&)cvMat;
+(double)contourArea:(NSArray*)contour :(BOOL)oriented;
+(void)drawContours:(OpenCVMat*)mat :(ContoursVector*)contours :(int)contourIdx :(UIColor*)color :(int)thickness :(int)lineType :(OpenCVMat*) hierarchy :(int) maxLevel :(NSDictionary*) offset;
@end

