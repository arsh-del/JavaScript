package com.example.onappshooping;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

public class ProductAdapter extends BaseAdapter {
    private ArrayList<Product> productDetails;
    LayoutInflater layoutInflater;

    public ProductAdapter(Context context, ArrayList<Product> productDetails) {
        this.productDetails = productDetails;
        layoutInflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return productDetails.size();
    }

    @Override
    public Object getItem(int i) {
        return productDetails.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        ViewHolder holder;
        if(view==null){
            holder = new ViewHolder();
            view = layoutInflater.inflate(R.layout.list_row,null);
            holder.tvName=view.findViewById(R.id.tvProductName);
            holder.tvPrice=view.findViewById(R.id.tvProductPrice);
            holder.productImage=view.findViewById(R.id.imageView);
            view.setTag(holder);
        }
        else
          holder =(ViewHolder) view.getTag();

        holder.tvPrice.setText(String.format("%.2f",productDetails.get(i).getProductPrice()));
        holder.productImage.setImageResource(productDetails.get(i).getProductImage());
        holder.tvName.setText(productDetails.get(i).getProductName());
        return view;
    }
    static class ViewHolder{
        TextView tvName,tvPrice;
        ImageView productImage;

    }
}