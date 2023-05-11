package com.rtnweightedrandnum;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.rtnweightedrandnum.NativeWeigthedRandNumSpec;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import java.util.Random;


public class WeightedRandNumModule extends NativeWeigthedRandNumSpec {

    public static String NAME = "RTNWeightedRandNum";

    WeightedRandNumModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override
    public void weightedRandNum(ReadableArray a, ReadableArray b, Promise promise) {
        double totalWeight = 0;
        for (int i = 0; i < b.size(); i++) {
          totalWeight += b.getDouble(i);
        }
    
        double rand = new Random().nextDouble() * totalWeight;
    
        double weightSum = 0;
        for (int i = 0; i < b.size(); i++) {
          weightSum += b.getDouble(i);
          if (rand < weightSum) {
            promise.resolve(a.getDouble(i));
            return;
          }
        }
    }
}