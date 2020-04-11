package com.example.onappshooping;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class ProductDetailsActivity extends AppCompatActivity {
    EditText et;
    TextView tv1;
    ImageView iv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_details);
        et=findViewById(R.id.etPrice);
        tv1=findViewById(R.id.textView2);
        tv1.setText(MainActivity.name);

        et.setText(String.format("%.2f",MainActivity.price));
        iv=findViewById(R.id.imageView2);
        iv.setImageResource(MainActivity.img);
    }
}
