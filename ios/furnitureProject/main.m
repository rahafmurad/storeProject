#import <UIKit/UIKit.h>

#import "AppDelegate.h"
#import <React/RCTI18nUtil.h>

int main(int argc, char *argv[])
{
  @autoreleasepool {
    [[RCTI18nUtil sharedInstance] allowRTL:YES];

    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
}
