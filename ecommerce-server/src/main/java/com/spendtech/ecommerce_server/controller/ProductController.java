package com.spendtech.ecommerce_server.controller;


import com.spendtech.ecommerce_server.model.Product;
import com.spendtech.ecommerce_server.service.ProductService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@OpenAPIDefinition(info = @Info(title = "Products API",
        description = "API to let you add and view product"))
@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService service;

    @Operation(summary = "Get all product",description = "Returns List of product ")
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts(
            @Parameter(name = "search", description = "Product name or brand (Optional)")
            @RequestParam(required = false)  String search
    ){
        if(search == null){
           return service.getProducts();
        }else{
           return service.getProducts(search);
        }

    }

    @Operation(summary = "Get a product by id", description = "Returns a product as per the id")
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") UUID id){
        return service.getProductById(id);
    }

    @Operation(summary = "Create product")
    @PostMapping("/product")
    public Product saveProduct(@RequestBody Product product){
        return service.saveProduct(product);
    }
}
