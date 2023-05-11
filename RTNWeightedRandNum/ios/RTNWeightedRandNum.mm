#import "RTNWeightedRandNumSpec.h"
#import "RTNWeightedRandNum.h"

@implementation RTNWeightedRandNum

RCT_EXPORT_MODULE()

- (void)weightedRandNum:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    NSNumber *result = [[NSNumber alloc] initWithInteger:a+b];
    resolve(result);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeWeigthedRandNumSpecJSI>(params);
}

@end