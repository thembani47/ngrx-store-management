package com.tief.tief.controller;

import com.tief.tief.entity.Product;
import com.tief.tief.service.ProductService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("product")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("add")
    public Product save(@RequestBody Product product) {
        return productService.save(product);
    }

    @GetMapping(value = "all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getAllProducts() {
        return productService.all();
    }

    @GetMapping("{id}")
    public Product getProduct(@PathVariable Long id) {
        final Optional<Product> product = productService.getOne(id);
        return product.get();
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        productService.delete(id);
    }
}
