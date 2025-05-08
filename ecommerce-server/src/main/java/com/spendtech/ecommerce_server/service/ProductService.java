package com.spendtech.ecommerce_server.service;


import com.spendtech.ecommerce_server.exception.ProductNotFound;
import com.spendtech.ecommerce_server.model.Product;
import com.spendtech.ecommerce_server.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    Logger log = LoggerFactory.getLogger(ProductService.class);
    public ResponseEntity<List<Product>> getProducts(){
        List<Product> products = repository.findAll();
        if( !products.isEmpty()){
            return  ResponseEntity
                    .status(HttpStatus.OK)
                    .body(products);
        }
        throw new ProductNotFound("Product not found");
    }
    public ResponseEntity<List<Product>> getProducts(String search){
       List<Product> products = repository.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(search,search);
       if( !products.isEmpty()){
           return  ResponseEntity
                   .status(HttpStatus.OK)
                   .body(products);
       }
       throw new ProductNotFound("Product not found");

    }

    public ResponseEntity<Product> getProductById(UUID id){
        Optional<Product> optional =repository.findById(id);
        if(optional.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(optional.get());
        }
        throw new ProductNotFound("Product not found");
    }

    public Product saveProduct(Product product){
        return repository.save(product);
    }

}
