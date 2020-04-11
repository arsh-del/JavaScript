package com.example.onappshooping;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {
ListView productList;
ArrayList<Product> products = new ArrayList<Product>();
public static String name;
public static double price;
public static int img;


public void fillProducts(){
    products.add(new Product("Apple watch",1230,"Watch",R.drawable.apple));
    products.add(new Product("Fossil watch",850,"Watch",R.drawable.fossil));
    products.add(new Product("Garmin watch",670,"Watch",R.drawable.garmin));
    products.add(new Product("Samsung watch",500,"Watch",R.drawable.samsung));
    products.add(new Product("iPhone 11",1500,"phone",R.drawable.iphone));
    products.add(new Product("Galaxy 10",1300,"phone",R.drawable.galaxy));
}
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        fillProducts();
        productList=findViewById(R.id.lvProduct);
        productList.setAdapter(new ProductAdapter(this,products));

        productList.setOnItemClickListener(this);
    }

    @Override
    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
        name = products.get(i).getProductName();
        price=products.get(i).getProductPrice();
        img=products.get(i).getProductImage();
        Intent intent = new Intent(this,ProductDetailsActivity.class);
        startActivity(intent);
    }
}
