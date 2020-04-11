package com.example.onappshooping;

public class Product {
    private String productName;
    private double productPrice;
    private String productType;
    private int productImage;

    public Product(String productName, double productPrice, String productType, int productImage) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productType = productType;
        this.productImage = productImage;
    }

    public String getProductName() {
        return productName;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public String getProductType() {
        return productType;
    }

    public int getProductImage() {
        return productImage;
    }
}
