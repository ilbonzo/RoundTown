package com.ilbonzo.roundtown;

import android.os.Bundle;
import android.app.Activity;
import org.apache.cordova.*;

public class RoundTownActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
